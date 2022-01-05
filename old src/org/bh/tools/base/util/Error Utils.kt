package org.bh.tools.base.util

/*
 * @author Ben Leggiero
 * @since 2017-12-16
 */

/**
 * Attempts to run the given closure. If any error is thrown, it is discarded and `null` is returned.
 */
fun <Return> safeTry(closure: () -> Return): Return? =
        try {
            closure()
        } catch (_: Throwable) {
            null
        }
