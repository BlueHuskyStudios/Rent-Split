/*
 *  Rent-Split.kt
 *  Made for Rent Split 2 by Ben Leggiero, starting 2017-11-23
 *
 *  Written in Kotlin/JS 1.2
 *
 *  Copyright Blue Husky Studios 2017 BH-1-PS
 */

@file:Suppress("MemberVisibilityCanPrivate", "LocalVariableName", "NOTHING_TO_INLINE")

package RentSplit

import RentSplit.UserConsent.*
import jQueryInterface.*
import org.bh.tools.base.func.observing
import org.w3c.dom.Element
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

val roommateInputRowDataName = "roommate-row"
val roommateInputRowSelector = "[data-$roommateInputRowDataName]"
val expenseInputRowDataName = "expense-row"
val expenseInputRowSelector = "[data-$expenseInputRowDataName]"

val roommateResultRowDataName = "result-$roommateInputRowDataName"

//val roommateTableId = "Roommate"
//val roommateTableSelector = "#$roommateTableId"
val roommateNameInputClassName = "roommate-name"
val roommateNameInputSelector = "." + roommateNameInputClassName
val roommateIncomeInputClassName = "roommate-income"
val roommateIncomeInputSelector = "." + roommateIncomeInputClassName
val roommateProportionClassName = "roommate-proportion"
val roommateProportionSelector = "." + roommateProportionClassName
val roommateAnyInputFieldSelector = "$roommateNameInputSelector,$roommateIncomeInputSelector"
//val roommateResultRowSelector = "[data-$roommateResultRowDataName]"
val roommateWhoOwesTooMuchClassName = "roommate-owes-too-much"
//val roommateWhoOwesTooMuchSelector = ".$roommateWhoOwesTooMuchClassName"
val roommateRemovabilityDataName = "roommate-removable"
val roommateRemovabilityAttribute = "data-$roommateRemovabilityDataName"
val roommateRemovabilitySelector = "[$roommateRemovabilityAttribute]"
val roommateRenamabilityDataName = "roommate-renamable"
val roommateRenamabilityAttribute = "data-$roommateRenamabilityDataName"
val roommateRenamabilitySelector = "[$roommateRenamabilityAttribute]"

val expenseTypeInputClassName = "expense-type"
val expenseTypeInputSelector = "." + expenseTypeInputClassName
val expenseCostInputClassName = "expense-cost"
val expenseCostInputSelector = "." + expenseCostInputClassName
val expenseAnyInputFieldSelector = "$expenseTypeInputSelector,$expenseCostInputSelector"
//val expenseTableSelector = "#Expenses"
//val expenseTableBodySelector = expenseTableSelector + ">tbody"
val expenseRemovabilityDataName = "expense-removable"
val expenseRemovabilityAttribute = "data-$expenseRemovabilityDataName"
val expenseRemovabilitySelector = "[$expenseRemovabilityAttribute]"
val expenseRenamabilityDataName = "expense-renamable"
val expenseRenamabilityAttribute = "data-$expenseRenamabilityDataName"
val expenseRenamabilitySelector = "[$expenseRenamabilityAttribute]"

val resultRowDataName = "result-roommate-row"
val resultRowAttribute = "data-$resultRowDataName"
val resultRowSelector = "[$resultRowAttribute]"

val anyInputFieldSelector = "$roommateAnyInputFieldSelector,$expenseAnyInputFieldSelector"
val anyInputButtonSelector = "$addARoommateButtonSelector,$addAnExpenseButtonSelector,$removeAnExpenseButtonSelector"
val anyInputSelector = "$anyInputFieldSelector,$anyInputButtonSelector"

//val moneyAmountInputSelector = "$roommateIncomeInputSelector,$expenseCostInputSelector"

val resultsTableSelector = "#Results"
val resultsTableBodySelector = "$resultsTableSelector>tbody"
val resultsTableHeadRowSelector = "$resultsTableSelector>thead>tr"


