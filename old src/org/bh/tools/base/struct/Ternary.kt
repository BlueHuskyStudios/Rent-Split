package org.bh.tools.base.struct

import org.bh.tools.base.struct.Ternary.*

/*
 * @author Ben Leggiero
 * @since 2018-01-22
 */

/**
 * A ternary value, which can be `true`, `false`, or `indeterminate`.
 */
enum class Ternary(val asBoolean: Boolean?) {
    /**
     * The standard Boolean `true`
     */
    `true`(true),

    /**
     * The standard Boolean `false`
     */
    `false`(false),

    /**
     * Some value that is neither `true` nor `false`; its truthiness cannot be determined
     */
    indeterminate(null);

    companion object
}


/**
 * Creates a `Ternary` from the given `Boolean`. The result is one-to-one.
 */
operator fun Ternary.Companion.invoke(fromBoolean: Boolean) = when (fromBoolean) {
    true -> `true`
    false -> `false`
}


/**
 * Creates a `Ternary` from the given `Boolean`. If the given Boolean is `null`, then the result is `indeterminate`.
 * Else, it is one-to-one.
 */
operator fun Ternary.Companion.invoke(fromBoolean: Boolean?) = when (fromBoolean) {
    true -> `true`
    false -> `false`
    null -> indeterminate
}
