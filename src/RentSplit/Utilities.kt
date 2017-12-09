package RentSplit

import jQueryInterface.JQuery
import org.w3c.dom.Element
import kotlin.text.toByte

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

fun String.toBooleanOrNull(): Boolean? = if (isEmpty()) null else when (toLowerCase()) {
    "true", "t", "yes", "y", "1", "on" -> true
    "false", "f", "no", "n", "0", "off" -> false
    else -> null
}
fun String.toBoolean(valueIfInvalid: Boolean = true): Boolean = toBooleanOrNull() ?: valueIfInvalid

fun <From, To> Collection<From>.reduceTo(start: To, transformer: (To, From) -> To): To {
    var value = start
    forEach {
        value = transformer(value, it)
    }
    return value
}


fun <Element> List<Element>.adding(newElement: Element): List<Element> {
    val newExpenses = this.toMutableList()
    newExpenses.add(newElement)
    return newExpenses.toList()
}
