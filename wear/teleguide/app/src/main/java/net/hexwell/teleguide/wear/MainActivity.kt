package net.hexwell.teleguide.wear

import android.app.AlertDialog
import android.arch.lifecycle.Lifecycle
import android.arch.lifecycle.LifecycleOwner
import android.arch.lifecycle.LifecycleRegistry
import android.bluetooth.BluetoothDevice
import android.os.Bundle
import android.os.Handler
import android.support.wearable.activity.WearableActivity
import android.view.View
import android.widget.AdapterView
import android.widget.ArrayAdapter
import kotlinx.android.synthetic.main.activity_main.*
import net.hexwell.teleguide.wear.helpers.Device
import net.hexwell.teleguide.wear.helpers.DeviceScanner
import net.hexwell.teleguide.wear.helpers.OrientationManager
import net.hexwell.teleguide.wear.helpers.Permissions

class MainActivity : WearableActivity(), LifecycleOwner {
    private val innerLifecycle = LifecycleRegistry(this)

    private val scanner = DeviceScanner(lifecycle) {
        deviceAdapter.add(BluetoothDeviceWrapper(it))
    }
    private var device: Device? = null

    private lateinit var deviceAdapter: ArrayAdapter<BluetoothDeviceWrapper>

    private var channel = 0

    @Suppress("MemberVisibilityCanBePrivate")
    internal lateinit var orientation: IntArray
    private lateinit var orientationManager: OrientationManager
    private val sendOrientationHandler = Handler()
    private lateinit var sendOrientationRunnable: Runnable
    init {
        sendOrientationRunnable = Runnable {
            device?.send(intArrayOf(*orientation, channel).map(Int::toByte).toByteArray())

            sendOrientationHandler.postDelayed(sendOrientationRunnable, SENDING_RATE)
        }

        sendOrientationRunnable.run()
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        this.setContentView(R.layout.activity_main)
        this.setAmbientEnabled()

        Permissions.request(this)

        this.deviceAdapter = ArrayAdapter(
            this,
            android.R.layout.simple_spinner_item,
            ArrayList()
        )
        this.deviceAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)

        this.orientationManager = OrientationManager(
            lifecycle,
            this,
            this::orientation.setter
        )

        this.ble_device_s.adapter = this.deviceAdapter
        this.ble_device_s.onItemSelectedListener = object : AdapterView.OnItemSelectedListener {
            override fun onItemSelected(parent: AdapterView<*>?, view: View?, position: Int, id: Long) {
                device?.disconnect()
                device = Device(lifecycle, deviceAdapter.getItem(position)!!.device)
                device?.connect()
            }

            override fun onNothingSelected(parent: AdapterView<*>?) {}
        }

        val channelAdapter = ArrayAdapter.createFromResource(
            this,
            R.array.channels,
            android.R.layout.simple_spinner_item
        ).apply { setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item) }

        this.channel_s.adapter = channelAdapter
        this.channel_s.onItemSelectedListener = object : AdapterView.OnItemSelectedListener {
            override fun onItemSelected(parent: AdapterView<*>?, view: View?, position: Int, id: Long) {
                this@MainActivity.channel = position
            }

            override fun onNothingSelected(parent: AdapterView<*>?) {}
        }

        this.calibrate_b.setOnClickListener {
            this.orientationManager.calibrate()
        }

        this.scan_b.setOnClickListener {
            this.device?.disconnect()
            this.deviceAdapter.clear()
            this.scanner.startScan()
        }
    }

    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<out String>, grantResults: IntArray) {
        if (Permissions.handleResult(requestCode, grantResults))
            scanner.startScan()
        else
            AlertDialog
                .Builder(this)
                .setMessage(R.string.permission_needed)
                .setCancelable(false)
                .setNeutralButton(android.R.string.ok) { _, _ -> this.finish() }
                .create()
                .show()
    }

    override fun onStart() {
        super.onStart()

        innerLifecycle.markState(Lifecycle.State.STARTED)

        this.deviceAdapter.clear()
    }

    override fun onStop() {
        super.onStop()

        innerLifecycle.markState(Lifecycle.State.CREATED)
    }

    override fun onDestroy() {
        super.onDestroy()

        innerLifecycle.markState(Lifecycle.State.DESTROYED)
    }

    override fun getLifecycle(): Lifecycle {
        return innerLifecycle
    }

    private class BluetoothDeviceWrapper(internal val device: BluetoothDevice) {
        override fun toString(): String = device.name
    }

    companion object {
        private const val SENDING_RATE = 500L
    }
}
