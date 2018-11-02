package net.hexwell.teleguide.helpers

import net.hexwell.teleguide.externals.DEVICEORIENTATION
import net.hexwell.teleguide.externals.DeviceOrientationEvent
import kotlin.browser.window
import kotlin.math.round

internal class Orientation {
    private var raw = DoubleArray(3)
    private var reference = DoubleArray(3)

    internal val orientation: IntArray
        get() {
            val relativeOrientation = raw
                .mapIndexed { i, it ->
                    it - reference[i]
                }
                .map { it * MULTIPLIER }
                .map(::round)
                .map(Double::toInt)
                .toIntArray()

            // Invert beta channel
            relativeOrientation[1] *= -1

            return relativeOrientation
        }

    init {
        window.addEventListener(DEVICEORIENTATION, {
            it as DeviceOrientationEvent

            raw[0] = it.alpha!!
            raw[1] = it.beta!!
            raw[2] = it.gamma!!
        })
    }

    internal fun calibrate() {
        reference = raw.copyOf()
    }

    companion object {
        private const val MULTIPLIER = .25
    }
}
