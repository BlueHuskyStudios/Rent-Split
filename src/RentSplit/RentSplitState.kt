package RentSplit

data class RentSplitState (
    val roommates: RentRoommates,
    val expenses: RentExpenses
) {
    companion object
}


private val defaultRentSplitState = RentSplitState(
        RentRoommates(listOf(RentRoommate.initial, RentRoommate.initial)),
        RentExpenses(listOf(RentExpense.initialRent, RentExpense.initialUtilities)))


val RentSplitState.Companion.default get() = defaultRentSplitState


fun RentSplitState.Companion.load () = this.default


fun RentSplitState.addingNewRoommate(newRoommate: RentRoommate): RentSplitState {
    return RentSplitState(roommates = this.roommates.adding(newRoommate), expenses = this.expenses)
}


fun RentSplitState.addingNewExpense(newExpense: RentExpense): RentSplitState {
    return RentSplitState(roommates = this.roommates, expenses = this.expenses.adding(newExpense))
}
