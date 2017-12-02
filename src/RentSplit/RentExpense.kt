package RentSplit

import jQueryInterface.JQuery

/**
 * The RentExpense class represents an expense and its monthly cost.
 */
data class RentExpense(val type: String,
                       val monthlyCost: Double,
                       val removable: Boolean,
                       val renamable: Boolean,
                       val originalDOMElement: JQuery? = null) {
    companion object {
        val initialRent
            get() = RentExpense(rentExpenseTitle,
                                defaultRentExpenseCost,
                                removable = false,
                                renamable = false)
        val initialUtilities
            get() = RentExpense(utilitiesExpenseTitle,
                                defaultUtilitiesExpenseCost,
                                removable = false,
                                renamable = false)

        fun name(ideal: String?, backupNumber: Int): String {
            return ideal?.nonEmptyOrNull() ?: numberedName(backupNumber)
        }

        fun numberedName(number: Int): String {
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
