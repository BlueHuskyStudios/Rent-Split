package org.bh.tools.base.struct

/*
 * @author Ben Leggiero
 * @since 2018-01-22
 */

enum class Ternary(val asBoolean: Boolean?) {
    `true`(true),
    `false`(false),
    indeterminate(null);

    companion object
}



operator fun Ternary.Companion.invoke(fromBoolean: Boolean) = when (fromBoolean) {
    true -> Ternary.`true`
    false -> Ternary.`false`
}
