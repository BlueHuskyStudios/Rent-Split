package jQueryInterface

import org.w3c.dom.Element

/*
 * @author Ben Leggiero
 * @since 2017-12-03
 */


inline fun JQuery.asList(): List<Element> = toArray().asList()

fun JQuery.attr(attrName: String, newValue: Boolean) = attr(attrName, newValue.toString())