/// State Saving ///

val localStorageWarningId = "Local-Storage-Warning"
val localStorageWarningSelector = "#$localStorageWarningId"
val localStorageWarningExplicitRefusalButtonId = "Local-Storage-Warning-Decline-Button"
val localStorageWarningExplicitRefusalButtonSelector = "#$localStorageWarningExplicitRefusalButtonId"
val localStorageWarningExplicitConsentButtonId = "Local-Storage-Warning-Consent-Button"
val localStorageWarningExplicitConsentButtonSelector = "#$localStorageWarningExplicitConsentButtonId"


/// Label text ///

val rentExpenseType = "Rent"
val utilitiesExpenseType = "Utilities"

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

    /**
     * The overall state of the app. If this is set, the app auto-refreshes
     */
    var state: RentSplitState by observing(RentSplitState.load(), didSet = { _, _ ->
        this.reloadPageFromState()
        state.save()
    })


    /**
     * Called when the page has loaded completely and is ready to be manipulated by JavaScript
     */
    fun onReady() {
        this.reloadPageFromState(shouldReRegisterListeners = false)
        this.regenerateInputTables()
        this.registerListeners()
        this.recalculateRentSplit()
        this.presentToUser()
    }


    /**
     * Reloads all objects on the page by reading the state variable
     */
    fun reloadPageFromState(shouldReRegisterListeners: Boolean = true) {
        this.applyStateToLocalStorageWarning()
        this.regenerateInputTables()
        if (shouldReRegisterListeners) {
            this.reRegisterListeners()
        }
        this.recalculateRentSplit()
    }


    /**
     * Ensures the local storage warning reflects the current app state
     */
    fun applyStateToLocalStorageWarning() {
        if (state.localDataPreferences.localStorageConsent != null) {
            jq(localStorageWarningSelector).addClass("hidden")
        }
        else {
            jq(localStorageWarningSelector).removeClass("hidden")
        }
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
        jq(anyInputFieldSelector).change(::anyInputFieldDidChange)
        jq(addAnExpenseButtonSelector).click(::didPressNewExpenseButton)
        jq(removeAnExpenseButtonSelector).click(::didPressRemoveExpenseButton)
        jq(addARoommateButtonSelector).click(::didPressNewRoommateButton)
        jq(removeARoommateButtonSelector).click(::didPressRemoveRoommateButton)

        jq(localStorageWarningExplicitConsentButtonSelector).click(::didPressLocalStorageWarningExplicitConsentButton)
        jq(localStorageWarningExplicitRefusalButtonSelector).click(::didPressLocalStorageWarningExplicitRefusalButton)
    }


    /**
     * Called immediately after any input field changes
     */
    fun anyInputFieldDidChange(event: Event?) {
        reloadStateFromPage()
        // implicit recalculateRentSplit()
    }


    /**
     * Called when the user has pressed the "You can store stuff on my machine" button
     */
    fun didPressLocalStorageWarningExplicitConsentButton(event: Event) {
        state = state.copy(localDataPreferences = state.localDataPreferences.copy(localStorageConsent = explicitConsent))
    }


    /**
     * Called when the user has pressed the "I don't want you to store stuff on my machine" button
     */
    fun didPressLocalStorageWarningExplicitRefusalButton(event: Event) {
        state = state.copy(localDataPreferences = state.localDataPreferences.copy(localStorageConsent = explicitRefusal))
    }


    /**
     * Re-loads the app state based on user input on the page
     */
    fun reloadStateFromPage() {
        state = state.copy(roommates = fetchRoommates(), expenses = fetchExpenses())
    }


    /**
     * Throws out the old calculations and recalculates every roommate's share of every expense, and displays
     * the output
     */
    fun recalculateRentSplit() {
        val roommates = state.roommates
        val expenses = state.expenses

        this.recalculateRoommateProportions(roommates)
        this.fillOutResults(roommates, expenses)
        this.notifyOfProblems(roommates, expenses)
    }


    /**
     * Presents the app to the user
     */
    fun presentToUser() {
        jq(".rent").addClass("rent-ready")
    }


    ///// FETCHING /////

    /**
     * Finds all roommates in the DOM, parses them into RentRoommate objects, and returns them.
     */
    fun fetchRoommates(): RentRoommates {
        return this.roommateRowsToRoommates(jq(roommateInputRowSelector))
    }


    /**
     * Finds all expenses in the DOM, parses them into RentExpense objects, and returns them.
     */
    fun fetchExpenses(): RentExpenses {
        return this.expenseRowsToExpenses(jq(expenseInputRowSelector))
    }


    /**
     * Takes in a jQuery result containing roommate input rows, parses each to a RentRoommate, and returns the
     * results in an array
     */
    fun roommateRowsToRoommates(jq_roommateRows: JQuery): RentRoommates {
        return RentRoommates(jq_roommateRows.map { index, roommateRow -> this.roommateRowToRoommate(index, jq(roommateRow)) }.asList())
    }


    /**
     * Takes in a jQuery result containing expense input rows, parses each to a RentExpense, and returns the
     * results in an array
     */
    fun expenseRowsToExpenses(jq_expenseRows: JQuery): RentExpenses {
        return RentExpenses(jq_expenseRows.map { index, expenseRow -> this.expenseRowToExpense(index, jq(expenseRow)) }.asList())
    }


    /**
     * Takes in a jQuery result containing a single roommate input row, parses it to a RentRoommate, and returns that
     */
    @Suppress("UNUSED_PARAMETER")
    fun roommateRowToRoommate(index: Int, jq_roommateRow: JQuery): RentRoommate {
        return RentRoommate(
                name = jq(roommateNameInputSelector, jq_roommateRow).`val`() ?: "",
                monthlyIncome = jq(roommateIncomeInputSelector, jq_roommateRow).`val`()?.toDoubleOrNull() ?: Double.NaN,
                isRemovable = jq_roommateRow.attr(roommateRemovabilityAttribute)?.toBooleanOrNull() ?: true,
                isRenamable = jq_roommateRow.attr(roommateRenamabilityAttribute)?.toBooleanOrNull() ?: true,
                originalDOMElement = jq_roommateRow
        )
    }


    /**
     * Takes in a jQuery result containing a single expense input row, parses it to a RentExpense, and returns that
     */
    @Suppress("UNUSED_PARAMETER")
    fun expenseRowToExpense(index: Int, jq_expenseRow: JQuery): RentExpense {
        return RentExpense(
                type = jq(expenseTypeInputSelector, jq_expenseRow).`val`() ?: "",
                monthlyCost = jq(expenseCostInputSelector, jq_expenseRow).`val`()?.toDoubleOrNull() ?: Double.NaN,
                isRemovable = jq_expenseRow.attr(expenseRemovabilityAttribute)?.toBooleanOrNull() ?: true,
                isRenamable = jq_expenseRow.attr(expenseRenamabilityAttribute)?.toBooleanOrNull() ?: true,
                originalDOMElement = jq_expenseRow
        )
    }


    ///// CALCULATION /////

    /**
     * Trows away and recalculates the total income and each roommate's proportion of that, then displays the
     * proportions in the roommate input table
     */
    fun recalculateRoommateProportions(roommates: RentRoommates) {
        val totalIncome = roommates.totalIncome
        roommates.allRoommates.forEach { this.recalculateRoommateProportion(it, totalIncome) }
        this.displayRoommateProportions(roommates)
    }


    /**
     * Throws away and recalculates each roommate's proportion of the total income
     */
    fun recalculateRoommateProportion(roommate: RentRoommate, totalIncome: Double) {
        roommate.proportion = roommate.monthlyIncome / totalIncome
    }


    /**
     * Displays each roommate's proportions of the total income in their input row
     */
    fun displayRoommateProportions(roommates: RentRoommates) {
        roommates.allRoommates.forEach(this::displayRoommateProportion)
    }


    /**
     * Displays a single roommate's proportions of the total income in their input row
     */
    fun displayRoommateProportion(roommate: RentRoommate) {
        roommate.originalDOMElement?.let { originalDOMElement ->
            jq(roommateProportionSelector, originalDOMElement).html("${((roommate.proportion ?: 0.0) * 100).toFixed(2)}%")
        }
    }


    ///// INPUT TABLES /////

    /**
     * Regenerates all input tables
     */
    fun regenerateInputTables() {
        this.regenerateRoommateInputTable()
        this.regenerateExpenseInputTable()
    }


    /**
     * The generalized form of [regenerateExpenseInputTable] and [regenerateRoommateInputTable]
     */
    private fun <Resource> regenerateInputTable(rowSelector: String,
                                                allResources: List<Resource>,
                                                configureExistingInput: (existingInput: Element, resource: Resource) -> Unit,
                                                insertNewInput: (index: Int?, newResource: Resource) -> Unit) {
        val existingInputs = jq(rowSelector).asList()
        val offset = existingInputs.size
        val newResources = allResources.subList(fromIndex = offset, toIndex = allResources.size)

        existingInputs.zip(allResources).forEach { (existingInput, expense) ->
            configureExistingInput(existingInput, expense)
        }

        newResources.forEachIndexed { index, newExpense ->
            insertNewInput(index + offset, newExpense)
        }
    }


    /**
     * Re-generates the roommate input table based on the currently-stored state
     */
    private fun regenerateExpenseInputTable() {
        regenerateInputTable(expenseInputRowSelector, state.expenses.allExpenses,
                             { existingExpenseInput, expense ->
                                 configureExistingExpenseInputRow(existingExpenseInput,
                                                                  expense)
                             }) { explicitIndex, expense -> insertNewExpenseInputRow(explicitIndex, expense) }
    }


    /**
     * Given a roommate row on the page and raw roommate data, this reconfigures the existing row to reflect the
     * given roommate data
     */
    private fun configureExistingExpenseInputRow(existingExpenseInput: Element, expense: RentExpense) {
        val jq_existingExpenseInput = jq(existingExpenseInput)

        expense.originalDOMElement = jq_existingExpenseInput
        jq(expenseTypeInputSelector, existingExpenseInput).`val`(expense.type)
        jq(expenseCostInputSelector, existingExpenseInput).`val`(expense.monthlyCost)

        jq_existingExpenseInput.attr(expenseRenamabilityAttribute, expense.isRenamable)
        jq_existingExpenseInput.attr(expenseRemovabilityAttribute, expense.isRemovable)
    }


    /**
     * Re-generates the roommate input table based on the currently-stored state
     */
    private fun regenerateRoommateInputTable() {
        regenerateInputTable(roommateInputRowSelector, state.roommates.allRoommates, ::configureExistingRoommateInputRow, ::insertNewRoommateInputRow)
    }


    /**
     * Given a roommate row on the page and raw roommate data, this reconfigures the existing row to reflect the
     * given roommate data
     */
    private fun configureExistingRoommateInputRow(existingRoommateInputTableRow: Element, roommate: RentRoommate) {
        val jq_existingRoommateInputTableRow = jq(existingRoommateInputTableRow)

        roommate.originalDOMElement = jq_existingRoommateInputTableRow
        jq(roommateNameInputSelector, existingRoommateInputTableRow).`val`(roommate.name)
        jq(roommateIncomeInputSelector, existingRoommateInputTableRow).`val`(roommate.monthlyIncome)

        this.displayRoommateProportion(roommate)

        jq_existingRoommateInputTableRow.attr(roommateRenamabilityAttribute, roommate.isRenamable)
        jq_existingRoommateInputTableRow.attr(roommateRemovabilityAttribute, roommate.isRemovable)
    }


    ///// ADDING ROWS /////

    /**
     * Handles the user's click of the "Add an expense" button
     */
    fun didPressNewExpenseButton(event: Event) {
        this.addNewExpense(event = event,
                           newExpense = RentExpense.defaultNewExpense)
    }


    /**
     * Adds a new expense to the calculator
     */
    @Suppress("UNUSED_PARAMETER")
    fun addNewExpense(newExpense: RentExpense, event: Event? = null) {
        state = state.addingNewExpense(newExpense)
    }


    /**
     * Inserts a new expense input row for the given expense
     *
     * @param explicitIndex [ optional ] The expense's index. If not provided, it is assumed it will be equal to the
     *                      number of expenses that currently have input rows
     * @param expense       The expense whose data will pre-populate the input row
     */
    fun insertNewExpenseInputRow(explicitIndex: Int? = null, expense: RentExpense) {
        val expenseInputHtml = buildExpenseInputRow(index = explicitIndex ?: numberOfExpensesWithInputRows(),
                                                    expense = expense)
        expense.originalDOMElement = jq(addAnExpenseRowSelector).before(expenseInputHtml).prev()
    }


    /**
     * Builds a new expense input row by using the given expense, assuming the given index. This does not add it to the
     * page, but just creates an HTML string representing an element that is ready to be inserted into the page.
     */
    fun buildExpenseInputRow(index: Int, expense: RentExpense): String {
        return buildExpenseInputRow(index = index,
                                    type = expense.type,
                                    cost = expense.monthlyCost,
                                    isRenamable = expense.isRenamable,
                                    isRemovable = expense.isRemovable)
    }


    /**
     * Builds a string representation of a table row representing an expense input. If the type and cost are given,
     * they are pre-filled.
     *
     * @param index       The position of the row in the list of roommates
     * @param type        The type of expense; its name
     * @param cost        The monthly cost of the expense
     * @param isRenamable Indicates whether the type should be editable
     * @param isRemovable Indicates whether the row should be removable
     */
    fun buildExpenseInputRow(index: Int, type: String?, cost: Double?, isRenamable: Boolean, isRemovable: Boolean): String {

        val expenseNumber = index + 1

        var row = "<tr" +
                " data-$expenseInputRowDataName=\"$expenseNumber\"" +
                " $expenseRenamabilityAttribute='$isRenamable'" +
                " $expenseRemovabilityAttribute='$isRemovable'" +
                ">"
        row +=
                "<th${(if (isRenamable) " class=\"plain\"" else "")}>" +
                        "<input" +
                        " type=\"${if (isRenamable) "text" else "hidden"}\"" +
                        " class=\"$expenseTypeInputClassName   text-right\"" +
                        (if (type.isNeitherNullNorEmpty()) " value=\"$type\"" else "") +
                        " size=\"8\"" +
                        " tabindex=0" +
                        " placeholder=\"$expenseTypePlaceholderText\"" +
                        "/>" +
                        (if (!isRenamable && type.isNeitherNullNorEmpty()) type else "") +
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

        if (isRemovable) {
            row +=
                    "<td" +
                            " class=\"$removeAnExpenseButtonClassName color-danger\"" +
                            " tabindex=\"0\">" +
                            "<i class=\"fa fa-minus-circle\"></i>" +
                            "</td>"
        }
        return row + "</tr>"
    }


    /**
     * Handles the user's click of the "Add a roommate" button
     */
    fun didPressNewRoommateButton(event: Event) {
        return this.addNewRoommate(event = event,
                                   newRoommate = RentRoommate.defaultNewRoommate)
    }


    /**
     * Adds a new roommate to the calculator
     */
    @Suppress("UNUSED_PARAMETER")
    fun addNewRoommate(newRoommate: RentRoommate, event: Event? = null) {
        state = state.addingNewRoommate(newRoommate)
    }


    /**
     * Inserts a new roommate input row for the given roommate
     *
     * @param explicitIndex [ optional ] The roommate's index. If not provided, it is assumed it will be equal to the
     *                      number of roommates who currently have input rows
     * @param roommate      The roommate whose data will pre-populate the input row
     */
    fun insertNewRoommateInputRow(explicitIndex: Int? = null, roommate: RentRoommate) {
        val roommateInputHtml = buildRoommateInputRow(index = explicitIndex ?: numberOfRoommatesWithInputRows(),
                                                      roommate = roommate)
        roommate.originalDOMElement = jq(addARoommateRowSelector).before(roommateInputHtml).prev()
    }


    /**
     * Builds a roommate input row using the given roommate (which exists at the given index)
     *
     * @param index    The index of the given roommate
     * @param roommate The roommate who needs an input row
     */
    fun buildRoommateInputRow(index: Int, roommate: RentRoommate): String {
        return buildRoommateInputRow(index = index,
                                     name = roommate.name,
                                     income = roommate.monthlyIncome,
                                     isRenamable = roommate.isRenamable,
                                     isRemovable = roommate.isRemovable)
    }


    /**
     * Builds a string representation of a table row representing an roommate input. If the name and income are
     * given, they are pre-filled.
     *
     * @param index       The position of the row in the list of roommates
     * @param name        The name of the roommate
     * @param income      The monthly income of the roommate
     * @param isRenamable Indicates whether the row should be renamable (currently unused)
     * @param isRemovable Indicates whether the row should be removable
     */
    fun buildRoommateInputRow(index: Int, name: String?, income: Double?, isRenamable: Boolean, isRemovable: Boolean): String  {

        val roommateNumber = index + 1

        var row = "<tr" +
                " data-$roommateInputRowDataName='$roommateNumber'" +
                " $roommateRenamabilityAttribute='$isRenamable'" +
                " $roommateRemovabilityAttribute='$isRemovable'" +
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

        if (isRemovable) {
            row +=
                    "<td class=\"$removeARoommateButtonClassName color-danger\"" +
                            " tabindex=\"0\">" +
                            "<i class=\"fa fa-minus-circle\"></i>" +
                            "</td>"
        }
        return row + "</tr>"
    }


    /**
     * The number of roommates that are in this app's current state.
     * This is not necessarily how many appear on the page, depending on when this is called.
     */
    fun numberOfRoommates(): Int {
        return state.roommates.allRoommates.size
    }


    /**
     * The number of roommates that appear on the page.
     * This is not necessarily how many are in the app's state, depending on when this is called.
     */
    fun numberOfRoommatesWithInputRows(): Int {
        return jq(roommateInputRowSelector).length
    }


    /**
     * The number of expenses that are in this app's current state.
     * This is not necessarily how many appear on the page, depending on when this is called.
     */
    fun numberOfExpenses(): Int {
        return state.expenses.allExpenses.size
    }


    /**
     * The number of expenses that appear on the page.
     * This is not necessarily how many are in the app's state, depending on when this is called.
     */
    fun numberOfExpensesWithInputRows(): Int {
        return jq(expenseInputRowSelector).length
    }


    ///// REMOVING ROWS /////

    /**
     * Removes the expense input row referenced in the given event
     */
    fun didPressRemoveExpenseButton(event: Event) {
        val expenseRow = event.currentTarget?.parentElement
        expenseRow?.remove()
        reloadStateFromPage()
    }


    /**
     * Removes the roommate input row referenced in the given event
     */
    fun didPressRemoveRoommateButton(event: Event) {
        val roommateRow = event.currentTarget?.parentElement
        roommateRow?.remove()
        reloadStateFromPage()
    }


    ///// OUTPUT /////

    /**
     * Using the given roommates and expenses, this throws away and regenerates the Results output table
     */
    fun fillOutResults(roommates: RentRoommates, expenses: RentExpenses) {
        this.fillOutResultsTableHead(roommates, expenses)
        this.fillOutResultsTableBody(roommates, expenses)
    }


    /**
     * Using the given roommates and expenses, generates and outputs the table column heads to the Results
     * output table
     */
    @Suppress("UNUSED_PARAMETER")
    fun fillOutResultsTableHead(roommates: RentRoommates, expenses: RentExpenses) {
        val jq_resultsTableHeadRow = jq(resultsTableHeadRowSelector)
        jq_resultsTableHeadRow.empty()
        jq_resultsTableHeadRow.append("<th class=\"text-center\">$roommateNameColumnTitle</th>")
        expenses.allExpenses.forEachIndexed { index, expense -> this.appendExpenseColumnHeader(jq_resultsTableHeadRow, expense, index) }
        jq_resultsTableHeadRow.append("<th class=\"text-center\">$totalColumnTitle</th>")
    }


    /**
     * Using the given expense, generates and outputs the table column head to the Results output table
     */
    fun appendExpenseColumnHeader(jq_resultsTableHeadRow: JQuery, expense: RentExpense, index: Int) {
        jq_resultsTableHeadRow.append("<th class='hide-small'>${expense.nonEmptyType(index = index)}</th>")
    }


    /**
     * Using the given roommates and expenses, generates and outputs the roommate table rows to the Results
     * output table
     */
    fun fillOutResultsTableBody(roommates: RentRoommates, expenses: RentExpenses) {
        val jq_resultsTableBody = jq(resultsTableBodySelector)
        jq_resultsTableBody.empty()
        roommates.allRoommates.forEach { this.appendResultRow(jq_resultsTableBody, it, expenses) }
    }


    /**
     * Using the given roommate and expenses, generates and outputs the table row to the Results output table
     */
    fun appendResultRow(jq_resultsTableBody: JQuery, roommate: RentRoommate, expenses: RentExpenses) {
        jq_resultsTableBody.append(this.buildResultRow(rowIndex = jq(resultRowSelector).length,
                                                       roommate = roommate,
                                                       expenses = expenses))
    }


    /**
     * Builds a string representation of a Results table row.
     */
    fun buildResultRow(rowIndex: Int, roommate: RentRoommate, expenses: RentExpenses): String {
        val roommateName = roommate.nonEmptyName(index = rowIndex)
        var row = "<tr data-$roommateResultRowDataName='$roommateName'><th>$roommateName</th>"
        row += expenses.allExpenses.joinToString(
                separator = "",
                transform = { "<td class='hide-small'>${roommateContribution(roommate, it).dollarFormat}</td>" })
        row += "<th>${roommateTotalContributions(roommate, totalExpenses = expenses.totalExpenses).dollarFormat}</th>"
        return "$row</tr>"
    }


    /**
     * Finds the amount that the given roommate contributes to the given expense
     */
    fun roommateContribution(roommate: RentRoommate, expense: RentExpense): Double
            = (roommate.proportion ?: 0.0) * expense.monthlyCost


    /**
     * Finds the total amount that the given roommate will contribute
     */
    fun roommateTotalContributions(roommate: RentRoommate, totalExpenses: Double): Double
            = (roommate.proportion ?: 0.0) * totalExpenses


    ///// CHECKING /////

    fun notifyOfProblems(roommates: RentRoommates, expenses: RentExpenses) {
        val roommatesWhoOweTooMuch = roommates.allRoommates.mapIndexed { index, roommate ->  Pair(index, roommate) }.filter { (_, roommate) ->
            val roommateTotalContributions = roommateTotalContributions(roommate, expenses.totalExpenses)
            return@filter roommateTotalContributions > roommate.monthlyIncome
        }

        roommatesWhoOweTooMuch.forEach { (index, roommate) ->
            jq("[data-$roommateResultRowDataName='${roommate.nonEmptyName(index = index) }']")
                    .addClass(roommateWhoOwesTooMuchClassName)
                    .attr("title", "This roommate owes too much!")
        }
    }
}



fun main(args: Array<String>) {
    jq({
        RentSplit().onReady()
    })
}
