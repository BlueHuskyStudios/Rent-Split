/*
 *  Rent-Split.kt
 *  Made for Rent Split 2 by Ben Leggiero, starting 2017-11-23
 *
 *  Written in Kotlin/JS 1.2
 *
 *  Copyright Blue Husky Studios 2017 BH-1-PS
 */

@file:Suppress("MemberVisibilityCanPrivate", "LocalVariableName")

package RentSplit

import jQueryInterface.*
import org.bh.tools.base.func.observing
import org.w3c.dom.events.Event


///// APP-GLOBAL CONSTANTS /////

/// Selectors ///

val addARoommateRowId = "Add-Roommate-Row"
val addARoommateRowSelector = "#$addARoommateRowId"
val addARoommateButtonId = "Add-Roommate-Button"
val addARoommateButtonSelector = "#$addARoommateButtonId"
val removeARoommateButtonClassName = "remove-roommate-button"
val removeARoommateButtonSelector = ".$removeARoommateButtonClassName"
val addAnExpenseRowId = "Add-Expense-Row"
val addAnExpenseRowSelector = "#$addAnExpenseRowId"
val addAnExpenseButtonId = "Add-Expense-Button"
val addAnExpenseButtonSelector = "#$addAnExpenseButtonId"
val removeAnExpenseButtonClassName = "remove-expense-button"
val removeAnExpenseButtonSelector = ".$removeAnExpenseButtonClassName"

val roommateRowDataName = "roommate-row"
val roommateRowSelector = "[data-$roommateRowDataName]"
val expenseRowDataName = "expense-row"
val expenseRowSelector = "[data-$expenseRowDataName]"
val roommateResultRowDataName = "result-$roommateRowDataName"
//val roommateResultRowSelector = "[data-$roommateResultRowDataName]"
val roommateWhoOwesTooMuchClassName = "roommate-owes-too-much"
val roommateWhoOwesTooMuchSelector = ".$roommateWhoOwesTooMuchClassName"

//val roommateTableId = "Roommate"
//val roommateTableSelector = "#$roommateTableId"
val roommateNameInputClassName = "roommate-name"
val roommateNameInputSelector = "." + roommateNameInputClassName
val roommateIncomeInputClassName = "roommate-income"
val roommateIncomeInputSelector = "." + roommateIncomeInputClassName
val roommateProportionClassName = "roommate-proportion"
val roommateProportionSelector = "." + roommateProportionClassName
val roommateAnyInputFieldSelector = "$roommateNameInputSelector,$roommateIncomeInputSelector"

val expenseNameInputClassName = "expense-name"
val expenseNameInputSelector = "." + expenseNameInputClassName
val expenseCostInputClassName = "expense-cost"
val expenseCostInputSelector = "." + expenseCostInputClassName
val expenseAnyInputFieldSelector = "$expenseNameInputSelector,$expenseCostInputSelector"
//val expenseTableSelector = "#Expenses"
//val expenseTableBodySelector = expenseTableSelector + ">tbody"

val anyInputFieldSelector = "$roommateAnyInputFieldSelector,$expenseAnyInputFieldSelector"
val anyInputButtonSelector = "$addARoommateButtonSelector,$addAnExpenseButtonSelector,$removeAnExpenseButtonSelector"
val anyInputSelector = "$anyInputFieldSelector,$anyInputButtonSelector"

//val moneyAmountInputSelector = "$roommateIncomeInputSelector,$expenseCostInputSelector"

val resultsTableSelector = "#Results"
val resultsTableBodySelector = "$resultsTableSelector>tbody"
val resultsTableHeadRowSelector = "$resultsTableSelector>thead>tr"


/// Label text ///

val rentExpenseTitle = "Rent"
val utilitiesExpenseTitle = "Utilities"

val roommateNamePlaceholderText = "Name"
val roommateIncomePlaceholderText = "Income"

val expenseTypePlaceholderText = "Type"
val expenseCostPlaceholderText = "Monthly Cost"

val roommateNameColumnTitle = "Name"
val totalColumnTitle = "Total Cost"


/// Defaults ///

val defaultRoommateIncome: Double = 1000.0

val defaultExpenseCost: Double = 100.0
val defaultRentExpenseCost: Double = 800.0
val defaultUtilitiesExpenseCost: Double = 50.0


