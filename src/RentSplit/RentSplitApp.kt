/*
 *  Rent-Split.kt
 *  Made for Rent Split 2 by Ben Leggiero, starting 2017-11-23
 *
 *  Written in Kotlin/JS 1.2
 *
 *  Copyright Blue Husky Studios 2017 BH-1-PS
 */

@file:Suppress(
        "LocalVariableName",
        "NOTHING_TO_INLINE",
        "MemberVisibilityCanPrivate", // FIXME: Fix with #26
        "MemberVisibilityCanBePrivate" // FIXME: Fix with #26
)

package RentSplit

import RentSplit.GooGlUrlShortener.*
import RentSplit.GooGlUrlShortener.ShortenResponse.*
import RentSplit.RentExpenses.Companion.allRoommates
import RentSplit.SerializationPurpose.*
import RentSplit.UserConsent.*
import jQueryInterface.*
import org.bh.tools.async.*
import org.bh.tools.base.collections.extensions.*
import org.bh.tools.base.func.*
import org.bh.tools.base.struct.*
import org.bh.tools.base.struct.FiniteAmountSummary.*
import org.bh.tools.base.struct.Ternary.*
import org.bh.tools.ui.touch.*
import org.bh.tools.ui.widget.js.*
import org.w3c.dom.*
import org.w3c.dom.events.*
import org.w3c.dom.url.*
import kotlin.browser.*


/**
 * @author Ben Leggiero
 * @since 2017-11-23
 */
class RentSplitApp {

    ///// SETUP /////

    /**
     * The overall state of the app. If this is set, the app auto-refreshes
     */
    var state: RentSplitState by observing(RentSplitState.load(), didSet = { _, _ ->
        this.reloadPageFromState()
        state.save()
    })

    var expenseFilterChecklistController: JSTernaryCheckboxTreeController? by observing(null as JSTernaryCheckboxTreeController?, didSet = { oldValue, newValue ->
        oldValue?.deinit()
        newValue?.onStateChange { _, newState ->
            applicableRoommateCheckboxesDidChange(newState)
        }
        applicableRoommateCheckboxesDidChange(newValue?.state ?: indeterminate)
    })


    /**
     * Called when the page has loaded completely and is ready to be manipulated by JavaScript
     */
    fun onReady() {
        this.preLoadConfigurations()
        this.reloadPageFromState(shouldReRegisterListeners = false)
        this.regenerateInputTables()
        this.registerListeners()
        this.recalculateRentSplit()
        this.state.save()
        this.presentToUser()
    }


    /**
     * Configures the page _before_ any state is loaded
     */
    fun preLoadConfigurations() {
        jq("html").addClass(if (TouchBasics.isTouchSupported()) "touch-supported" else "touch-not-supported")
    }


