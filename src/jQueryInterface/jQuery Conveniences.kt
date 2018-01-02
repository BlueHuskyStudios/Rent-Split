package jQueryInterface

import org.w3c.dom.Element

/*
 * @author Ben Leggiero
 * @since 2017-12-03
 */


inline fun JQuery.asList(): List<Element> = toArray().asList()

fun JQuery.attr(attrName: String, newValue: Boolean) = attr(attrName, newValue.toString())

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


fun JQuery.forEach(iterator: (Element) -> Unit) {
    for (it in this) {
        iterator(it)
    }
}


fun JQuery.forEachIndexed(iterator: (index: Int, element: Element) -> Unit) {
    var index = 0
    for (it in this) {
        iterator(index, it)
        index += 1
    }
}
