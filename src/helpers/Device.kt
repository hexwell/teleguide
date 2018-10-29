package net.hexwell.teleguide.helpers

import net.hexwell.teleguide.externals.*
import org.khronos.webgl.Uint8Array
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener
import kotlin.browser.window
import kotlin.coroutines.resume
import kotlin.coroutines.resumeWithException
import kotlin.coroutines.suspendCoroutine
import kotlin.js.Promise

suspend fun <T> Promise<T>.await(): T = suspendCoroutine { cont ->
    this.then({ cont.resume(it) }, { cont.resumeWithException(it) })
}

class Device {
    private lateinit var device: BluetoothDevice
    private lateinit var characteristic: BluetoothRemoteGATTCharacteristic
    private val disconnectionListener = EventListener(this::onDisconnected)

    val name: String get() = if (this.device.name == null) "" else this.device.name!!

    var logger: (Any) -> Unit = { console.log(it) }

    private fun log(o: Any) = this.logger(o)

    private suspend fun request() {
        this.log("Requesting device...")

        this.device = (window.navigator as Navigator).bluetooth.requestDevice(
            RequestDeviceOptions(
                filters = arrayOf(
                    BluetoothScanFilters(
                        services = arrayOf(SERVICE_UUID)
                    )
                )
            )
        ).await()

        device.addEventListener(GATTSERVERDISCONNECTED, this.disconnectionListener)
    }

    private suspend fun innerConnect() {
        this.device.gatt!!.connect().await()

        val service: BluetoothRemoteGATTService =
            this.device.gatt!!.getPrimaryService(Device.SERVICE_UUID).await()
        this.characteristic =
                service.getCharacteristic(Device.CHARACTERISTIC_UUID).await()

        this.log("'${this.device.name}' connected")
    }

    suspend fun connect() {
        this.request()
        this.innerConnect()
    }

    suspend fun send(data: ByteArray) {
        this.characteristic.writeValue(Uint8Array(data.toTypedArray())).await()
    }

    fun disconnect() {
        this.log("Disconnecting from '${this.device.name}'...")

        this.device.removeEventListener(GATTSERVERDISCONNECTED, this.disconnectionListener)
        this.device.gatt!!.disconnect()

        this.log("'${this.device.name}' disconnected")
    }

    @Suppress("UNUSED_PARAMETER")
    private fun onDisconnected(event: Event) {
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

        private const val SERVICE_UUID = 0xDFB0
        private const val CHARACTERISTIC_UUID = 0xDFB1
    }
}
