package RentSplit

/**
 * Handles the calculations of the results table
 *
 * @author Ben Leggiero
 * @since 2018-02-02
 */



fun RentSplitState.resultsTableModel(): RentSplitResultTable {
    return RentSplitResultTable(columnHeaders = this.expenses.allExpenses.map { it.nonEmptyType.sanitizedForHtml() },
                                rows = this.roommates.allRoommates.map { it.rentSplitResultRow(overallState = this) })
}


fun RentRoommate.rentSplitResultRow(overallState: RentSplitState): RentSplitResultRow {
    val cells = overallState.expenses.allExpenses.map { expense ->
        if (expense.appliesTo(this)) {
            return@map this.contribution(to = expense, allRoommates = overallState.roommates.filter { expense.appliesTo(it) })
        }
        else {
            return@map null
        }
    }
    val rowTotal = cells.reduceTo(0.0) { rowTotal, cell -> rowTotal + (cell ?: 0.0) }

    return RentSplitResultRow(representedRoommate = this,
                              rowHeader = this.nonEmptyName.sanitizedForHtml(),
                              cells = cells,
                              totalContributions = rowTotal,
                              incomeProportion = overallState.roommates.incomePieChart[this.id] ?: 0.0)
}



data class RentSplitResultTable(
        val columnHeaders: List<String>,
        val rows: List<RentSplitResultRow>
)



data class RentSplitResultRow(
        val representedRoommate: RentRoommate,
        val rowHeader: String,
        val cells: List<Double?>,
        val totalContributions: Double,
        val incomeProportion: Double
)
