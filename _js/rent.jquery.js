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


    var self = {

        ///// SETUP /////

        /**
         * The total amount of income of all roommates
         */
        totalIncome: undefined,
        /**
         * The running number of roommates, used to generate generic table headers
         */
        roommateCounter: 0,
        /**
         * The running number of expenses, used to generate generic table headers
         */
        expenseCounter: 0,

        /**
         * Called once when the DOM is ready
         */
        onReady: function() {
            self.registerListeners()
            self.addDefaults()
            self.recalculateRentSplit()
        },

        /**
         * De- and re-registers every listener
         */
        reregisterListeners: function() {
            $(AnyInputSelector).off()
            self.registerListeners()
        },

        /**
         * Registers every listener
         */
        registerListeners: function() {
            $(AnyInputFieldSelector).change(self.recalculateRentSplit)
            $(AddAnExpenseButtonSelector).click(self.addNewExpense)
            $(RemoveAnExpenseButtonSelector).click(self.removeExpense)
            $(AddARoommateButtonSelector).click(self.addNewRoommate)
            $(RemoveARoommateButtonSelector).click(self.removeRoommate)
        },

        /**
         * Adds default expenses and roommates. Does not perform any calculations.
         */
        addDefaults: function() {
            // TODO: Read GET parameters
            self.addNewRoommate(undefined, "", DefaultRoommateIncome, true, true)
            self.addNewRoommate(undefined, "", DefaultRoommateIncome, true, true)

            self.addNewExpense(undefined, RentExpenseTitle, RentExpenseDefaultCost, true, true)
            self.addNewExpense(undefined, UtilitiesExpenseTitle, UtilitiesExpenseDefaultCost, true, true)
        },

        /**
         * Throws out the old calculations and recalculates every roommate's share of every expense, and displays
         * the output
         */
        recalculateRentSplit: function() {
            var roommates = self.fetchRoommates()
            var expenses = self.fetchExpenses()

            self.recalculateRoommateProportions(roommates)
            self.totalExpenses = self.recalculateTotalExpenses(expenses)

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
            self.roommateCounter = 0
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
            self.roommateCounter++
            return new RentRoommate(
                $(RoommateNameInputSelector, $roommateRow).val() || ("Roommate #" + self.roommateCounter),
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
            self.totalIncome = self.recalculateTotalIncome(roommates)
            roommates.forEach(self.recalculateRoommateProportion)
            self.displayRoommateProportions(roommates)
        },

        /**
         * Trows away and recalculates the total income
         */
        recalculateTotalIncome: function(roommates) {
            return roommates.reduce(function(prev, curr) {
                return {monthlyIncome: prev.monthlyIncome + curr.monthlyIncome}
            }).monthlyIncome
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
            return expenses.reduce(function(prev, curr) {
                return {monthlyCost: prev.monthlyCost + curr.monthlyCost}
            }).monthlyCost
        },

        ///// ADDING ROWS ////

        /**
         * Adds a new expense input row, its corresponding expense output column, de- and re-registers all listeners,
         * and recalculates the roommate split. If the type and cost are given, they are filled-in. If the type is
         * given, it is made non-editable.
         */
        addNewExpense: function(event, type, cost, locked, suppressCalculation) {
            self.expenseCounter++
            var $expenseButtonRow = $(AddAnExpenseRowSelector)
            $expenseButtonRow.before(self.buildExpenseInputRow(type, cost, locked))
            self.reregisterListeners()
            if (!suppressCalculation) {
                self.recalculateRentSplit()
            }
        },

        /**
         * Builds a string representation of a table row representing an expense input. If the type and cost are given,
         * they are filled-in.
         *
         * @param type   The type of expense; its name
         * @param cost   The monthly cost of the expense
         * @param locked Indicates whether the type should be editable and the row should be removable
         */
        buildExpenseInputRow: function(type, cost, locked) {
            var row = "<tr data-" + ExpenseRowDataName + "=\"" + self.expenseCounter + "\">"
            row += "<th"
                + (locked ? "" : " class=\"plain\"")
                + ">"
                + "<input"
                    + " type=\"" + (locked ? "hidden" : "text") + "\""
                    + " class=\"" + ExpenseNameInputClassName + "   text-right\""
                    + (type ? " value=\"" + type + "\"" : "")
                    + " size=\"8\""
                    + " tabindex=0"
                    + " placeholder=\"" + ExpenseTypePlaceholderText + "\""
                    + "/>"
                + (locked && type ? type : "")
                + "</th>"
            row += "<td class=\"plain vert-bottom\">"
                    + "<input"
                        + " type=\"number\""
                        + (type ? " id=\"total-" + type + "\"" : "")
                        + " class=\"" + ExpenseCostInputClassName + "\""
                        + " required"
                        + " value=\"" + (cost ? cost : DefaultExpenseCost) + "\""
                        + " step=\"10\""
                        + " size=\"8\""
                        + " tabindex=0"
                        + " placeholder=\"" + ExpenseCostPlaceholderText + "\""
                        + "/>"
                + "</td>"
            if (!locked) {
                row += "<td"
                    + " class=\"" + RemoveAnExpenseButtonClassName + " color-danger\""
                    +" tabindex=\"0\">"
                        + "<i class=\"fa fa-minus-circle\"></i>"
                    + "</td>"
            }
            return row + "</tr>"
        },

        /**
         * Adds a new roommate input row, its corresponding roommate output row, de- and re-registers all listeners,
         * and recalculates the roommate split. If the name and income are given, they are filled-in.
         */
        addNewRoommate: function(event, name, income, locked, suppressCalculation) {
            self.roommateCounter++
            var $roommateButtonRow = $(AddARoommateRowSelector)
            $roommateButtonRow.before(self.buildRoommateInputRow(name, income, locked))
            self.reregisterListeners()
            if (!suppressCalculation) {
                self.recalculateRentSplit()
            }
        },

        /**
         * Builds a string representation of a table row representing an roommate input. If the name and income are
         * given, they are filled-in.
         *
         * @param name   The type of expense; its name
         * @param income The monthly cost of the expense
         * @param locked Indicates whether the row should be removable
         */
        buildRoommateInputRow: function(name, income, locked) {
            var row = "<tr data-" + RoommateRowDataName + "=\"" + self.roommateCounter + "\">"
            row += "<th class=\"plain\">"
                + "<input"
                    + " type=\"text\""
                    + " class=\"" + RoommateNameInputClassName + "   text-right\""
                    + (name ? " value=\"" + name + "\"" : "")
                    + " size=\"8\""
                    + " tabindex=0"
                    + " placeholder=\"" + RoommateNamePlaceholderText + "\""
                    + "/>"
                + "</th>"
            row += "<td class=\"plain vert-bottom\">"
                    + "<input"
                        + " type=\"number\""
                        + " class=\"" + RoommateIncomeInputClassName + "\""
                        + " required"
                        + " value=\"" + (income ? income : DefaultRoommateIncome) + "\""
                        + " step=\"100\""
                        + " size=\"8\""
                        + " tabindex=0"
                        + " placeholder=\"" + RoommateIncomePlaceholderText + "\""
                        + "/>"
                + "</td>"
            row += "<td class=\"" + RoommateProportionClassName + "\">Calculating</td>"
            if (!locked) {
                row += "<td"
                    + " class=\"" + RemoveARoommateButtonClassName + " color-danger\""
                    +" tabindex=\"0\">"
                        + "<i class=\"fa fa-minus-circle\"></i>"
                    + "</td>"
            }
            return row + "</tr>"
        },

        ///// REMOVING ROWS /////

        /**
         * Removes the expense input row referenced in the given event
         */
        removeExpense: function(event) {
            var expenseRow = event.currentTarget.parentElement
            expenseRow.remove()
            self.reregisterListeners()
            self.recalculateRentSplit()
        },

        /**
         * Removes the roommate input row referenced in the given event
         */
        removeRoommate: function(event) {
            var roommateRow = event.currentTarget.parentElement
            roommateRow.remove()
            self.reregisterListeners()
            self.recalculateRentSplit()
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
            var row = "<tr><th>" + roommate.name + "</th>"
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
