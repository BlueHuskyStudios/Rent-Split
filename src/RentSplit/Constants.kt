package RentSplit

/*
 * App-global constants
 *
 * @author Ben
 * @since 2018-02-07
 */

//// Selectors ////

        val addARoommateRow = CssId("Add-Roommate-Row")
        val addARoommateButton = CssId("Add-Roommate-Button")
        val removeARoommateButton = CssClass("remove-roommate-button")
        val addAnExpenseRow = CssId("Add-Expense-Row")
        val addAnExpenseButton = CssId("Add-Expense-Button")
        val removeAnExpenseButton = CssClass("remove-expense-button")

        val roommateInputRow = DataAttribute("roommate-row")
        val expenseInputRow = DataAttribute("expense-row")
        val roommateResultRow = DataAttribute("result-${roommateInputRow.dataName}")

        //val roommateTable = CssId(idName = "Roommate")
        val roommateNameInput = CssClass("roommate-name")
        val roommateIncomeInput = CssClass("roommate-income")
        val roommateProportion = CssClass("roommate-proportion")
        val roommateAnyInputField = roommateNameInput or roommateIncomeInput
        val roommateWhoOwesTooMuch = CssClass("roommate-owes-too-much")
        val roommateRemovability = DataAttribute("roommate-removable")
        val roommateRenamability = DataAttribute("roommate-renamable")

        val expenseTypeInput = CssClass("expense-type")
        val expenseCostInput = CssClass("expense-cost")
        val expenseAnyInputField = expenseTypeInput or expenseCostInput
        //val expenseTable = CssId("Expenses")
        //val expenseTableBodySelector = expenseTable.cssSelectorString + ">tbody"
        val expenseRemovability = DataAttribute("expense-removable")
        val expenseRenamability = DataAttribute("expense-renamable")

        val resultRow = DataAttribute("result-roommate-row")

        //val moneyAmountInputSelector = "$roommateIncomeInputSelector,$expenseCostInputSelector"

        val resultsTable = CssId("Results")
        val resultsTableBody = resultsTable containing CssElement("tbody")
        val resultsTableHeadRow = resultsTable containing CssElement("thead") containing CssElement("tr")

        val resourceId = DataAttribute("id")

        val expenseApplicableRoommates = DataAttribute("applicable-roommate-ids")
        val expenseHasApplicableRoommates = CssClass("has-applicable-roommates")


/// State Saving ///

        val copyStateUrlButton = CssId("Copy-URL-Button")
        val stateUrlField = CssId("State-URL-Field")

        val localStorageWarning = CssId("Local-Storage-Warning")
        val localStorageWarningExplicitRefusalButton = CssId("Local-Storage-Warning-Decline-Button")
        val localStorageWarningExplicitConsentButton = CssId("Local-Storage-Warning-Consent-Button")


/// Expense Filters ///

        val expenseFilterButton = CssClass("filter-button")
        val expenseFilterDialog = CssId("Filter-Dialog")
        val expenseFilterDialogCancelButton = CssId("Filter-Dialog-Cancel-Button")
        val expenseFilterDialogOkButton = CssId("Filter-Dialog-Ok-Button")
        val expenseFilterDialogExpenseName = CssClass("expense-name")
        val expenseFilterApplicableRoommateChecklist = CssId("Expense-Filter-Applicable-Roommate-Checklist")
        val expenseFilterApplicableRoommateChecklistItem = CssClass("expense-filter-applicable-roommate")
        val expenseFilterEveryoneCheckbox = CssId("Roommate-Filter-Everyone-Checkbox")
        val expenseFilterApplicableRoommateCheckbox = CssClass("expense-filter-applicable-roommate-checkbox")
        val expenseFilterDialogCurrentExpense = DataAttribute("current-expense")
        val expenseFilterAnyCheckboxSelector = "${expenseFilterDialog.cssSelectorString} input[type=checkbox]"

        val expenseFilterButtonExpenseRelation = DataAttribute("expense")


/// Aggregates ///

        val anyInputField = CssElement("input") or roommateAnyInputField or expenseAnyInputField
        val anyInputButton = addARoommateButton or addAnExpenseButton or
                removeARoommateButton or removeAnExpenseButton or
                expenseFilterButton or expenseFilterDialogCancelButton or expenseFilterDialogOkButton
        val anyInput = anyInputField or anyInputButton


//// Label text ////

        val rentExpenseType = "Rent"
        val utilitiesExpenseType = "Utilities"

        val roommateNamePlaceholderText = "Name"
        val roommateIncomePlaceholderText = "Income"

        val expenseTypePlaceholderText = "Type"
        val expenseCostPlaceholderText = "Monthly Cost"

        val roommateNameColumnTitle = "Name"
        val totalColumnTitle = "Total Cost"


//// Defaults ////

        val defaultRoommateIncome: Double = 1000.0

        val defaultExpenseCost: Double = 100.0
        val defaultRentExpenseCost: Double = 800.0
        val defaultUtilitiesExpenseCost: Double = 50.0
