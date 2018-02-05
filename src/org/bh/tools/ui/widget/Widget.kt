package org.bh.tools.ui.widget

/**
 * @author Ben Leggiero
 * @since 2018-01-21
 */
interface Widget<State> {
    val id: String
    var state: State

    fun onStateChange(stateChangeObserver: OnStateChange<State>)
}



typealias OnStateChange<State> = (oldState: State?, newState: State) -> Unit
