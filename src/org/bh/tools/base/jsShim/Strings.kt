@file:Suppress("UnsafeCastFromDynamic", "NOTHING_TO_INLINE")

package org.bh.tools.base.jsShim

import kotlin.js.RegExp

/*
 * @author Ben Leggiero
 * @since 2017-12-28
 */


/**
 * Converts the integer to a string in the given base
 */
inline fun Byte.toString(base: Int): String = asDynamic().toString(base)


/**
 * Converts the integer to a string in the given base
 */
inline fun Short.toString(base: Int): String = asDynamic().toString(base)


/**
 * Converts the integer to a string in the given base
 */
inline fun Int.toString(base: Int): String = asDynamic().toString(base)


/**
 * Converts the integer to a string in the given base
 */
inline fun Long.toString(base: Int): String = asDynamic().toString(base)


inline fun String.replace(regExp: RegExp, noinline replacer: (matchValue: String) -> String): String = asDynamic().replace(regExp, replacer)
