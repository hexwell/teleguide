package net.hexwell.teleguide.wear.helpers

import android.arch.lifecycle.Lifecycle
import android.arch.lifecycle.LifecycleObserver
import android.arch.lifecycle.OnLifecycleEvent
import android.content.Context
import android.hardware.Sensor
import android.hardware.SensorEvent
import android.hardware.SensorEventListener
import android.hardware.SensorManager
import android.util.Log

internal class OrientationManager(
    private val lifecycle: Lifecycle,
    context: Context,
    private val callback: (IntArray) -> Unit
) : SensorEventListener, LifecycleObserver {
    init {
        lifecycle.addObserver(this)
    }

    private val sensorManager = context.getSystemService(SensorManager::class.java)
    private val rotationSensor = sensorManager.getDefaultSensor(Sensor.TYPE_GAME_ROTATION_VECTOR)

    private lateinit var orientation: IntArray
    private var reference = IntArray(3)

    @OnLifecycleEvent(Lifecycle.Event.ON_START)
    fun enable() {
        sensorManager.registerListener(
                this,
                rotationSensor,
                SensorManager.SENSOR_DELAY_UI
        )
    }

    @OnLifecycleEvent(Lifecycle.Event.ON_STOP)
    fun disable() {
        sensorManager.unregisterListener(this)
    }

    fun calibrate() {
        reference = orientation.clone()

        Log.d(TAG, "Calibrated")
    }

    override fun onAccuracyChanged(sensor: Sensor?, accuracy: Int) {}

    override fun onSensorChanged(event: SensorEvent?) {
        event!!

        if (event.accuracy == SensorManager.SENSOR_STATUS_UNRELIABLE) return

        when (event.sensor.type) {
            Sensor.TYPE_GAME_ROTATION_VECTOR -> {
                val rotationMatrix = FloatArray(9)
                SensorManager.getRotationMatrixFromVector(rotationMatrix, event.values)

                val floatOrientation = FloatArray(3)
                SensorManager.getOrientation(rotationMatrix, floatOrientation)

                orientation = floatOrientation
                    .map { it * MULTIPLIER }
                    .map(Float::toInt)
                    .toIntArray()

                callback(
                    orientation.mapIndexed { index, it ->
                        it - reference[index]
                    }.toIntArray()
                )
            }
        }
    }

    @OnLifecycleEvent(Lifecycle.Event.ON_DESTROY)
    private fun unregister() {
        lifecycle.removeObserver(this)
    }

    companion object {
        private var TAG = OrientationManager::class.java.name

        private const val MULTIPLIER = 8
    }
}
