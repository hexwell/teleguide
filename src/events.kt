import org.w3c.dom.events.Event

const val GATTSERVERDISCONNECTED = "gattserverdisconnected"
const val DEVICEORIENTATION = "deviceorientation"

external class DeviceOrientationEvent: Event {
    val beta: Double?
    val gamma: Double?
}
