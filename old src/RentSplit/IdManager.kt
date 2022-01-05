package RentSplit

/*
 * @author Ben Leggiero
 * @since 2017-12-29
 */



typealias ID = String



object IdManager {
    private var lastGeneratedId = 0

    fun generateNewId(): ID {
        lastGeneratedId += 1
        return lastGeneratedId.toString()
    }


    /**
     * If the given ID is greater than what we think the latest one is, then the latest one is updated to be the given
     * one. In either case, the latest ID is returned.
     *
     * If the given ID is not a valid generated ID, then no change is made.
     */
    fun registerId(existingId: ID): String {
        existingId.toIntOrNull()?.let { intId ->
            if (intId > lastGeneratedId) {
                lastGeneratedId = intId
            }
        }
        return lastGeneratedId.toString()
    }
}
