package net.hexwell.teleguide

import net.hexwell.teleguide.externals.CLICK
import net.hexwell.teleguide.externals.NoSleep
import net.hexwell.teleguide.externals.SCROLL
import net.hexwell.teleguide.helpers.Device
import net.hexwell.teleguide.helpers.Orientation
import net.hexwell.teleguide.helpers.launch
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLSelectElement
import kotlin.browser.document
import kotlin.browser.window

private const val DEFAULT_DEVICE_NAME = "Teleguide"

private val deviceNameLabel = document.getElementById("device-name") as HTMLDivElement
private val connectButton = document.getElementById("connect") as HTMLButtonElement
private val disconnectButton = document.getElementById("disconnect") as HTMLButtonElement
private val terminalContainer = document.getElementById("terminal") as HTMLDivElement
private val channelSelect = document.getElementById("channel") as HTMLSelectElement
private val calibrateButton = document.getElementById("calibrate") as HTMLButtonElement

private val terminalAutoScrollingLimit: Int = terminalContainer.offsetHeight / 2
private var isTerminalAutoscrolling = true

private fun scrollElement(element: HTMLElement) {
    val scrollTop: Int = element.scrollHeight - element.offsetHeight

    if (scrollTop > 0)
        element.scrollTop = scrollTop.toDouble()
}

private fun logToTerminal(message: String, type: String = "") {
    terminalContainer.insertAdjacentHTML(
        "beforeend",
        "<div class=\"$type\">$message</div>"
    )

    if (isTerminalAutoscrolling)
        scrollElement(terminalContainer)
}

private fun main(args: Array<String>) {
    val wakeLock = NoSleep()

    val device = Device {
        console.log(it)
        logToTerminal(it.toString())
    }

    val orientation = Orientation()

    var sendingInterval: Int = -1

    connectButton.addEventListener(CLICK, {
        wakeLock.enable()

        device.disconnect()

        launch {
            try {
                device.connect()
            } catch (e: Throwable) {
                logToTerminal(e.toString())
            }

            deviceNameLabel.textContent = when (device.name) {
                "" -> DEFAULT_DEVICE_NAME
                else -> device.name
            }

            sendingInterval = window.setInterval({
                launch {
                    try {
                        device.send(
                            intArrayOf(
                                *orientation.orientation,
                                channelSelect.value.toInt()
                            ).map(Int::toByte).toByteArray()
                        )
                    } catch (e: Throwable) {
                        logToTerminal(e.toString())
                    }
                }
            }, 500)
        }
    })

    disconnectButton.addEventListener(CLICK, {
        window.clearInterval(sendingInterval)
        device.disconnect()

        deviceNameLabel.textContent = DEFAULT_DEVICE_NAME

        wakeLock.disable()
    })

    terminalContainer.addEventListener(SCROLL, {
        val scrollTopOffset: Int =
            terminalContainer.scrollHeight - terminalContainer.offsetHeight - terminalAutoScrollingLimit

        isTerminalAutoscrolling = (scrollTopOffset < terminalContainer.scrollTop)
    })

    calibrateButton.addEventListener(CLICK, {
        orientation.calibrate()
    })
}
