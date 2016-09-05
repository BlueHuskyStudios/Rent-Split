package org.bh.app.rentSplit

import jquery.JQuery
import jquery.jq
import org.bh.app.rentSplit.elements.TopBar
import org.w3c.dom.HTMLElement

/**
 * Copyright BHStudios ©2016 BH-1-PS. Made for Rent-Splitting Calculator.
 *
 * @author Kyli Rouge
 * @since 2016-09-04
 */
public fun main(args: Array<String>) {
    jq("main").html(TopBar())
}

fun JQuery.html(element: HTMLElement) {
    html(element.outerHTML)
}
