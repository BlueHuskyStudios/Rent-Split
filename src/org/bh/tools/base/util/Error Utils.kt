package org.bh.tools.base.util

/**
 * @author Ben Leggiero
 * @since 2017-12-16
 */

fun <Return> safeTry(closure: () -> Return): Return? =
        try {
            closure()
        } catch (_: Throwable) {
            null
        }
