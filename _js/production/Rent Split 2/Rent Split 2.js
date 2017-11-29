if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Rent Split 2'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Rent Split 2'.");
}
this['Rent Split 2'] = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var toString = Kotlin.toString;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var throwCCE = Kotlin.throwCCE;
  var addARoommateRowId;
  var addARoommateRowSelector;
  var addARoommateButtonId;
  var addARoommateButtonSelector;
  var removeARoommateButtonClassName;
  var removeARoommateButtonSelector;
  var addAnExpenseRowId;
  var addAnExpenseRowSelector;
  var addAnExpenseButtonId;
  var addAnExpenseButtonSelector;
  var removeAnExpenseButtonClassName;
  var removeAnExpenseButtonSelector;
  var roommateRowDataName;
  var roommateRowSelector;
  var expenseRowDataName;
  var expenseRowSelector;
  var roommateResultRowDataName;
  var roommateWhoOwesTooMuchClassName;
  var roommateWhoOwesTooMuchSelector;
  var roommateNameInputClassName;
  var roommateNameInputSelector;
  var roommateIncomeInputClassName;
  var roommateIncomeInputSelector;
  var roommateProportionClassName;
  var roommateProportionSelector;
  var roommateAnyInputFieldSelector;
  var expenseNameInputClassName;
  var expenseNameInputSelector;
  var expenseCostInputClassName;
  var expenseCostInputSelector;
  var expenseAnyInputFieldSelector;
  var anyInputFieldSelector;
  var anyInputButtonSelector;
  var anyInputSelector;
  var resultsTableSelector;
  var resultsTableBodySelector;
  var resultsTableHeadRowSelector;
  var rentExpenseTitle;
  var utilitiesExpenseTitle;
  var roommateNamePlaceholderText;
  var roommateIncomePlaceholderText;
  var expenseTypePlaceholderText;
  var expenseCostPlaceholderText;
  var roommateNameColumnTitle;
  var totalColumnTitle;
  var defaultRoommateIncome;
  var defaultExpenseCost;
  var defaultRentExpenseCost;
  var defaultUtilitiesExpenseCost;
  function RentSplit() {
    this.totalIncome = undefined;
    this.totalExpenses = undefined;
    this.expenseCounter = 0.0;
  }
  RentSplit.prototype.onReady = function () {
    this.registerListeners();
    this.addDefaults();
    this.recalculateRentSplit();
    this.presentToUser();
  };
  RentSplit.prototype.reRegisterListeners = function () {
    $(anyInputSelector).off();
    this.registerListeners();
  };
  RentSplit.prototype.registerListeners = function () {
    $(anyInputFieldSelector).change(getCallableRef('recalculateRentSplit', function ($receiver) {
      return $receiver.recalculateRentSplit(), Unit;
    }.bind(null, this)));
    $(addAnExpenseButtonSelector).click(getCallableRef('addNewExpense', function ($receiver, event) {
      return $receiver.addNewExpense_9ojx7i$(event), Unit;
    }.bind(null, this)));
    $(removeAnExpenseButtonSelector).click(getCallableRef('removeExpense', function ($receiver, event) {
      return $receiver.removeExpense_9ojx7i$(event), Unit;
    }.bind(null, this)));
    $(addARoommateButtonSelector).click(getCallableRef('addNewRoommate', function ($receiver, event) {
      return $receiver.addNewRoommate_9ojx7i$(event), Unit;
    }.bind(null, this)));
    $(removeARoommateButtonSelector).click(getCallableRef('removeRoommate', function ($receiver, event) {
      return $receiver.removeRoommate_9ojx7i$(event), Unit;
    }.bind(null, this)));
  };
  RentSplit.prototype.addDefaults = function () {
    this.addNewRoommate_eoyb1f$(undefined, null, null, true, true);
    this.addNewRoommate_eoyb1f$(undefined, null, null, true, true);
    this.addNewExpense_eoyb1f$(undefined, rentExpenseTitle, defaultRentExpenseCost, true, true);
    this.addNewExpense_eoyb1f$(undefined, utilitiesExpenseTitle, defaultUtilitiesExpenseCost, true, true);
  };
  RentSplit.prototype.recalculateRentSplit = function () {
    var roommates = this.fetchRoommates();
    var expenses = this.fetchExpenses();
    this.recalculateRoommateProportions_a4l0xx$(roommates);
    this.totalExpenses = this.recalculateTotalExpenses_sgeyu7$(expenses);
    this.fillOutResults_tm2r7c$(roommates, expenses);
    this.notifyOfProblems_tm2r7c$(roommates, expenses);
  };
  RentSplit.prototype.presentToUser = function () {
    $('.rent').addClass('rent-ready');
  };
  RentSplit.prototype.fetchRoommates = function () {
    return this.roommateRowsToRoommates_r6ezyp$($(roommateRowSelector));
  };
  RentSplit.prototype.fetchExpenses = function () {
    return this.expenseRowsToExpenses_r6ezyp$($(expenseRowSelector));
  };
  RentSplit.prototype.roommateRowsToRoommates_r6ezyp$ = function (jq_roommateRows) {
    return asList(jq_roommateRows.map(getCallableRef('roommateRowToRoommate', function ($receiver, index, jq_roommateRow) {
      return $receiver.roommateRowToRoommate_folkv9$(index, jq_roommateRow);
    }.bind(null, this))));
  };
  RentSplit.prototype.expenseRowsToExpenses_r6ezyp$ = function (jq_expenseRows) {
    return asList(jq_expenseRows.map(getCallableRef('expenseRowToExpense', function ($receiver, index, jq_expenseRow) {
      return $receiver.expenseRowToExpense_folkv9$(index, jq_expenseRow);
    }.bind(null, this))));
  };
  RentSplit.prototype.roommateRowToRoommate_folkv9$ = function (index, jq_roommateRow) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    return new RentRoommate((tmp$_0 = (tmp$ = $(roommateNameInputSelector, jq_roommateRow).val()) != null ? nonEmptyOrNull(tmp$) : null) != null ? tmp$_0 : 'Roommate #' + (index + 1 | 0), (tmp$_2 = (tmp$_1 = $(roommateIncomeInputSelector, jq_roommateRow).val()) != null ? toDoubleOrNull(tmp$_1) : null) != null ? tmp$_2 : kotlin_js_internal_DoubleCompanionObject.NaN, jq_roommateRow);
  };
  RentSplit.prototype.expenseRowToExpense_folkv9$ = function (index, jq_expenseRow) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    return new RentExpense((tmp$_0 = (tmp$ = $(expenseNameInputSelector, jq_expenseRow).val()) != null ? nonEmptyOrNull(tmp$) : null) != null ? tmp$_0 : 'Expense #' + (index + 1 | 0), (tmp$_2 = (tmp$_1 = $(expenseCostInputSelector, jq_expenseRow).val()) != null ? toDoubleOrNull(tmp$_1) : null) != null ? tmp$_2 : kotlin_js_internal_DoubleCompanionObject.NaN, jq_expenseRow);
  };
  RentSplit.prototype.recalculateRoommateProportions_a4l0xx$ = function (roommates) {
    this.totalIncome = this.recalculateTotalIncome_a4l0xx$(roommates);
    var action = getCallableRef('recalculateRoommateProportion', function ($receiver, roommate) {
      return $receiver.recalculateRoommateProportion_pcqrmu$(roommate), Unit;
    }.bind(null, this));
    var tmp$;
    tmp$ = roommates.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      action(element);
    }
    this.displayRoommateProportions_a4l0xx$(roommates);
  };
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException;
  RentSplit.prototype.recalculateTotalIncome_a4l0xx$ = function (roommates) {
    var iterator = roommates.iterator();
    if (!iterator.hasNext())
      throw new UnsupportedOperationException_init("Empty collection can't be reduced.");
    var accumulator = iterator.next();
    while (iterator.hasNext()) {
      accumulator = new RentRoommate('TMP', accumulator.monthlyIncome + iterator.next().monthlyIncome, $());
    }
    return accumulator.monthlyIncome;
  };
  RentSplit.prototype.recalculateRoommateProportion_pcqrmu$ = function (roommate) {
    var tmp$;
    roommate.proportion = roommate.monthlyIncome / ((tmp$ = this.totalIncome) != null ? tmp$ : 0.0);
  };
  RentSplit.prototype.displayRoommateProportions_a4l0xx$ = function (roommates) {
    var action = getCallableRef('displayRoommateProportion', function ($receiver, roommate) {
      return $receiver.displayRoommateProportion_pcqrmu$(roommate), Unit;
    }.bind(null, this));
    var tmp$;
    tmp$ = roommates.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      action(element);
    }
  };
  RentSplit.prototype.displayRoommateProportion_pcqrmu$ = function (roommate) {
    $(roommateProportionSelector, roommate.originalDOMElement).html(toFixed(roommate.proportion * 100, 2) + '%');
  };
  RentSplit.prototype.recalculateTotalExpenses_sgeyu7$ = function (expenses) {
    var iterator = expenses.iterator();
    if (!iterator.hasNext())
      throw new UnsupportedOperationException_init("Empty collection can't be reduced.");
    var accumulator = iterator.next();
    while (iterator.hasNext()) {
      accumulator = new RentExpense('<EXPENSE>', accumulator.monthlyCost + iterator.next().monthlyCost, $());
    }
    return accumulator.monthlyCost;
  };
  RentSplit.prototype.addNewExpense_9ojx7i$ = function (event) {
    this.addNewExpense_eoyb1f$(event, null, null, false, false);
  };
  RentSplit.prototype.addNewExpense_eoyb1f$ = function (event, type, cost, locked, suppressCalculation) {
    this.expenseCounter = this.expenseCounter + 1;
    var jq_expenseButtonRow = $(addAnExpenseRowSelector);
    jq_expenseButtonRow.before(this.buildExpenseInputRow_3g7m9n$(type, cost, locked));
    this.reRegisterListeners();
    if (!suppressCalculation) {
      this.recalculateRentSplit();
    }
  };
  RentSplit.prototype.buildExpenseInputRow_3g7m9n$ = function (type, cost, locked) {
    var row = '<tr data-' + expenseRowDataName + '="' + toString(this.expenseCounter) + '">';
    var tmp$ = '<th' + (locked ? '' : ' class="plain"') + '>' + '<input' + ' type="' + (locked ? 'hidden' : 'text') + '"' + ' class="' + expenseNameInputClassName + '   text-right"' + (!(type == null || type.length === 0) ? ' value="' + type + '"' : '') + ' size="8"' + ' tabindex=0' + ' placeholder="' + expenseTypePlaceholderText + '"' + '/>';
    var tmp$_0 = locked;
    if (tmp$_0) {
      tmp$_0 = !(type == null || type.length === 0);
    }
    row += tmp$ + (tmp$_0 ? type : '') + '<\/th>';
    row += '<td class="plain vert-bottom">' + '<input' + ' type="number"' + (!(type == null || type.length === 0) ? ' id=' + '"' + 'total-' + toString(type) + '"' : '') + ' class="' + expenseCostInputClassName + '"' + ' required' + (' value=' + '"' + (cost != null ? cost : defaultExpenseCost) + '"') + ' step="10"' + ' size="8"' + ' tabindex=0' + ' placeholder="Monthly Cost"' + '/>' + '<\/td>';
    if (!locked) {
      row += '<td' + ' class="remove-expense-button color-danger"' + ' tabindex="0">' + '<i class="fa fa-minus-circle"><\/i>' + '<\/td>';
    }
    return row + '<\/tr>';
  };
  RentSplit.prototype.addNewRoommate_9ojx7i$ = function (event) {
    return this.addNewRoommate_eoyb1f$(event, null, null, false, false);
  };
  RentSplit.prototype.addNewRoommate_eoyb1f$ = function (event, name, income, locked, suppressCalculation) {
    var jq_roommateButtonRow = $(addARoommateRowSelector);
    jq_roommateButtonRow.before(this.buildRoommateInputRow_3g7m9n$(name, income, locked));
    this.reRegisterListeners();
    if (!suppressCalculation) {
      this.recalculateRentSplit();
    }
  };
  RentSplit.prototype.buildRoommateInputRow_3g7m9n$ = function (name, income, isLocked) {
    var roommateNumber = this.numberOfRoommates() + 1 | 0;
    var row = '<tr' + (' data-' + roommateRowDataName + '=' + '"' + roommateNumber + '"') + '>';
    row += '<th class="plain">' + '<input' + ' type="text"' + ' class="roommate-name   text-right"' + (!(name == null || name.length === 0) ? ' value="' + name + '"' : '') + ' size="8"' + ' tabindex=0' + ' placeholder="Name"' + '/>' + '<\/th>';
    row += '<td class="plain vert-bottom">' + '<input' + ' type="number"' + ' class="roommate-income"' + ' required' + (' value=' + '"' + (income != null ? income : defaultRoommateIncome) + '"') + ' step="100"' + ' size="8"' + ' tabindex=0' + ' placeholder="Income"' + '/>' + '<\/td>';
    row += '<td class="roommate-proportion">Calculating<\/td>';
    if (!isLocked) {
      row += '<td class="remove-roommate-button color-danger"' + ' tabindex="0">' + '<i class="fa fa-minus-circle"><\/i>' + '<\/td>';
    }
    return row + '<\/tr>';
  };
  RentSplit.prototype.numberOfRoommates = function () {
    return $(roommateRowSelector).length;
  };
  RentSplit.prototype.removeExpense_9ojx7i$ = function (event) {
    var tmp$;
    var expenseRow = (tmp$ = event.currentTarget) != null ? tmp$.parentElement : null;
    expenseRow != null ? (expenseRow.remove(), Unit) : null;
    this.reRegisterListeners();
    this.recalculateRentSplit();
  };
  RentSplit.prototype.removeRoommate_9ojx7i$ = function (event) {
    var tmp$;
    var roommateRow = (tmp$ = event.currentTarget) != null ? tmp$.parentElement : null;
    roommateRow != null ? (roommateRow.remove(), Unit) : null;
    this.reRegisterListeners();
    this.recalculateRentSplit();
  };
  RentSplit.prototype.fillOutResults_tm2r7c$ = function (roommates, expenses) {
    this.fillOutResultsTableHead_tm2r7c$(roommates, expenses);
    this.fillOutResultsTableBody_tm2r7c$(roommates, expenses);
  };
  RentSplit.prototype.fillOutResultsTableHead_tm2r7c$ = function (roommates, expenses) {
    var jq_resultsTableHeadRow = $(resultsTableHeadRowSelector);
    jq_resultsTableHeadRow.empty();
    jq_resultsTableHeadRow.append('<th class="text-center">Name<\/th>');
    var tmp$;
    tmp$ = expenses.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.appendExpenseColumn_7jb809$(jq_resultsTableHeadRow, element);
    }
    jq_resultsTableHeadRow.append('<th class="text-center">Total Cost<\/th>');
  };
  RentSplit.prototype.appendExpenseColumn_7jb809$ = function (jq_resultsTableHeadRow, expense) {
    jq_resultsTableHeadRow.append("<th class='hide-small'>" + expense.type + '<\/th>');
  };
  RentSplit.prototype.fillOutResultsTableBody_tm2r7c$ = function (roommates, expenses) {
    var jq_resultsTableBody = $(resultsTableBodySelector);
    jq_resultsTableBody.empty();
    var tmp$;
    tmp$ = roommates.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.appendResultRow_3v0ovg$(jq_resultsTableBody, element, expenses);
    }
  };
  RentSplit.prototype.appendResultRow_3v0ovg$ = function (jq_resultsTableBody, roommate, expenses) {
    jq_resultsTableBody.append(this.buildResultRow_cxtimx$(roommate, expenses));
  };
  function RentSplit$buildResultRow$lambda(closure$roommate, this$RentSplit) {
    return function (it) {
      return "<td class='hide-small'>" + get_dollarFormat(this$RentSplit.roommateContribution_ykbhv8$(closure$roommate, it)) + '<\/td>';
    };
  }
  RentSplit.prototype.buildResultRow_cxtimx$ = function (roommate, expenses) {
    var row = '<tr data-' + roommateResultRowDataName + "='" + roommate.name + "'><th>" + roommate.name + '<\/th>';
    row += joinToString(expenses, '', void 0, void 0, void 0, void 0, RentSplit$buildResultRow$lambda(roommate, this));
    row += '<th>' + get_dollarFormat(this.roommateTotalContributions_pcqrmu$(roommate)) + '<\/th>';
    return row + '<\/tr>';
  };
  RentSplit.prototype.roommateContribution_ykbhv8$ = function (roommate, expense) {
    return roommate.proportion * expense.monthlyCost;
  };
  RentSplit.prototype.roommateTotalContributions_pcqrmu$ = function (roommate) {
    var tmp$;
    return roommate.proportion * ((tmp$ = this.totalExpenses) != null ? tmp$ : 0.0);
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  RentSplit.prototype.notifyOfProblems_tm2r7c$ = function (roommates, expenses) {
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = roommates.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var roommateTotalContributions = this.roommateTotalContributions_pcqrmu$(element);
      if (roommateTotalContributions > element.monthlyIncome)
        destination.add_11rb$(element);
    }
    var roommatesWhoOweTooMuch = destination;
    var tmp$_0;
    tmp$_0 = roommatesWhoOweTooMuch.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      $('[data-' + roommateResultRowDataName + "='" + element_0.name + "']").addClass(roommateWhoOwesTooMuchClassName).attr('title', 'This roommate owes too much!');
    }
  };
  RentSplit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RentSplit',
    interfaces: []
  };
  function RentRoommate(name, monthlyIncome, originalDOMElement, proportion) {
    if (proportion === void 0)
      proportion = 0.0;
    this.name = name;
    this.monthlyIncome = monthlyIncome;
    this.originalDOMElement = originalDOMElement;
    this.proportion = proportion;
  }
  RentRoommate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RentRoommate',
    interfaces: []
  };
  RentRoommate.prototype.component1 = function () {
    return this.name;
  };
  RentRoommate.prototype.component2 = function () {
    return this.monthlyIncome;
  };
  RentRoommate.prototype.component3 = function () {
    return this.originalDOMElement;
  };
  RentRoommate.prototype.component4 = function () {
    return this.proportion;
  };
  RentRoommate.prototype.copy_70ri67$ = function (name, monthlyIncome, originalDOMElement, proportion) {
    return new RentRoommate(name === void 0 ? this.name : name, monthlyIncome === void 0 ? this.monthlyIncome : monthlyIncome, originalDOMElement === void 0 ? this.originalDOMElement : originalDOMElement, proportion === void 0 ? this.proportion : proportion);
  };
  RentRoommate.prototype.toString = function () {
    return 'RentRoommate(name=' + Kotlin.toString(this.name) + (', monthlyIncome=' + Kotlin.toString(this.monthlyIncome)) + (', originalDOMElement=' + Kotlin.toString(this.originalDOMElement)) + (', proportion=' + Kotlin.toString(this.proportion)) + ')';
  };
  RentRoommate.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.monthlyIncome) | 0;
    result = result * 31 + Kotlin.hashCode(this.originalDOMElement) | 0;
    result = result * 31 + Kotlin.hashCode(this.proportion) | 0;
    return result;
  };
  RentRoommate.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.monthlyIncome, other.monthlyIncome) && Kotlin.equals(this.originalDOMElement, other.originalDOMElement) && Kotlin.equals(this.proportion, other.proportion)))));
  };
  function RentExpense(type, monthlyCost, originalDOMElement) {
    this.type = type;
    this.monthlyCost = monthlyCost;
    this.originalDOMElement = originalDOMElement;
  }
  RentExpense.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RentExpense',
    interfaces: []
  };
  RentExpense.prototype.component1 = function () {
    return this.type;
  };
  RentExpense.prototype.component2 = function () {
    return this.monthlyCost;
  };
  RentExpense.prototype.component3 = function () {
    return this.originalDOMElement;
  };
  RentExpense.prototype.copy_tpopqr$ = function (type, monthlyCost, originalDOMElement) {
    return new RentExpense(type === void 0 ? this.type : type, monthlyCost === void 0 ? this.monthlyCost : monthlyCost, originalDOMElement === void 0 ? this.originalDOMElement : originalDOMElement);
  };
  RentExpense.prototype.toString = function () {
    return 'RentExpense(type=' + Kotlin.toString(this.type) + (', monthlyCost=' + Kotlin.toString(this.monthlyCost)) + (', originalDOMElement=' + Kotlin.toString(this.originalDOMElement)) + ')';
  };
  RentExpense.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.monthlyCost) | 0;
    result = result * 31 + Kotlin.hashCode(this.originalDOMElement) | 0;
    return result;
  };
  RentExpense.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.monthlyCost, other.monthlyCost) && Kotlin.equals(this.originalDOMElement, other.originalDOMElement)))));
  };
  function main$lambda() {
    (new RentSplit()).onReady();
    return Unit;
  }
  function main(args) {
    $(main$lambda);
  }
  var isNeitherNullNorEmpty = defineInlineFunction('Rent Split 2.RentSplit.isNeitherNullNorEmpty_5cw0du$', function ($receiver) {
    return !($receiver == null || $receiver.length === 0);
  });
  var isNeitherNullNorBlank = defineInlineFunction('Rent Split 2.RentSplit.isNeitherNullNorBlank_5cw0du$', wrapFunction(function () {
    var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
    return function ($receiver) {
      return !($receiver == null || isBlank($receiver));
    };
  }));
  function get_dollarFormat($receiver) {
    return '$' + toFixed($receiver, 2);
  }
  function toFixed($receiver, decimalPlaces) {
    var tmp$;
    return typeof (tmp$ = $receiver.toFixed(decimalPlaces)) === 'string' ? tmp$ : throwCCE();
  }
  function nonEmptyOrNull($receiver) {
    return $receiver.length === 0 ? null : $receiver;
  }
  var get_parentElement = defineInlineFunction('Rent Split 2.jQueryInterface.get_parentElement_s15u7w$', function ($receiver) {
    return $receiver.parentElement;
  });
  var package$RentSplit = _.RentSplit || (_.RentSplit = {});
  Object.defineProperty(package$RentSplit, 'addARoommateRowId', {
    get: function () {
      return addARoommateRowId;
    }
  });
  Object.defineProperty(package$RentSplit, 'addARoommateRowSelector', {
    get: function () {
      return addARoommateRowSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'addARoommateButtonId', {
    get: function () {
      return addARoommateButtonId;
    }
  });
  Object.defineProperty(package$RentSplit, 'addARoommateButtonSelector', {
    get: function () {
      return addARoommateButtonSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'removeARoommateButtonClassName', {
    get: function () {
      return removeARoommateButtonClassName;
    }
  });
  Object.defineProperty(package$RentSplit, 'removeARoommateButtonSelector', {
    get: function () {
      return removeARoommateButtonSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'addAnExpenseRowId', {
    get: function () {
      return addAnExpenseRowId;
    }
  });
  Object.defineProperty(package$RentSplit, 'addAnExpenseRowSelector', {
    get: function () {
      return addAnExpenseRowSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'addAnExpenseButtonId', {
    get: function () {
      return addAnExpenseButtonId;
    }
  });
  Object.defineProperty(package$RentSplit, 'addAnExpenseButtonSelector', {
    get: function () {
      return addAnExpenseButtonSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'removeAnExpenseButtonClassName', {
    get: function () {
      return removeAnExpenseButtonClassName;
    }
  });
  Object.defineProperty(package$RentSplit, 'removeAnExpenseButtonSelector', {
    get: function () {
      return removeAnExpenseButtonSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateRowDataName', {
    get: function () {
      return roommateRowDataName;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateRowSelector', {
    get: function () {
      return roommateRowSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseRowDataName', {
    get: function () {
      return expenseRowDataName;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseRowSelector', {
    get: function () {
      return expenseRowSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateResultRowDataName', {
    get: function () {
      return roommateResultRowDataName;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateWhoOwesTooMuchClassName', {
    get: function () {
      return roommateWhoOwesTooMuchClassName;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateWhoOwesTooMuchSelector', {
    get: function () {
      return roommateWhoOwesTooMuchSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateNameInputClassName', {
    get: function () {
      return roommateNameInputClassName;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateNameInputSelector', {
    get: function () {
      return roommateNameInputSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateIncomeInputClassName', {
    get: function () {
      return roommateIncomeInputClassName;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateIncomeInputSelector', {
    get: function () {
      return roommateIncomeInputSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateProportionClassName', {
    get: function () {
      return roommateProportionClassName;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateProportionSelector', {
    get: function () {
      return roommateProportionSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateAnyInputFieldSelector', {
    get: function () {
      return roommateAnyInputFieldSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseNameInputClassName', {
    get: function () {
      return expenseNameInputClassName;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseNameInputSelector', {
    get: function () {
      return expenseNameInputSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseCostInputClassName', {
    get: function () {
      return expenseCostInputClassName;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseCostInputSelector', {
    get: function () {
      return expenseCostInputSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseAnyInputFieldSelector', {
    get: function () {
      return expenseAnyInputFieldSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'anyInputFieldSelector', {
    get: function () {
      return anyInputFieldSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'anyInputButtonSelector', {
    get: function () {
      return anyInputButtonSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'anyInputSelector', {
    get: function () {
      return anyInputSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'resultsTableSelector', {
    get: function () {
      return resultsTableSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'resultsTableBodySelector', {
    get: function () {
      return resultsTableBodySelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'resultsTableHeadRowSelector', {
    get: function () {
      return resultsTableHeadRowSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'rentExpenseTitle', {
    get: function () {
      return rentExpenseTitle;
    }
  });
  Object.defineProperty(package$RentSplit, 'utilitiesExpenseTitle', {
    get: function () {
      return utilitiesExpenseTitle;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateNamePlaceholderText', {
    get: function () {
      return roommateNamePlaceholderText;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateIncomePlaceholderText', {
    get: function () {
      return roommateIncomePlaceholderText;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseTypePlaceholderText', {
    get: function () {
      return expenseTypePlaceholderText;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseCostPlaceholderText', {
    get: function () {
      return expenseCostPlaceholderText;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateNameColumnTitle', {
    get: function () {
      return roommateNameColumnTitle;
    }
  });
  Object.defineProperty(package$RentSplit, 'totalColumnTitle', {
    get: function () {
      return totalColumnTitle;
    }
  });
  Object.defineProperty(package$RentSplit, 'defaultRoommateIncome', {
    get: function () {
      return defaultRoommateIncome;
    }
  });
  Object.defineProperty(package$RentSplit, 'defaultExpenseCost', {
    get: function () {
      return defaultExpenseCost;
    }
  });
  Object.defineProperty(package$RentSplit, 'defaultRentExpenseCost', {
    get: function () {
      return defaultRentExpenseCost;
    }
  });
  Object.defineProperty(package$RentSplit, 'defaultUtilitiesExpenseCost', {
    get: function () {
      return defaultUtilitiesExpenseCost;
    }
  });
  $$importsForInline$$['Rent Split 2'] = _;
  package$RentSplit.RentSplit = RentSplit;
  package$RentSplit.RentRoommate = RentRoommate;
  package$RentSplit.RentExpense = RentExpense;
  package$RentSplit.main_kand9s$ = main;
  package$RentSplit.isNeitherNullNorEmpty_5cw0du$ = isNeitherNullNorEmpty;
  package$RentSplit.isNeitherNullNorBlank_5cw0du$ = isNeitherNullNorBlank;
  package$RentSplit.get_dollarFormat_yrwdxr$ = get_dollarFormat;
  package$RentSplit.toFixed_j6vyb1$ = toFixed;
  package$RentSplit.nonEmptyOrNull_pdl1vz$ = nonEmptyOrNull;
  var package$jQueryInterface = _.jQueryInterface || (_.jQueryInterface = {});
  package$jQueryInterface.get_parentElement_s15u7w$ = get_parentElement;
  addARoommateRowId = 'Add-Roommate-Row';
  addARoommateRowSelector = '#Add-Roommate-Row';
  addARoommateButtonId = 'Add-Roommate-Button';
  addARoommateButtonSelector = '#Add-Roommate-Button';
  removeARoommateButtonClassName = 'remove-roommate-button';
  removeARoommateButtonSelector = '.remove-roommate-button';
  addAnExpenseRowId = 'Add-Expense-Row';
  addAnExpenseRowSelector = '#Add-Expense-Row';
  addAnExpenseButtonId = 'Add-Expense-Button';
  addAnExpenseButtonSelector = '#Add-Expense-Button';
  removeAnExpenseButtonClassName = 'remove-expense-button';
  removeAnExpenseButtonSelector = '.remove-expense-button';
  roommateRowDataName = 'roommate-row';
  roommateRowSelector = '[data-roommate-row]';
  expenseRowDataName = 'expense-row';
  expenseRowSelector = '[data-expense-row]';
  roommateResultRowDataName = 'result-roommate-row';
  roommateWhoOwesTooMuchClassName = 'roommate-owes-too-much';
  roommateWhoOwesTooMuchSelector = '.roommate-owes-too-much';
  roommateNameInputClassName = 'roommate-name';
  roommateNameInputSelector = '.' + roommateNameInputClassName;
  roommateIncomeInputClassName = 'roommate-income';
  roommateIncomeInputSelector = '.' + roommateIncomeInputClassName;
  roommateProportionClassName = 'roommate-proportion';
  roommateProportionSelector = '.' + roommateProportionClassName;
  roommateAnyInputFieldSelector = '.roommate-name,.roommate-income';
  expenseNameInputClassName = 'expense-name';
  expenseNameInputSelector = '.' + expenseNameInputClassName;
  expenseCostInputClassName = 'expense-cost';
  expenseCostInputSelector = '.' + expenseCostInputClassName;
  expenseAnyInputFieldSelector = '.expense-name,.expense-cost';
  anyInputFieldSelector = '.roommate-name,.roommate-income,.expense-name,.expense-cost';
  anyInputButtonSelector = '#Add-Roommate-Button,#Add-Expense-Button,.remove-expense-button';
  anyInputSelector = '.roommate-name,.roommate-income,.expense-name,.expense-cost,#Add-Roommate-Button,#Add-Expense-Button,.remove-expense-button';
  resultsTableSelector = '#Results';
  resultsTableBodySelector = '#Results>tbody';
  resultsTableHeadRowSelector = '#Results>thead>tr';
  rentExpenseTitle = 'Rent';
  utilitiesExpenseTitle = 'Utilities';
  roommateNamePlaceholderText = 'Name';
  roommateIncomePlaceholderText = 'Income';
  expenseTypePlaceholderText = 'Type';
  expenseCostPlaceholderText = 'Monthly Cost';
  roommateNameColumnTitle = 'Name';
  totalColumnTitle = 'Total Cost';
  defaultRoommateIncome = 1000.0;
  defaultExpenseCost = 100.0;
  defaultRentExpenseCost = 800.0;
  defaultUtilitiesExpenseCost = 50.0;
  main([]);
  Kotlin.defineModule('Rent Split 2', _);
  return _;
}(typeof this['Rent Split 2'] === 'undefined' ? {} : this['Rent Split 2'], kotlin);
