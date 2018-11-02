package net.hexwell.teleguide.helpers

import net.hexwell.teleguide.externals.*
import org.khronos.webgl.Uint8Array
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener
import kotlin.browser.window

internal class Device(private val log: (Any) -> Unit = { console.log(it) }) {
    private lateinit var device: BluetoothDevice
    private lateinit var characteristic: BluetoothRemoteGATTCharacteristic
    private val disconnectionListener = EventListener(this::onDisconnected)

    internal val name: String get() = if (this.device.name == null) "" else this.device.name!!

    private var connected = false

    private suspend fun request() {
        this.log("Requesting device...")

        this.device = (window.navigator as Navigator).bluetooth.requestDevice(
            RequestDeviceOptions(
                filters = UUIDS
                    .keys
                    .map { arrayOf(it) }
                    .map(::BluetoothScanFilters)
                    .toTypedArray()
            )

        ).await()

        device.addEventListener(GATTSERVERDISCONNECTED, this.disconnectionListener)
    }

    private suspend fun innerConnect() {
        this.device.gatt!!.connect().await()

        if (this.device.gatt?.connected == true)
            this.connected = true

        this.characteristic = this
            .device
            .gatt!!
            .run {
                getPrimaryService(
                    getPrimaryServices()
                        .await()
                        .map(BluetoothRemoteGATTService::uuid)
                        .toSet()
                        .intersect(UUIDS.keys)
                        .singleOrNull()
                )
            }
            .await()
            .run {
                getCharacteristic(UUIDS[uuid])
            }
            .await()

        this.log("'${this.device.name}' connected")
    }

    internal suspend fun connect() {
        this.request()
        this.innerConnect()
    }

    internal suspend fun send(data: ByteArray) {
        if (this.connected)
            this.characteristic.writeValue(Uint8Array(data.toTypedArray())).await()
    }

    internal fun disconnect() {
        if (this.connected) {
            connected = false

            this.log("Disconnecting from '${this.device.name}'...")

            this.device.removeEventListener(GATTSERVERDISCONNECTED, this.disconnectionListener)
            this.device.gatt!!.disconnect()

            this.log("'${this.device.name}' disconnected")
        }
    }

    @Suppress("UNUSED_PARAMETER")
    private fun onDisconnected(event: Event) {
        connected = false

        launch {
            this.log("'${this.device.name}' disconnected")

            for (attempt: Int in 1..Device.RECONNECTION_ATTEMPTS) {
                this.log("[Attempt $attempt] Trying to reconnect...")

                try {
                    this.innerConnect()
                } catch (e: Throwable) {
                    this.log(e)
                }

                if (this.device.gatt!!.connected)
                    return@launch

                delay(Device.RECONNECTION_BASE_DELAY * attempt)
            }
        }
    }

    companion object {
        private const val RECONNECTION_ATTEMPTS = 5
        private const val RECONNECTION_BASE_DELAY = 1000

        private val UUIDS = mapOf(
            "0000dfb0-0000-1000-8000-00805f9b34fb" to "0000dfb1-0000-1000-8000-00805f9b34fb"
        )
    }
}
