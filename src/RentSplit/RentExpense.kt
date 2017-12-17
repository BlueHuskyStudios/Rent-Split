package RentSplit

import jQueryInterface.JQuery
import kotlin.js.Json
import kotlin.js.json



// DO NOT CHANGE THESE
const val resourceNameSerializedName = "n"
const val resourceDollarAmountSerializedName = "d"
const val resourceIsRemovableSerializedName = "x"
const val resourceIsRenamableSerializedName = "r"
const val allExpensesSerializedName = "e"



/**
 * The RentExpense class represents an expense and its monthly cost.
 */
data class RentExpense(
        /** The expense's type (name) */
        @JsName(resourceNameSerializedName)
        val type: String,

        /** The dollar amount of the expense's monthly cost */
        @JsName(resourceDollarAmountSerializedName)
        val monthlyCost: Double,

        /** Indicates whether this expense can be removed from the list of roommates */
        @JsName(resourceIsRemovableSerializedName)
        val isRemovable: Boolean,

        /** [currently unused] Indicates whether this expense can be renamed */
        @JsName(resourceIsRenamableSerializedName)
        val isRenamable: Boolean,

        /** The original DOM element, as a JQuery selector */
        var originalDOMElement: JQuery? = null) {

    fun toJson(): Json = json(resourceNameSerializedName to type,
                          resourceDollarAmountSerializedName to monthlyCost,
                          resourceIsRemovableSerializedName to isRemovable,
                          resourceIsRenamableSerializedName to isRenamable)

    companion object {

        /**
         * Creates a [RentExpense] out of JSON, or returns `null` if that can't be done.
         *
         * The given JSON must be formatted like one of these:
         *
         * ```
         * {
         *     "n": String,
         *     "d": Double,
         *     "x": Boolean,
         *     "r": Boolean
         * }
         * ```
         */
        operator fun invoke(raw: Json): RentExpense? {
            return RentExpense(type = raw[resourceNameSerializedName] as? String ?: return null,
                               monthlyCost = raw[resourceDollarAmountSerializedName] as? Double ?: return null,
                               isRemovable = raw[resourceIsRemovableSerializedName] as? Boolean ?: return null,
                               isRenamable = raw[resourceIsRenamableSerializedName] as? Boolean ?: return null)
        }


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
data class RentExpenses(
        @JsName(allExpensesSerializedName)
        val allExpenses: List<RentExpense>
) {

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


    fun toJson(): Json {
        return json(allExpensesSerializedName to allExpenses.map { it.toJson() })
    }


    companion object {
        /**
         * Creates a [RentExpenses] out of JSON, or returns `null` if that can't be done.
         *
         * The given JSON must be formatted like one of these:
         *
         * ```
         * {
         *     "e": [JSON<RentExpense>]
         * }
         * ```
         */
        @Suppress("UNCHECKED_CAST")
        operator fun invoke(raw: Json): RentExpenses? {
            return RentExpenses(allExpenses =
                                (raw[allExpensesSerializedName] as? Array<Json> ?: return null)
                                        .map { RentExpense(raw = it) ?: return null }
            )
        }
    }
}
