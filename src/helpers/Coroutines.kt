package helpers

import kotlin.browser.window
import kotlin.coroutines.experimental.*

fun launch(block: suspend () -> Unit) {
    block.startCoroutine(object : Continuation<Unit> {
        override val context: CoroutineContext get() = EmptyCoroutineContext
        override fun resume(value: Unit) {}
        override fun resumeWithException(exception: Throwable) {
            console.log("Coroutine failed: $exception")
        }
    })
}

suspend fun delay(ms: Int): Unit = suspendCoroutine { continuation ->
    window.setTimeout(continuation::resume, ms)
}
