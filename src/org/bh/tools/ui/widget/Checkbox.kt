package org.bh.tools.ui.widget

import org.bh.tools.base.struct.Ternary

/**
 * @author Ben
 * @since 2018-01-21
 */
interface Checkbox: CheckboxBase<Boolean> {
}



interface TernaryCheckbox : CheckboxBase<Ternary>



interface CheckboxBase<State>: Widget<State> {
    val text: String?
}
