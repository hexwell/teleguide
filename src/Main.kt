package net.hexwell.teleguide

import net.hexwell.teleguide.externals.DEVICEORIENTATION
import net.hexwell.teleguide.externals.DeviceOrientationEvent
import net.hexwell.teleguide.helpers.Device
import net.hexwell.teleguide.helpers.launch
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import kotlin.browser.document
import kotlin.browser.window

val deviceNameLabel: HTMLDivElement = document.getElementById("device-name") as HTMLDivElement
val connectButton: HTMLButtonElement = document.getElementById("connect") as HTMLButtonElement
val disconnectButton: HTMLButtonElement = document.getElementById("disconnect") as HTMLButtonElement
val terminalContainer: HTMLDivElement = document.getElementById("terminal") as HTMLDivElement

const val defaultDeviceName = "Teleguide"
val terminalAutoScrollingLimit: Int = terminalContainer.offsetHeight / 2
var isTerminalAutoscrolling = true

fun scrollElement(element: HTMLElement) {
    val scrollTop: Int = element.scrollHeight - element.offsetHeight

    if (scrollTop > 0)
        element.scrollTop = scrollTop.toDouble()
}

fun logToTerminal(message: String, type: String = "") {
    terminalContainer.insertAdjacentHTML(
        "beforeend",
        "<div class=\"$type\">$message</div>"
    )

    if (isTerminalAutoscrolling)
        scrollElement(terminalContainer)
}

val device = Device()

const val multiplier = .25

const val baseBeta = 8.2
const val baseGamma = 2.5

var rawBeta = .0
var rawGamma = .0

val beta: Int get() = (-(rawBeta - baseBeta) * multiplier).toInt()
val gamma: Int get() = ((rawGamma - baseGamma) * multiplier).toInt()

var interval: Int = -1

fun main(args: Array<String>) {
    device.logger = {
        console.log(it)
        logToTerminal(it.toString())
    }

    connectButton.addEventListener("click", {
        launch {
            try {
                device.connect()
            } catch (e: Throwable) {
                logToTerminal(e.toString())
            }

            deviceNameLabel.textContent = when (device.name) {
                "" -> defaultDeviceName
                else -> device.name
            }

            interval = window.setInterval({
                launch {
                    try {
                        device.send("0,$beta,$gamma@0;")
                    } catch (e: Throwable) {
                        logToTerminal(e.toString())
                    }
                }
            }, 500)
        }
    })

    disconnectButton.addEventListener("click", {
        window.clearInterval(interval)
        device.disconnect()

        deviceNameLabel.textContent = defaultDeviceName
    })

    terminalContainer.addEventListener("scroll", {
        val scrollTopOffset: Int =
            terminalContainer.scrollHeight - terminalContainer.offsetHeight - terminalAutoScrollingLimit

        isTerminalAutoscrolling = (scrollTopOffset < terminalContainer.scrollTop)
    })

    window.addEventListener(DEVICEORIENTATION, {
        it as DeviceOrientationEvent

        rawBeta = it.beta!!
        rawGamma = it.gamma!!
    })
}
