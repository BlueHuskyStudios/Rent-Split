@file:Suppress("UnsafeCastFromDynamic", "NOTHING_TO_INLINE")

package org.bh.tools.base.jsShim

import kotlin.js.*

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


/**
 * Replaces any instances matching the given regular expression with what the `replacer` returns
 *
 * @param replacer Takes in a match and returns a transformed (or not) string to replace it with
 */
inline fun String.replace(regExp: RegExp, noinline replacer: (matchValue: String) -> String): String = asDynamic().replace(regExp, replacer)
