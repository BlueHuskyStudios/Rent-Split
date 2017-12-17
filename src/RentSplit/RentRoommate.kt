package RentSplit

import jQueryInterface.JQuery
import kotlin.js.Json
import kotlin.js.json



// DO NOT CHANGE THESE
const val allRoommatesSerializedName = "r"



/**
 * The `RentRoommate` class represents a roommate and their monthly income.
 */
data class RentRoommate(
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
        var originalDOMElement: JQuery? = null,

        /** The cached percent of how much this roommate contributes to the overall income */
        var proportion: Double? = null) {

    fun toJson(): Json = json(resourceNameSerializedName to name,
                          resourceDollarAmountSerializedName to monthlyIncome,
                          resourceIsRemovableSerializedName to isRemovable,
                          resourceIsRenamableSerializedName to isRenamable)

    companion object {

        /**
         * Creates a [RentRoommate] out of JSON, or returns `null` if that can't be done.
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
        operator fun invoke(raw: Json): RentRoommate? {
            return RentRoommate(name = raw[resourceNameSerializedName] as? String ?: return null,
                               monthlyIncome = raw[resourceDollarAmountSerializedName] as? Double ?: return null,
                               isRemovable = raw[resourceIsRemovableSerializedName] as? Boolean ?: return null,
                               isRenamable = raw[resourceIsRenamableSerializedName] as? Boolean ?: return null)
        }


        /** The generic initial value to place on the first two roommate rows */
        val initial
            get() = RentRoommate("",
                                 defaultRoommateIncome,
                                 isRemovable = false,
                                 isRenamable = true)

        /** The generic default value to place on new roommate rows */
        val defaultNewRoommate
            get() = RentRoommate("",
                                 defaultRoommateIncome,
                                 isRemovable = true,
                                 isRenamable = true)


        /**
         * Generates a roommate name
         *
         * @param ideal        If non-null and non-empty, this is used. Otherwise, one is generated with `backupNumber`
         * @param backupNumber The number to use in the generated name
         *
         * @return A name for a roommate
         */
        fun name(ideal: String?, backupNumber: Int): String {
            return ideal?.nonEmptyOrNull() ?: numberedName(backupNumber)
        }


        /**
         * Generates a roommate name based on the given number, like `"Roommate #3"`
         *
         * @param number The number to use in the roommate name
         * @return A name for a roommate
         */
        fun numberedName(number: Int): String {
            return "Room\u00ADmate #$number"
        }
    }
}



/**
 * Returns a name for this roommate that is never an empty string. If [name][RentRoommate.name] is an empty string,
 * a generated one is returned
 */
fun RentRoommate.nonEmptyName(index: Int) = RentRoommate.name(ideal = name, backupNumber = index + 1)



/**
 * A group of `RentRoommate`s
 */
data class RentRoommates(
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


    fun toJson(): Json = json(allRoommatesSerializedName to allRoommates.map { it.toJson() })


    companion object {
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
}
