package RentSplit



/**
 * Represents a state of the Rent Split app
 */
data class RentSplitState(
        /** All roommates that will be splitting the rent */
        val roommates: RentRoommates,

        /** All expenses that will be split among the roommates */
        val expenses: RentExpenses
) {
    companion object
}



/**
 * The state to use when no other state is available
 */
private val defaultRentSplitState = RentSplitState(
        RentRoommates(listOf(RentRoommate.initial, RentRoommate.initial)),
        RentExpenses(listOf(RentExpense.initialRent, RentExpense.initialUtilities)))


/**
 * The default state to use when no other is available
 */
val RentSplitState.Companion.default get() = defaultRentSplitState


/**
 * In the future, this will deserialize the state, or provide the default one.
 * Right now, it just provides the default one.
 */
fun RentSplitState.Companion.load () = this.default


/**
 * Returns a copy of this state, but with the given roommate added in
 */
fun RentSplitState.addingNewRoommate(newRoommate: RentRoommate): RentSplitState {
    return RentSplitState(roommates = this.roommates.adding(newRoommate), expenses = this.expenses)
}


/**
 * Returns a copy of this state, but with the given roommate added in
 */
fun RentSplitState.addingNewExpense(newExpense: RentExpense): RentSplitState {
    return RentSplitState(roommates = this.roommates, expenses = this.expenses.adding(newExpense))
}
