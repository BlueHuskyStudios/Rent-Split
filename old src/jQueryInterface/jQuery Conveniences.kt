package jQueryInterface

import RentSplit.*
import org.w3c.dom.*
import org.w3c.dom.events.*

/*
 * @author Ben Leggiero
 * @since 2017-12-03
 */


/**
 * Gives all elements matched by this query as a list
 */
inline fun JQuery.asList(): List<Element> = toArray().asList()


/**
 * Maps all elements matched by this query.
 * If the mapper returns `null`, then its item is not included in the resulting array.
 */
fun <To> JQuery.mapNotNull(mapper: JQueryMapper<To?>): Array<To> {
    var newArray = emptyArray<To>()

    forEachIndexed { index, element ->
        val mapped = mapper(index, element)
        if (mapped != null) {
            newArray += mapped
        }
    }

    return newArray
}


/**
 * A Kotlin iterator which iterates over all elements matched by this query
 */
operator fun JQuery.iterator(): Iterator<Element> {
    if (length == 0) {
        return emptyArray<Element>().iterator()
    }

    return object : Iterator<Element> {
        var iteratorIndex = 0

        override fun hasNext(): Boolean {
            return iteratorIndex < length
        }

        override fun next(): Element {
            val next = get(iteratorIndex)
            iteratorIndex += 1
            return next
        }
    }
}


/**
 * Iterates over each element matched by this query
 */
fun JQuery.forEach(iterator: (Element) -> Unit) {
    for (it in this) {
        iterator(it)
    }
}


/**
 * Like `forEach`, but the index is also passed with each call
 */
fun JQuery.forEachIndexed(iterator: (index: Int, element: Element) -> Unit) {
    var index = 0
    for (it in this) {
        iterator(index, it)
        index += 1
    }
}


/**
 * Gets the boolean attribute with the given name (e.g. `"checked"`, `"disabled"`, etc.)
 */
inline fun JQuery.booleanAttr(name: String): Boolean = prop(name)?.toBooleanOrNull() ?: false

/**
 * Sets the boolean attribute with the given name (e.g. `"checked"`, `"disabled"`, etc.) to the given value
 */
fun JQuery.booleanAttr(name: String, newValue: Boolean?): JQuery {
    return if (newValue == true) {
        prop(name, name)
    }
    else {
        prop(name, null as String?)
        removeProp(name)
    }
}


inline fun JQuery.disabled(): Boolean = booleanAttr("disabled")
inline fun JQuery.disabled(newValue: Boolean?) = booleanAttr("disabled", newValue)


inline fun JQuery.checked(): Boolean = booleanAttr("checked")
fun JQuery.checked(newValue: Boolean?): JQuery {
    indeterminate(false)
    return booleanAttr("checked", newValue)
}


inline fun JQuery.indeterminate(): Boolean = prop("indeterminate")?.toBooleanOrNull() ?: false
inline fun JQuery.indeterminate(newValue: Boolean?) = prop("indeterminate", newValue)


/** @return `true` iff this is checked but not indeterminate */
inline fun JQuery.checkedNotIndeterminate() = checked() && !indeterminate()


/** Allows jQuery syntax to be used for an instance of `AnyCssSelector` */
@Suppress("NOTHING_TO_INLINE")
inline fun jq(cssSelector: AnyCssSelector): JQuery = jq(cssSelector.cssSelectorString)


/** Allows jQuery syntax to be used for an instance of `AnyCssSelector` with an `Element` for context */
@Suppress("NOTHING_TO_INLINE")
inline fun jq(cssSelector: AnyCssSelector, context: Element): JQuery = jq(cssSelector.cssSelectorString, context)


/** Allows jQuery syntax to be used for an instance of `AnyCssSelector` with another `JQuery` for context */
@Suppress("NOTHING_TO_INLINE")
inline fun jq(cssSelector: AnyCssSelector, context: JQuery): JQuery = jq(cssSelector.cssSelectorString, context)


/** Allows jQuery syntax to be used for an instance of `AnyCssSelector` with another `AnyCssSelector` for context */
@Suppress("NOTHING_TO_INLINE")
inline fun jq(cssSelector: AnyCssSelector, context: AnyCssSelector): JQuery = jq(cssSelector, context.jq)


/** Shorthand for `jq(this)` */
inline val AnyCssSelector.jq get() = jq(this)


inline fun JQuery.addClass(`class`: CssClass) = addClass(`class`.className)
inline fun JQuery.removeClass(`class`: CssClass) = removeClass(`class`.className)
inline fun JQuery.data(data: DataAttribute) = data(data.dataName)
inline fun JQuery.data(data: DataAttribute, value: Any?) = data(data.dataName, value)
inline fun JQuery.attr(attribute: CssHtmlAttribute) = attr(attribute.htmlAttributeName)
inline fun JQuery.attr(attribute: CssHtmlAttribute, value: Boolean?) = attr(attribute.htmlAttributeName, value)
inline fun JQuery.attr(attribute: CssHtmlAttribute, value: Double?) = attr(attribute.htmlAttributeName, value)
inline fun JQuery.attr(attribute: CssHtmlAttribute, value: String?) = attr(attribute.htmlAttributeName, value)



inline fun JQuery.onChangeData(noinline action: (event: Event) -> Unit) = this.on(eventNames = "changeData", handler =  action)
