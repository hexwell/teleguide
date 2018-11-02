package net.hexwell.teleguide.externals

import org.w3c.dom.events.Event

const val GATTSERVERDISCONNECTED = "gattserverdisconnected"
const val DEVICEORIENTATION = "deviceorientation"
const val CLICK = "click"
const val SCROLL = "scroll"

external class DeviceOrientationEvent : Event {
    val alpha: Double?
    val beta: Double?
    val gamma: Double?
}
