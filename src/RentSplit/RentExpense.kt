package RentSplit

import RentSplit.IdManager.generateNewId
import RentSplit.IdManager.registerId
import RentSplit.RentExpenses.Companion.allRoommates
import jQueryInterface.*
import org.bh.tools.base.collections.*
import kotlin.js.*


// DO NOT CHANGE THESE
const val resourceIdSerializedName = "i"
const val resourceNameSerializedName = "n"
const val resourceDollarAmountSerializedName = "d"
const val expenseApplicableRoommatesSerializedName = "f"
const val resourceIsRemovableSerializedName = "x"
const val resourceIsRenamableSerializedName = "r"
const val allExpensesSerializedName = "e"



/**
 * The RentExpense class represents an expense and its monthly cost.
 */
data class RentExpense(
        /** The internally-unique identifier of this expense */
        @JsName(resourceIdSerializedName)
        val id: String,

        /** The expense's type (name) */
        @JsName(resourceNameSerializedName)
        val type: String,

        /** The dollar amount of the expense's monthly cost */
        @JsName(resourceDollarAmountSerializedName)
        val monthlyCost: Double,

        /**
         * The IDs of any and all roommates to whom this expense applies.
         * The empty set (`allRoommates`) implies that all roommates help with this expense.
         */
        @JsName(expenseApplicableRoommatesSerializedName)
        val applicableRoommateIds: Set<ID>?,

        /** Indicates whether this expense can be removed from the list of roommates */
        @JsName(resourceIsRemovableSerializedName)
        val isRemovable: Boolean,

        /** [currently unused] Indicates whether this expense can be renamed */
        @JsName(resourceIsRenamableSerializedName)
        val isRenamable: Boolean,

        /** The original DOM element, as a JQuery selector */
        var originalDOMElement: JQuery? = null) {

    init {
        registerId(id)
    }

    /**
     * Converts this expense into a JSON object
     */
    fun toJson() = json(
            resourceIdSerializedName to id,
            resourceNameSerializedName to type,
            resourceDollarAmountSerializedName to monthlyCost,
            resourceIsRemovableSerializedName to isRemovable,
            resourceIsRenamableSerializedName to isRenamable,
            expenseApplicableRoommatesSerializedName to applicableRoommateIds?.toTypedArray()
    )


    fun appliesTo(rentRoommate: RentRoommate) = applicableRoommateIds?.contains(rentRoommate.id) ?: true


    companion object {

        /**
         * Creates a [RentExpense] out of JSON, or returns `null` if that can't be done.
         *
         * The given JSON must be formatted like one of these:
         *
         * ```
         * {
         *     "i": String,        // optional; Introduced in RS-6
         *     "n": String,
         *     "d": Double,
         *     "f": Array<String>, // optional; Introduced in RS-6
         *     "x": Boolean,
         *     "r": Boolean
         * }
         * ```
         */
        operator fun invoke(raw: Json): RentExpense? {
            @Suppress("UNCHECKED_CAST")
            return RentExpense(id = raw[resourceIdSerializedName] as? String ?: generateNewId().alsoLog("No serialized expense ID; generating one to migrate it"),
                               type = raw[resourceNameSerializedName] as? String ?: return null.alsoLog("No serialized expense type"),
                               monthlyCost = raw[resourceDollarAmountSerializedName] as? Double ?: return null.alsoLog("No serialized expense cost"),
                               applicableRoommateIds = (raw[expenseApplicableRoommatesSerializedName] as? Array<String>)?.toSet() ?: allRoommates,
                               isRemovable = raw[resourceIsRemovableSerializedName] as? Boolean ?: return null.alsoLog("No serialized removability"),
                               isRenamable = raw[resourceIsRenamableSerializedName] as? Boolean ?: return null.alsoLog("No serialized renamability"))
        }


        /** The generic initial value for the Rent input row */
        val initialRent
                by lazy { RentExpense(id = generateNewId(),
                                      type = rentExpenseType,
                                      monthlyCost = defaultRentExpenseCost,
                                      applicableRoommateIds = allRoommates,
                                      isRemovable = false,
                                      isRenamable = false)}

        /** The generic initial value for the Utilities input row */
        val initialUtilities
                by lazy { RentExpense(id = generateNewId(),
                                      type = utilitiesExpenseType,
                                      monthlyCost = defaultUtilitiesExpenseCost,
                                      applicableRoommateIds = allRoommates,
                                      isRemovable = false,
                                      isRenamable = false)}

        /** The generic default value to place on new expense rows */
        fun generateNewExpense()
                = RentExpense(id = generateNewId(),
                              type = "",
                              monthlyCost = defaultExpenseCost,
                              applicableRoommateIds = allRoommates,
                              isRemovable = true,
                              isRenamable = true)


        /**
         * Generates an expense type
         *
         * @param ideal        If non-null and non-empty, this is used. Otherwise, one is generated with `backup`
         * @param backup The number to use in the generated type
         *
         * @return A type for an expense
         */
        fun type(ideal: String?, backup: String): String {
            return ideal?.nonEmptyOrNull() ?: numberedType(backup)
        }


        /**
         * Generates an expense type based on the given number, like `"Expense #3"`
         *
         * @param number The number to use in the expense type
         * @return A type for an expense
         */
        fun numberedType(number: String): String {
            return "Expense #$number"
        }
    }
}



/**
 * Returns a type for this expense that is never an empty string. If [type][RentExpense.type] is an empty string,
 * a generated one is returned
 */
val RentExpense.nonEmptyType get() = RentExpense.type(ideal = type, backup = id)



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
    val totalExpenses: Double = allExpenses.reduceTo(0.0) { total, expense -> total + expense.monthlyCost }


    /**
     * Returns a copy of this collection, with a the given expense added
     */
    fun adding(newExpense: RentExpense): RentExpenses {
        return RentExpenses(allExpenses = allExpenses.adding(newExpense))
    }


    /**
     * Converts this expense collection into a JSON object
     */
    fun toJson() = json(allExpensesSerializedName to allExpenses.map { it.toJson() })


    /**
     * Returns the first instance of an expense that has the given ID, or `null` if no such expense is found
     */
    fun expenseForId(id: ID) = allExpenses.firstOrNull { it.id == id }


    /**
     * If this contains an expense with the same ID as the given one, then a copy of this is returned where that
     * expense is replaced with the given one. Else, [adding] is called, passing the given expense.
     */
    fun setting(expense: RentExpense): RentExpenses {
        val existingExpenseIndex = this.allExpenses.indexOfFirstOrNull { it.id == expense.id }
        return if (existingExpenseIndex != null) {
            val expensesCopy = this.allExpenses.toMutableList()
            expensesCopy[existingExpenseIndex] = expense
            copy(allExpenses = expensesCopy)
        }
        else {
            adding(expense)
        }
    }


    inline fun filter(function: (RentExpense) -> Boolean) = RentExpenses(allExpenses.filter(function))


    companion object {

        fun generateInitial() = RentExpenses(listOf(RentExpense.initialRent, RentExpense.initialUtilities))

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


        val allRoommates: Set<ID>? = null
    }
}
