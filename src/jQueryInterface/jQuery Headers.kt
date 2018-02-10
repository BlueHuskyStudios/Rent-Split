@file:Suppress("unused")

package jQueryInterface

import org.w3c.dom.*
import org.w3c.dom.events.*


typealias EventHandler = (Event?) -> Unit



/**
 * @author Ben Leggiero
 * @since 2017-11-25
 */
external class JQuery {

    fun addClass(className: String): JQuery
    fun addClass(f: (Int, String) -> String): JQuery

    fun attr(attrName: String): Any?
    fun attr(attrName: String, value: String?): JQuery
    fun attr(attrName: String, value: Double?): JQuery
    fun attr(attrName: String, value: Boolean?): JQuery
    fun prop(propertyName: String): Any?
    fun prop(propertyName: String, value: String?): JQuery
    fun prop(propertyName: String, value: Double?): JQuery
    fun prop(propertyName: String, value: Boolean?): JQuery
    fun removeProp(propertyName: String): JQuery
    fun data(): Map<String, Any>
    fun data(key: String): Any?
    fun data(key: String, value: Any?): JQuery
    fun data(keyValuePairs: Map<String, Any>): JQuery
    fun `val`(): String?
    fun `val`(newValue: String?): JQuery
    fun `val`(newValue: Double?): JQuery
    fun `val`(newValue: Array<*>?): JQuery

    fun html(): String
    fun html(s: String): JQuery
    fun html(f: (Int, String) -> String): JQuery


    fun hasClass(className: String): Boolean
    fun removeClass(className: String): JQuery
    fun height(): Number
    fun width(): Number

    fun click(): JQuery

    fun mousedown(handler: (MouseEvent) -> Unit): JQuery
    fun mouseup(handler: (MouseEvent) -> Unit): JQuery
    fun mousemove(handler: (MouseEvent) -> Unit): JQuery

    fun dblclick(handler: (MouseClickEvent) -> Unit): JQuery
    fun click(handler: (MouseClickEvent) -> Unit): JQuery

    fun on(eventNames: String, selector: String = definedExternally, handler: (Event) -> Unit)
    fun <T> on(eventNames: String, selector: String = definedExternally, data: T? = definedExternally, handler: (Event, T?) -> Unit)

    fun trigger(eventName: String): JQuery
    fun trigger(event: Event): JQuery

    fun select(): JQuery
    fun select(eventData: Any? = definedExternally, handler: (Event) -> Unit): JQuery

    fun load(handler: EventHandler): JQuery
    fun change(handler: EventHandler): JQuery

    fun append(str: String): JQuery
    fun before(content: JQuery): JQuery
    fun before(content: String): JQuery
    /**
     * Remove the set of matched elements from the DOM.
     *
     * Similar to `.empty()`, the `.remove()` method takes elements out of the DOM. Use `.remove()` when you want to
     * remove the element itself, as well as everything inside it. In addition to the elements themselves, all bound
     * events and jQuery data associated with the elements are removed. To remove the elements without removing data
     * and events, use `.detach()` instead.
     */
    fun remove(): JQuery
    fun empty(): JQuery
    fun detach(): JQuery
    fun ready(handler: EventHandler): JQuery
    fun text(text: String): JQuery
    fun slideUp(): JQuery
    fun hover(handlerInOut: EventHandler): JQuery
    fun hover(handlerIn: EventHandler, handlerOut: EventHandler): JQuery
    fun prev(): JQuery
    fun next(): JQuery
    fun parent(): JQuery

    fun off(): JQuery

    fun toArray(): Array<Element>
    fun <To> map(mapper: JQueryMapper<To>): Array<To>

    val length: Int
    fun size(): Int

    operator fun get(index: Int): Element
}

typealias JQueryMapper<To> = (index: Int, element: Element) -> To

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
