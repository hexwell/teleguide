package net.hexwell.teleguide.helpers

import kotlin.browser.window
import kotlin.coroutines.*

fun launch(block: suspend () -> Unit) {
    block.startCoroutine(object : Continuation<Unit> {
        override val context: CoroutineContext get() = EmptyCoroutineContext

        override fun resumeWith(result: Result<Unit>) {
            result.onFailure { console.log("Coroutine failed: $it") }
        }
    })
}

suspend fun delay(ms: Int): Unit = suspendCoroutine { continuation ->
    window.setTimeout(continuation::resume, ms)
}
