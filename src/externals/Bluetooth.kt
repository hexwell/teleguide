package net.hexwell.teleguide.externals

import org.khronos.webgl.Uint8Array
import org.w3c.dom.Navigator
import org.w3c.dom.events.EventTarget
import kotlin.js.Promise

external class BluetoothRemoteGATTCharacteristic : EventTarget {
    fun writeValue(value: Uint8Array): Promise<Unit>
}

external interface BluetoothRemoteGATTService {
    val uuid: String

    fun getCharacteristic(characteristic: String?): Promise<BluetoothRemoteGATTCharacteristic>
}

external interface BluetoothRemoteGATTServer {
    val connected: Boolean

    fun connect(): Promise<BluetoothRemoteGATTServer>
    fun disconnect()
    fun getPrimaryServices(): Promise<Array<BluetoothRemoteGATTService>>
    fun getPrimaryService(service: String?): Promise<BluetoothRemoteGATTService>
}

external class BluetoothDevice : EventTarget {
    val name: String?
    val gatt: BluetoothRemoteGATTServer?
}

@Suppress("unused")
class BluetoothScanFilters(val services: Array<String>)

@Suppress("unused")
class RequestDeviceOptions(val filters: Array<BluetoothScanFilters>)

abstract external class Bluetooth : EventTarget {
    fun requestDevice(options: RequestDeviceOptions): Promise<BluetoothDevice>
}

abstract external class Navigator : Navigator {
    val bluetooth: Bluetooth
}
