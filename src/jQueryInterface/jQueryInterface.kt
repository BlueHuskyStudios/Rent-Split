package jQueryInterface

import org.w3c.dom.Element
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventTarget


/**
 * @author Ben Leggiero
 * @since 2017-11-25
 */
public external class JQuery() {
    public fun addClass(className: String): JQuery
    public fun addClass(f: (Int, String) -> String): JQuery

    public fun attr(attrName: String): String
    public fun attr(attrName: String, value: String): JQuery

    public fun html(): String
    public fun html(s: String): JQuery
    public fun html(f: (Int, String) -> String): JQuery


    public fun hasClass(className: String): Boolean
    public fun removeClass(className: String): JQuery
    public fun height(): Number
    public fun width(): Number

    public fun click(): JQuery

    public fun mousedown(handler: (MouseEvent) -> Unit): JQuery
    public fun mouseup(handler: (MouseEvent) -> Unit): JQuery
    public fun mousemove(handler: (MouseEvent) -> Unit): JQuery

    public fun dblclick(handler: (MouseClickEvent) -> Unit): JQuery
    public fun click(handler: (MouseClickEvent) -> Unit): JQuery

    public fun load(handler: () -> Unit): JQuery
    public fun change(handler: () -> Unit): JQuery

    public fun append(str: String): JQuery
    public fun before(content: JQuery): JQuery
    public fun before(content: String): JQuery
    public fun empty()
    public fun ready(handler: () -> Unit): JQuery
    public fun text(text: String): JQuery
    public fun slideUp(): JQuery
    public fun hover(handlerInOut: () -> Unit): JQuery
    public fun hover(handlerIn: () -> Unit, handlerOut: () -> Unit): JQuery
    public fun next(): JQuery
    public fun parent(): JQuery
    public fun `val`(): String?

    public fun off(): JQuery

    public fun <To> map(mapper: JQueryMapper1<To>): Array<To>
    public fun <To> map(mapper: JQueryMapper2<To>): Array<To>
}

public typealias JQueryMapper2<To> = (row: Int, element: JQuery) -> To
public typealias JQueryMapper1<To> = (row: Int, element: Element) -> To

open public external class MouseEvent(): Event {
    public val pageX: Double
    public val pageY: Double
//    public fun preventDefault()
    public fun isDefaultPrevented(): Boolean
}

public external class MouseClickEvent() : MouseEvent {
    public val which: Int
}

@JsName("$")
public external fun jq(selector: String): JQuery

@JsName("$")
public external fun jq(selector: String, context: Element): JQuery

@JsName("$")
public external fun jq(selector: String, context: JQuery): JQuery

@JsName("$")
public external fun jq(callback: () -> Unit): JQuery

@JsName("$")
public external fun jq(obj: JQuery): JQuery

@JsName("$")
public external fun jq(el: Element): JQuery

@JsName("$")
public external fun jq(): JQuery



@Suppress("UnsafeCastFromDynamic")
inline val EventTarget.parentElement: Element
    get() = asDynamic().parentElement
