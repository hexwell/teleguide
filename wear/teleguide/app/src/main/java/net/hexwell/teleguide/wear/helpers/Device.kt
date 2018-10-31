package net.hexwell.teleguide.wear.helpers

import android.arch.lifecycle.Lifecycle
import android.arch.lifecycle.LifecycleObserver
import android.arch.lifecycle.OnLifecycleEvent
import android.bluetooth.*
import android.bluetooth.le.ScanCallback
import android.bluetooth.le.ScanFilter
import android.bluetooth.le.ScanResult
import android.bluetooth.le.ScanSettings
import android.os.Handler
import android.os.ParcelUuid
import android.util.Log
import java.util.*
import java.util.concurrent.BlockingQueue
import java.util.concurrent.LinkedBlockingQueue
import kotlin.concurrent.thread

internal class DeviceScanner(
    private val lifecycle: Lifecycle,
    private val callback: (BluetoothDevice) -> Unit
): ScanCallback(), LifecycleObserver {
    init {
        lifecycle.addObserver(this)
    }

    private val stopScanRunnable = Runnable(this::stopScan)

    private var scanning = false

    private val foundDevices: MutableSet<BluetoothDevice> = HashSet()

    @OnLifecycleEvent(Lifecycle.Event.ON_START)
    internal fun startScan() {
        if (!this.scanning) {
            this.scanning = true

            this.foundDevices.clear()

            scanner.startScan(scanFilters, scanSettings, this)

            handler.postDelayed(this.stopScanRunnable, SCAN_PERIOD)

            Log.d(TAG, "Scanning...")
        }
    }

    override fun onScanResult(callbackType: Int, result: ScanResult?) {
        result!!

        if (this.foundDevices.add(result.device)) {
            callback(result.device)

            Log.d(TAG, "Found '${result.device.name}' device")
        }
    }

    @OnLifecycleEvent(Lifecycle.Event.ON_STOP)
    internal fun stopScan() {
        if(scanning) {
            scanner.stopScan(this)

            this.scanning = false

            Log.d(TAG, "Scan finished")
        }
    }

    @OnLifecycleEvent(Lifecycle.Event.ON_DESTROY)
    private fun unregister() {
        lifecycle.removeObserver(this)
    }

    companion object {
        // Service and TX Characteristic UUIDs
        @Suppress("SpellCheckingInspection")
        internal val UUIDS = mapOf(
                "0000ffe0-0000-1000-8000-00805f9b34fb" to "0000ffe1-0000-1000-8000-00805f9b34fb",
                "0000dfb0-0000-1000-8000-00805f9b34fb" to "0000dfb1-0000-1000-8000-00805f9b34fb",
                "6e400001-b5a3-f393-e0a9-e50e24dcca9e" to "6e400002-b5a3-f393-e0a9-e50e24dcca9e"
        ).entries.associate { UUID.fromString(it.key) to UUID.fromString(it.value) }

        private const val SCAN_PERIOD = 10000L

        private val TAG = DeviceScanner::class.java.name

        private val scanner = BluetoothAdapter.getDefaultAdapter().bluetoothLeScanner
        private val scanSettings = ScanSettings.Builder().build()
        private val scanFilters = UUIDS.keys.map {
            ScanFilter
                    .Builder()
                    .setServiceUuid(ParcelUuid(it))
                    .build()
        }

        private val handler = Handler()
    }
}

internal class Device(
    private val lifecycle: Lifecycle,
    private val device: BluetoothDevice
): BluetoothGattCallback(), LifecycleObserver {
    init {
        lifecycle.addObserver(this)
    }

    private var gatt: BluetoothGatt? = null
    private var tx: BluetoothGattCharacteristic? = null

    private val outgoing: BlockingQueue<ByteArray> = LinkedBlockingQueue()

    init { thread(isDaemon = true, name = "bluetooth_sender") {
        while (true) {
            val tx = tx

            if (tx != null) {
                tx.value = outgoing.take()
                this.gatt?.writeCharacteristic(tx)
            }
        }
    } }

    fun connect() {
        if (lifecycle.currentState.isAtLeast(Lifecycle.State.STARTED)) {
            this.gatt = device.connectGatt(null, false, this)

            Log.d(TAG, "Connecting to '${device.name}'...")
        }
    }

    override fun onConnectionStateChange(gatt: BluetoothGatt?, status: Int, newState: Int) {
        super.onConnectionStateChange(gatt, status, newState)

        when (newState) {
            BluetoothGatt.STATE_CONNECTED ->
                when (status) {
                    BluetoothGatt.GATT_SUCCESS -> if (!gatt!!.discoverServices())
                        Log.e(TAG, "Failed to start service discovery (Device: '${device.name}')")

                    else ->
                        Log.e(TAG, "GATT connection failed (Device: '${device.name}', Status: '$status')")
                }

            BluetoothGatt.STATE_DISCONNECTED -> {
                this.tx = null

                Log.d(TAG, "Disconnected from '${device.name}'")
            }
        }
    }

    override fun onServicesDiscovered(gatt: BluetoothGatt?, status: Int) {
        super.onServicesDiscovered(gatt, status)

        this.tx = gatt
                ?.run {
                    getService(services
                            .map(BluetoothGattService::getUuid)
                            .toSet()
                            .intersect(DeviceScanner.UUIDS.keys)
                            .singleOrNull()
                    )
                }
                ?.run {
                    getCharacteristic(DeviceScanner.UUIDS[uuid])
                }

        Log.d(TAG, "Connected to '${device.name}'")
    }

    @OnLifecycleEvent(Lifecycle.Event.ON_STOP)
    fun disconnect() {
        Log.d(TAG, "Disconnecting from '${device.name}'...")

        this.gatt?.disconnect()
        this.gatt?.close()
        this.gatt = null
    }

    fun send(data: ByteArray) {
        outgoing.put(data)
    }

    @OnLifecycleEvent(Lifecycle.Event.ON_DESTROY)
    private fun unregister() {
        lifecycle.removeObserver(this)
    }

    companion object {
        private val TAG = Device::class.java.name
    }
}
