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

RentSplit = function() {
    "use strict";

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
        totalIncome: undefined,
        rentRoommateCounter: 0,

        onReady: function() {
            self.registerListeners()
            self.recalculateRentSplit()
        },

        registerListeners: function() {
            $(AnyInputSelector).change(self.recalculateRentSplit)
        },

        recalculateRentSplit: function() {
            var roommates = self.fetchRoommates()
            var expenses = self.fetchExpenses()

            self.recalculateRoommateProportions(roommates)
            self.recalculateTotalExpenses(expenses)

            self.fillOutResults(roommates, expenses)
        },

        fetchRoommates: function() {
            return self.roommateRowsToRoommates($(RoommateRowSelector))
        },

        fetchExpenses: function() {
            return self.expenseRowsToExpenses($(ExpenseRowSelector))
        },

        roommateRowsToRoommates: function($roommateRows) {
            self.rentRoommateCounter = 0
            return $roommateRows.map(self.roommateRowToRoommate).toArray()
        },

        expenseRowsToExpenses: function($expenseRows) {
            return $expenseRows.map(self.expenseRowToExpense).toArray()
        },

        roommateRowToRoommate: function(index, $roommateRow) {
            self.rentRoommateCounter++
            return new RentRoommate(
                $(RoommateNameInputSelector, $roommateRow).val() || ("Roommate #" + self.rentRoommateCounter),
                $(RoommateIncomeInputSelector, $roommateRow).val(),
                $roommateRow
            )
        },

        expenseRowToExpense: function(index, $expenseRow) {
            return new RentExpense(
                $(ExpenseNameInputSelector, $expenseRow).val(),
                $(ExpenseCostInputSelector, $expenseRow).val(),
                $expenseRow
            )
        },

        recalculateRoommateProportions: function(roommates) {
            self.recalculateTotalIncome(roommates)
            roommates.forEach(self.recalculateRoommateProportion)
            self.displayRoommateProportions(roommates)
        },

        recalculateTotalIncome: function(roommates) {
            self.totalIncome = roommates.reduce(function(prev, curr) { return prev.monthlyIncome + curr.monthlyIncome })
        },

        recalculateRoommateProportion: function(roommate) {
            roommate.proportion = roommate.monthlyIncome / self.totalIncome
        },

        displayRoommateProportions: function(roommates) {
            roommates.forEach(self.displayRoommateProportion)
        },

        displayRoommateProportion: function(roommate) {
            $(RoommateProportionSelector, roommate.originalDOMElement).html((roommate.proportion * 100).toFixed(2) + "%")
        },

        recalculateTotalExpenses: function(expenses) {
            self.totalExpenses = expenses.reduce(function(prev, curr) { return prev.monthlyCost + curr.monthlyCost })
        },

        fillOutResults: function(roommates, expenses) {
            self.fillOutResultsTableHead(roommates, expenses)
            self.fillOutResultsTableBody(roommates, expenses)
        },

        fillOutResultsTableHead: function(roommates, expenses) {
            var $resultsTableHeadRow= $(ResultsTableHeadRowSelector)
            $resultsTableHeadRow.empty()
            $resultsTableHeadRow.append("<th class=\"text-center\">" + RoommateNameColumnTitle + "</th>")
            expenses.forEach(function(each) { self.appendExpenseColumn($resultsTableHeadRow, each) })
            $resultsTableHeadRow.append("<th class=\"text-center\">" + TotalColumnTitle + "</th>")
        },

        appendExpenseColumn: function($resultsTableHeadRow, expense) {
            $resultsTableHeadRow.append("<th>" + expense.type + "</th>")
        },

        fillOutResultsTableBody: function(roommates, expenses) {
            var $resultsTableBody = $(ResultsTableBodySelector)
            $resultsTableBody.empty()
            roommates.forEach(function(each) { self.appendResultRow($resultsTableBody, each, expenses) })
        },

        appendResultRow: function($resultsTableBody, roommate, expenses) {
            $resultsTableBody.append(self.buildResultRow(roommate, expenses))
        },

        buildResultRow: function(roommate, expenses) {
            var row = "<tr><th>" + roommate.name + "</th>"//"<td>yo</td></tr>"
            row += expenses.map(function(each) { return "<td>" + self.dollarFormat(roommate.proportion * each.monthlyCost) +
            "</td>" }).join()
            row += "<th>" + self.dollarFormat(roommate.proportion * self.totalExpenses) + "</th>"
            return row + "</tr>"
        },




        dollarFormat: function(n) {
            return "$" + n.toFixed(2)
        }
    }
    return self
}

RentRoommate = function(name, monthlyIncome, originalDOMElement) {
    "use strict";
    return {
        name: name,
        monthlyIncome: +monthlyIncome,
        originalDOMElement: originalDOMElement
    }
}

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
