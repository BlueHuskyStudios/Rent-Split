package org.bh.tools.ui.widget

import org.bh.tools.base.struct.*

/**
 * @author Ben Leggiero
 * @since 2018-01-21
 */
interface Checkbox: CheckboxBase<Boolean> {
}


/**
 * A checkbox that can have three states: checked, unchecked, and indeterminate
 */
interface TernaryCheckbox : CheckboxBase<Ternary>


/**
 * The base definition of a checkbox. This really shouldn't be used; instead, use [Checkbox] or [TernaryCheckbox]
 */
interface CheckboxBase<State>: Widget<State> {
    val text: String?
}
