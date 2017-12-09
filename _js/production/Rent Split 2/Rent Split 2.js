if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Rent Split 2'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Rent Split 2'.");
}
this['Rent Split 2'] = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var getCallableRef = Kotlin.getCallableRef;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Unit = Kotlin.kotlin.Unit;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var toString = Kotlin.toString;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Pair = Kotlin.kotlin.Pair;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var Any = Object;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  var ObservableProperty = Kotlin.kotlin.properties.ObservableProperty;
  observing$ObjectLiteral.prototype = Object.create(ObservableProperty.prototype);
  observing$ObjectLiteral.prototype.constructor = observing$ObjectLiteral;
  function RentExpense(type, monthlyCost, isRemovable, isRenamable, originalDOMElement) {
    RentExpense$Companion_getInstance();
    if (originalDOMElement === void 0)
      originalDOMElement = null;
    this.type = type;
    this.monthlyCost = monthlyCost;
    this.isRemovable = isRemovable;
    this.isRenamable = isRenamable;
    this.originalDOMElement = originalDOMElement;
  }
  function RentExpense$Companion() {
    RentExpense$Companion_instance = this;
  }
  Object.defineProperty(RentExpense$Companion.prototype, 'initialRent', {
    get: function () {
      return new RentExpense(rentExpenseTitle, defaultRentExpenseCost, false, false);
    }
  });
  Object.defineProperty(RentExpense$Companion.prototype, 'initialUtilities', {
    get: function () {
      return new RentExpense(utilitiesExpenseTitle, defaultUtilitiesExpenseCost, false, false);
    }
  });
  RentExpense$Companion.prototype.type_9d67ql$ = function (ideal, backupNumber) {
    var tmp$;
    return (tmp$ = ideal != null ? nonEmptyOrNull(ideal) : null) != null ? tmp$ : this.numberedType_za3lpa$(backupNumber);
  };
  RentExpense$Companion.prototype.numberedType_za3lpa$ = function (number) {
    return 'Expense #' + number;
  };
  RentExpense$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RentExpense$Companion_instance = null;
  function RentExpense$Companion_getInstance() {
    if (RentExpense$Companion_instance === null) {
      new RentExpense$Companion();
    }
    return RentExpense$Companion_instance;
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
    return this.isRemovable;
  };
  RentExpense.prototype.component4 = function () {
    return this.isRenamable;
  };
  RentExpense.prototype.component5 = function () {
    return this.originalDOMElement;
  };
  RentExpense.prototype.copy_tt7xri$ = function (type, monthlyCost, isRemovable, isRenamable, originalDOMElement) {
    return new RentExpense(type === void 0 ? this.type : type, monthlyCost === void 0 ? this.monthlyCost : monthlyCost, isRemovable === void 0 ? this.isRemovable : isRemovable, isRenamable === void 0 ? this.isRenamable : isRenamable, originalDOMElement === void 0 ? this.originalDOMElement : originalDOMElement);
  };
  RentExpense.prototype.toString = function () {
    return 'RentExpense(type=' + Kotlin.toString(this.type) + (', monthlyCost=' + Kotlin.toString(this.monthlyCost)) + (', isRemovable=' + Kotlin.toString(this.isRemovable)) + (', isRenamable=' + Kotlin.toString(this.isRenamable)) + (', originalDOMElement=' + Kotlin.toString(this.originalDOMElement)) + ')';
  };
  RentExpense.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.monthlyCost) | 0;
    result = result * 31 + Kotlin.hashCode(this.isRemovable) | 0;
    result = result * 31 + Kotlin.hashCode(this.isRenamable) | 0;
    result = result * 31 + Kotlin.hashCode(this.originalDOMElement) | 0;
    return result;
  };
  RentExpense.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.monthlyCost, other.monthlyCost) && Kotlin.equals(this.isRemovable, other.isRemovable) && Kotlin.equals(this.isRenamable, other.isRenamable) && Kotlin.equals(this.originalDOMElement, other.originalDOMElement)))));
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function RentExpenses(allExpenses, totalExpenses) {
    if (totalExpenses === void 0) {
      var transform = getPropertyCallableRef('monthlyCost', 1, function ($receiver) {
        return $receiver.monthlyCost;
      });
      var destination = ArrayList_init(collectionSizeOrDefault(allExpenses, 10));
      var tmp$;
      tmp$ = allExpenses.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(transform(item));
      }
      totalExpenses = reduceTo(destination, 0.0, getCallableRef('plus', function ($receiver, other) {
        return $receiver + other;
      }));
    }
    this.allExpenses = allExpenses;
    this.totalExpenses = totalExpenses;
  }
  RentExpenses.prototype.adding_pbrwj2$ = function (newExpense) {
    return this.copy_3hmhdd$(adding(this.allExpenses, newExpense));
  };
  RentExpenses.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RentExpenses',
    interfaces: []
  };
  RentExpenses.prototype.component1 = function () {
    return this.allExpenses;
  };
  RentExpenses.prototype.component2 = function () {
    return this.totalExpenses;
  };
  RentExpenses.prototype.copy_3hmhdd$ = function (allExpenses, totalExpenses) {
    return new RentExpenses(allExpenses === void 0 ? this.allExpenses : allExpenses, totalExpenses === void 0 ? this.totalExpenses : totalExpenses);
  };
  RentExpenses.prototype.toString = function () {
    return 'RentExpenses(allExpenses=' + Kotlin.toString(this.allExpenses) + (', totalExpenses=' + Kotlin.toString(this.totalExpenses)) + ')';
  };
  RentExpenses.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.allExpenses) | 0;
    result = result * 31 + Kotlin.hashCode(this.totalExpenses) | 0;
    return result;
  };
  RentExpenses.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.allExpenses, other.allExpenses) && Kotlin.equals(this.totalExpenses, other.totalExpenses)))));
  };
  function RentRoommate(name, monthlyIncome, isRemovable, isRenamable, originalDOMElement, proportion) {
    RentRoommate$Companion_getInstance();
    if (originalDOMElement === void 0)
      originalDOMElement = null;
    if (proportion === void 0)
      proportion = null;
    this.name = name;
    this.monthlyIncome = monthlyIncome;
    this.isRemovable = isRemovable;
    this.isRenamable = isRenamable;
    this.originalDOMElement = originalDOMElement;
    this.proportion = proportion;
  }
  function RentRoommate$Companion() {
    RentRoommate$Companion_instance = this;
  }
  Object.defineProperty(RentRoommate$Companion.prototype, 'initial', {
    get: function () {
      return new RentRoommate('', defaultRoommateIncome, false, true);
    }
  });
  RentRoommate$Companion.prototype.name_9d67ql$ = function (ideal, backupNumber) {
    var tmp$;
    return (tmp$ = ideal != null ? nonEmptyOrNull(ideal) : null) != null ? tmp$ : this.numberedName_za3lpa$(backupNumber);
  };
  RentRoommate$Companion.prototype.numberedName_za3lpa$ = function (number) {
    return 'Room' + '\xAD' + 'mate #' + number;
  };
  RentRoommate$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RentRoommate$Companion_instance = null;
  function RentRoommate$Companion_getInstance() {
    if (RentRoommate$Companion_instance === null) {
      new RentRoommate$Companion();
    }
    return RentRoommate$Companion_instance;
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
    return this.isRemovable;
  };
  RentRoommate.prototype.component4 = function () {
    return this.isRenamable;
  };
  RentRoommate.prototype.component5 = function () {
    return this.originalDOMElement;
  };
  RentRoommate.prototype.component6 = function () {
    return this.proportion;
  };
  RentRoommate.prototype.copy_m0fch1$ = function (name, monthlyIncome, isRemovable, isRenamable, originalDOMElement, proportion) {
    return new RentRoommate(name === void 0 ? this.name : name, monthlyIncome === void 0 ? this.monthlyIncome : monthlyIncome, isRemovable === void 0 ? this.isRemovable : isRemovable, isRenamable === void 0 ? this.isRenamable : isRenamable, originalDOMElement === void 0 ? this.originalDOMElement : originalDOMElement, proportion === void 0 ? this.proportion : proportion);
  };
  RentRoommate.prototype.toString = function () {
    return 'RentRoommate(name=' + Kotlin.toString(this.name) + (', monthlyIncome=' + Kotlin.toString(this.monthlyIncome)) + (', isRemovable=' + Kotlin.toString(this.isRemovable)) + (', isRenamable=' + Kotlin.toString(this.isRenamable)) + (', originalDOMElement=' + Kotlin.toString(this.originalDOMElement)) + (', proportion=' + Kotlin.toString(this.proportion)) + ')';
  };
  RentRoommate.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.monthlyIncome) | 0;
    result = result * 31 + Kotlin.hashCode(this.isRemovable) | 0;
    result = result * 31 + Kotlin.hashCode(this.isRenamable) | 0;
    result = result * 31 + Kotlin.hashCode(this.originalDOMElement) | 0;
    result = result * 31 + Kotlin.hashCode(this.proportion) | 0;
    return result;
  };
  RentRoommate.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.monthlyIncome, other.monthlyIncome) && Kotlin.equals(this.isRemovable, other.isRemovable) && Kotlin.equals(this.isRenamable, other.isRenamable) && Kotlin.equals(this.originalDOMElement, other.originalDOMElement) && Kotlin.equals(this.proportion, other.proportion)))));
  };
  function nonEmptyName($receiver, index) {
    return RentRoommate$Companion_getInstance().name_9d67ql$(nonEmptyOrNull($receiver.name), index + 1 | 0);
  }
  function RentRoommates(allRoommates, totalIncome) {
    if (totalIncome === void 0) {
      var transform = getPropertyCallableRef('monthlyIncome', 1, function ($receiver) {
        return $receiver.monthlyIncome;
      });
      var destination = ArrayList_init(collectionSizeOrDefault(allRoommates, 10));
      var tmp$;
      tmp$ = allRoommates.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(transform(item));
      }
      totalIncome = reduceTo(destination, 0.0, getCallableRef('plus', function ($receiver, other) {
        return $receiver + other;
      }));
    }
    this.allRoommates = allRoommates;
    this.totalIncome = totalIncome;
  }
  RentRoommates.prototype.adding_pcqrmu$ = function (newRoommate) {
    return this.copy_c53kkp$(adding(this.allRoommates, newRoommate));
  };
  RentRoommates.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RentRoommates',
    interfaces: []
  };
  RentRoommates.prototype.component1 = function () {
    return this.allRoommates;
  };
  RentRoommates.prototype.component2 = function () {
    return this.totalIncome;
  };
  RentRoommates.prototype.copy_c53kkp$ = function (allRoommates, totalIncome) {
    return new RentRoommates(allRoommates === void 0 ? this.allRoommates : allRoommates, totalIncome === void 0 ? this.totalIncome : totalIncome);
  };
  RentRoommates.prototype.toString = function () {
    return 'RentRoommates(allRoommates=' + Kotlin.toString(this.allRoommates) + (', totalIncome=' + Kotlin.toString(this.totalIncome)) + ')';
  };
  RentRoommates.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.allRoommates) | 0;
    result = result * 31 + Kotlin.hashCode(this.totalIncome) | 0;
    return result;
  };
  RentRoommates.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.allRoommates, other.allRoommates) && Kotlin.equals(this.totalIncome, other.totalIncome)))));
  };
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
  var roommateNameInputClassName;
  var roommateNameInputSelector;
  var roommateIncomeInputClassName;
  var roommateIncomeInputSelector;
  var roommateProportionClassName;
  var roommateProportionSelector;
  var roommateAnyInputFieldSelector;
  var roommateWhoOwesTooMuchClassName;
  var roommateRemovabilityDataName;
  var roommateRemovabilityAttribute;
  var roommateRemovabilitySelector;
  var roommateRenamabilityDataName;
  var roommateRenamabilityAttribute;
  var roommateRenamabilitySelector;
  var expenseTypeInputClassName;
  var expenseTypeInputSelector;
  var expenseCostInputClassName;
  var expenseCostInputSelector;
  var expenseAnyInputFieldSelector;
  var expenseRemovabilityDataName;
  var expenseRemovabilityAttribute;
  var expenseRemovabilitySelector;
  var expenseRenamabilityDataName;
  var expenseRenamabilityAttribute;
  var expenseRenamabilitySelector;
  var resultRowDataName;
  var resultRowAttribute;
  var resultRowSelector;
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
    this.state_8j2skj$_0 = observing(load(RentSplitState$Companion_getInstance()), void 0, void 0, RentSplit$state$lambda(this));
  }
  Object.defineProperty(RentSplit.prototype, 'state', {
    get: function () {
      return this.state_8j2skj$_0.getValue_lrcp0p$(this, new PropertyMetadata('state'));
    },
    set: function (state) {
      this.state_8j2skj$_0.setValue_9rddgb$(this, new PropertyMetadata('state'), state);
    }
  });
  RentSplit.prototype.onReady = function () {
    this.regenerateInputTables();
    this.registerListeners();
    this.recalculateRentSplit();
    this.presentToUser();
  };
  RentSplit.prototype.reRegisterListeners = function () {
    $(anyInputSelector).off();
    this.registerListeners();
  };
  RentSplit.prototype.registerListeners = function () {
    $(anyInputFieldSelector).change(getCallableRef('anyInputFieldDidChange', function ($receiver, event) {
      return $receiver.anyInputFieldDidChange_g0pdib$(event), Unit;
    }.bind(null, this)));
    $(addAnExpenseButtonSelector).click(getCallableRef('didPressNewExpenseButton', function ($receiver, event) {
      return $receiver.didPressNewExpenseButton_9ojx7i$(event), Unit;
    }.bind(null, this)));
    $(removeAnExpenseButtonSelector).click(getCallableRef('didPressRemoveExpenseButton', function ($receiver, event) {
      return $receiver.didPressRemoveExpenseButton_9ojx7i$(event), Unit;
    }.bind(null, this)));
    $(addARoommateButtonSelector).click(getCallableRef('didPressNewRoommateButton', function ($receiver, event) {
      return $receiver.didPressNewRoommateButton_9ojx7i$(event), Unit;
    }.bind(null, this)));
    $(removeARoommateButtonSelector).click(getCallableRef('didPressRemoveRoommateButton', function ($receiver, event) {
      return $receiver.didPressRemoveRoommateButton_9ojx7i$(event), Unit;
    }.bind(null, this)));
  };
  RentSplit.prototype.anyInputFieldDidChange_g0pdib$ = function (event) {
    this.reloadStateFromPage();
  };
  RentSplit.prototype.reloadStateFromPage = function () {
    this.state = new RentSplitState(this.fetchRoommates(), this.fetchExpenses());
  };
  RentSplit.prototype.recalculateRentSplit = function () {
    var roommates = this.state.roommates;
    var expenses = this.state.expenses;
    this.recalculateRoommateProportions_4mt70t$(roommates);
    this.fillOutResults_ra4pb4$(roommates, expenses);
    this.notifyOfProblems_ra4pb4$(roommates, expenses);
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
  function RentSplit$roommateRowsToRoommates$lambda(this$RentSplit) {
    return function (index, roommateRow) {
      return this$RentSplit.roommateRowToRoommate_folkv9$(index, $(roommateRow));
    };
  }
  RentSplit.prototype.roommateRowsToRoommates_r6ezyp$ = function (jq_roommateRows) {
    return new RentRoommates(asList(jq_roommateRows.map(RentSplit$roommateRowsToRoommates$lambda(this))));
  };
  function RentSplit$expenseRowsToExpenses$lambda(this$RentSplit) {
    return function (index, expenseRow) {
      return this$RentSplit.expenseRowToExpense_folkv9$(index, $(expenseRow));
    };
  }
  RentSplit.prototype.expenseRowsToExpenses_r6ezyp$ = function (jq_expenseRows) {
    return new RentExpenses(asList(jq_expenseRows.map(RentSplit$expenseRowsToExpenses$lambda(this))));
  };
  RentSplit.prototype.roommateRowToRoommate_folkv9$ = function (index, jq_roommateRow) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    return new RentRoommate((tmp$ = $(roommateNameInputSelector, jq_roommateRow).val()) != null ? tmp$ : '', (tmp$_1 = (tmp$_0 = $(roommateIncomeInputSelector, jq_roommateRow).val()) != null ? toDoubleOrNull(tmp$_0) : null) != null ? tmp$_1 : kotlin_js_internal_DoubleCompanionObject.NaN, (tmp$_3 = (tmp$_2 = jq_roommateRow.attr(roommateRemovabilityAttribute)) != null ? toBooleanOrNull(tmp$_2) : null) != null ? tmp$_3 : true, (tmp$_5 = (tmp$_4 = jq_roommateRow.attr(roommateRenamabilityAttribute)) != null ? toBooleanOrNull(tmp$_4) : null) != null ? tmp$_5 : true, jq_roommateRow);
  };
  RentSplit.prototype.expenseRowToExpense_folkv9$ = function (index, jq_expenseRow) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    return new RentExpense((tmp$ = $(expenseTypeInputSelector, jq_expenseRow).val()) != null ? tmp$ : '', (tmp$_1 = (tmp$_0 = $(expenseCostInputSelector, jq_expenseRow).val()) != null ? toDoubleOrNull(tmp$_0) : null) != null ? tmp$_1 : kotlin_js_internal_DoubleCompanionObject.NaN, (tmp$_3 = (tmp$_2 = jq_expenseRow.attr(expenseRemovabilityAttribute)) != null ? toBooleanOrNull(tmp$_2) : null) != null ? tmp$_3 : true, (tmp$_5 = (tmp$_4 = jq_expenseRow.attr(expenseRenamabilityAttribute)) != null ? toBooleanOrNull(tmp$_4) : null) != null ? tmp$_5 : true, jq_expenseRow);
  };
  RentSplit.prototype.recalculateRoommateProportions_4mt70t$ = function (roommates) {
    var totalIncome = roommates.totalIncome;
    var tmp$;
    tmp$ = roommates.allRoommates.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.recalculateRoommateProportion_1jegqw$(element, totalIncome);
    }
    this.displayRoommateProportions_4mt70t$(roommates);
  };
  RentSplit.prototype.recalculateRoommateProportion_1jegqw$ = function (roommate, totalIncome) {
    roommate.proportion = roommate.monthlyIncome / totalIncome;
  };
  RentSplit.prototype.displayRoommateProportions_4mt70t$ = function (roommates) {
    var $receiver = roommates.allRoommates;
    var action = getCallableRef('displayRoommateProportion', function ($receiver, roommate) {
      return $receiver.displayRoommateProportion_pcqrmu$(roommate), Unit;
    }.bind(null, this));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      action(element);
    }
  };
  RentSplit.prototype.displayRoommateProportion_pcqrmu$ = function (roommate) {
    var tmp$;
    if ((tmp$ = roommate.originalDOMElement) != null) {
      var tmp$_0;
      $(roommateProportionSelector, tmp$).html(toFixed(((tmp$_0 = roommate.proportion) != null ? tmp$_0 : 0.0) * 100, 2) + '%');
    }
  };
  RentSplit.prototype.regenerateInputTables = function () {
    this.regenerateRoommateInputTable_0();
    this.regenerateExpenseInputTable_0();
  };
  RentSplit.prototype.regenerateInputTable_0 = function (rowSelector, allResources, configureExistingInput, insertNewInput) {
    var existingInputs = asList($(rowSelector).toArray());
    var offset = existingInputs.size;
    var newResources = allResources.subList_vux9f0$(offset, allResources.size);
    var tmp$;
    tmp$ = zip(existingInputs, allResources).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var existingInput = element.component1()
      , expense = element.component2();
      configureExistingInput(existingInput, expense);
    }
    var tmp$_0, tmp$_0_0;
    var index = 0;
    tmp$_0 = newResources.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      insertNewInput((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0) + offset | 0, item);
    }
  };
  function RentSplit$regenerateExpenseInputTable$lambda(this$RentSplit) {
    return function (existingExpenseInput, expense) {
      this$RentSplit.configureExistingExpenseInputRow_0(existingExpenseInput, expense);
      return Unit;
    };
  }
  function RentSplit$regenerateExpenseInputTable$lambda_0(this$RentSplit) {
    return function (explicitIndex, expense) {
      this$RentSplit.insertNewExpenseInputRow_nly0u5$(explicitIndex, expense);
      return Unit;
    };
  }
  RentSplit.prototype.regenerateExpenseInputTable_0 = function () {
    this.regenerateInputTable_0(expenseRowSelector, this.state.expenses.allExpenses, RentSplit$regenerateExpenseInputTable$lambda(this), RentSplit$regenerateExpenseInputTable$lambda_0(this));
  };
  RentSplit.prototype.configureExistingExpenseInputRow_0 = function (existingExpenseInput, expense) {
    var jq_existingExpenseInput = $(existingExpenseInput);
    expense.originalDOMElement = jq_existingExpenseInput;
    $(expenseTypeInputSelector, existingExpenseInput).val(expense.type);
    $(expenseCostInputSelector, existingExpenseInput).val(expense.monthlyCost);
    attr(jq_existingExpenseInput, expenseRenamabilityAttribute, expense.isRenamable);
    attr(jq_existingExpenseInput, expenseRemovabilityAttribute, expense.isRemovable);
  };
  RentSplit.prototype.regenerateRoommateInputTable_0 = function () {
    this.regenerateInputTable_0(roommateRowSelector, this.state.roommates.allRoommates, getCallableRef('configureExistingRoommateInputRow', function ($receiver, existingRoommateInputTableRow, roommate) {
      return $receiver.configureExistingRoommateInputRow_0(existingRoommateInputTableRow, roommate), Unit;
    }.bind(null, this)), getCallableRef('insertNewRoommateInputRow', function ($receiver, explicitIndex, roommate) {
      return $receiver.insertNewRoommateInputRow_7kd045$(explicitIndex, roommate), Unit;
    }.bind(null, this)));
  };
  RentSplit.prototype.configureExistingRoommateInputRow_0 = function (existingRoommateInputTableRow, roommate) {
    var jq_existingRoommateInputTableRow = $(existingRoommateInputTableRow);
    roommate.originalDOMElement = jq_existingRoommateInputTableRow;
    $(roommateNameInputSelector, existingRoommateInputTableRow).val(roommate.name);
    $(roommateIncomeInputSelector, existingRoommateInputTableRow).val(roommate.monthlyIncome);
    this.displayRoommateProportion_pcqrmu$(roommate);
    attr(jq_existingRoommateInputTableRow, roommateRenamabilityAttribute, roommate.isRenamable);
    attr(jq_existingRoommateInputTableRow, roommateRemovabilityAttribute, roommate.isRemovable);
  };
  RentSplit.prototype.didPressNewExpenseButton_9ojx7i$ = function (event) {
    this.addNewExpense_rhtjr1$(new RentExpense('', defaultExpenseCost, true, true), event);
  };
  RentSplit.prototype.addNewExpense_rhtjr1$ = function (newExpense, event) {
    if (event === void 0)
      event = null;
    this.state = addingNewExpense(this.state, newExpense);
  };
  RentSplit.prototype.insertNewExpenseInputRow_nly0u5$ = function (explicitIndex, expense) {
    if (explicitIndex === void 0)
      explicitIndex = null;
    var expenseInputHtml = this.buildExpenseInputRow_cymhq0$(explicitIndex != null ? explicitIndex : this.numberOfExpensesOnPage(), expense);
    expense.originalDOMElement = $(addAnExpenseRowSelector).before(expenseInputHtml).prev();
  };
  RentSplit.prototype.buildExpenseInputRow_cymhq0$ = function (index, expense) {
    return this.buildExpenseInputRow_cefq5e$(index, expense.type, expense.monthlyCost, expense.isRenamable, expense.isRemovable);
  };
  RentSplit.prototype.buildExpenseInputRow_cefq5e$ = function (index, type, cost, isRenamable, isRemovable) {
    var row = '<tr' + (' data-' + expenseRowDataName + '=' + '"' + index + '"') + (' ' + expenseRenamabilityAttribute + "='" + isRenamable + "'") + (' ' + expenseRemovabilityAttribute + "='" + isRemovable + "'") + '>';
    var tmp$ = '<th' + (isRenamable ? ' class="plain"' : '') + '>' + '<input' + (' type=' + '"' + (isRenamable ? 'text' : 'hidden') + '"') + ' class="expense-type   text-right"' + (!(type == null || type.length === 0) ? ' value=' + '"' + toString(type) + '"' : '') + ' size="8"' + ' tabindex=0' + ' placeholder="Type"' + '/>';
    var tmp$_0 = !isRenamable;
    if (tmp$_0) {
      tmp$_0 = !(type == null || type.length === 0);
    }
    row += tmp$ + (tmp$_0 ? type : '') + '<\/th>';
    row += '<td class="plain vert-bottom">' + '<input' + ' type="number"' + (!(type == null || type.length === 0) ? ' id=' + '"' + 'total-' + toString(type) + '"' : '') + ' class="expense-cost"' + ' required' + (' value=' + '"' + (cost != null ? cost : defaultExpenseCost) + '"') + ' step="10"' + ' size="8"' + ' tabindex=0' + ' placeholder="Monthly Cost"' + '/>' + '<\/td>';
    if (isRemovable) {
      row += '<td' + ' class="remove-expense-button color-danger"' + ' tabindex="0">' + '<i class="fa fa-minus-circle"><\/i>' + '<\/td>';
    }
    return row + '<\/tr>';
  };
  RentSplit.prototype.didPressNewRoommateButton_9ojx7i$ = function (event) {
    return this.addNewRoommate_an8xux$(new RentRoommate('', defaultRoommateIncome, true, true), event);
  };
  RentSplit.prototype.addNewRoommate_an8xux$ = function (newRoommate, event) {
    if (event === void 0)
      event = null;
    this.state = addingNewRoommate(this.state, newRoommate);
  };
  RentSplit.prototype.insertNewRoommateInputRow_7kd045$ = function (explicitIndex, roommate) {
    if (explicitIndex === void 0)
      explicitIndex = null;
    var roommateInputHtml = this.buildRoommateInputRow_hi9t74$(explicitIndex != null ? explicitIndex : this.numberOfExpensesOnPage(), roommate);
    roommate.originalDOMElement = $(addARoommateRowSelector).before(roommateInputHtml).prev();
  };
  RentSplit.prototype.buildRoommateInputRow_hi9t74$ = function (index, roommate) {
    return this.buildRoommateInputRow_cefq5e$(index, roommate.name, roommate.monthlyIncome, roommate.isRenamable, roommate.isRemovable);
  };
  RentSplit.prototype.buildRoommateInputRow_cefq5e$ = function (index, name, income, isRenamable, isRemovable) {
    var roommateNumber = this.numberOfRoommates() + 1 | 0;
    var row = '<tr' + (' data-' + roommateRowDataName + "='" + roommateNumber + "'") + (' ' + roommateRenamabilityAttribute + "='" + isRenamable + "'") + (' ' + roommateRemovabilityAttribute + "='" + isRemovable + "'") + '>';
    row += '<th class="plain">' + '<input' + ' type="text"' + ' class="roommate-name   text-right"' + (!(name == null || name.length === 0) ? ' value="' + name + '"' : '') + ' size="8"' + ' tabindex=0' + ' placeholder="Name"' + '/>' + '<\/th>';
    row += '<td class="plain vert-bottom">' + '<input' + ' type="number"' + ' class="roommate-income"' + ' required' + (' value=' + '"' + (income != null ? income : defaultRoommateIncome) + '"') + ' step="100"' + ' size="8"' + ' tabindex=0' + ' placeholder="Income"' + '/>' + '<\/td>';
    row += '<td class="roommate-proportion">Calculating<\/td>';
    if (isRemovable) {
      row += '<td class="remove-roommate-button color-danger"' + ' tabindex="0">' + '<i class="fa fa-minus-circle"><\/i>' + '<\/td>';
    }
    return row + '<\/tr>';
  };
  RentSplit.prototype.numberOfRoommates = function () {
    return this.state.roommates.allRoommates.size;
  };
  RentSplit.prototype.numberOfRoommatesOnPage = function () {
    return $(roommateRowSelector).length;
  };
  RentSplit.prototype.numberOfExpenses = function () {
    return this.state.expenses.allExpenses.size;
  };
  RentSplit.prototype.numberOfExpensesOnPage = function () {
    return $(expenseRowSelector).length;
  };
  RentSplit.prototype.didPressRemoveExpenseButton_9ojx7i$ = function (event) {
    var tmp$;
    var expenseRow = (tmp$ = event.currentTarget) != null ? tmp$.parentElement : null;
    expenseRow != null ? (expenseRow.remove(), Unit) : null;
    this.reloadStateFromPage();
  };
  RentSplit.prototype.didPressRemoveRoommateButton_9ojx7i$ = function (event) {
    var tmp$;
    var roommateRow = (tmp$ = event.currentTarget) != null ? tmp$.parentElement : null;
    roommateRow != null ? (roommateRow.remove(), Unit) : null;
    this.reloadStateFromPage();
  };
  RentSplit.prototype.fillOutResults_ra4pb4$ = function (roommates, expenses) {
    this.fillOutResultsTableHead_ra4pb4$(roommates, expenses);
    this.fillOutResultsTableBody_ra4pb4$(roommates, expenses);
  };
  RentSplit.prototype.fillOutResultsTableHead_ra4pb4$ = function (roommates, expenses) {
    var jq_resultsTableHeadRow = $(resultsTableHeadRowSelector);
    jq_resultsTableHeadRow.empty();
    jq_resultsTableHeadRow.append('<th class="text-center">Name<\/th>');
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = expenses.allExpenses.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      this.appendExpenseColumnHeader_w1v0qf$(jq_resultsTableHeadRow, item, (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
    }
    jq_resultsTableHeadRow.append('<th class="text-center">Total Cost<\/th>');
  };
  RentSplit.prototype.appendExpenseColumnHeader_w1v0qf$ = function (jq_resultsTableHeadRow, expense, index) {
    jq_resultsTableHeadRow.append("<th class='hide-small'>" + RentExpense$Companion_getInstance().type_9d67ql$(nonEmptyOrNull(expense.type), index + 1 | 0) + '<\/th>');
  };
  RentSplit.prototype.fillOutResultsTableBody_ra4pb4$ = function (roommates, expenses) {
    var jq_resultsTableBody = $(resultsTableBodySelector);
    jq_resultsTableBody.empty();
    var tmp$;
    tmp$ = roommates.allRoommates.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.appendResultRow_sx45l8$(jq_resultsTableBody, element, expenses);
    }
  };
  RentSplit.prototype.appendResultRow_sx45l8$ = function (jq_resultsTableBody, roommate, expenses) {
    jq_resultsTableBody.append(this.buildResultRow_day3s3$($(resultRowSelector).length, roommate, expenses));
  };
  function RentSplit$buildResultRow$lambda(closure$roommate, this$RentSplit) {
    return function (it) {
      return "<td class='hide-small'>" + get_dollarFormat(this$RentSplit.roommateContribution_ykbhv8$(closure$roommate, it)) + '<\/td>';
    };
  }
  RentSplit.prototype.buildResultRow_day3s3$ = function (rowIndex, roommate, expenses) {
    var roommateName = RentRoommate$Companion_getInstance().name_9d67ql$(nonEmptyOrNull(roommate.name), rowIndex + 1 | 0);
    var row = '<tr data-' + roommateResultRowDataName + "='" + roommateName + "'><th>" + roommateName + '<\/th>';
    row += joinToString(expenses.allExpenses, '', void 0, void 0, void 0, void 0, RentSplit$buildResultRow$lambda(roommate, this));
    row += '<th>' + get_dollarFormat(this.roommateTotalContributions_1jegqw$(roommate, expenses.totalExpenses)) + '<\/th>';
    return row + '<\/tr>';
  };
  RentSplit.prototype.roommateContribution_ykbhv8$ = function (roommate, expense) {
    var tmp$;
    return ((tmp$ = roommate.proportion) != null ? tmp$ : 0.0) * expense.monthlyCost;
  };
  RentSplit.prototype.roommateTotalContributions_1jegqw$ = function (roommate, totalExpenses) {
    var tmp$;
    return ((tmp$ = roommate.proportion) != null ? tmp$ : 0.0) * totalExpenses;
  };
  RentSplit.prototype.notifyOfProblems_ra4pb4$ = function (roommates, expenses) {
    var $receiver = roommates.allRoommates;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new Pair((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0), item));
    }
    var destination_0 = ArrayList_init();
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var roommate = element.component2();
      var roommateTotalContributions = this.roommateTotalContributions_1jegqw$(roommate, expenses.totalExpenses);
      if (roommateTotalContributions > roommate.monthlyIncome)
        destination_0.add_11rb$(element);
    }
    var roommatesWhoOweTooMuch = destination_0;
    var tmp$_2;
    tmp$_2 = roommatesWhoOweTooMuch.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      var index_0 = element_0.component1()
      , roommate_0 = element_0.component2();
      $('[data-' + roommateResultRowDataName + "='" + nonEmptyName(roommate_0, index_0) + "']").addClass(roommateWhoOwesTooMuchClassName).attr('title', 'This roommate owes too much!');
    }
  };
  function RentSplit$state$lambda(this$RentSplit) {
    return function (f, f_0) {
      this$RentSplit.regenerateInputTables();
      this$RentSplit.reRegisterListeners();
      this$RentSplit.recalculateRentSplit();
      return Unit;
    };
  }
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
  function RentSplitState(roommates, expenses) {
    RentSplitState$Companion_getInstance();
    this.roommates = roommates;
    this.expenses = expenses;
  }
  function RentSplitState$Companion() {
    RentSplitState$Companion_instance = this;
  }
  RentSplitState$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RentSplitState$Companion_instance = null;
  function RentSplitState$Companion_getInstance() {
    if (RentSplitState$Companion_instance === null) {
      new RentSplitState$Companion();
    }
    return RentSplitState$Companion_instance;
  }
  RentSplitState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RentSplitState',
    interfaces: []
  };
  RentSplitState.prototype.component1 = function () {
    return this.roommates;
  };
  RentSplitState.prototype.component2 = function () {
    return this.expenses;
  };
  RentSplitState.prototype.copy_ra4pb4$ = function (roommates, expenses) {
    return new RentSplitState(roommates === void 0 ? this.roommates : roommates, expenses === void 0 ? this.expenses : expenses);
  };
  RentSplitState.prototype.toString = function () {
    return 'RentSplitState(roommates=' + Kotlin.toString(this.roommates) + (', expenses=' + Kotlin.toString(this.expenses)) + ')';
  };
  RentSplitState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.roommates) | 0;
    result = result * 31 + Kotlin.hashCode(this.expenses) | 0;
    return result;
  };
  RentSplitState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.roommates, other.roommates) && Kotlin.equals(this.expenses, other.expenses)))));
  };
  var defaultRentSplitState;
  function get_default($receiver) {
    return defaultRentSplitState;
  }
  function load($receiver) {
    return get_default($receiver);
  }
  function addingNewRoommate($receiver, newRoommate) {
    return new RentSplitState($receiver.roommates.adding_pcqrmu$(newRoommate), $receiver.expenses);
  }
  function addingNewExpense($receiver, newExpense) {
    return new RentSplitState($receiver.roommates, $receiver.expenses.adding_pbrwj2$(newExpense));
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
  function toBooleanOrNull($receiver) {
    var tmp$;
    if ($receiver.length === 0)
      return null;
    else {
      tmp$ = $receiver.toLowerCase();
      if (equals(tmp$, 'true') || equals(tmp$, 't') || equals(tmp$, 'yes') || equals(tmp$, 'y') || equals(tmp$, '1') || equals(tmp$, 'on'))
        return true;
      else if (equals(tmp$, 'false') || equals(tmp$, 'f') || equals(tmp$, 'no') || equals(tmp$, 'n') || equals(tmp$, '0') || equals(tmp$, 'off'))
        return false;
      else
        return null;
    }
  }
  function toBoolean($receiver, valueIfInvalid) {
    if (valueIfInvalid === void 0)
      valueIfInvalid = true;
    var tmp$;
    return (tmp$ = toBooleanOrNull($receiver)) != null ? tmp$ : valueIfInvalid;
  }
  function reduceTo($receiver, start, transformer) {
    var value = {v: start};
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      value.v = transformer(value.v, element);
    }
    return value.v;
  }
  function adding($receiver, newElement) {
    var newExpenses = toMutableList($receiver);
    newExpenses.add_11rb$(newElement);
    return toList(newExpenses);
  }
  var asList_0 = defineInlineFunction('Rent Split 2.jQueryInterface.asList_9ufosi$', wrapFunction(function () {
    var asList = Kotlin.kotlin.collections.asList_us0mfu$;
    return function ($receiver) {
      return asList($receiver.toArray());
    };
  }));
  function attr($receiver, attrName, newValue) {
    return $receiver.attr(attrName, newValue.toString());
  }
  var get_parentElement = defineInlineFunction('Rent Split 2.jQueryInterface.get_parentElement_s15u7w$', function ($receiver) {
    return $receiver.parentElement;
  });
  function Observing(initialValue, shouldSet, willSet, didSet) {
    if (shouldSet === void 0)
      shouldSet = NullSSB();
    if (willSet === void 0)
      willSet = NullWSB();
    if (didSet === void 0)
      didSet = NullDSB();
    this.initialValue = initialValue;
    this.shouldSet = shouldSet;
    this.willSet = willSet;
    this.didSet = didSet;
    this.syncLock = new Any();
  }
  Observing.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this.initialValue;
  };
  Observing.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    if (this.shouldSet(this.initialValue, value)) {
      var oldValue = this.initialValue;
      this.willSet(oldValue, value);
      this.initialValue = value;
      this.didSet(oldValue, value);
    }
  };
  Observing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Observing',
    interfaces: [ReadWriteProperty]
  };
  function NullWSB$lambda(f, f_0) {
    return Unit;
  }
  function NullWSB() {
    return NullWSB$lambda;
  }
  function NullSSB$lambda(f, f_0) {
    return true;
  }
  function NullSSB() {
    return NullSSB$lambda;
  }
  function NullDSB$lambda(f, f_0) {
    return Unit;
  }
  function NullDSB() {
    return NullDSB$lambda;
  }
  function observing$ObjectLiteral(closure$shouldSet, closure$willSet, closure$didSet, initialValue) {
    this.closure$shouldSet = closure$shouldSet;
    this.closure$willSet = closure$willSet;
    this.closure$didSet = closure$didSet;
    ObservableProperty.call(this, initialValue);
  }
  observing$ObjectLiteral.prototype.beforeChange_jxtfl0$ = function (property, oldValue, newValue) {
    if (this.closure$shouldSet(oldValue, newValue)) {
      this.closure$willSet(oldValue, newValue);
      return true;
    }
     else {
      return false;
    }
  };
  observing$ObjectLiteral.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$didSet(oldValue, newValue);
  };
  observing$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ObservableProperty]
  };
  function observing(initialValue, willSet, shouldSet, didSet) {
    if (willSet === void 0)
      willSet = NullWSB();
    if (shouldSet === void 0)
      shouldSet = NullSSB();
    if (didSet === void 0)
      didSet = NullDSB();
    return new observing$ObjectLiteral(shouldSet, willSet, didSet, initialValue);
  }
  Object.defineProperty(RentExpense, 'Companion', {
    get: RentExpense$Companion_getInstance
  });
  var package$RentSplit = _.RentSplit || (_.RentSplit = {});
  package$RentSplit.RentExpense = RentExpense;
  package$RentSplit.RentExpenses = RentExpenses;
  Object.defineProperty(RentRoommate, 'Companion', {
    get: RentRoommate$Companion_getInstance
  });
  package$RentSplit.RentRoommate = RentRoommate;
  package$RentSplit.nonEmptyName_ne3jqj$ = nonEmptyName;
  package$RentSplit.RentRoommates = RentRoommates;
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
  Object.defineProperty(package$RentSplit, 'roommateWhoOwesTooMuchClassName', {
    get: function () {
      return roommateWhoOwesTooMuchClassName;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateRemovabilityDataName', {
    get: function () {
      return roommateRemovabilityDataName;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateRemovabilityAttribute', {
    get: function () {
      return roommateRemovabilityAttribute;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateRemovabilitySelector', {
    get: function () {
      return roommateRemovabilitySelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateRenamabilityDataName', {
    get: function () {
      return roommateRenamabilityDataName;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateRenamabilityAttribute', {
    get: function () {
      return roommateRenamabilityAttribute;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateRenamabilitySelector', {
    get: function () {
      return roommateRenamabilitySelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseTypeInputClassName', {
    get: function () {
      return expenseTypeInputClassName;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseTypeInputSelector', {
    get: function () {
      return expenseTypeInputSelector;
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
  Object.defineProperty(package$RentSplit, 'expenseRemovabilityDataName', {
    get: function () {
      return expenseRemovabilityDataName;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseRemovabilityAttribute', {
    get: function () {
      return expenseRemovabilityAttribute;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseRemovabilitySelector', {
    get: function () {
      return expenseRemovabilitySelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseRenamabilityDataName', {
    get: function () {
      return expenseRenamabilityDataName;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseRenamabilityAttribute', {
    get: function () {
      return expenseRenamabilityAttribute;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseRenamabilitySelector', {
    get: function () {
      return expenseRenamabilitySelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'resultRowDataName', {
    get: function () {
      return resultRowDataName;
    }
  });
  Object.defineProperty(package$RentSplit, 'resultRowAttribute', {
    get: function () {
      return resultRowAttribute;
    }
  });
  Object.defineProperty(package$RentSplit, 'resultRowSelector', {
    get: function () {
      return resultRowSelector;
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
  package$RentSplit.main_kand9s$ = main;
  Object.defineProperty(RentSplitState, 'Companion', {
    get: RentSplitState$Companion_getInstance
  });
  package$RentSplit.RentSplitState = RentSplitState;
  package$RentSplit.get_default_3hsl3g$ = get_default;
  package$RentSplit.load_3hsl3g$ = load;
  package$RentSplit.addingNewRoommate_40h57c$ = addingNewRoommate;
  package$RentSplit.addingNewExpense_9z58f4$ = addingNewExpense;
  package$RentSplit.isNeitherNullNorEmpty_5cw0du$ = isNeitherNullNorEmpty;
  package$RentSplit.isNeitherNullNorBlank_5cw0du$ = isNeitherNullNorBlank;
  package$RentSplit.get_dollarFormat_yrwdxr$ = get_dollarFormat;
  package$RentSplit.toFixed_j6vyb1$ = toFixed;
  package$RentSplit.nonEmptyOrNull_pdl1vz$ = nonEmptyOrNull;
  package$RentSplit.toBooleanOrNull_pdl1vz$ = toBooleanOrNull;
  package$RentSplit.toBoolean_f4dhtg$ = toBoolean;
  package$RentSplit.reduceTo_i8uhts$ = reduceTo;
  package$RentSplit.adding_bv23uc$ = adding;
  var package$jQueryInterface = _.jQueryInterface || (_.jQueryInterface = {});
  package$jQueryInterface.asList_9ufosi$ = asList_0;
  package$jQueryInterface.attr_mndj09$ = attr;
  package$jQueryInterface.get_parentElement_s15u7w$ = get_parentElement;
  var package$org = _.org || (_.org = {});
  var package$bh = package$org.bh || (package$org.bh = {});
  var package$tools = package$bh.tools || (package$bh.tools = {});
  var package$base = package$tools.base || (package$tools.base = {});
  var package$func = package$base.func || (package$base.func = {});
  package$func.Observing = Observing;
  package$func.NullWSB_287e2$ = NullWSB;
  package$func.NullSSB_287e2$ = NullSSB;
  package$func.NullDSB_287e2$ = NullDSB;
  package$func.observing_bjs5ud$ = observing;
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
  roommateNameInputClassName = 'roommate-name';
  roommateNameInputSelector = '.' + roommateNameInputClassName;
  roommateIncomeInputClassName = 'roommate-income';
  roommateIncomeInputSelector = '.' + roommateIncomeInputClassName;
  roommateProportionClassName = 'roommate-proportion';
  roommateProportionSelector = '.' + roommateProportionClassName;
  roommateAnyInputFieldSelector = '.roommate-name,.roommate-income';
  roommateWhoOwesTooMuchClassName = 'roommate-owes-too-much';
  roommateRemovabilityDataName = 'roommate-removable';
  roommateRemovabilityAttribute = 'data-roommate-removable';
  roommateRemovabilitySelector = '[data-roommate-removable]';
  roommateRenamabilityDataName = 'roommate-renamable';
  roommateRenamabilityAttribute = 'data-roommate-renamable';
  roommateRenamabilitySelector = '[data-roommate-renamable]';
  expenseTypeInputClassName = 'expense-type';
  expenseTypeInputSelector = '.' + expenseTypeInputClassName;
  expenseCostInputClassName = 'expense-cost';
  expenseCostInputSelector = '.' + expenseCostInputClassName;
  expenseAnyInputFieldSelector = '.expense-type,.expense-cost';
  expenseRemovabilityDataName = 'expense-removable';
  expenseRemovabilityAttribute = 'data-expense-removable';
  expenseRemovabilitySelector = '[data-expense-removable]';
  expenseRenamabilityDataName = 'expense-renamable';
  expenseRenamabilityAttribute = 'data-expense-renamable';
  expenseRenamabilitySelector = '[data-expense-renamable]';
  resultRowDataName = 'result-roommate-row';
  resultRowAttribute = 'data-result-roommate-row';
  resultRowSelector = '[data-result-roommate-row]';
  anyInputFieldSelector = '.roommate-name,.roommate-income,.expense-type,.expense-cost';
  anyInputButtonSelector = '#Add-Roommate-Button,#Add-Expense-Button,.remove-expense-button';
  anyInputSelector = '.roommate-name,.roommate-income,.expense-type,.expense-cost,#Add-Roommate-Button,#Add-Expense-Button,.remove-expense-button';
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
  defaultRentSplitState = new RentSplitState(new RentRoommates(listOf([RentRoommate$Companion_getInstance().initial, RentRoommate$Companion_getInstance().initial])), new RentExpenses(listOf([RentExpense$Companion_getInstance().initialRent, RentExpense$Companion_getInstance().initialUtilities])));
  main([]);
  Kotlin.defineModule('Rent Split 2', _);
  return _;
}(typeof this['Rent Split 2'] === 'undefined' ? {} : this['Rent Split 2'], kotlin);
