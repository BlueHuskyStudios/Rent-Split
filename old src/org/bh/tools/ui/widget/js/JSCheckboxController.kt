package org.bh.tools.ui.widget.js

import org.bh.tools.base.struct.*
import org.bh.tools.base.struct.Ternary.*
import org.bh.tools.ui.behavior.*
import org.bh.tools.ui.widget.*
import org.w3c.dom.*


typealias HTMLCheckboxElement = HTMLInputElement



/**
 * A controller that connects the [TernaryCheckbox] model and the [HTMLCheckboxElement] view
 *
 * @author Ben Leggiero
 * @since 2018-01-22
 */
class JSCheckboxController(val controlledElement: HTMLCheckboxElement): TernaryCheckbox {
    override var text: String?
        get() = controlledElement.textContent
        set(value) { controlledElement.textContent = value }

    override val id: String
        get() = controlledElement.id

    override var state: Ternary
        get() = controlledElement.ternaryState
        set(value) { controlledElement.ternaryState = value }

    private var onStateChangeObservers = mutableSetOf<OnStateChange<Ternary>>()


    init {
        controlledElement.onchange = {
            onStateChangeObservers.forEach { listener -> listener(null, state) }
        }
    }

    override fun onStateChange(stateChangeObserver: OnStateChange<Ternary>) {
        onStateChangeObservers.add(stateChangeObserver)
    }
}



/**
 * Reads the state of this checkbox view and returns it as a clean [Ternary] value
 */
var HTMLCheckboxElement.ternaryState: Ternary
    get() = when (this.indeterminate) {
        true -> Ternary.indeterminate
        false -> Ternary(fromBoolean = this.checked)
    }
    set(value) {
        when (value) {
            `true` -> {
                this.checked = true
                this.indeterminate = false
            }
            `false` -> {
                this.checked = false
                this.indeterminate = false
            }
            Ternary.indeterminate -> {
                this.indeterminate = true
            }
        }
    }



/**
 * Like [JSCheckboxController], but for a [TernaryCheckboxTree]
 */
class JSTernaryCheckboxTreeController(val rootCheckbox: JSCheckboxController, children: List<JSCheckboxController>)
    : TernaryCheckboxTree(children = children, id = rootCheckbox.id, text = rootCheckbox.text) {

    constructor(rootCheckbox: HTMLCheckboxElement, children: List<HTMLCheckboxElement>): this(rootCheckbox = JSCheckboxController(rootCheckbox),
                                                                                              children = children.map { JSCheckboxController(it) })

    init {
        rootCheckbox.state = this.state

        rootCheckbox.onStateChange { _, newState ->
            this.state = newState
        }
        this.onStateChange { _, newState ->
            rootCheckbox.state = newState
        }
    }


    override fun deinit() {
        rootCheckbox.onStateChange { _, _ ->  }
        super.deinit()
    }


    companion object
}
