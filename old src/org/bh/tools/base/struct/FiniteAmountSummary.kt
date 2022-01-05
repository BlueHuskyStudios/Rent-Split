package org.bh.tools.base.struct



import org.bh.tools.base.struct.FiniteAmountSummary.*
import kotlin.math.*

/**
 * Summarizes some finite amount of things, where the upper limit is known, and `0` is a valid amount.
 * Negative numbers are nonsense here.
 *
 * @author Ben Leggiero
 * @since 2018-01-17
 */
@Suppress("ClassName")
sealed class FiniteAmountSummary<T: Comparable<T>>(
        val exactAmount: T?
) {

    class all<T: Comparable<T>>(maximumPossibleAMount: T?): FiniteAmountSummary<T>(maximumPossibleAMount)
    class some<T: Comparable<T>>(exactAmount: T?, val maximumPossibleAmount: T?): FiniteAmountSummary<T>(exactAmount)
    class none<T: Comparable<T>>: FiniteAmountSummary<T>(null)


    companion object
}


/**
 * Creates a `FiniteAmountSummary` by comparing the given numbers. If `exactAmount` is equal to
 * `maximumPossibleAmount`, then an instance of `all` is returned. Else, if `exactAmount` is equal to `0`, then `none`
 * is returned. Else, an instance of `some` is returned.
 */
operator fun <T: Comparable<T>> FiniteAmountSummary.Companion.invoke(exactAmount: T, maximumPossibleAmount: T): FiniteAmountSummary<T> {
    return when (exactAmount) {
        maximumPossibleAmount -> all(maximumPossibleAMount = maximumPossibleAmount)
        0 -> none()
        else -> some(exactAmount = exactAmount, maximumPossibleAmount = maximumPossibleAmount)
    }
}


/**
 * Like the counterpart constructor that takes the same generic comparable for both arguments, but this one is
 * specifically for a fractional portion of an integer amount.
 */
operator fun FiniteAmountSummary.Companion.invoke(approximateAmount: Double, maximumPossibleAmount: Int): FiniteAmountSummary<Int> {
    return when (approximateAmount) {
        maximumPossibleAmount.toDouble() -> all(maximumPossibleAMount = maximumPossibleAmount)
        0.0 -> none()
        else -> some(exactAmount = approximateAmount.roundToInt(), maximumPossibleAmount = maximumPossibleAmount)
    }
}
