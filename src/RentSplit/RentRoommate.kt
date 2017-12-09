package RentSplit

import jQueryInterface.JQuery

/**
 * The `RentRoommate` class represents a roommate and their monthly income.
 */
data class RentRoommate(val name: String,
                        val monthlyIncome: Double,
                        val isRemovable: Boolean,
                        val isRenamable: Boolean,
                        var originalDOMElement: JQuery? = null,
                        var proportion: Double? = null) {

    companion object {
        val initial get() = RentRoommate("",
                                         defaultRoommateIncome,
                                         isRemovable = false,
                                         isRenamable = true)

        fun name(ideal: String?, backupNumber: Int): String {
            return ideal?.nonEmptyOrNull() ?: numberedName(backupNumber)
        }

        fun numberedName(number: Int): String {
            return "Room\u00ADmate #$number"
        }
    }
}


fun RentRoommate.nonEmptyName(index: Int) = RentRoommate.name(ideal = name.nonEmptyOrNull(), backupNumber = index + 1)




/**
 * A group of `RentRoommate`s
 */
data class RentRoommates(val allRoommates: List<RentRoommate>,
                         val totalIncome: Double = allRoommates.map(RentRoommate::monthlyIncome)
                                 .reduceTo(0.0, Double::plus)) {

    fun adding(newRoommate: RentRoommate): RentRoommates {
        return RentRoommates(allRoommates = allRoommates.adding(newRoommate))
    }
}
