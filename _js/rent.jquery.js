/* Rent.jQuery.js
 *
 * The logic behind Rent Split
 *
 * @dependency jQuery 3+: https://Code.jQuery.com/jquery-3.1.0.slim.min.js
 *
 * @since 2016-09-05
 * @author Kyli Rouge of Blue Husky Studios
 *
 * @see https://Supuhstar.GitHub.IO/Rent-Split-Calculator
 */

/**
 * The RentSplit class is a controller that can read and generate parts of a Rent Split application
 */
RentSplit = function() {
    "use strict";

    ///// APP-GLOBAL CONSTANTS /////

    var AddARoommateButtonId = "Add-Roommate-Button"
    var AddAnExpenseButtonId = "Add-Expense-Button"

    var RoommateRowSelector = "[data-roommate-row]"
    var ExpenseRowSelector = "[data-expense-row]"

    var RoommateNameInputSelector = ".roommate-name"
    var RoommateIncomeInputSelector = ".roommate-income"
    var RoommateProportionSelector = ".roommate-proportion"
    var RoommateAnyInputSelector = RoommateNameInputSelector + "," + RoommateIncomeInputSelector

    var ExpenseNameInputSelector = ".expense-name"
    var ExpenseCostInputSelector = ".expense-cost"
    var ExpenseAnyInputSelector = ExpenseNameInputSelector + "," + ExpenseCostInputSelector

    var AnyInputSelector = RoommateAnyInputSelector + "," + ExpenseAnyInputSelector

    var MoneyAmountInputSelector = RoommateIncomeInputSelector + "," + ExpenseCostInputSelector

    var ResultsTableSelector = "#Results"
    var ResultsTableBodySelector = ResultsTableSelector + ">tbody"
    var ResultsTableHeadRowSelector = ResultsTableSelector + ">thead>tr"


    var RoommateNameColumnTitle = "Name"
    var TotalColumnTitle = "Total Cost"


    var self = {

        ///// SETUP /////

        /**
         * The total amount of income of all roommates
         */
        totalIncome: undefined,
        /**
         * The running number of roommates, used to generate generic table headers
         */
        rentRoommateCounter: 0,

        /**
         * Called once when the DOM is ready
         */
        onReady: function() {
            self.registerListeners()
            self.recalculateRentSplit()
        },

        /**
         * Registers every listener
         */
        registerListeners: function() {
            $(AnyInputSelector).change(self.recalculateRentSplit)
        },

        /**
         * Throws out the old calculations and recalculates every roommate's share of every expense, and displays
         * the output
         */
        recalculateRentSplit: function() {
            var roommates = self.fetchRoommates()
            var expenses = self.fetchExpenses()

            self.recalculateRoommateProportions(roommates)
            self.recalculateTotalExpenses(expenses)

            self.fillOutResults(roommates, expenses)
        },

        ///// FETCHING /////

        /**
         * Finds all roommates in the DOM, parses them into RentRoommate objects, and returns them.
         */
        fetchRoommates: function() {
            return self.roommateRowsToRoommates($(RoommateRowSelector))
        },

        /**
         * Finds all expenses in the DOM, parses them into RentExpense objects, and returns them.
         */
        fetchExpenses: function() {
            return self.expenseRowsToExpenses($(ExpenseRowSelector))
        },

        /**
         * Takes in a jQuery result containing roommate input rows, parses each to a RentRoommate, and returns the
         * results in an array
         */
        roommateRowsToRoommates: function($roommateRows) {
            self.rentRoommateCounter = 0
            return $roommateRows.map(self.roommateRowToRoommate).toArray()
        },

        /**
         * Takes in a jQuery result containing expense input rows, parses each to a RentExpense, and returns the
         * results in an array
         */
        expenseRowsToExpenses: function($expenseRows) {
            return $expenseRows.map(self.expenseRowToExpense).toArray()
        },

        /**
         * Takes in a jQuery result containing a single roommate input row, parses it to a RentRoommate, and returns that
         */
        roommateRowToRoommate: function(index, $roommateRow) {
            self.rentRoommateCounter++
            return new RentRoommate(
                $(RoommateNameInputSelector, $roommateRow).val() || ("Roommate #" + self.rentRoommateCounter),
                $(RoommateIncomeInputSelector, $roommateRow).val(),
                $roommateRow
            )
        },

        /**
         * Takes in a jQuery result containing a single expense input row, parses it to a RentExpense, and returns that
         */
        expenseRowToExpense: function(index, $expenseRow) {
            return new RentExpense(
                $(ExpenseNameInputSelector, $expenseRow).val(),
                $(ExpenseCostInputSelector, $expenseRow).val(),
                $expenseRow
            )
        },

        ///// CALCULATION /////

        /**
         * Trows away and recalculates the total income and each roommate's proportion of that, then displays the
         * proportions in the roommate input table
         */
        recalculateRoommateProportions: function(roommates) {
            self.recalculateTotalIncome(roommates)
            roommates.forEach(self.recalculateRoommateProportion)
            self.displayRoommateProportions(roommates)
        },

        /**
         * Trows away and recalculates the total income
         */
        recalculateTotalIncome: function(roommates) {
            self.totalIncome = roommates.reduce(function(prev, curr) { return prev.monthlyIncome + curr.monthlyIncome })
        },

        /**
         * Trows away and recalculates each roommate's proportion of the total income
         */
        recalculateRoommateProportion: function(roommate) {
            roommate.proportion = roommate.monthlyIncome / self.totalIncome
        },

        /**
         * Displays each roommate's proportions of the total income in their input row
         */
        displayRoommateProportions: function(roommates) {
            roommates.forEach(self.displayRoommateProportion)
        },

        /**
         * Displays a single roommate's proportions of the total income in their input row
         */
        displayRoommateProportion: function(roommate) {
            $(RoommateProportionSelector, roommate.originalDOMElement).html((roommate.proportion * 100).toFixed(2) + "%")
        },

        /**
         * Throws away and recalculates the total of all given expenses
         */
        recalculateTotalExpenses: function(expenses) {
            self.totalExpenses = expenses.reduce(function(prev, curr) { return prev.monthlyCost + curr.monthlyCost })
        },

        ///// OUTPUT /////

        /**
         * Using the given roommates and expenses, this throws away and regenerates the Results output table
         */
        fillOutResults: function(roommates, expenses) {
            self.fillOutResultsTableHead(roommates, expenses)
            self.fillOutResultsTableBody(roommates, expenses)
        },

        /**
         * Using the given roommates and expenses, generates and outputs the table column heads to the Results
         * output table
         */
        fillOutResultsTableHead: function(roommates, expenses) {
            var $resultsTableHeadRow= $(ResultsTableHeadRowSelector)
            $resultsTableHeadRow.empty()
            $resultsTableHeadRow.append("<th class=\"text-center\">" + RoommateNameColumnTitle + "</th>")
            expenses.forEach(function(each) { self.appendExpenseColumn($resultsTableHeadRow, each) })
            $resultsTableHeadRow.append("<th class=\"text-center\">" + TotalColumnTitle + "</th>")
        },

        /**
         * Using the given expense, generates and outputs the table column head to the Results output table
         */
        appendExpenseColumn: function($resultsTableHeadRow, expense) {
            $resultsTableHeadRow.append("<th>" + expense.type + "</th>")
        },

        /**
         * Using the given roommates and expenses, generates and outputs the roommate table rows to the Results
         * output table
         */
        fillOutResultsTableBody: function(roommates, expenses) {
            var $resultsTableBody = $(ResultsTableBodySelector)
            $resultsTableBody.empty()
            roommates.forEach(function(each) { self.appendResultRow($resultsTableBody, each, expenses) })
        },

        /**
         * Using the given roommate and expenses, generates and outputs the table row to the Results output table
         */
        appendResultRow: function($resultsTableBody, roommate, expenses) {
            $resultsTableBody.append(self.buildResultRow(roommate, expenses))
        },

        /**
         * Builds a string representation of a Results table row.
         */
        buildResultRow: function(roommate, expenses) {
            var row = "<tr><th>" + roommate.name + "</th>"//"<td>yo</td></tr>"
            row += expenses.map(function(each) { return "<td>" + self.dollarFormat(roommate.proportion * each.monthlyCost) +
            "</td>" }).join()
            row += "<th>" + self.dollarFormat(roommate.proportion * self.totalExpenses) + "</th>"
            return row + "</tr>"
        },



        ///// UTILITIES /////

        /**
         * Takes in a number and returns it with a dollar sign and exactly two decimal places
         */
        dollarFormat: function(n) {
            return "$" + n.toFixed(2)
        }
    }
    return self
}

/**
 * The RentRoommate class represents a roommate and their monthly income.
 */
RentRoommate = function(name, monthlyIncome, originalDOMElement) {
    "use strict";
    return {
        name: name,
        monthlyIncome: +monthlyIncome,
        originalDOMElement: originalDOMElement
    }
}

/**
 * The RentExpense class represents an expense and its monthly cost.
 */
RentExpense = function(type, monthlyCost, originalDOMElement) {
    "use strict";
    return {
        type: type,
        monthlyCost: +monthlyCost,
        originalDOMElement: originalDOMElement
    }
}

$(function() {
    new RentSplit().onReady()
})
