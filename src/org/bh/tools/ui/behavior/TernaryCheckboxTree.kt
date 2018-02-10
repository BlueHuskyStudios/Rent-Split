package org.bh.tools.ui.behavior

import org.bh.tools.base.collections.extensions.*
import org.bh.tools.base.func.*
import org.bh.tools.base.struct.*
import org.bh.tools.base.struct.FiniteAmountSummary.*
import org.bh.tools.base.struct.Ternary.*
import org.bh.tools.ui.widget.*
import kotlin.jvm.*

/**
 * Represents a checkbox tree where any checkbox can be indeterminate (that third state). This also tracks the children
 * of the tree for changes, and ensures the root node (this one) represents them.
 *
 * This (the root)'s initial state is based on the children
 *
 * @author Ben Leggiero
 * @since 2018-01-21
 */
open class TernaryCheckboxTree(
        /**
         * The children/leaves/branches of this tree. These are tracked to determine the state of this root node.
         * These will also be changed if the root node's state changes.
         */
        val children: List<TernaryCheckbox>,

        /**
         * The text of the label on this (the root) checkbox
         */
        override val text: String?,

        /**
         * The ID of this (the root) checkbox
         */
        override val id: String): TernaryCheckbox {

    /**
     * A list of observers that will be notified if the root checkbox (this one) changes
     */
    private val stateChangeObservers = mutableListOf<OnStateChange<Ternary>>()

    /**
     * Used to ensure we don't have any recursive loops when updating the state based on a child's update
     */
    @Volatile
    private var shouldUpdateChildrenBasedOnState = true

    /**
     * Used to ensure we don't have any recursive loops when updating the children based on the root's update
     */
    @Volatile
    private var shouldUpdateStateBasedOnChildren = true

    /**
     * The state of this (the root) checkbox
     */
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


    /**
     * Adds an observer that will get called every time this (the root) checkbox's state changes
     */
    override fun onStateChange(stateChangeObserver: OnStateChange<Ternary>) {
        stateChangeObservers.add(stateChangeObserver)
    }


    /**
     * Immediately updates all children to reflect the state of the root (this) checkbox.
     * While this is updating the children, `updateStateBasedOnChildren` will not do anything.
     */
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


    /**
     * Immediately updates the state of the root (this) checkbox to reflect the summarized state of all children.
     *
     *  - Iff all children are checked, the root (this) will be checked
     *  - Iff all children are unchecked, the root (this) will be unchecked
     *  - Otherwise, the root (this) will be indeterminate. This includes if any children are indeterminate.
     *
     * While this is updating the children, `updateStateBasedOnChildren` will not do anything.
     */
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


/**
 * Makes a new finite amount summary based on the states of the given checkboxes
 */
operator fun FiniteAmountSummary.Companion.invoke(checkboxes: List<TernaryCheckbox>) =
        FiniteAmountSummary(approximateAmount = checkboxes.reduceTo(0.0) { count, checkbox ->
            count + when (checkbox.state) {
                indeterminate -> 0.5
                `true` -> 1.0
                `false` -> 0.0
            }
        }, maximumPossibleAmount = checkboxes.count())
