package RentSplit

data class RentSplitState (
    val roommates: List<RentRoommate>,
    val expenses: List<RentExpense>
) {
    companion object
}


private val defaultRentSplitState = RentSplitState(listOf(), listOf())
public val RentSplitState.Companion.default get() = defaultRentSplitState
