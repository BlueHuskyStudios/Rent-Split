/*
 *  Rent-Split.kt
 *  Made for Rent Split 2 by Ben Leggiero, starting 2017-11-23
 *
 *  Copyright Blue Husky Studios 2017 BH-1-PS
 */

package RentSplit

import jQueryInterface.*
import org.w3c.dom.events.Event


///// APP-GLOBAL CONSTANTS /////

/// Selectors ///

var AddARoommateRowId = "Add-Roommate-Row"
var AddARoommateRowSelector = "#" + AddARoommateRowId
var AddARoommateButtonId = "Add-Roommate-Button"
var AddARoommateButtonSelector = "#" + AddARoommateButtonId
var RemoveARoommateButtonClassName = "remove-roommate-button"
var RemoveARoommateButtonSelector = "." + RemoveARoommateButtonClassName
var AddAnExpenseRowId = "Add-Expense-Row"
var AddAnExpenseRowSelector = "#" + AddAnExpenseRowId
var AddAnExpenseButtonId = "Add-Expense-Button"
var AddAnExpenseButtonSelector = "#" + AddAnExpenseButtonId
var RemoveAnExpenseButtonClassName = "remove-expense-button"
var RemoveAnExpenseButtonSelector = "." + RemoveAnExpenseButtonClassName

var RoommateRowDataName = "roommate-row"
var RoommateRowSelector = "[data-" + RoommateRowDataName + "]"
var ExpenseRowDataName = "expense-row"
var ExpenseRowSelector = "[data-" + ExpenseRowDataName + "]"

var RoommateNameInputClassName = "roommate-name"
var RoommateNameInputSelector = "." + RoommateNameInputClassName
var RoommateIncomeInputClassName = "roommate-income"
var RoommateIncomeInputSelector = "." + RoommateIncomeInputClassName
var RoommateProportionClassName = "roommate-proportion"
var RoommateProportionSelector = "." + RoommateProportionClassName
var RoommateAnyInputFieldSelector = RoommateNameInputSelector + "," + RoommateIncomeInputSelector

var ExpenseNameInputClassName = "expense-name"
var ExpenseNameInputSelector = "." + ExpenseNameInputClassName
var ExpenseCostInputClassName = "expense-cost"
var ExpenseCostInputSelector = "." + ExpenseCostInputClassName
var ExpenseAnyInputFieldSelector = ExpenseNameInputSelector + "," + ExpenseCostInputSelector
var ExpenseTableSelector = "#Expenses"
var ExpenseTableBodySelector = ExpenseTableSelector + ">tbody"

var AnyInputFieldSelector = RoommateAnyInputFieldSelector + "," + ExpenseAnyInputFieldSelector
var AnyInputButtonSelector = AddARoommateButtonSelector + "," + AddAnExpenseButtonSelector + "," + RemoveAnExpenseButtonSelector
var AnyInputSelector = AnyInputFieldSelector + "," + AnyInputButtonSelector

var MoneyAmountInputSelector = RoommateIncomeInputSelector + "," + ExpenseCostInputSelector

var ResultsTableSelector = "#Results"
var ResultsTableBodySelector = ResultsTableSelector + ">tbody"
var ResultsTableHeadRowSelector = ResultsTableSelector + ">thead>tr"

/// Label text ///

var RentExpenseTitle = "Rent"
var UtilitiesExpenseTitle = "Utilities"

var RoommateNamePlaceholderText = "Name"
var RoommateIncomePlaceholderText = "Income"

var ExpenseTypePlaceholderText = "Type"
var ExpenseCostPlaceholderText = "Monthly Cost"

var RoommateNameColumnTitle = "Name"
var TotalColumnTitle = "Total Cost"

/// Defaults ///

var DefaultRoommateIncome = 1000

var DefaultExpenseCost = 100
var RentExpenseDefaultCost = 800
var UtilitiesExpenseDefaultCost = 50


/**
 * @author Ben Leggiero
 * @since 2017-11-23
 */
class RentSplit {
    ///// SETUP /////

    /**
     * The total amount of income of all roommates
     */
    var totalIncome: Double? = undefined

    /**
     * The total amount of expenses of all roommates
     */
    var totalExpenses: Double? = undefined

