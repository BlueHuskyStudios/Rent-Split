package RentSplit

import jQueryInterface.JQuery

/**
 * The RentExpense class represents an expense and its monthly cost.
 */
data class RentExpense(
        /** The expense's type (name) */
        val type: String,

        /** The dollar amount of the expense's monthly cost */
        val monthlyCost: Double,

        /** Indicates whether this expense can be removed from the list of roommates */
        val isRemovable: Boolean,

        /** [currently unused] Indicates whether this expense can be renamed */
        val isRenamable: Boolean,

        /** The original DOM element, as a JQuery selector */
        var originalDOMElement: JQuery? = null) {

    companion object {
        /** The generic initial value for the Rent input row */
        val initialRent
            get() = RentExpense(rentExpenseType,
                                defaultRentExpenseCost,
                                isRemovable = false,
                                isRenamable = false)

        /** The generic initial value for the Utilities input row */
        val initialUtilities
            get() = RentExpense(utilitiesExpenseType,
                                defaultUtilitiesExpenseCost,
                                isRemovable = false,
                                isRenamable = false)

        /** The generic default value to place on new expense rows */
        val defaultNewExpense
            get() = RentExpense("",
                                defaultExpenseCost,
                                isRemovable = true,
                                isRenamable = true)


        /**
         * Generates an expense type
         *
         * @param ideal        If non-null and non-empty, this is used. Otherwise, one is generated with `backupNumber`
         * @param backupNumber The number to use in the generated type
         *
         * @return A type for an expense
         */
        fun type(ideal: String?, backupNumber: Int): String {
            return ideal?.nonEmptyOrNull() ?: numberedType(backupNumber)
        }


        /**
         * Generates an expense type based on the given number, like `"Expense #3"`
         *
         * @param number The number to use in the expense type
         * @return A type for an expense
         */
        fun numberedType(number: Int): String {
            return "Expense #$number"
        }
    }
}



/**
 * Returns a type for this expense that is never an empty string. If [type][RentExpense.type] is an empty string,
 * a generated one is returned
 */
fun RentExpense.nonEmptyType(index: Int) = RentExpense.type(ideal = type, backupNumber = index + 1)



/**
 * A group of `RentRoommate`s
 */
data class RentExpenses(val allExpenses: List<RentExpense>) {

    /**
     * The calculated total dollar amount of all expenses
     */
    val totalExpenses: Double = allExpenses.map(RentExpense::monthlyCost)
            .reduceTo(0.0, Double::plus)


    /**
     * Returns a copy of this collection, with a the given expense added
     */
    fun adding(newExpense: RentExpense): RentExpenses {
        return RentExpenses(allExpenses = allExpenses.adding(newExpense))
    }
}