/**
 * @author Ben Leggiero
 * @since 2017-11-23
 */
class RentSplit {

    ///// SETUP /////

//    /**
//     * The total amount of income of all roommates
//     */
//    var totalIncome: Double? = undefined

//    /**
//     * The total amount of expenses of all roommates
//     */
//    var totalExpenses: Double? = undefined

//    /**
//     * The running number of expenses, used to generate generic table headers
//     */
//    var expenseCounter: Double = 0.0


    var state: RentSplitState by observing(RentSplitState.default, didSet = { _, _ ->
        this.recalculateRentSplit()
    })


    fun onReady() {
        this.registerListeners()
        this.addDefaults()
        this.recalculateRentSplit()
        this.presentToUser()
    }


    /**
     * De- and re-registers every listener
     */
    fun reRegisterListeners() {
        jq(anyInputSelector).off()
        this.registerListeners()
    }


    /**
     * Registers every listener
     */
    fun registerListeners() {
        jq(anyInputFieldSelector).change(::reloadStateFromPage)
        jq(addAnExpenseButtonSelector).click(::addNewExpense)
        jq(removeAnExpenseButtonSelector).click(::removeExpense)
        jq(addARoommateButtonSelector).click(::addNewRoommate)
        jq(removeARoommateButtonSelector).click(::removeRoommate)
    }


    /**
     * Adds default expenses and roommates. Does not perform any calculations.
     */
    fun addDefaults() {
        // TODO: Read GET parameters
        this.addNewRoommate(event = undefined, name = null, income = null, locked = true, suppressCalculation = true)
        this.addNewRoommate(event = undefined, name = null, income = null, locked = true, suppressCalculation = true)

        this.addNewExpense(event = undefined,
                           type = rentExpenseTitle,
                           cost = defaultRentExpenseCost,
                           locked = true,
                           suppressCalculation = true)
        this.addNewExpense(event = undefined,
                           type = utilitiesExpenseTitle,
                           cost = defaultUtilitiesExpenseCost,
                           locked = true,
                           suppressCalculation = true)
    }


    /**
     * Re-loads the app state based on user input on the page
     */
    fun reloadStateFromPage() {
        state = RentSplitState(roommates = fetchRoommates(), expenses = fetchExpenses())
    }


    /**
     * Throws out the old calculations and recalculates every roommate's share of every expense, and displays
     * the output
     */
    fun recalculateRentSplit() {
        val roommates = state.roommates
        val expenses = state.expenses

        this.recalculateRoommateProportions(roommates)
        val totalExpenses = this.totalExpenses(expenses)

        this.fillOutResults(roommates, expenses)

        this.notifyOfProblems(roommates, expenses)
    }


    fun presentToUser() {
        jq(".rent").addClass("rent-ready")
    }


    ///// FETCHING /////

    /**
     * Finds all roommates in the DOM, parses them into RentRoommate objects, and returns them.
     */
    fun fetchRoommates(): List<RentRoommate> {
        return this.roommateRowsToRoommates(jq(roommateRowSelector))
    }


    /**
     * Finds all expenses in the DOM, parses them into RentExpense objects, and returns them.
     */
    fun fetchExpenses(): List<RentExpense> {
        return this.expenseRowsToExpenses(jq(expenseRowSelector))
    }


    /**
     * Takes in a jQuery result containing roommate input rows, parses each to a RentRoommate, and returns the
     * results in an array
     */
    fun roommateRowsToRoommates(jq_roommateRows: JQuery): List<RentRoommate> {
//        this.roommateCounter = 0
        return jq_roommateRows.map(this::roommateRowToRoommate).asList()
    }


    /**
     * Takes in a jQuery result containing expense input rows, parses each to a RentExpense, and returns the
     * results in an array
     */
    fun expenseRowsToExpenses(jq_expenseRows: JQuery): List<RentExpense> {
        return jq_expenseRows.map(this::expenseRowToExpense).asList()
    }


    /**
     * Takes in a jQuery result containing a single roommate input row, parses it to a RentRoommate, and returns that
     */
    @Suppress("UNUSED_PARAMETER")
    fun roommateRowToRoommate(index: Int, jq_roommateRow: JQuery): RentRoommate {
        return RentRoommate(
                jq(roommateNameInputSelector, jq_roommateRow).`val`()?.nonEmptyOrNull() ?: "Roommate #${index + 1}",
                jq(roommateIncomeInputSelector, jq_roommateRow).`val`()?.toDoubleOrNull() ?: Double.NaN,
                jq_roommateRow
        )
    }