    /**
     * Reloads all objects on the page by reading the state variable
     */
    fun reloadPageFromState(shouldReRegisterListeners: Boolean = true) {
        this.replaceShareUrlWithPromptToGenerateANewOne()
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
            jq(localStorageWarning).addClass("hidden")
        }
        else {
            jq(localStorageWarning).removeClass("hidden")
        }
    }


    /**
     * De- and re-registers every listener
     */
    fun reRegisterListeners() {
        jq(anyInput).off()
        this.registerListeners()
    }


    fun reRegisterFilterDialogListeners() {
        jq(anyInput, expenseFilterDialog).off()
        registerFilterDialogListeners()
    }


    /**
     * Registers every listener
     */
    fun registerListeners() {
        jq(anyInputField).change(::anyInputFieldDidChange)
        jq(addAnExpenseButton).click(::didPressNewExpenseButton)
        jq(removeAnExpenseButton).click(::didPressRemoveExpenseButton)
        jq(addARoommateButton).click(::didPressNewRoommateButton)
        jq(removeARoommateButton).click(::didPressRemoveRoommateButton)

        jq(localStorageWarningExplicitConsentButton).click(::didPressLocalStorageWarningExplicitConsentButton)
        jq(localStorageWarningExplicitRefusalButton).click(::didPressLocalStorageWarningExplicitRefusalButton)

        jq(copyStateUrlButton).click(::didPressShareButton)

        registerFilterDialogListeners()
    }


    fun registerFilterDialogListeners() {
        jq(expenseFilterButton).click(::didPressFilterButton)
        jq(expenseFilterDialogCancelButton).click(::didPressFilterDialogCancelButton)
        jq(expenseFilterDialogOkButton).click(::didPressFilterDialogOkButton)
    }


    /**
     * Called immediately after any input field changes
     */
    @Suppress("UNUSED_PARAMETER")
    fun anyInputFieldDidChange(event: Event?) {
        reloadStateFromPage()
        // implicit recalculateRentSplit()
    }


    /**
     * Called when the user has pressed the "You can store stuff on my machine" button
     */
    @Suppress("UNUSED_PARAMETER")
    fun didPressLocalStorageWarningExplicitConsentButton(event: Event) {
        state = state.copy(localDataPreferences = state.localDataPreferences.copy(localStorageConsent = explicitConsent))
    }


    /**
     * Called when the user has pressed the "I don't want you to store stuff on my machine" button
     */
    @Suppress("UNUSED_PARAMETER")
    fun didPressLocalStorageWarningExplicitRefusalButton(event: Event) {
        state = state.copy(localDataPreferences = state.localDataPreferences.copy(localStorageConsent = explicitRefusal))
    }


    @Suppress("UNUSED_PARAMETER")
    fun didPressShareButton(event: Event) {
        userWantsShareUrl()
    }


    fun didPressFilterButton(event: Event) {
        showExpenseDialog(expense = expenseForFilterButton(event.currentTarget as? Element
                                                                   ?: return Unit.alsoLog("No element targeted in the filter button click event"))
                ?: return Unit.alsoLog("No expense matching ID in filter button"))
    }


    fun applicableRoommateCheckboxesDidChange(newValue: Ternary) {
        jq(expenseFilterDialogOkButton).disabled(newValue == `false`)
    }


    @Suppress("UNUSED_PARAMETER")
    fun didPressFilterDialogCancelButton(event: Event) {
        expenseFilterDialogElement?.close()
    }


    @Suppress("UNUSED_PARAMETER")
    fun didPressFilterDialogOkButton(event: Event) {
        val expense = expenseInFilterDialog()
        if (expense != null) {
            state = state.setting(expense.copy(applicableRoommateIds = applicableRoommateIdsInFilterDialog()))
        }
        else {
            log("No expense found in filter dialog!")
        }
        expenseFilterDialogElement?.close()
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
        val resultsTable = state.resultsTableModel()
        RentSplitViewGenerator.fillOutResults(resultsTable)
        this.notifyOfProblems(resultsTable)
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
        return this.roommateRowsToRoommates(roommateInputRow.jq)
    }


    /**
     * Finds all expenses in the DOM, parses them into RentExpense objects, and returns them.
     */
    fun fetchExpenses(): RentExpenses {
        return this.expenseRowsToExpenses(expenseInputRow.jq)
    }


    /**
     * Takes in a jQuery result containing roommate input rows, parses each to a RentRoommate, and returns the
     * results in an array
     */
    fun roommateRowsToRoommates(jq_roommateRows: JQuery): RentRoommates {
        return RentRoommates(jq_roommateRows.mapNotNull { index, roommateRow -> this.roommateRowToRoommate(index, jq(roommateRow)) }.asList())
    }


    /**
     * Takes in a jQuery result containing expense input rows, parses each to a RentExpense, and returns the
     * results in an array
     */
    fun expenseRowsToExpenses(jq_expenseRows: JQuery): RentExpenses {
        return RentExpenses(jq_expenseRows.mapNotNull { index, expenseRow -> this.expenseRowToExpense(index, jq(expenseRow)) }.asList())
    }


    /**
     * Takes in a jQuery result containing a single roommate input row, parses it to a RentRoommate, and returns that
     */
    @Suppress("UNUSED_PARAMETER")
    fun roommateRowToRoommate(index: Int, jq_roommateRow: JQuery): RentRoommate? {
        return RentRoommate(
                id = jq(jq_roommateRow).data(resourceId.dataName)?.toString() ?: return null.alsoLog("No ID on page!"),
                name = jq(roommateNameInput, jq_roommateRow).`val`() ?: "",
                monthlyIncome = jq(roommateIncomeInput, jq_roommateRow).`val`()?.toDoubleOrNull() ?: return null.alsoLog("No monthly income on page!"),
                isRemovable = jq_roommateRow.attr(roommateRemovability.htmlAttributeName)?.toBooleanOrNull() ?: true,
                isRenamable = jq_roommateRow.attr(roommateRenamability.htmlAttributeName)?.toBooleanOrNull() ?: true,
                originalDOMElement = jq_roommateRow
        )
    }


    /**
     * Takes in a jQuery result containing a single expense input row, parses it to a RentExpense, and returns that
     */
    @Suppress("UNUSED_PARAMETER")
    fun expenseRowToExpense(index: Int, jq_expenseRow: JQuery): RentExpense? {
        return RentExpense(
                id = jq_expenseRow.data(resourceId.dataName)?.toString() ?: return null.alsoLog("No ID on page!"),
                type = jq(expenseTypeInput, jq_expenseRow).`val`() ?: "",
                applicableRoommateIds = (jq_expenseRow.data(expenseApplicableRoommates.dataName)?.toString())?.let(::expenseApplicableRoommatesFromString) ?: allRoommates,
                monthlyCost = jq(expenseCostInput, jq_expenseRow).`val`()?.toDoubleOrNull() ?: return null.alsoLog("No monthly cost on page!"),
                isRemovable = jq_expenseRow.attr(expenseRemovability.htmlAttributeName)?.toBooleanOrNull() ?: true,
                isRenamable = jq_expenseRow.attr(expenseRenamability.htmlAttributeName)?.toBooleanOrNull() ?: true,
                originalDOMElement = jq_expenseRow
        )
    }


    fun expenseApplicableRoommatesFromString(expenseApplicableRoommatesString: String): Set<ID> =
            expenseApplicableRoommatesString.toSetOfIds()


    fun expenseForFilterButton(filterButton: Element): RentExpense?
            = jq(filterButton)
            .data(expenseFilterButtonExpenseRelation.dataName)
            ?.let { "$it" }
            ?.let(this::expenseForId)


    fun expenseForId(id: ID) = this.state.expenses.expenseForId(id)


    fun expenseInFilterDialog(): RentExpense? =
            expenseFilterDialogElement
                ?.let { jq(it) }
                ?.data(expenseFilterDialogCurrentExpense.dataName)
                ?.let { expenseForId("$it") }


    fun applicableRoommateIdsInFilterDialog(ignoreEveryoneCheckbox: Boolean = false): Set<ID>? {
        val (summary, set) = summarizeFilterDialogApplicableRoommates(ignoreEveryoneCheckbox = ignoreEveryoneCheckbox)
        return when (summary) {
            is all -> RentExpenses.allRoommates
            is some, is none -> set
        }
    }


    fun summarizeFilterDialogApplicableRoommates(ignoreEveryoneCheckbox: Boolean = false): Pair<FiniteAmountSummary<Int>, Set<ID>> {
        val allCheckboxes = jq(expenseFilterApplicableRoommateCheckbox)

        return if (!ignoreEveryoneCheckbox
                && jq(expenseFilterEveryoneCheckbox).checkedNotIndeterminate()) {
            Pair(all(allCheckboxes.length), emptySet())
        }
        else {
            allCheckboxes.map { _, element ->
                ("${jq(element).data(resourceId.dataName)}").let { id -> if (jq(element).checked()) id else null }
            }
                    .filterNotNull()
                    .let { checkedRoommateIds ->
                        Pair(when (checkedRoommateIds.count()) {
                                 0 -> none()
                                 state.roommates.allRoommates.count() -> all(allCheckboxes.length)
                                 else -> some(checkedRoommateIds.count(), maximumPossibleAmount = allCheckboxes.length)
                             }, checkedRoommateIds.toSet())
                    }
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
    private fun <Resource> regenerateInputTable(rowSelector: AnyCssSelector,
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
        regenerateInputTable(expenseInputRow, state.expenses.allExpenses,
                             { existingExpenseInput, expense ->
                                 configureExistingExpenseInputRow(existingExpenseInput,
                                                                  expense)
                             }) { explicitIndex, expense -> insertNewExpenseInputRow(explicitIndex, expense) }
    }


    /**
     * Given a roommate row on the page and raw roommate data, this reconfigures the existing row to reflect the
     * given roommate data
     */
    private fun configureExistingExpenseInputRow(existingExpenseInputRow: Element, expense: RentExpense) {
        val jq_existingExpenseInputRow = jq(existingExpenseInputRow)

        expense.originalDOMElement = jq_existingExpenseInputRow
        jq(expenseTypeInput, existingExpenseInputRow).`val`(expense.type)
        jq(expenseCostInput, existingExpenseInputRow).`val`(expense.monthlyCost)

        jq_existingExpenseInputRow.attr(expenseRenamability.htmlAttributeName, expense.isRenamable)
        jq_existingExpenseInputRow.attr(expenseRemovability.htmlAttributeName, expense.isRemovable)

        if (expense.applicableRoommateIds == null) {
            jq_existingExpenseInputRow.data(expenseApplicableRoommates.dataName, null)
            jq_existingExpenseInputRow.removeClass(expenseHasApplicableRoommates.className)
        }
        else {
            jq_existingExpenseInputRow.data(expenseApplicableRoommates.dataName, expense.applicableRoommateIds.toTypedArray())
            jq_existingExpenseInputRow.addClass(expenseHasApplicableRoommates.className)
        }
    }


    /**
     * Re-generates the roommate input table based on the currently-stored state
     */
    private fun regenerateRoommateInputTable() {
        regenerateInputTable(roommateInputRow, state.roommates.allRoommates, ::configureExistingRoommateInputRow, ::insertNewRoommateInputRow)
    }


    /**
     * Given a roommate row on the page and raw roommate data, this reconfigures the existing row to reflect the
     * given roommate data
     */
    private fun configureExistingRoommateInputRow(existingRoommateInputTableRow: Element, roommate: RentRoommate) {
        val jq_existingRoommateInputTableRow = jq(existingRoommateInputTableRow)

        roommate.originalDOMElement = jq_existingRoommateInputTableRow
        jq(roommateNameInput, existingRoommateInputTableRow).`val`(roommate.name)
        jq(roommateIncomeInput, existingRoommateInputTableRow).`val`(roommate.monthlyIncome)


        RentSplitViewGenerator.displayRoommateProportion(roommate.rentSplitResultRow(state))

        jq_existingRoommateInputTableRow.attr(roommateRenamability.htmlAttributeName, roommate.isRenamable)
        jq_existingRoommateInputTableRow.attr(roommateRemovability.htmlAttributeName, roommate.isRemovable)
    }


    fun reconfigureExpenseDialog(expense: RentExpense) {
        jq(expenseFilterDialog).data(expenseFilterDialogCurrentExpense.dataName, expense.id)
        jq(expenseFilterDialogExpenseName).text(expense.nonEmptyType.sanitizedForHtml())
        fillExpenseFilterApplicableRoommateList(expense = expense)

        reRegisterFilterDialogListeners()
    }


    fun fillExpenseFilterApplicableRoommateList(expense: RentExpense) {
        jq(expenseFilterApplicableRoommateChecklistItem).remove()
        jq(expenseFilterApplicableRoommateChecklist).append(buildExpenseFilterApplicableRoommateList(expense = expense))

        val everyoneCheckbox = jq(expenseFilterEveryoneCheckbox)[0] as? HTMLCheckboxElement ?: return
        val roommateCheckboxes = jq(expenseFilterApplicableRoommateCheckbox)
                .map { _, element -> element }
                .map { it as? HTMLCheckboxElement ?: return }

        expenseFilterChecklistController = JSTernaryCheckboxTreeController(everyoneCheckbox, roommateCheckboxes)
    }


    fun buildExpenseFilterApplicableRoommateList(expense: RentExpense) =
            state.roommates.allRoommates.reduceTo("") { htmlString, roommate ->
                return@reduceTo htmlString + buildExpenseFilterApplicableRoommateListItem(expense = expense, roommate = roommate)
            }


    fun buildExpenseFilterApplicableRoommateListItem(expense: RentExpense, roommate: RentRoommate) =
            "<li" +
                " class='checklist-item ${expenseFilterApplicableRoommateChecklistItem.className}'>" +
                "<label>" +
                    "<input" +
                        " ${resourceId.htmlAttributeName}='${roommate.id}'" +
                        " class='${expenseFilterApplicableRoommateCheckbox.className}'" +
                        " type='checkbox'" +
                        " ${if (expense.appliesTo(roommate)) "checked" else ""}" +
                    "/>" +
                    " ${roommate.nonEmptyName.sanitizedForHtml()}" +
                "</label>" +
            "</li>"


    fun showExpenseDialog(expense: RentExpense) {
        reconfigureExpenseDialog(expense = expense)
        expenseFilterDialogElement?.showModal()
    }


    val expenseFilterDialogElement: HTMLDialogElement? get() = (jq(expenseFilterDialog)[0] as? HTMLDialogElement) ?: null.alsoLog("Could not find dialog element!")


    ///// ADDING ROWS /////

    /**
     * Handles the user's click of the "Add an expense" button
     */
    fun didPressNewExpenseButton(event: Event) {
        this.addNewExpense(event = event,
                           newExpense = RentExpense.generateNewExpense())
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
        val expenseInputHtml = buildExpenseInputRow(index = explicitIndex ?: numberOfExpensesCurrentlyOnPage(),
                                                    expense = expense)
        expense.originalDOMElement = jq(addAnExpenseRow).before(expenseInputHtml).prev()
    }


    /**
     * Builds a new expense input row by using the given expense, assuming the given index. This does not add it to the
     * page, but just creates an HTML string representing an element that is ready to be inserted into the page.
     */
    fun buildExpenseInputRow(index: Int, expense: RentExpense): String {
        return buildExpenseInputRow(index = index,
                                    id = expense.id,
                                    type = expense.type,
                                    cost = expense.monthlyCost,
                                    applicableRoommates = expense.applicableRoommateIds,
                                    isRenamable = expense.isRenamable,
                                    isRemovable = expense.isRemovable)
    }


    /**
     * Builds a string representation of a table row representing an expense input. If the type and cost are given,
     * they are pre-filled.
     *
     * @param index               The position of the row in the list of roommates
     * @param id                  The ID of this expense
     * @param type                The type of expense; its name
     * @param cost                The monthly cost of the expense
     * @param applicableRoommates The UUIDs of the roommates that this applies to. `null` signifies all.
     * @param isRenamable         Indicates whether the type should be editable
     * @param isRemovable         Indicates whether the row should be removable
     */
    fun buildExpenseInputRow(index: Int,
                             id: ID,
                             type: String?,
                             cost: Double?,
                             applicableRoommates: Set<ID>?,
                             isRenamable: Boolean,
                             isRemovable: Boolean): String {

        val expenseNumber = index + 1

        var row = "<tr" +
                " class='hides-something-until-hover'" +
                " ${resourceId.htmlAttributeName}='$id'" +
                " data-${expenseInputRow.dataName}=\"$expenseNumber\"" +
                " ${expenseRenamability.htmlAttributeName}='$isRenamable'" +
                " ${expenseRemovability.htmlAttributeName}='$isRemovable'" +
                (if (applicableRoommates == null) "" else " ${expenseApplicableRoommates.htmlAttributeName}='${applicableRoommates.serializedSetOfIds()}'") +
                ">"
        row +=
                "<th class=\"${(if (isRenamable) "plain   " else "")}has-floating-button\">" +
                        "<button class='${expenseFilterButton.className}   floats-to-left   hidden-until-parent-hover' ${expenseFilterButtonExpenseRelation.htmlAttributeName}='$id'><i class='fa fa-filter'></i></button>" +
                        "<input" +
                            " type=\"${if (isRenamable) "text" else "hidden"}\"" +
                            " class=\"${expenseTypeInput.className}   text-right\"" +
                            (if (type.isNeitherNullNorEmpty()) " value=\"$type\"" else "") +
                            " size=\"8\"" +
                            " tabindex=0" +
                            " placeholder=\"${RentExpense.numberedType(id)}\"" +
                        "/>" +
                        (if (!isRenamable && type.isNeitherNullNorEmpty()) type else "") +
                        "</th>"

        row +=
                "<td class=\"plain vert-bottom\">" +
                        "<input" +
                        " type=\"number\"" +
                        (if (type.isNeitherNullNorEmpty()) " id=\"total-$type\"" else "") +
                        " class=\"${expenseCostInput.className}\"" +
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
                            " class=\"${removeAnExpenseButton.className} color-danger\"" +
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
                                   newRoommate = RentRoommate.generateNewRoommate())
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
        val roommateInputHtml = buildRoommateInputRow(index = explicitIndex ?: numberOfRoommatesCurrentlyOnPage(),
                                                      roommate = roommate)
        roommate.originalDOMElement = jq(addARoommateRow).before(roommateInputHtml).prev()
    }


    /**
     * Builds a roommate input row using the given roommate (which exists at the given index)
     *
     * @param index    The index of the given roommate
     * @param roommate The roommate who needs an input row
     */
    fun buildRoommateInputRow(index: Int, roommate: RentRoommate): String {
        return buildRoommateInputRow(index = index,
                                     id = roommate.id,
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
     * @param id          The ID of this roommate
     * @param name        The name of the roommate
     * @param income      The monthly income of the roommate
     * @param isRenamable Indicates whether the row should be renamable (currently unused)
     * @param isRemovable Indicates whether the row should be removable
     */
    fun buildRoommateInputRow(index: Int,
                              id: ID,
                              name: String?,
                              income: Double?,
                              isRenamable: Boolean,
                              isRemovable: Boolean): String  {

        val roommateNumber = index + 1

        var row = "<tr" +
                " ${resourceId.htmlAttributeName}='$id'" +
                " data-${roommateInputRow.dataName}='$roommateNumber'" +
                " ${roommateRenamability.htmlAttributeName}='$isRenamable'" +
                " ${roommateRemovability.htmlAttributeName}='$isRemovable'" +
                ">"
        row +=
                "<th class=\"plain\">" +
                        "<input" +
                        " type=\"text\"" +
                        " class=\"${roommateNameInput.className}   text-right\"" +
                        (if (name.isNeitherNullNorEmpty()) " value=\"" + name + "\"" else "") +
                        " size=\"8\"" +
                        " tabindex=0" +
                        " placeholder=\"${RentRoommate.numberedName(id)}\"" +
                        "/>" +
                        "</th>"

        row +=
                "<td class=\"plain vert-bottom\">" +
                        "<input" +
                        " type=\"number\"" +
                        " class=\"${roommateIncomeInput.className}\"" +
                        " required" +
                        " value=\"${income ?: defaultRoommateIncome}\"" +
                        " step=\"100\"" +
                        " size=\"8\"" +
                        " tabindex=0" +
                        " placeholder=\"$roommateIncomePlaceholderText\"" +
                        "/>" +
                        "</td>"

        row += "<td class=\"${roommateProportion.className}\">Calculating</td>"

        if (isRemovable) {
            row +=
                    "<td class=\"${removeARoommateButton.className} color-danger\"" +
                            " tabindex=\"0\">" +
                            "<i class=\"fa fa-minus-circle\"></i>" +
                            "</td>"
        }
        return row + "</tr>"
    }


    /**
     * The number of roommates that appear on the page.
     * This is not necessarily how many are in the app's state, depending on when this is called.
     */
    fun numberOfRoommatesCurrentlyOnPage(): Int {
        return jq(roommateInputRow).length
    }


    /**
     * The number of expenses that appear on the page.
     * This is not necessarily how many are in the app's state, depending on when this is called.
     */
    fun numberOfExpensesCurrentlyOnPage(): Int {
        return jq(expenseInputRow).length
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


    ///// CHECKING /////

    fun notifyOfProblems(table: RentSplitResultTable) {
        val roommatesWhoOweTooMuch = table.rows
                .filter { row -> row.totalContributions > row.representedRoommate.monthlyIncome }

        roommatesWhoOweTooMuch.forEach { row ->
            val name = row.representedRoommate.nonEmptyName.sanitizedForHtml()
            jq("[data-${roommateResultRow.dataName}='$name']")
                    .addClass(roommateWhoOwesTooMuch.className)
                    .attr("title", "$name owes ${row.totalContributions - row.representedRoommate.monthlyIncome} too much!")
        }
    }


    ///// SHARING /////

    fun userWantsShareUrl() {
        alertUserOfUrlGenerationStart()
        generateShareUrl { response, guaranteedUrl ->
            placeShareUrlOnPage(guaranteedUrl)
            copyShareUrl()
            when (response) {
                is success -> {
                    alertUserOfSuccessfulGenerationOfShareUrl()
                    log("Shortened URL!")
                }
                is error -> {
                    alertUserOfFailureToGenerateShareUrl(statusText = "⚠️ Could not shorten URL")
                    log(response.allErrors.toTypedArray())
                    log(response.message.nonEmptyOrNull() ?: response.statusText ?: "No message")
                }
                is unknownError -> {
                    alertUserOfFailureToGenerateShareUrl(statusText = "⚠️ Could not shorten URL")
                    log(response.httpResponse?.text?.nonEmptyOrNull() ?: "No response text")
                    log(response.statusText?.nonEmptyOrNull() ?: "No message")
                }
            }
        }
    }


    private fun generateShareUrl(callback: (ShortenResponse, URL) -> Unit) {
        val jsonStringForSharing = state.serialized(forSharing)
        val actualProtocol = window.location.protocol

        // If we're debugging this straight from a file, don't send that to the shortener; send the live site URL
        val sharingUrlPrefix = when (actualProtocol) {
            "file:" -> "https://rent-split.bhstudios.org/?$generalStateSerializedName="
            else -> "${window.location.protocol}//${window.location.host}${window.location.pathname}?$generalStateSerializedName="
        }

        val sharingUrlString = sharingUrlPrefix + jsonStringForSharing

        val fullLengthSharingUrl = URL(sharingUrlString)
        GooGlUrlShortener(gooGlAccessToken).shorten(fullLengthSharingUrl) { response ->
            callback(response, (response as? success)?.shortUrl ?: fullLengthSharingUrl)
        }
    }


    private fun copyShareUrl() =
            try {
                jq(stateUrlField).copyToClipboardOrThrow()
                jq(copyStateUrlButton).addClass(justCopiedAlerting)
                delay(3) {
                    jq(copyStateUrlButton).removeClass(justCopiedAlerting)
                }
            }
            catch (error: Throwable) {
                log("Failed to copy state URL!")
                log(error)
            }


    private fun placeShareUrlOnPage(url: URL) {
        jq(stateUrlField).`val`(url.toString())
    }


    private fun alertUserOfUrlGenerationStart() {
        shareUrlErrorText = "Shortening…"
        showUrlStatusNow()
    }


    fun hideUrlStatusSoon() {
        delay(3) {
            hideUrlStatusNow()
        }
    }


    private fun hideUrlStatusNow() {
        shareUrlHolder.jq.removeClass(showStatus)
    }


    private fun showUrlStatusNow() {
        shareUrlHolder.jq.addClass(showStatus)
    }


    private var shareUrlErrorText: String?
        get() = jq(shareUrlHolder).data(stateUrlStatus)?.toString()
        set(value) {
            jq(shareUrlHolder)
                    .data(stateUrlStatus, value)
                    .attr(stateUrlStatus.htmlAttributeName, value)
        }


    private fun alertUserOfSuccessfulGenerationOfShareUrl() {
        shareUrlErrorText = "Shortened!"
        showUrlStatusNow()
        hideUrlStatusSoon()
    }


    private fun alertUserOfFailureToGenerateShareUrl(statusText: String) {
        shareUrlErrorText = statusText
        showUrlStatusNow()
        hideUrlStatusSoon()
    }


    private fun replaceShareUrlWithPromptToGenerateANewOne() {
        jq(stateUrlField).`val`("Get a new share URL: 👉🏽")
    }
}



fun main(args: Array<String>) {
    jq {
        RentSplitApp().onReady()
    }
}
