package net.hexwell.teleguide.wear.helpers

import android.Manifest
import android.app.Activity
import android.content.pm.PackageManager
import android.support.v4.app.ActivityCompat
import android.support.v4.content.ContextCompat

internal object Permissions {
    private const val PERMISSION_REQUEST_ID = 0

    fun request(activity: Activity) {
        if (
            ContextCompat.checkSelfPermission(
                activity,
                Manifest.permission.ACCESS_COARSE_LOCATION
            ) != PackageManager.PERMISSION_GRANTED
        )
            ActivityCompat.requestPermissions(
                activity,
                arrayOf(Manifest.permission.ACCESS_COARSE_LOCATION),
                PERMISSION_REQUEST_ID
            )
    }

    fun handleResult(requestCode: Int, grantResults: IntArray): Boolean {
        return when (requestCode) {
            PERMISSION_REQUEST_ID -> {
                grantResults.firstOrNull() == PackageManager.PERMISSION_GRANTED
            }

            else -> {
                false
            }
        }
    }
}