    /**
     * Takes in a jQuery result containing a single expense input row, parses it to a RentExpense, and returns that
     */
    @Suppress("UNUSED_PARAMETER")
    fun expenseRowToExpense(index: Int, jq_expenseRow: JQuery): RentExpense {
        return RentExpense(
                jq(expenseNameInputSelector, jq_expenseRow).`val`()?.nonEmptyOrNull() ?: "Expense #${index + 1}",
                jq(expenseCostInputSelector, jq_expenseRow).`val`()?.toDoubleOrNull() ?: Double.NaN,
                jq_expenseRow
        )
    }


    ///// CALCULATION /////

    /**
     * Trows away and recalculates the total income and each roommate's proportion of that, then displays the
     * proportions in the roommate input table
     */
    fun recalculateRoommateProportions(roommates: List<RentRoommate>) {
        this.totalIncome = this.recalculateTotalIncome(roommates)
        roommates.forEach(this::recalculateRoommateProportion)
        this.displayRoommateProportions(roommates)
    }


    /**
     * Trows away and recalculates the total income
     */
    fun recalculateTotalIncome(roommates: List<RentRoommate>): Double {
        return roommates.reduce { acc, curr ->
            return@reduce RentRoommate(monthlyIncome = acc.monthlyIncome + curr.monthlyIncome,
                                       name = "TMP",
                                       originalDOMElement = jq())
        }.monthlyIncome
    }


    /**
     * Throws away and recalculates each roommate's proportion of the total income
     */
    fun recalculateRoommateProportion(roommate: RentRoommate) {
        roommate.proportion = roommate.monthlyIncome / (this.totalIncome ?: 0.0)
    }


    /**
     * Displays each roommate's proportions of the total income in their input row
     */
    fun displayRoommateProportions(roommates: List<RentRoommate>) {
        roommates.forEach(this::displayRoommateProportion)
    }


    /**
     * Displays a single roommate's proportions of the total income in their input row
     */
    fun displayRoommateProportion(roommate: RentRoommate) {
        jq(roommateProportionSelector, roommate.originalDOMElement).html((roommate.proportion * 100).toFixed(2) + "%")
    }


    /**
     * Calculates the total of all given expenses
     */
    fun totalExpenses(expenses: List<RentExpense>): Double {
        return expenses.map(RentExpense::monthlyCost).reduceTo(0.0, Double::plus)
    }


    ///// ADDING ROWS ////

    fun addNewExpense(event: Event) {
        this.addNewExpense(event = event, type = null, cost = null, locked = false, suppressCalculation = false)
    }


    /**
     * Adds a new expense input row, its corresponding expense output column, de- and re-registers all listeners,
     * and recalculates the roommate split. If the type and cost are given, they are filled-in. If the type is
     * given, it is made non-editable.
     */
    @Suppress("UNUSED_PARAMETER")
    fun addNewExpense(event: Event?, type: String?, cost: Double?, locked: Boolean, suppressCalculation: Boolean) {
        val jq_expenseButtonRow = jq(addAnExpenseRowSelector)
        jq_expenseButtonRow.before(this.buildExpenseInputRow(type, cost, locked))
        this.reRegisterListeners()
        if (!suppressCalculation) {
            this.recalculateRentSplit()
        }
    }


