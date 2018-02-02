package RentSplit

import RentSplit.IdManager.generateNewId
import RentSplit.IdManager.registerId
import jQueryInterface.JQuery
import kotlin.js.*



// DO NOT CHANGE THESE
const val allRoommatesSerializedName = "r"



/**
 * The `RentRoommate` class represents a roommate and their monthly income.
 */
data class RentRoommate(
        /** The internally-unique identifier of this roommate */
        @JsName(resourceIdSerializedName)
        val id: String,

        /** The roommate's name */
        @JsName(resourceNameSerializedName)
        val name: String,

        /** The dollar amount of the roommate's monthly income */
        @JsName(resourceDollarAmountSerializedName)
        val monthlyIncome: Double,

        /** Indicates whether this roommate can be removed from the list of roommates */
        @JsName(resourceIsRemovableSerializedName)
        val isRemovable: Boolean,

        /** [currently unused] Indicates whether this roommate can be renamed */
        @JsName(resourceIsRenamableSerializedName)
        val isRenamable: Boolean,

        /** The original DOM element, as a JQuery selector */
        var originalDOMElement: JQuery? = null) {

    init {
        registerId(id)
    }

    /**
     * Converts this roommate into a JSON object
     */
    fun toJson() = json(resourceIdSerializedName to id,
                        resourceNameSerializedName to name,
                        resourceDollarAmountSerializedName to monthlyIncome,
                        resourceIsRemovableSerializedName to isRemovable,
                        resourceIsRenamableSerializedName to isRenamable)


    /**
     * Finds this roommate's contribution to the given expense, in the context of all the roommates
     */
    fun contribution(to: RentExpense, allRoommates: RentRoommates): Double? {
        return (allRoommates.incomePieChart[this.id] ?: 0.0) * to.monthlyCost
    }



    companion object {

        /**
         * Creates a [RentRoommate] out of JSON, or returns `null` if that can't be done.
         *
         * The given JSON must be formatted like one of these:
         *
         * ```
         * {
         *     "i": String, // optional; Introduced in RS-6
         *     "n": String,
         *     "d": Double,
         *     "x": Boolean,
         *     "r": Boolean
         * }
         * ```
         */
        operator fun invoke(raw: Json): RentRoommate? {
            return RentRoommate(id = raw[resourceIdSerializedName] as? String ?: generateNewId().alsoLog("No serialized roommate ID; generating one to migrate it"),
                                name = raw[resourceNameSerializedName] as? String ?: return null.alsoLog("No serialized roommate name"),
                                monthlyIncome = raw[resourceDollarAmountSerializedName] as? Double ?: return null.alsoLog("No serialized roommate income"),
                                isRemovable = raw[resourceIsRemovableSerializedName] as? Boolean ?: return null.alsoLog("No serialized removability"),
                                isRenamable = raw[resourceIsRenamableSerializedName] as? Boolean ?: return null.alsoLog("No serialized renamability"))
        }


        /** The generic initial value to place on the first two roommate rows */
        fun generateInitial() = RentRoommate(id = generateNewId(),
                                             name = "",
                                             monthlyIncome = defaultRoommateIncome,
                                             isRemovable = false,
                                             isRenamable = true)

        /** The generic default value to place on new roommate rows */
        fun generateNewRoommate()
                = RentRoommate(id = generateNewId(),
                               name = "",
                               monthlyIncome = defaultRoommateIncome,
                               isRemovable = true,
                               isRenamable = true)


        /**
         * Generates a roommate name
         *
         * @param ideal        If non-null and non-empty, this is used. Otherwise, one is generated with `backup`
         * @param backup The number to use in the generated name
         *
         * @return A name for a roommate
         */
        fun name(ideal: String?, backup: String): String {
            return ideal?.nonEmptyOrNull() ?: numberedName(backup)
        }


        /**
         * Generates a roommate name based on the given number, like `"Roommate #3"`
         *
         * @param number The number to use in the roommate name
         * @return A name for a roommate
         */
        fun numberedName(number: String): String {
            return "Room\u00ADmate #$number"
        }
    }
}



/**
 * Returns a name for this roommate that is never an empty string. If [name][RentRoommate.name] is an empty string,
 * a generated one is returned
 */
val RentRoommate.nonEmptyName get() = RentRoommate.name(ideal = name, backup = id)



/**
 * A group of `RentRoommate`s
 */
data class RentRoommates(
        /**
         * All roommates in this collection of roommates
         */
        @JsName(allRoommatesSerializedName)
        val allRoommates: List<RentRoommate>
) {

    /**
     * The calculated total income of all roommates
     */
    val totalIncome: Double = allRoommates.map(RentRoommate::monthlyIncome)
            .reduceTo(0.0, Double::plus)


    /**
     * Returns a copy of this collection, with a the given roommate added
     */
    fun adding(newRoommate: RentRoommate): RentRoommates {
        return RentRoommates(allRoommates = allRoommates.adding(newRoommate))
    }


    /**
     * Converts this collection of roommates into a JSON object
     */
    fun toJson() = json(allRoommatesSerializedName to allRoommates.map { it.toJson() })


    inline fun filter(function: (RentRoommate) -> Boolean) = RentRoommates(allRoommates.filter(function))


    /**
     * The pie chart of each roommate's monthly income to the rest, with each slice labeled with that roommate
     */
    val incomePieChart: Map<ID, Double> by lazy {
        allRoommates.reduceTo(mutableMapOf<ID, Double>()) { pieChart, roommate ->
            pieChart[roommate.id] = roommate.monthlyIncome / totalIncome
            return@reduceTo pieChart
        }
    }


    companion object {

        fun generateInitial() = RentRoommates(listOf(RentRoommate.generateInitial(), RentRoommate.generateInitial()))

        /**
         * Creates a [RentRoommates] out of JSON, or returns `null` if that can't be done.
         *
         * The given JSON must be formatted like this:
         *
         * ```
         * {
         *     "r": [JSON<RentRoommate>],
         * }
         * ```
         *
         * @see RentRoommate
         */
        @Suppress("UNCHECKED_CAST")
        operator fun invoke(raw: Json): RentRoommates? {
            return RentRoommates(allRoommates =
                                 (raw[allRoommatesSerializedName] as? Array<Json> ?: return null)
                                         .map { RentRoommate(raw = it) ?: return null })
        }
    }

    val allRoommateIds: List<ID> = allRoommates.map(RentRoommate::id)
}
