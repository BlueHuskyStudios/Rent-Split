if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Rent Split 2'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Rent Split 2'.");
}
this['Rent Split 2'] = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var toString = Kotlin.toString;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
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
    return (Math.round($receiver * 100.0) / 100.0).toString();
  }
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
  var expenseTableSelector;
  var expenseTableBodySelector;
  var anyInputFieldSelector;
  var anyInputButtonSelector;
  var anyInputSelector;
  var moneyAmountInputSelector;
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
    this.roommateCounter = 0;
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
    this.addNewRoommate_eoyb1f$(undefined, '', defaultRoommateIncome, true, true);
    this.addNewRoommate_eoyb1f$(undefined, '', defaultRoommateIncome, true, true);
    this.addNewExpense_eoyb1f$(undefined, rentExpenseTitle, defaultRentExpenseCost, true, true);
    this.addNewExpense_eoyb1f$(undefined, utilitiesExpenseTitle, defaultUtilitiesExpenseCost, true, true);
  };
  RentSplit.prototype.recalculateRentSplit = function () {
    var roommates = this.fetchRoommates();
    var expenses = this.fetchExpenses();
    this.recalculateRoommateProportions_a4l0xx$(roommates);
    this.totalExpenses = this.recalculateTotalExpenses_sgeyu7$(expenses);
    this.fillOutResults_tm2r7c$(roommates, expenses);
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
    this.roommateCounter = 0;
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
    var tmp$, tmp$_0, tmp$_1;
    this.roommateCounter = this.roommateCounter + 1 | 0;
    return new RentRoommate((tmp$ = $(roommateNameInputSelector, jq_roommateRow).val()) != null ? tmp$ : 'Roommate #' + this.roommateCounter, (tmp$_1 = (tmp$_0 = $(roommateIncomeInputSelector, jq_roommateRow).val()) != null ? toDoubleOrNull(tmp$_0) : null) != null ? tmp$_1 : kotlin_js_internal_DoubleCompanionObject.NaN, jq_roommateRow);
  };
  RentSplit.prototype.expenseRowToExpense_folkv9$ = function (index, jq_expenseRow) {
    var tmp$, tmp$_0, tmp$_1;
    return new RentExpense((tmp$ = $(expenseNameInputSelector, jq_expenseRow).val()) != null ? tmp$ : '<EXPENSE>', (tmp$_1 = (tmp$_0 = $(expenseCostInputSelector, jq_expenseRow).val()) != null ? toDoubleOrNull(tmp$_0) : null) != null ? tmp$_1 : kotlin_js_internal_DoubleCompanionObject.NaN, jq_expenseRow);
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
    row += '<td class="plain vert-bottom">' + '<input' + ' type="number"' + (!(type == null || type.length === 0) ? ' id=' + '"' + 'total-' + toString(type) + '"' : '') + ' class="' + expenseCostInputClassName + '"' + ' required' + (' value=' + '"' + (cost != null ? cost : defaultExpenseCost) + '"') + ' step="10"' + ' size="8"' + ' tabindex=0' + (' placeholder=' + '"' + expenseCostPlaceholderText + '"') + '/>' + '<\/td>';
    if (!locked) {
      row += '<td' + (' class=' + '"' + removeAnExpenseButtonClassName + ' color-danger' + '"') + ' tabindex="0">' + '<i class="fa fa-minus-circle"><\/i>' + '<\/td>';
    }
    return row + '<\/tr>';
  };
  RentSplit.prototype.addNewRoommate_9ojx7i$ = function (event) {
    return this.addNewRoommate_eoyb1f$(event, null, null, false, false);
  };
  RentSplit.prototype.addNewRoommate_eoyb1f$ = function (event, name, income, locked, suppressCalculation) {
    this.roommateCounter = this.roommateCounter + 1 | 0;
    var jq_roommateButtonRow = $(addARoommateRowSelector);
    jq_roommateButtonRow.before(this.buildRoommateInputRow_3g7m9n$(name, income, locked));
    this.reRegisterListeners();
    if (!suppressCalculation) {
      this.recalculateRentSplit();
    }
  };
  RentSplit.prototype.buildRoommateInputRow_3g7m9n$ = function (name, income, isLocked) {
    var row = '<tr data-' + roommateRowDataName + '="' + toString(this.roommateCounter) + '">';
    row += '<th class="plain">' + '<input' + ' type="text"' + (' class=' + '"' + roommateNameInputClassName + '   text-right' + '"') + (!(name == null || name.length === 0) ? ' value="' + name + '"' : '') + ' size="8"' + ' tabindex=0' + (' placeholder=' + '"' + roommateNamePlaceholderText + '"') + '/>' + '<\/th>';
    row += '<td class="plain vert-bottom">' + '<input' + ' type="number"' + (' class=' + '"' + roommateIncomeInputClassName + '"') + ' required' + (' value=' + '"' + (income != null ? income : defaultRoommateIncome) + '"') + ' step="100"' + ' size="8"' + ' tabindex=0' + (' placeholder=' + '"' + roommateIncomePlaceholderText + '"') + '/>' + '<\/td>';
    row += '<td class=' + '"' + roommateProportionClassName + '"' + '>Calculating<\/td>';
    if (!isLocked) {
      row += '<td class=' + '"' + removeARoommateButtonClassName + ' color-danger' + '"' + ' tabindex="0">' + '<i class="fa fa-minus-circle"><\/i>' + '<\/td>';
    }
    return row + '<\/tr>';
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
    jq_resultsTableHeadRow.append('<th class=' + '"' + 'text-center' + '"' + '>' + roommateNameColumnTitle + '<\/th>');
    var tmp$;
    tmp$ = expenses.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.appendExpenseColumn_7jb809$(jq_resultsTableHeadRow, element);
    }
    jq_resultsTableHeadRow.append('<th class=' + '"' + 'text-center' + '"' + '>' + totalColumnTitle + '<\/th>');
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
  function RentSplit$buildResultRow$lambda(closure$roommate) {
    return function (it) {
      return "<td class='hide-small'>" + get_dollarFormat(closure$roommate.proportion * it.monthlyCost) + '<\/td>';
    };
  }
  RentSplit.prototype.buildResultRow_cxtimx$ = function (roommate, expenses) {
    var tmp$;
    var row = '<tr><th>' + roommate.name + '<\/th>';
    row += joinToString(expenses, '', void 0, void 0, void 0, void 0, RentSplit$buildResultRow$lambda(roommate));
    row = row + ('<th>' + get_dollarFormat(roommate.proportion * ((tmp$ = this.totalExpenses) != null ? tmp$ : 0.0)) + '<\/th>');
    return row + '<\/tr>';
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
  var get_parentElement = defineInlineFunction('Rent Split 2.jQueryInterface.get_parentElement_s15u7w$', function ($receiver) {
    return $receiver.parentElement;
  });
  var package$RentSplit = _.RentSplit || (_.RentSplit = {});
  package$RentSplit.isNeitherNullNorEmpty_5cw0du$ = isNeitherNullNorEmpty;
  package$RentSplit.isNeitherNullNorBlank_5cw0du$ = isNeitherNullNorBlank;
  package$RentSplit.get_dollarFormat_yrwdxr$ = get_dollarFormat;
  package$RentSplit.toFixed_j6vyb1$ = toFixed;
  Object.defineProperty(package$RentSplit, 'addARoommateRowId', {
    get: function () {
      return addARoommateRowId;
    },
    set: function (value) {
      addARoommateRowId = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'addARoommateRowSelector', {
    get: function () {
      return addARoommateRowSelector;
    },
    set: function (value) {
      addARoommateRowSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'addARoommateButtonId', {
    get: function () {
      return addARoommateButtonId;
    },
    set: function (value) {
      addARoommateButtonId = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'addARoommateButtonSelector', {
    get: function () {
      return addARoommateButtonSelector;
    },
    set: function (value) {
      addARoommateButtonSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'removeARoommateButtonClassName', {
    get: function () {
      return removeARoommateButtonClassName;
    },
    set: function (value) {
      removeARoommateButtonClassName = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'removeARoommateButtonSelector', {
    get: function () {
      return removeARoommateButtonSelector;
    },
    set: function (value) {
      removeARoommateButtonSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'addAnExpenseRowId', {
    get: function () {
      return addAnExpenseRowId;
    },
    set: function (value) {
      addAnExpenseRowId = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'addAnExpenseRowSelector', {
    get: function () {
      return addAnExpenseRowSelector;
    },
    set: function (value) {
      addAnExpenseRowSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'addAnExpenseButtonId', {
    get: function () {
      return addAnExpenseButtonId;
    },
    set: function (value) {
      addAnExpenseButtonId = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'addAnExpenseButtonSelector', {
    get: function () {
      return addAnExpenseButtonSelector;
    },
    set: function (value) {
      addAnExpenseButtonSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'removeAnExpenseButtonClassName', {
    get: function () {
      return removeAnExpenseButtonClassName;
    },
    set: function (value) {
      removeAnExpenseButtonClassName = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'removeAnExpenseButtonSelector', {
    get: function () {
      return removeAnExpenseButtonSelector;
    },
    set: function (value) {
      removeAnExpenseButtonSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateRowDataName', {
    get: function () {
      return roommateRowDataName;
    },
    set: function (value) {
      roommateRowDataName = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateRowSelector', {
    get: function () {
      return roommateRowSelector;
    },
    set: function (value) {
      roommateRowSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseRowDataName', {
    get: function () {
      return expenseRowDataName;
    },
    set: function (value) {
      expenseRowDataName = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseRowSelector', {
    get: function () {
      return expenseRowSelector;
    },
    set: function (value) {
      expenseRowSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateNameInputClassName', {
    get: function () {
      return roommateNameInputClassName;
    },
    set: function (value) {
      roommateNameInputClassName = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateNameInputSelector', {
    get: function () {
      return roommateNameInputSelector;
    },
    set: function (value) {
      roommateNameInputSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateIncomeInputClassName', {
    get: function () {
      return roommateIncomeInputClassName;
    },
    set: function (value) {
      roommateIncomeInputClassName = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateIncomeInputSelector', {
    get: function () {
      return roommateIncomeInputSelector;
    },
    set: function (value) {
      roommateIncomeInputSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateProportionClassName', {
    get: function () {
      return roommateProportionClassName;
    },
    set: function (value) {
      roommateProportionClassName = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateProportionSelector', {
    get: function () {
      return roommateProportionSelector;
    },
    set: function (value) {
      roommateProportionSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateAnyInputFieldSelector', {
    get: function () {
      return roommateAnyInputFieldSelector;
    },
    set: function (value) {
      roommateAnyInputFieldSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseNameInputClassName', {
    get: function () {
      return expenseNameInputClassName;
    },
    set: function (value) {
      expenseNameInputClassName = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseNameInputSelector', {
    get: function () {
      return expenseNameInputSelector;
    },
    set: function (value) {
      expenseNameInputSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseCostInputClassName', {
    get: function () {
      return expenseCostInputClassName;
    },
    set: function (value) {
      expenseCostInputClassName = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseCostInputSelector', {
    get: function () {
      return expenseCostInputSelector;
    },
    set: function (value) {
      expenseCostInputSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseAnyInputFieldSelector', {
    get: function () {
      return expenseAnyInputFieldSelector;
    },
    set: function (value) {
      expenseAnyInputFieldSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseTableSelector', {
    get: function () {
      return expenseTableSelector;
    },
    set: function (value) {
      expenseTableSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseTableBodySelector', {
    get: function () {
      return expenseTableBodySelector;
    },
    set: function (value) {
      expenseTableBodySelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'anyInputFieldSelector', {
    get: function () {
      return anyInputFieldSelector;
    },
    set: function (value) {
      anyInputFieldSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'anyInputButtonSelector', {
    get: function () {
      return anyInputButtonSelector;
    },
    set: function (value) {
      anyInputButtonSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'anyInputSelector', {
    get: function () {
      return anyInputSelector;
    },
    set: function (value) {
      anyInputSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'moneyAmountInputSelector', {
    get: function () {
      return moneyAmountInputSelector;
    },
    set: function (value) {
      moneyAmountInputSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'resultsTableSelector', {
    get: function () {
      return resultsTableSelector;
    },
    set: function (value) {
      resultsTableSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'resultsTableBodySelector', {
    get: function () {
      return resultsTableBodySelector;
    },
    set: function (value) {
      resultsTableBodySelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'resultsTableHeadRowSelector', {
    get: function () {
      return resultsTableHeadRowSelector;
    },
    set: function (value) {
      resultsTableHeadRowSelector = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'rentExpenseTitle', {
    get: function () {
      return rentExpenseTitle;
    },
    set: function (value) {
      rentExpenseTitle = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'utilitiesExpenseTitle', {
    get: function () {
      return utilitiesExpenseTitle;
    },
    set: function (value) {
      utilitiesExpenseTitle = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateNamePlaceholderText', {
    get: function () {
      return roommateNamePlaceholderText;
    },
    set: function (value) {
      roommateNamePlaceholderText = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateIncomePlaceholderText', {
    get: function () {
      return roommateIncomePlaceholderText;
    },
    set: function (value) {
      roommateIncomePlaceholderText = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseTypePlaceholderText', {
    get: function () {
      return expenseTypePlaceholderText;
    },
    set: function (value) {
      expenseTypePlaceholderText = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseCostPlaceholderText', {
    get: function () {
      return expenseCostPlaceholderText;
    },
    set: function (value) {
      expenseCostPlaceholderText = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateNameColumnTitle', {
    get: function () {
      return roommateNameColumnTitle;
    },
    set: function (value) {
      roommateNameColumnTitle = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'totalColumnTitle', {
    get: function () {
      return totalColumnTitle;
    },
    set: function (value) {
      totalColumnTitle = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'defaultRoommateIncome', {
    get: function () {
      return defaultRoommateIncome;
    },
    set: function (value) {
      defaultRoommateIncome = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'defaultExpenseCost', {
    get: function () {
      return defaultExpenseCost;
    },
    set: function (value) {
      defaultExpenseCost = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'defaultRentExpenseCost', {
    get: function () {
      return defaultRentExpenseCost;
    },
    set: function (value) {
      defaultRentExpenseCost = value;
    }
  });
  Object.defineProperty(package$RentSplit, 'defaultUtilitiesExpenseCost', {
    get: function () {
      return defaultUtilitiesExpenseCost;
    },
    set: function (value) {
      defaultUtilitiesExpenseCost = value;
    }
  });
  $$importsForInline$$['Rent Split 2'] = _;
  package$RentSplit.RentSplit = RentSplit;
  package$RentSplit.RentRoommate = RentRoommate;
  package$RentSplit.RentExpense = RentExpense;
  package$RentSplit.main_kand9s$ = main;
  var package$jQueryInterface = _.jQueryInterface || (_.jQueryInterface = {});
  package$jQueryInterface.get_parentElement_s15u7w$ = get_parentElement;
  addARoommateRowId = 'Add-Roommate-Row';
  addARoommateRowSelector = '#' + addARoommateRowId;
  addARoommateButtonId = 'Add-Roommate-Button';
  addARoommateButtonSelector = '#' + addARoommateButtonId;
  removeARoommateButtonClassName = 'remove-roommate-button';
  removeARoommateButtonSelector = '.' + removeARoommateButtonClassName;
  addAnExpenseRowId = 'Add-Expense-Row';
  addAnExpenseRowSelector = '#' + addAnExpenseRowId;
  addAnExpenseButtonId = 'Add-Expense-Button';
  addAnExpenseButtonSelector = '#' + addAnExpenseButtonId;
  removeAnExpenseButtonClassName = 'remove-expense-button';
  removeAnExpenseButtonSelector = '.' + removeAnExpenseButtonClassName;
  roommateRowDataName = 'roommate-row';
  roommateRowSelector = '[data-' + roommateRowDataName + ']';
  expenseRowDataName = 'expense-row';
  expenseRowSelector = '[data-' + expenseRowDataName + ']';
  roommateNameInputClassName = 'roommate-name';
  roommateNameInputSelector = '.' + roommateNameInputClassName;
  roommateIncomeInputClassName = 'roommate-income';
  roommateIncomeInputSelector = '.' + roommateIncomeInputClassName;
  roommateProportionClassName = 'roommate-proportion';
  roommateProportionSelector = '.' + roommateProportionClassName;
  roommateAnyInputFieldSelector = roommateNameInputSelector + ',' + roommateIncomeInputSelector;
  expenseNameInputClassName = 'expense-name';
  expenseNameInputSelector = '.' + expenseNameInputClassName;
  expenseCostInputClassName = 'expense-cost';
  expenseCostInputSelector = '.' + expenseCostInputClassName;
  expenseAnyInputFieldSelector = expenseNameInputSelector + ',' + expenseCostInputSelector;
  expenseTableSelector = '#Expenses';
  expenseTableBodySelector = expenseTableSelector + '>tbody';
  anyInputFieldSelector = roommateAnyInputFieldSelector + ',' + expenseAnyInputFieldSelector;
  anyInputButtonSelector = addARoommateButtonSelector + ',' + addAnExpenseButtonSelector + ',' + removeAnExpenseButtonSelector;
  anyInputSelector = anyInputFieldSelector + ',' + anyInputButtonSelector;
  moneyAmountInputSelector = roommateIncomeInputSelector + ',' + expenseCostInputSelector;
  resultsTableSelector = '#Results';
  resultsTableBodySelector = resultsTableSelector + '>tbody';
  resultsTableHeadRowSelector = resultsTableSelector + '>thead>tr';
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