    /**
     * Builds a string representation of a table row representing an expense input. If the type and cost are given,
     * they are filled-in.
     *
     * @param type   The type of expense; its name
     * @param cost   The monthly cost of the expense
     * @param locked Indicates whether the type should be editable and the row should be removable
     */
    fun buildExpenseInputRow(index: Int, type: String?, cost: Double?, locked: Boolean): String {
        var row = "<tr data-$expenseRowDataName=\"$index\">"
        row +=
                "<th${(if (locked) "" else " class=\"plain\"")}>" +
                        "<input" +
                        " type=\"${if (locked) "hidden" else "text"}\"" +
                        " class=\"$expenseNameInputClassName   text-right\"" +
                        (if (type.isNeitherNullNorEmpty()) " value=\"$type\"" else "") +
                        " size=\"8\"" +
                        " tabindex=0" +
                        " placeholder=\"$expenseTypePlaceholderText\"" +
                        "/>" +
                        (if (locked && type.isNeitherNullNorEmpty()) type else "") +
                        "</th>"

        row +=
                "<td class=\"plain vert-bottom\">" +
                        "<input" +
                        " type=\"number\"" +
                        (if (type.isNeitherNullNorEmpty()) " id=\"total-$type\"" else "") +
                        " class=\"$expenseCostInputClassName\"" +
                        " required" +
                        " value=\"${cost ?: defaultExpenseCost}\"" +
                        " step=\"10\"" +
                        " size=\"8\"" +
                        " tabindex=0" +
                        " placeholder=\"$expenseCostPlaceholderText\"" +
                        "/>" +
                        "</td>"

        if (!locked) {
            row +=
                    "<td" +
                            " class=\"$removeAnExpenseButtonClassName color-danger\"" +
                            " tabindex=\"0\">" +
                            "<i class=\"fa fa-minus-circle\"></i>" +
                            "</td>"
        }
        return row + "</tr>"
    }


    fun addNewRoommate(event: Event) {
        return this.addNewRoommate(event, name = null, income = null, locked = false, suppressCalculation = false)
    }


    /**
     * Adds a new roommate input row, its corresponding roommate output row, de- and re-registers all listeners,
     * and recalculates the roommate split. If the name and income are given, they are filled-in.
     */
    @Suppress("UNUSED_PARAMETER")
    fun addNewRoommate(event: Event?, name: String?, income: Double?, locked: Boolean, suppressCalculation: Boolean) {
        val jq_roommateButtonRow = jq(addARoommateRowSelector)
        jq_roommateButtonRow.before(this.buildRoommateInputRow(name, income, locked))
        this.reRegisterListeners()
        if (!suppressCalculation) {
            this.recalculateRentSplit()
        }
    }


    /**
     * Builds a string representation of a table row representing an roommate input. If the name and income are
     * given, they are filled-in.
     *
     * @param name     The type of expense; its name
     * @param income   The monthly cost of the expense
     * @param isLocked Indicates whether the row should be removable
     */
    fun buildRoommateInputRow(name: String?, income: Double?, isLocked: Boolean): String {

        val roommateNumber = numberOfRoommates() + 1

        var row = "<tr" +
                " data-$roommateRowDataName=\"$roommateNumber\"" +
                ">"
        row +=
                "<th class=\"plain\">" +
                        "<input" +
                        " type=\"text\"" +
                        " class=\"$roommateNameInputClassName   text-right\"" +
                        (if (name.isNeitherNullNorEmpty()) " value=\"" + name + "\"" else "") +
                        " size=\"8\"" +
                        " tabindex=0" +
                        " placeholder=\"$roommateNamePlaceholderText\"" +
                        "/>" +
                        "</th>"

        row +=
                "<td class=\"plain vert-bottom\">" +
                        "<input" +
                        " type=\"number\"" +
                        " class=\"$roommateIncomeInputClassName\"" +
                        " required" +
                        " value=\"${income ?: defaultRoommateIncome}\"" +
                        " step=\"100\"" +
                        " size=\"8\"" +
                        " tabindex=0" +
                        " placeholder=\"$roommateIncomePlaceholderText\"" +
                        "/>" +
                        "</td>"

        row += "<td class=\"$roommateProportionClassName\">Calculating</td>"

        if (!isLocked) {
            row +=
                    "<td class=\"$removeARoommateButtonClassName color-danger\"" +
                            " tabindex=\"0\">" +
                            "<i class=\"fa fa-minus-circle\"></i>" +
                            "</td>"
        }
        return row + "</tr>"
    }


    fun numberOfRoommates(): Int {
        return jq(roommateRowSelector).length
    }


    ///// REMOVING ROWS /////

    /**
     * Removes the expense input row referenced in the given event
     */
    fun removeExpense(event: Event) {
        val expenseRow = event.currentTarget?.parentElement
        expenseRow?.remove()
        this.reRegisterListeners()
        this.recalculateRentSplit()
    }


    /**
     * Removes the roommate input row referenced in the given event
     */
    fun removeRoommate(event: Event) {
        val roommateRow = event.currentTarget?.parentElement
        roommateRow?.remove()
        this.reRegisterListeners()
        this.recalculateRentSplit()
    }


    ///// OUTPUT /////

    /**
     * Using the given roommates and expenses, this throws away and regenerates the Results output table
     */
    fun fillOutResults(roommates: List<RentRoommate>, expenses: List<RentExpense>) {
        this.fillOutResultsTableHead(roommates, expenses)
        this.fillOutResultsTableBody(roommates, expenses)
    }


    /**
     * Using the given roommates and expenses, generates and outputs the table column heads to the Results
     * output table
     */
    @Suppress("UNUSED_PARAMETER")
    fun fillOutResultsTableHead(roommates: List<RentRoommate>, expenses: List<RentExpense>) {
        val jq_resultsTableHeadRow = jq(resultsTableHeadRowSelector)
        jq_resultsTableHeadRow.empty()
        jq_resultsTableHeadRow.append("<th class=\"text-center\">$roommateNameColumnTitle</th>")
        expenses.forEach { this.appendExpenseColumn(jq_resultsTableHeadRow, it) }
        jq_resultsTableHeadRow.append("<th class=\"text-center\">$totalColumnTitle</th>")
    }


    /**
     * Using the given expense, generates and outputs the table column head to the Results output table
     */
    fun appendExpenseColumn(jq_resultsTableHeadRow: JQuery, expense: RentExpense) {
        jq_resultsTableHeadRow.append("<th class='hide-small'>${expense.type}</th>")
    }


    /**
     * Using the given roommates and expenses, generates and outputs the roommate table rows to the Results
     * output table
     */
    fun fillOutResultsTableBody(roommates: List<RentRoommate>, expenses: List<RentExpense>) {
        val jq_resultsTableBody = jq(resultsTableBodySelector)
        jq_resultsTableBody.empty()
        roommates.forEach { this.appendResultRow(jq_resultsTableBody, it, expenses) }
    }


    /**
     * Using the given roommate and expenses, generates and outputs the table row to the Results output table
     */
    fun appendResultRow(jq_resultsTableBody: JQuery, roommate: RentRoommate, expenses: List<RentExpense>) {
        jq_resultsTableBody.append(this.buildResultRow(roommate, expenses))
    }


    /**
     * Builds a string representation of a Results table row.
     */
    fun buildResultRow(roommate: RentRoommate, expenses: List<RentExpense>): String {
        var row = "<tr data-$roommateResultRowDataName='${roommate.name}'><th>${roommate.name}</th>"
        row += expenses.joinToString(separator = "",
                                     transform = { "<td class='hide-small'>${roommateContribution(roommate, it).dollarFormat}</td>" })
        row += "<th>${roommateTotalContributions(roommate).dollarFormat}</th>"
        return "$row</tr>"
    }


    fun roommateContribution(roommate: RentRoommate, expense: RentExpense): Double
            = roommate.proportion * expense.monthlyCost


    /**
     * Finds the total amount that the given roommate will contribute
     */
    fun roommateTotalContributions(roommate: RentRoommate, allExpenses: List<RentExpense>): Double
            = roommate.proportion * (this.totalExpenses(allExpenses) ?: 0.0)


    ///// CHECKING /////

    fun notifyOfProblems(roommates: List<RentRoommate>, expenses: List<RentExpense>) {
        val roommatesWhoOweTooMuch = roommates.filter { roommate ->
            val roommateTotalContributions = roommateTotalContributions(roommate)
            return@filter roommateTotalContributions > roommate.monthlyIncome
        }

        roommatesWhoOweTooMuch.forEach { roommate ->
            jq("[data-$roommateResultRowDataName='${roommate.name}']")
                    .addClass(roommateWhoOwesTooMuchClassName)
                    .attr("title", "This roommate owes too much!")
        }
    }
}



/**
 * The RentRoommate class represents a roommate and their monthly income.
 */
data class RentRoommate(val name: String,
                        val monthlyIncome: Double,
                        val originalDOMElement: JQuery,
                        var proportion: Double = 0.0)



/**
 * The RentExpense class represents an expense and its monthly cost.
 */
data class RentExpense(val type: String,
                       val monthlyCost: Double,
                       val originalDOMElement: JQuery)



fun main(args: Array<String>) {
    jq({
           RentSplit().onReady()
       })
}
