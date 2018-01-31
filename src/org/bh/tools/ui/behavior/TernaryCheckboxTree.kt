package org.bh.tools.ui.behavior

import RentSplit.reduceTo
import org.bh.tools.base.func.observing
import org.bh.tools.base.struct.*
import org.bh.tools.base.struct.FiniteAmountSummary.*
import org.bh.tools.base.struct.Ternary.*
import org.bh.tools.ui.widget.*
import kotlin.jvm.*

/**
 * @author Ben Leggiero
 * @since 2018-01-21
 */
open class TernaryCheckboxTree(val children: List<TernaryCheckbox>,
                          override val text: String?,
                          override val id: String): TernaryCheckbox {

    private val stateChangeObservers = mutableListOf<OnStateChange<Ternary>>()

    @Volatile
    private var shouldUpdateChildrenBasedOnState = true

    @Volatile
    private var shouldUpdateStateBasedOnChildren = true

    override var state: Ternary by observing(indeterminate, didSet = { oldState, newState ->
        updateChildrenBasedOnState()
        stateChangeObservers.forEach { it(oldState, newState) }
    })


    init {
        children.forEach {
            it.onStateChange { _, _ -> updateStateBasedOnChildren() }
        }
        updateStateBasedOnChildren()
    }


    override fun onStateChange(stateChangeObserver: OnStateChange<Ternary>) {
        stateChangeObservers.add(stateChangeObserver)
    }


    @Synchronized
    private fun updateChildrenBasedOnState() {
        if (!shouldUpdateChildrenBasedOnState) { return }
        when (state) {
            `true`, `false` -> {
                shouldUpdateStateBasedOnChildren = false
                children.forEach { it.state = state }
                shouldUpdateStateBasedOnChildren = true
            }
            indeterminate -> return
        }
    }


    @Synchronized
    private fun updateStateBasedOnChildren() {
        if (!shouldUpdateStateBasedOnChildren) { return }
        shouldUpdateChildrenBasedOnState = false
        state = when (FiniteAmountSummary(children)) {
            is all -> `true`
            is none -> `false`
            is some -> indeterminate
        }
        shouldUpdateChildrenBasedOnState = true
    }

    open fun deinit() {
        this.stateChangeObservers.clear()
    }
}



operator fun FiniteAmountSummary.Companion.invoke(checkboxes: List<TernaryCheckbox>) =
        FiniteAmountSummary(approximateAmount = checkboxes.reduceTo(0.0) { count, checkbox ->
            count + when (checkbox.state) {
                indeterminate -> 0.5
                `true` -> 1.0
                `false` -> 0.0
            }
        }, maximumPossibleAmount = checkboxes.count())
