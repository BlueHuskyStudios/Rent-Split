@file:Suppress("UnsafeCastFromDynamic")

package org.bh.tools.base.jsShim

import org.khronos.webgl.ArrayBufferView
import org.w3c.dom.Window
import kotlin.browser.window


external interface Crypto {
    // TODO: subtle; It's currently not here because no Blue Husky apps use it.

    fun <ArrayType: ArrayBufferView> getRandomValues(buffer: ArrayType): ArrayType
}



/**
 * The Crypto object associated with the global object
 *
 * Further reading: https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto
 */
inline val Window.crypto: Crypto
    get() = asDynamic().crypto


/**
 * The Crypto object associated with the global object on Internet Explorer 11
 *
 * Further reading: https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto
 */
inline val Window.msCrypto: Crypto
    get() = asDynamic().msCrypto


@Suppress("USELESS_ELVIS")
val crypto = window.crypto ?: window.msCrypto
