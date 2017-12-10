package RentSplit

import jQueryInterface.JQuery

/**
 * The `RentRoommate` class represents a roommate and their monthly income.
 */
data class RentRoommate(
        /** The roommate's name */
        val name: String,

        /** The dollar amount of the roommate's monthly income */
        val monthlyIncome: Double,

        /** Indicates whether this roommate can be removed from the list of roommates */
        val isRemovable: Boolean,

        /** [currently unused] Indicates whether this roommate can be renamed */
        val isRenamable: Boolean,

        /** The original DOM element, as a JQuery selector */
        var originalDOMElement: JQuery? = null,

        /** The cached percent of how much this roommate contributes to the overall income */
        var proportion: Double? = null) {

    companion object {
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
data class RentRoommates(val allRoommates: List<RentRoommate>) {

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
}
