@file:Suppress("PackageDirectoryMismatch",
               "unused" // Utilities files are exempt from trimming unused functions.
)
package RentSplit

import jQueryInterface.*
import kotlin.browser.*


/*
 * @author Ben Leggiero
 * @since 2017-11-26
 */



external fun encodeURIComponent(raw: String): String
external fun decodeURIComponent(raw: String): String


val String.urlEncoded get() = encodeURIComponent(this)
val String.urlDecoded get() = decodeURIComponent(this)


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
fun Any.toBooleanOrNull(): Boolean? = when(this) {
    is Boolean -> this
    is String -> if (isEmpty()) null else when (toLowerCase()) {
        "true", "t", "yes", "y", "1", "on" -> true
        "false", "f", "no", "n", "0", "off" -> false
        else -> null
    }
    is Int -> when (this) {
        0 -> false
        1 -> true
        else -> null
    }
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
 * Returns a new list, which is a copy of this one with the given new element added
 */
fun <Element> List<Element>.adding(newElement: Element): List<Element> {
    val newExpenses = this.toMutableList()
    newExpenses.add(newElement)
    return newExpenses.toList()
}


/**
 * Attempts to copy the text within the element(s) selected by this JQuery selector. If that cannot be done, this
 * throws an error andor returns `false`. If it succeeded, this returns `true`.
 */
fun JQuery.copyToClipboardOrThrow() {
    class CopyFailed: Exception("Could not copy")
    this.select()
    if (!document.execCommand("copy")) {
        throw CopyFailed()
    }
}


/**
 * A no-op; for use in branching statements like `when`, should you want to explicitly acknowledge that a branch should
 * not do anything.
 */
@Suppress("NOTHING_TO_INLINE") // Inlined on-purpose to reduce output size
inline fun doNothing() = Unit


/**
 * Logs a message and then returns the this value
 */
inline fun <ValueType> ValueType.alsoLog(message: String, logger: (String) -> Unit = ::consoleLogString) = also { log(message + "\t$this", logger) }


/**
 * Simply logs the given message using the given logger (defaults to console.log)
 */
inline fun log(message: String, logger: (String) -> Unit = ::consoleLogString) = logger(message)


/**
 * Simply logs the given object using the given logger (defaults to console.log)
 */
inline fun <T> log(`object`: T?, logger: (T?) -> Unit = ::consoleLog) = logger(`object`)


/**
 * An alias for `console.log` that can only log `String`s
 */
@Suppress("NOTHING_TO_INLINE") // Inlined on-purpose because this is an alias for console.log
inline fun consoleLogString(message: String) {
    console.log(message)
}


/**
 * An alias for `console.log` that can log anything
 */
@Suppress("NOTHING_TO_INLINE") // Inlined on-purpose because this is an alias for console.log
inline fun <T> consoleLog(`object`: T?) {
    console.log(`object`)
}


/**
 * Turns this string into a set of IDs, assuming it's formatted like `[1,2,3]`
 */
fun String.toSetOfIds(): Set<ID> = split('[', ',', ']').toSet()


/**
 * Turns this set of IDs into a string, formatted like `[1,2,3]`
 */
fun Set<ID>.serializedSetOfIds() = joinToString(prefix = "[", separator = ",", postfix = "]")


/**
 * Prepares this string to be placed on the page as raw HTML. This is useful for user-given input.
 */
fun String.sanitizedForHtml(): String {
    return this
            .replace(Regex("&(?!amp;amp;)"), "&amp;") // Replace "&" with "&amp;", but not when that's already been done
            .replace(oldValue = "<", newValue = "&lt;")
            .replace(oldValue = ">", newValue = "&gt;")
}


fun Any.jsonString() = JSON.stringify(this)
