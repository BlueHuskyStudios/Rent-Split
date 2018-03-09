package org.bh.tools.async

import kotlin.browser.*
import kotlin.math.*

/*
 * @author Ben
 * @since 2018-02-11
 */


/**
 * Waits the given number of seconds, then executes the given block
 */
fun delay(seconds: Double, then: () -> Unit) {
    window.setTimeout(then, (seconds * 1000).roundToInt())
}


/**
 * Waits the given number of seconds, then executes the given block
 */
fun delay(seconds: Long, then: () -> Unit) {
    @Suppress("UnsafeCastFromDynamic")
    window.setTimeout(then, (seconds * 1000).asDynamic())
}
