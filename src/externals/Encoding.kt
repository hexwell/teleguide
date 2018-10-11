package externals

import org.khronos.webgl.Uint8Array

external class TextEncoder {
    fun encode(string: String): Uint8Array
}
