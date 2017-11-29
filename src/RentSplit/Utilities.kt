package RentSplit

import kotlin.js.Math

/*
 * @author Ben Leggiero
 * @since 2017-11-26
 */


@Suppress("NOTHING_TO_INLINE")
inline fun String?.isNeitherNullNorEmpty(): Boolean = !isNullOrEmpty()

@Suppress("NOTHING_TO_INLINE")
inline fun String?.isNeitherNullNorBlank(): Boolean = !isNullOrBlank()

val Double.dollarFormat: String get() = "\$${toFixed(2)}"

fun Double.toFixed(decimalPlaces: Int): String = this.asDynamic().toFixed(decimalPlaces) as String

fun String.nonEmptyOrNull(): String? = if (isEmpty()) null else this