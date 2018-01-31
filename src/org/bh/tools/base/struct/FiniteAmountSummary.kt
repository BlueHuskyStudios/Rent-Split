package org.bh.tools.base.struct



import org.bh.tools.base.struct.FiniteAmountSummary.*
import kotlin.math.roundToInt

/**
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


public operator fun <T: Comparable<T>> FiniteAmountSummary.Companion.invoke(exactAmount: T, maximumPossibleAmount: T): FiniteAmountSummary<T> {
    return when (exactAmount) {
        maximumPossibleAmount -> all(maximumPossibleAMount = maximumPossibleAmount)
        0 -> none()
        else -> some(exactAmount = exactAmount, maximumPossibleAmount = maximumPossibleAmount)
    }
}


public operator fun FiniteAmountSummary.Companion.invoke(approximateAmount: Double, maximumPossibleAmount: Int): FiniteAmountSummary<Int> {
    return when (approximateAmount) {
        maximumPossibleAmount.toDouble() -> all(maximumPossibleAMount = maximumPossibleAmount)
        0.0 -> none()
        else -> some(exactAmount = approximateAmount.roundToInt(), maximumPossibleAmount = maximumPossibleAmount)
    }
}
