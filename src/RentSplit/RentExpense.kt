package RentSplit

import jQueryInterface.JQuery

/**
 * The RentExpense class represents an expense and its monthly cost.
 */
data class RentExpense(val type: String,
                       val monthlyCost: Double,
                       val isRemovable: Boolean,
                       val isRenamable: Boolean,
                       var originalDOMElement: JQuery? = null) {
    companion object {
        val initialRent
            get() = RentExpense(rentExpenseTitle,
                                defaultRentExpenseCost,
                                isRemovable = false,
                                isRenamable = false)
        val initialUtilities
            get() = RentExpense(utilitiesExpenseTitle,
                                defaultUtilitiesExpenseCost,
                                isRemovable = false,
                                isRenamable = false)

        fun type(ideal: String?, backupNumber: Int): String {
            return ideal?.nonEmptyOrNull() ?: numberedType(backupNumber)
        }

        fun numberedType(number: Int): String {
            return "Expense #$number"
        }
    }
}



data class RentExpenses(val allExpenses: List<RentExpense>,
                        val totalExpenses: Double = allExpenses.map(RentExpense::monthlyCost)
                                .reduceTo(0.0, Double::plus)) {

    fun adding(newExpense: RentExpense): RentExpenses {
        return copy(allExpenses = allExpenses + newExpense)
    }
}
