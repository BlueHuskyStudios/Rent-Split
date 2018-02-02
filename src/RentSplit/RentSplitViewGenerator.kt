package RentSplit

import jQueryInterface.*

/**
 * Generates HTML strings and places them into the DOM
 *
 * @author Ben Leggiero
 * @since 2018-02-02
 */
object RentSplitViewGenerator {

    /**
     * Using the given expense, generates and outputs the table column head to the Results output table
     */
    fun addExpenseColumnHeaderToDom(jq_resultsTableHeadRow: JQuery, headerText: String) {
        jq_resultsTableHeadRow.append(buildExpenseColumnHeader(headerText))
    }


    /**
     * Using the given expense, generates and outputs the table column head to the Results output table
     */
    fun buildExpenseColumnHeader(headerText: String) = "<th class='hide-small'>$headerText</th>"


    /**
     * Builds a string representation of a Results table row.
     */
    fun buildResultRow(model: RentSplitResultRow): String {
        val roommateName = model.rowHeader
        var row = "<tr data-$roommateResultRowDataName='$roommateName'><th>$roommateName</th>"
        row += model.cells.joinToString(
                separator = "",
                transform = { cell -> "<td class='hide-small'>${cell?.dollarFormat ?: "—"}</td>" })
        row += "<th>${model.totalContributions.dollarFormat}</th>"
        return "$row</tr>"
    }


    /**
     * Using the given roommates and expenses, this throws away and regenerates the Results output table
     */
    fun fillOutResults(model: RentSplitResultTable) {
        this.fillOutResultsTableHead(model)
        this.fillOutResultsTableBody(model)
        this.displayRoommateProportions(model)
    }


    /**
     * Using the given roommates and expenses, generates and outputs the table column heads to the Results
     * output table
     */
    @Suppress("UNUSED_PARAMETER")
    fun fillOutResultsTableHead(model: RentSplitResultTable) {
        val jq_resultsTableHeadRow = jq(resultsTableHeadRowSelector)
        jq_resultsTableHeadRow.empty()
        jq_resultsTableHeadRow.append(buildResultsTableHeadRoommateNameColumnTitle())
        model.columnHeaders.forEach { header -> addExpenseColumnHeaderToDom(jq_resultsTableHeadRow, header) }
        jq_resultsTableHeadRow.append(buildResultsTableHeadRoommateTotalContributionsColumnTitle())
    }


    fun buildResultsTableHeadRoommateNameColumnTitle() = "<th class=\"text-center\">$roommateNameColumnTitle</th>"


    fun buildResultsTableHeadRoommateTotalContributionsColumnTitle() = "<th class=\"text-center\">$totalColumnTitle</th>"


    /**
     * Using the given roommates and expenses, generates and outputs the roommate table rows to the Results
     * output table
     */
    fun fillOutResultsTableBody(model: RentSplitResultTable) {
        val jq_resultsTableBody = jq(resultsTableBodySelector)
        jq_resultsTableBody.empty()
        model.rows.forEach { this.addResultRowToDom(jq_resultsTableBody, it) }
    }


    /**
     * Using the given roommate and expenses, generates and outputs the table row to the Results output table
     */
    fun addResultRowToDom(jq_resultsTableBody: JQuery, model: RentSplitResultRow) {
        jq_resultsTableBody.append(this.buildResultRow(model))
    }


    /**
     * Displays each roommate's proportions of the total income in their input row
     */
    fun displayRoommateProportions(model: RentSplitResultTable) {
        model.rows.forEach { row -> displayRoommateProportion(row) }
    }


    /**
     * Displays a single roommate's proportions of the total income in their input row
     */
    fun displayRoommateProportion(model: RentSplitResultRow) {
        model.representedRoommate.originalDOMElement?.let { originalDOMElement ->
            jq(roommateProportionSelector, originalDOMElement).html("${(model.incomeProportion * 100.0).toFixed(2)}%")
        }
    }
}