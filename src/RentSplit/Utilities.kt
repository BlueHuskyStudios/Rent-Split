package RentSplit


/*
 * @author Ben Leggiero
 * @since 2017-11-26
 */


/**
 * If this string is null, or if this string is empty, then this returns `false`. Else, this returns `true`.
 */
@Suppress("NOTHING_TO_INLINE")
inline fun String?.isNeitherNullNorEmpty(): Boolean = !isNullOrEmpty()


/**
 * If this string is null, or if this string is blank, then this returns `false`. Else, this returns `true`.
 */
@Suppress("NOTHING_TO_INLINE")
inline fun String?.isNeitherNullNorBlank(): Boolean = !isNullOrBlank()


/**
 * Returns this number formatted as a dollar amount. For instance, `12.345` becomes `"$12.35"`
 */
val Double.dollarFormat: String get() = "\$${toFixed(2)}"


/**
 * Returns this number rounded to the given number of decimal places. So `1.2345.toFixed(3)` becomes `"1.235"`
 */
fun Double.toFixed(decimalPlaces: Int): String = this.asDynamic().toFixed(decimalPlaces) as String


/**
 * If this is an empty string (as determined by `isEmpty()`), then `null` is returned. Else, `this` is returned.
 */
fun String.nonEmptyOrNull(): String? = if (isEmpty()) null else this


/**
 * If this can be turned into a `Boolean`, then it is. Otherwise, `null` is returned.
 */
fun String.toBooleanOrNull(): Boolean? = if (isEmpty()) null else when (toLowerCase()) {
    "true",  "t", "yes", "y", "1", "on"  -> true
    "false", "f", "no",  "n", "0", "off" -> false
    else -> null
}


/**
 * Turns this string into a `Boolean`. If it can't be turned into one, then `valueIfInvalid` is returned.
 *
 * @param valueIfInvalid [ optional ] The value to use if this string can't be turned into a `Boolean`.
 *                       Defaults to `true`.
 */
fun String.toBoolean(valueIfInvalid: Boolean = true): Boolean = toBooleanOrNull() ?: valueIfInvalid


/**
 * Reduces this collection to one value, by using a given starting value and then processing each element off of that
 */
fun <From, To> Collection<From>.reduceTo(start: To, transformer: (To, From) -> To): To {
    var value = start
    forEach {
        value = transformer(value, it)
    }
    return value
}


/**
 * Returns a new list, which is a copy of this one with the given new element added
 */
fun <Element> List<Element>.adding(newElement: Element): List<Element> {
    val newExpenses = this.toMutableList()
    newExpenses.add(newElement)
    return newExpenses.toList()
}