    /**
     * The running number of roommates, used to generate generic table headers
     */
    var roommateCounter: Int = 0

    /**
     * The running number of expenses, used to generate generic table headers
     */
    var expenseCounter: Double = 0.0


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
        jq(AnyInputSelector).off()
        this.registerListeners()
    }

    /**
     * Registers every listener
     */
    fun registerListeners() {
        jq(AnyInputFieldSelector).change(handler = recalculateRentSplit)
        jq(AddAnExpenseButtonSelector).click(addNewExpense)
        jq(RemoveAnExpenseButtonSelector).click(removeExpense)
        jq(AddARoommateButtonSelector).click(addNewRoommate)
        jq(RemoveARoommateButtonSelector).click(removeRoommate)
    }

    /**
     * Adds default expenses and roommates. Does not perform any calculations.
     */
    fun addDefaults() {
        // TODO: Read GET parameters
        this.addNewRoommate(undefined, "", DefaultRoommateIncome, true, true)
        this.addNewRoommate(undefined, "", DefaultRoommateIncome, true, true)

        this.addNewExpense(undefined, RentExpenseTitle, RentExpenseDefaultCost, true, true)
        this.addNewExpense(undefined, UtilitiesExpenseTitle, UtilitiesExpenseDefaultCost, true, true)
    }

    /**
     * Throws out the old calculations and recalculates every roommate's share of every expense, and displays
     * the output
     */
    fun recalculateRentSplit() {
        var roommates = this.fetchRoommates()
        var expenses = this.fetchExpenses()

        this.recalculateRoommateProportions(roommates)
        this.totalExpenses = this.recalculateTotalExpenses(expenses)

        this.fillOutResults(roommates, expenses)
    }

    fun presentToUser() {
        jq(".rent").addClass("rent-ready")
    }

    ///// FETCHING /////

    /**
     * Finds all roommates in the DOM, parses them into RentRoommate objects, and returns them.
     */
    fun fetchRoommates(): List<RentRoommate> {
        return this.roommateRowsToRoommates(jq(RoommateRowSelector))
    }

    /**
     * Finds all expenses in the DOM, parses them into RentExpense objects, and returns them.
     */
    fun fetchExpenses(): List<RentExpense> {
        return this.expenseRowsToExpenses(jq(ExpenseRowSelector))
    }

    /**
     * Takes in a jQuery result containing roommate input rows, parses each to a RentRoommate, and returns the
     * results in an array
     */
    fun roommateRowsToRoommates(jq_roommateRows: JQuery): List<RentRoommate> {
        this.roommateCounter = 0
        return jq_roommateRows.map(this.roommateRowToRoommate).toArray()
    }

    /**
     * Takes in a jQuery result containing expense input rows, parses each to a RentExpense, and returns the
     * results in an array
     */
    fun expenseRowsToExpenses(jq_expenseRows: JQuery): List<RentExpense> {
        return jq_expenseRows.map(this.expenseRowToExpense).toArray()
    }

    /**
     * Takes in a jQuery result containing a single roommate input row, parses it to a RentRoommate, and returns that
     */
    fun roommateRowToRoommate(index: Int, jq_roommateRow: JQuery): RentRoommate {
        this.roommateCounter++
        return RentRoommate(
        jq(RoommateNameInputSelector, jq_roommateRow).`val`() ?: "Roommate #$roommateCounter",
        jq(RoommateIncomeInputSelector, jq_roommateRow).`val`()?.toDoubleOrNull() ?: Double.NaN,
        jq_roommateRow
        )
    }

    /**
     * Takes in a jQuery result containing a single expense input row, parses it to a RentExpense, and returns that
     */
    fun expenseRowToExpense(index: Int, jq_expenseRow: JQuery): RentExpense {
        return RentExpense(
        jq(ExpenseNameInputSelector, jq_expenseRow).`val`() ?: "<EXPENSE>",
        jq(ExpenseCostInputSelector, jq_expenseRow).`val`()?.toDoubleOrNull() ?: Double.NaN,
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
        roommates.forEach(this.recalculateRoommateProportion)
        this.displayRoommateProportions(roommates)
    }

    /**
     * Trows away and recalculates the total income
     */
    fun recalculateTotalIncome(roommates: List<RentRoommate>): Double {
        return roommates.reduce { acc, curr ->
            return@reduce RentRoommate(monthlyIncome = acc.monthlyIncome + curr.monthlyIncome, name = "TMP", originalDOMElement = jq())
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
        roommates.forEach(this.displayRoommateProportion)
    }

    /**
     * Displays a single roommate's proportions of the total income in their input row
     */
    fun displayRoommateProportion(roommate: RentRoommate) {
        jq(RoommateProportionSelector, roommate.originalDOMElement).html((roommate.proportion * 100).toFixed(2) + "%")
    }

    /**
     * Throws away and recalculates the total of all given expenses
     */
    fun recalculateTotalExpenses(expenses: List<RentExpense>): Double {
        return expenses.reduce({ acc, curr ->
            return@reduce RentExpense(monthlyCost = acc.monthlyCost + curr.monthlyCost, type = "<EXPENSE>", originalDOMElement = jq())
        }).monthlyCost
    }

    ///// ADDING ROWS ////

    /**
     * Adds a new expense input row, its corresponding expense output column, de- and re-registers all listeners,
     * and recalculates the roommate split. If the type and cost are given, they are filled-in. If the type is
     * given, it is made non-editable.
     */
    fun addNewExpense(event: Event, type: String, cost: Double, locked: Boolean, suppressCalculation: Boolean) {
        this.expenseCounter++
        var jq_expenseButtonRow = jq(AddAnExpenseRowSelector)
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
    fun buildExpenseInputRow(type: String, cost: Double, locked: Boolean): JQuery {
        var row = "<tr data-" + ExpenseRowDataName + "=\"" + this.expenseCounter + "\">"
        row += "<th" +
         (if (locked) "" else " class=\"plain\"")
        + ">" +
        "<input" +
        " type=\"" + (if (locked) "hidden" else "text") + "\"" +
        " class=\"" + ExpenseNameInputClassName + "   text-right\"" +
         (if (type.isNotEmpty()) " value=\"" + type + "\"" else "")
        + " size=\"8\"" +
        " tabindex=0" +
        " placeholder=\"" + ExpenseTypePlaceholderText + "\"" +
        "/>" +
         (if (locked && type.isNotEmpty()) type else "")
        + "</th>"
        row += "<td class=\"plain vert-bottom\">" +
        "<input" +
        " type=\"number\"" +
         (type ? " id=\"total-" + type + "\"" : "")
        + " class=\"" + ExpenseCostInputClassName + "\"" +
        " required" +
        " value=\"" + (cost ? cost : DefaultExpenseCost) + "\"" +
        " step=\"10\"" +
        " size=\"8\"" +
        " tabindex=0" +
        " placeholder=\"" + ExpenseCostPlaceholderText + "\"" +
        "/>" +
        "</td>"
        if (!locked) {
            row += "<td" +
            " class=\"" + RemoveAnExpenseButtonClassName + " color-danger\"" +
            " tabindex=\"0\">" +
            "<i class=\"fa fa-minus-circle\"></i>" +
            "</td>"
        }
        return row + "</tr>"
    }

    /**
     * Adds a new roommate input row, its corresponding roommate output row, de- and re-registers all listeners,
     * and recalculates the roommate split. If the name and income are given, they are filled-in.
     */
    fun addNewRoommate(event, name, income, locked, suppressCalculation) {
        this.roommateCounter++
        var jq_roommateButtonRow = jq(AddARoommateRowSelector)
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
     * @param name   The type of expense; its name
     * @param income The monthly cost of the expense
     * @param isLocked Indicates whether the row should be removable
     */
    fun buildRoommateInputRow(name: String, income: Double?, isLocked: Boolean) {
        var row = "<tr data-" + RoommateRowDataName + "=\"" + this.roommateCounter + "\">"
        row += "<th class=\"plain\">" +
        "<input" +
        " type=\"text\"" +
        " class=\"" + RoommateNameInputClassName + "   text-right\"" +
         (if (name.isNotEmpty()) " value=\"" + name + "\"" else "") +
        + " size=\"8\"" +
        " tabindex=0" +
        " placeholder=\"" + RoommateNamePlaceholderText + "\"" +
        "/>" +
        "</th>"
        row += "<td class=\"plain vert-bottom\">" +
        "<input" +
        " type=\"number\"" +
        " class=\"" + RoommateIncomeInputClassName + "\"" +
        " required" +
        " value=\"" + (income ? income : DefaultRoommateIncome) + "\"" +
        " step=\"100\"" +
        " size=\"8\"" +
        " tabindex=0" +
        " placeholder=\"" + RoommateIncomePlaceholderText + "\"" +
        "/>" +
        "</td>"
        row += "<td class=\"" + RoommateProportionClassName + "\">Calculating</td>"
        if (!isLocked) {
            row += "<td" +
            " class=\"" + RemoveARoommateButtonClassName + " color-danger\"" +
            " tabindex=\"0\">" +
            "<i class=\"fa fa-minus-circle\"></i>" +
            "</td>"
        }
        return row + "</tr>"
    }

    ///// REMOVING ROWS /////

    /**
     * Removes the expense input row referenced in the given event
     */
    fun removeExpense(event) {
        var expenseRow = event.currentTarget.parentElement
        expenseRow.remove()
        this.reRegisterListeners()
        this.recalculateRentSplit()
    }

    /**
     * Removes the roommate input row referenced in the given event
     */
    fun removeRoommate(event) {
        var roommateRow = event.currentTarget.parentElement
        roommateRow.remove()
        this.reRegisterListeners()
        this.recalculateRentSplit()
    }

    ///// OUTPUT /////

    /**
     * Using the given roommates and expenses, this throws away and regenerates the Results output table
     */
    fun fillOutResults(roommates, expenses) {
        this.fillOutResultsTableHead(roommates, expenses)
        this.fillOutResultsTableBody(roommates, expenses)
    }

    /**
     * Using the given roommates and expenses, generates and outputs the table column heads to the Results
     * output table
     */
    fun fillOutResultsTableHead(roommates, expenses) {
        var jq_resultsTableHeadRow= jq(ResultsTableHeadRowSelector)
        jq_resultsTableHeadRow.empty()
        jq_resultsTableHeadRow.append("<th class=\"text-center\">" + RoommateNameColumnTitle + "</th>")
        expenses.forEach(function(each) { this.appendExpenseColumn(jq_resultsTableHeadRow, each) })
        jq_resultsTableHeadRow.append("<th class=\"text-center\">" + TotalColumnTitle + "</th>")
    }

    /**
     * Using the given expense, generates and outputs the table column head to the Results output table
     */
    fun appendExpenseColumn(jq_resultsTableHeadRow, expense) {
        jq_resultsTableHeadRow.append("<th class='hide-small'>" + expense.type + "</th>")
    }

    /**
     * Using the given roommates and expenses, generates and outputs the roommate table rows to the Results
     * output table
     */
    fun fillOutResultsTableBody(roommates, expenses) {
        var jq_resultsTableBody = jq(ResultsTableBodySelector)
        jq_resultsTableBody.empty()
        roommates.forEach(function(each) { this.appendResultRow(jq_resultsTableBody, each, expenses) })
    }

    /**
     * Using the given roommate and expenses, generates and outputs the table row to the Results output table
     */
    fun appendResultRow(jq_resultsTableBody, roommate, expenses) {
        jq_resultsTableBody.append(this.buildResultRow(roommate, expenses))
    }

    /**
     * Builds a string representation of a Results table row.
     */
    fun buildResultRow(roommate, expenses) {
        var row = "<tr><th>" + roommate.name + "</th>"
        row += expenses.map(function(each) { return "<td class='hide-small'>" + this.dollarFormat(roommate.proportion * each.monthlyCost) +
                "</td>" }).join()
        row += "<th>" + this.dollarFormat(roommate.proportion * this.totalExpenses) + "</th>"
        return row + "</tr>"
    }



    ///// UTILITIES /////

    /**
     * Takes in a number and returns it with a dollar sign and exactly two decimal places
     */
    fun dollarFormat(n) {
        return "$" + n.toFixed(2)
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
data class RentExpense(val type: String, val monthlyCost: Double, val originalDOMElement: JQuery)


fun main(args: Array<String>) {
    jq({
        RentSplit().onReady()
    })
}
