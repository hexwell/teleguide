package net.hexwell.teleguide.externals

import kotlin.coroutines.resume
import kotlin.coroutines.resumeWithException
import kotlin.coroutines.suspendCoroutine
import kotlin.js.Promise

suspend fun <T> Promise<T>.await(): T = suspendCoroutine { cont ->
    this.then({ cont.resume(it) }, { cont.resumeWithException(it) })
}
