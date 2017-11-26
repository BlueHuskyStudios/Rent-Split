if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Rent Split 2'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Rent Split 2'.");
}
this['Rent Split 2'] = function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var AddARoommateRowId;
  var AddARoommateRowSelector;
  var AddARoommateButtonId;
  var AddARoommateButtonSelector;
  var RemoveARoommateButtonClassName;
  var RemoveARoommateButtonSelector;
  var AddAnExpenseRowId;
  var AddAnExpenseRowSelector;
  var AddAnExpenseButtonId;
  var AddAnExpenseButtonSelector;
  var RemoveAnExpenseButtonClassName;
  var RemoveAnExpenseButtonSelector;
  var RoommateRowDataName;
  var RoommateRowSelector;
  var ExpenseRowDataName;
  var ExpenseRowSelector;
  var RoommateNameInputClassName;
  var RoommateNameInputSelector;
  var RoommateIncomeInputClassName;
  var RoommateIncomeInputSelector;
  var RoommateProportionClassName;
  var RoommateProportionSelector;
  var RoommateAnyInputFieldSelector;
  var ExpenseNameInputClassName;
  var ExpenseNameInputSelector;
  var ExpenseCostInputClassName;
  var ExpenseCostInputSelector;
  var ExpenseAnyInputFieldSelector;
  var ExpenseTableSelector;
  var ExpenseTableBodySelector;
  var AnyInputFieldSelector;
  var AnyInputButtonSelector;
  var AnyInputSelector;
  var MoneyAmountInputSelector;
  var ResultsTableSelector;
  var ResultsTableBodySelector;
  var ResultsTableHeadRowSelector;
  var RentExpenseTitle;
  var UtilitiesExpenseTitle;
  var RoommateNamePlaceholderText;
  var RoommateIncomePlaceholderText;
  var ExpenseTypePlaceholderText;
  var ExpenseCostPlaceholderText;
  var RoommateNameColumnTitle;
  var TotalColumnTitle;
  var DefaultRoommateIncome;
  var DefaultExpenseCost;
  var RentExpenseDefaultCost;
  var UtilitiesExpenseDefaultCost;
  function RentSplit() {
  }
  RentSplit.prototype.onReady = function () {
  };
  RentSplit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RentSplit',
    interfaces: []
  };
  function main$lambda() {
    (new RentSplit()).onReady();
    return Unit;
  }
  function main(args) {
    $(main$lambda);
  }
  var package$RentSplit = _.RentSplit || (_.RentSplit = {});
  Object.defineProperty(package$RentSplit, 'AddARoommateRowId', {
    get: function () {
      return AddARoommateRowId;
    },
    set: function (value) {
      AddARoommateRowId = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'AddARoommateRowSelector', {
    get: function () {
      return AddARoommateRowSelector;
    },
    set: function (value) {
      AddARoommateRowSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'AddARoommateButtonId', {
    get: function () {
      return AddARoommateButtonId;
    },
    set: function (value) {
      AddARoommateButtonId = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'AddARoommateButtonSelector', {
    get: function () {
      return AddARoommateButtonSelector;
    },
    set: function (value) {
      AddARoommateButtonSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'RemoveARoommateButtonClassName', {
    get: function () {
      return RemoveARoommateButtonClassName;
    },
    set: function (value) {
      RemoveARoommateButtonClassName = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'RemoveARoommateButtonSelector', {
    get: function () {
      return RemoveARoommateButtonSelector;
    },
    set: function (value) {
      RemoveARoommateButtonSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'AddAnExpenseRowId', {
    get: function () {
      return AddAnExpenseRowId;
    },
    set: function (value) {
      AddAnExpenseRowId = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'AddAnExpenseRowSelector', {
    get: function () {
      return AddAnExpenseRowSelector;
    },
    set: function (value) {
      AddAnExpenseRowSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'AddAnExpenseButtonId', {
    get: function () {
      return AddAnExpenseButtonId;
    },
    set: function (value) {
      AddAnExpenseButtonId = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'AddAnExpenseButtonSelector', {
    get: function () {
      return AddAnExpenseButtonSelector;
    },
    set: function (value) {
      AddAnExpenseButtonSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'RemoveAnExpenseButtonClassName', {
    get: function () {
      return RemoveAnExpenseButtonClassName;
    },
    set: function (value) {
      RemoveAnExpenseButtonClassName = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'RemoveAnExpenseButtonSelector', {
    get: function () {
      return RemoveAnExpenseButtonSelector;
    },
    set: function (value) {
      RemoveAnExpenseButtonSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'RoommateRowDataName', {
    get: function () {
      return RoommateRowDataName;
    },
    set: function (value) {
      RoommateRowDataName = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'RoommateRowSelector', {
    get: function () {
      return RoommateRowSelector;
    },
    set: function (value) {
      RoommateRowSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'ExpenseRowDataName', {
    get: function () {
      return ExpenseRowDataName;
    },
    set: function (value) {
      ExpenseRowDataName = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'ExpenseRowSelector', {
    get: function () {
      return ExpenseRowSelector;
    },
    set: function (value) {
      ExpenseRowSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'RoommateNameInputClassName', {
    get: function () {
      return RoommateNameInputClassName;
    },
    set: function (value) {
      RoommateNameInputClassName = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'RoommateNameInputSelector', {
    get: function () {
      return RoommateNameInputSelector;
    },
    set: function (value) {
      RoommateNameInputSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'RoommateIncomeInputClassName', {
    get: function () {
      return RoommateIncomeInputClassName;
    },
    set: function (value) {
      RoommateIncomeInputClassName = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'RoommateIncomeInputSelector', {
    get: function () {
      return RoommateIncomeInputSelector;
    },
    set: function (value) {
      RoommateIncomeInputSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'RoommateProportionClassName', {
    get: function () {
      return RoommateProportionClassName;
    },
    set: function (value) {
      RoommateProportionClassName = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'RoommateProportionSelector', {
    get: function () {
      return RoommateProportionSelector;
    },
    set: function (value) {
      RoommateProportionSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'RoommateAnyInputFieldSelector', {
    get: function () {
      return RoommateAnyInputFieldSelector;
    },
    set: function (value) {
      RoommateAnyInputFieldSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'ExpenseNameInputClassName', {
    get: function () {
      return ExpenseNameInputClassName;
    },
    set: function (value) {
      ExpenseNameInputClassName = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'ExpenseNameInputSelector', {
    get: function () {
      return ExpenseNameInputSelector;
    },
    set: function (value) {
      ExpenseNameInputSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'ExpenseCostInputClassName', {
    get: function () {
      return ExpenseCostInputClassName;
    },
    set: function (value) {
      ExpenseCostInputClassName = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'ExpenseCostInputSelector', {
    get: function () {
      return ExpenseCostInputSelector;
    },
    set: function (value) {
      ExpenseCostInputSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'ExpenseAnyInputFieldSelector', {
    get: function () {
      return ExpenseAnyInputFieldSelector;
    },
    set: function (value) {
      ExpenseAnyInputFieldSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'ExpenseTableSelector', {
    get: function () {
      return ExpenseTableSelector;
    },
    set: function (value) {
      ExpenseTableSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'ExpenseTableBodySelector', {
    get: function () {
      return ExpenseTableBodySelector;
    },
    set: function (value) {
      ExpenseTableBodySelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'AnyInputFieldSelector', {
    get: function () {
      return AnyInputFieldSelector;
    },
    set: function (value) {
      AnyInputFieldSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'AnyInputButtonSelector', {
    get: function () {
      return AnyInputButtonSelector;
    },
    set: function (value) {
      AnyInputButtonSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'AnyInputSelector', {
    get: function () {
      return AnyInputSelector;
    },
    set: function (value) {
      AnyInputSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'MoneyAmountInputSelector', {
    get: function () {
      return MoneyAmountInputSelector;
    },
    set: function (value) {
      MoneyAmountInputSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'ResultsTableSelector', {
    get: function () {
      return ResultsTableSelector;
    },
    set: function (value) {
      ResultsTableSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'ResultsTableBodySelector', {
    get: function () {
      return ResultsTableBodySelector;
    },
    set: function (value) {
      ResultsTableBodySelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'ResultsTableHeadRowSelector', {
    get: function () {
      return ResultsTableHeadRowSelector;
    },
    set: function (value) {
      ResultsTableHeadRowSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'RentExpenseTitle', {
    get: function () {
      return RentExpenseTitle;
    },
    set: function (value) {
      RentExpenseTitle = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'UtilitiesExpenseTitle', {
    get: function () {
      return UtilitiesExpenseTitle;
    },
    set: function (value) {
      UtilitiesExpenseTitle = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'RoommateNamePlaceholderText', {
    get: function () {
      return RoommateNamePlaceholderText;
    },
    set: function (value) {
      RoommateNamePlaceholderText = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'RoommateIncomePlaceholderText', {
    get: function () {
      return RoommateIncomePlaceholderText;
    },
    set: function (value) {
      RoommateIncomePlaceholderText = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'ExpenseTypePlaceholderText', {
    get: function () {
      return ExpenseTypePlaceholderText;
    },
    set: function (value) {
      ExpenseTypePlaceholderText = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'ExpenseCostPlaceholderText', {
    get: function () {
      return ExpenseCostPlaceholderText;
    },
    set: function (value) {
      ExpenseCostPlaceholderText = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'RoommateNameColumnTitle', {
    get: function () {
      return RoommateNameColumnTitle;
    },
    set: function (value) {
      RoommateNameColumnTitle = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'TotalColumnTitle', {
    get: function () {
      return TotalColumnTitle;
    },
    set: function (value) {
      TotalColumnTitle = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'DefaultRoommateIncome', {
    get: function () {
      return DefaultRoommateIncome;
    },
    set: function (value) {
      DefaultRoommateIncome = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'DefaultExpenseCost', {
    get: function () {
      return DefaultExpenseCost;
    },
    set: function (value) {
      DefaultExpenseCost = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'RentExpenseDefaultCost', {
    get: function () {
      return RentExpenseDefaultCost;
    },
    set: function (value) {
      RentExpenseDefaultCost = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'UtilitiesExpenseDefaultCost', {
    get: function () {
      return UtilitiesExpenseDefaultCost;
    },
    set: function (value) {
      UtilitiesExpenseDefaultCost = value;
    }
  });
  package$RentSplit.RentSplit = RentSplit;
  package$RentSplit.main_kand9s$ = main;
  AddARoommateRowId = 'Add-Roommate-Row';
  AddARoommateRowSelector = '#' + AddARoommateRowId;
  AddARoommateButtonId = 'Add-Roommate-Button';
  AddARoommateButtonSelector = '#' + AddARoommateButtonId;
  RemoveARoommateButtonClassName = 'remove-roommate-button';
  RemoveARoommateButtonSelector = '.' + RemoveARoommateButtonClassName;
  AddAnExpenseRowId = 'Add-Expense-Row';
  AddAnExpenseRowSelector = '#' + AddAnExpenseRowId;
  AddAnExpenseButtonId = 'Add-Expense-Button';
  AddAnExpenseButtonSelector = '#' + AddAnExpenseButtonId;
  RemoveAnExpenseButtonClassName = 'remove-expense-button';
  RemoveAnExpenseButtonSelector = '.' + RemoveAnExpenseButtonClassName;
  RoommateRowDataName = 'roommate-row';
  RoommateRowSelector = '[data-' + RoommateRowDataName + ']';
  ExpenseRowDataName = 'expense-row';
  ExpenseRowSelector = '[data-' + ExpenseRowDataName + ']';
  RoommateNameInputClassName = 'roommate-name';
  RoommateNameInputSelector = '.' + RoommateNameInputClassName;
  RoommateIncomeInputClassName = 'roommate-income';
  RoommateIncomeInputSelector = '.' + RoommateIncomeInputClassName;
  RoommateProportionClassName = 'roommate-proportion';
  RoommateProportionSelector = '.' + RoommateProportionClassName;
  RoommateAnyInputFieldSelector = RoommateNameInputSelector + ',' + RoommateIncomeInputSelector;
  ExpenseNameInputClassName = 'expense-name';
  ExpenseNameInputSelector = '.' + ExpenseNameInputClassName;
  ExpenseCostInputClassName = 'expense-cost';
  ExpenseCostInputSelector = '.' + ExpenseCostInputClassName;
  ExpenseAnyInputFieldSelector = ExpenseNameInputSelector + ',' + ExpenseCostInputSelector;
  ExpenseTableSelector = '#Expenses';
  ExpenseTableBodySelector = ExpenseTableSelector + '>tbody';
  AnyInputFieldSelector = RoommateAnyInputFieldSelector + ',' + ExpenseAnyInputFieldSelector;
  AnyInputButtonSelector = AddARoommateButtonSelector + ',' + AddAnExpenseButtonSelector + ',' + RemoveAnExpenseButtonSelector;
  AnyInputSelector = AnyInputFieldSelector + ',' + AnyInputButtonSelector;
  MoneyAmountInputSelector = RoommateIncomeInputSelector + ',' + ExpenseCostInputSelector;
  ResultsTableSelector = '#Results';
  ResultsTableBodySelector = ResultsTableSelector + '>tbody';
  ResultsTableHeadRowSelector = ResultsTableSelector + '>thead>tr';
  RentExpenseTitle = 'Rent';
  UtilitiesExpenseTitle = 'Utilities';
  RoommateNamePlaceholderText = 'Name';
  RoommateIncomePlaceholderText = 'Income';
  ExpenseTypePlaceholderText = 'Type';
  ExpenseCostPlaceholderText = 'Monthly Cost';
  RoommateNameColumnTitle = 'Name';
  TotalColumnTitle = 'Total Cost';
  DefaultRoommateIncome = 1000;
  DefaultExpenseCost = 100;
  RentExpenseDefaultCost = 800;
  UtilitiesExpenseDefaultCost = 50;
  main([]);
  Kotlin.defineModule('Rent Split 2', _);
  return _;
}(typeof this['Rent Split 2'] === 'undefined' ? {} : this['Rent Split 2'], kotlin);
