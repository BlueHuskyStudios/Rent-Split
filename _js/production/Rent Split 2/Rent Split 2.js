if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Rent Split 2'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Rent Split 2'.");
}
this['Rent Split 2'] = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var to = Kotlin.kotlin.to_ujzrz7$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var getCallableRef = Kotlin.getCallableRef;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Unit = Kotlin.kotlin.Unit;
  var Throwable = Error;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var toString = Kotlin.toString;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Pair = Kotlin.kotlin.Pair;
  var equals = Kotlin.equals;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var throwCCE = Kotlin.throwCCE;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var Any = Object;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  var ObservableProperty = Kotlin.kotlin.properties.ObservableProperty;
  SerializationPurpose.prototype = Object.create(Enum.prototype);
  SerializationPurpose.prototype.constructor = SerializationPurpose;
  UserConsent.prototype = Object.create(Enum.prototype);
  UserConsent.prototype.constructor = UserConsent;
  observing$ObjectLiteral.prototype = Object.create(ObservableProperty.prototype);
  observing$ObjectLiteral.prototype.constructor = observing$ObjectLiteral;
  var localStorageConsentSerializedName;
  function LocalDataPreferences(localStorageConsent) {
    LocalDataPreferences$Companion_getInstance();
    this.c = localStorageConsent;
  }
  LocalDataPreferences.prototype.toJson = function () {
    var tmp$;
    return json([to(localStorageConsentSerializedName, (tmp$ = this.c) != null ? tmp$.toJson() : null)]);
  };
  function LocalDataPreferences$Companion() {
    LocalDataPreferences$Companion_instance = this;
    this.initial = new LocalDataPreferences(null);
  }
  LocalDataPreferences$Companion.prototype.invoke_qk3xy8$ = function (raw) {
    var tmp$, tmp$_0;
    return new LocalDataPreferences((tmp$_0 = typeof (tmp$ = raw[localStorageConsentSerializedName]) === 'string' ? tmp$ : null) != null ? UserConsent$Companion_getInstance().invoke_61zpoe$(tmp$_0) : null);
  };
  LocalDataPreferences$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LocalDataPreferences$Companion_instance = null;
  function LocalDataPreferences$Companion_getInstance() {
    if (LocalDataPreferences$Companion_instance === null) {
      new LocalDataPreferences$Companion();
    }
    return LocalDataPreferences$Companion_instance;
  }
  LocalDataPreferences.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocalDataPreferences',
    interfaces: []
  };
  LocalDataPreferences.prototype.component1 = function () {
    return this.c;
  };
  LocalDataPreferences.prototype.copy_hombyb$ = function (localStorageConsent) {
    return new LocalDataPreferences(localStorageConsent === void 0 ? this.c : localStorageConsent);
  };
  LocalDataPreferences.prototype.toString = function () {
    return 'LocalDataPreferences(localStorageConsent=' + Kotlin.toString(this.c) + ')';
  };
  LocalDataPreferences.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.c) | 0;
    return result;
  };
  LocalDataPreferences.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.c, other.c))));
  };
  var resourceNameSerializedName;
  var resourceDollarAmountSerializedName;
  var resourceIsRemovableSerializedName;
  var resourceIsRenamableSerializedName;
  var allExpensesSerializedName;
  function RentExpense(type, monthlyCost, isRemovable, isRenamable, originalDOMElement) {
    RentExpense$Companion_getInstance();
    if (originalDOMElement === void 0)
      originalDOMElement = null;
    this.n = type;
    this.d = monthlyCost;
    this.x = isRemovable;
    this.r = isRenamable;
    this.originalDOMElement = originalDOMElement;
  }
  RentExpense.prototype.toJson = function () {
    return json([to(resourceNameSerializedName, this.n), to(resourceDollarAmountSerializedName, this.d), to(resourceIsRemovableSerializedName, this.x), to(resourceIsRenamableSerializedName, this.r)]);
  };
  function RentExpense$Companion() {
    RentExpense$Companion_instance = this;
  }
  RentExpense$Companion.prototype.invoke_qk3xy8$ = function (raw) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    tmp$_0 = typeof (tmp$ = raw[resourceNameSerializedName]) === 'string' ? tmp$ : null;
    if (tmp$_0 == null) {
      return null;
    }
    tmp$_2 = typeof (tmp$_1 = raw[resourceDollarAmountSerializedName]) === 'number' ? tmp$_1 : null;
    if (tmp$_2 == null) {
      return null;
    }
    tmp$_4 = typeof (tmp$_3 = raw[resourceIsRemovableSerializedName]) === 'boolean' ? tmp$_3 : null;
    if (tmp$_4 == null) {
      return null;
    }
    tmp$_6 = typeof (tmp$_5 = raw[resourceIsRenamableSerializedName]) === 'boolean' ? tmp$_5 : null;
    if (tmp$_6 == null) {
      return null;
    }
    return new RentExpense(tmp$_0, tmp$_2, tmp$_4, tmp$_6);
  };
  Object.defineProperty(RentExpense$Companion.prototype, 'initialRent', {
    get: function () {
      return new RentExpense(rentExpenseType, defaultRentExpenseCost, false, false);
    }
  });
  Object.defineProperty(RentExpense$Companion.prototype, 'initialUtilities', {
    get: function () {
      return new RentExpense(utilitiesExpenseType, defaultUtilitiesExpenseCost, false, false);
    }
  });
  Object.defineProperty(RentExpense$Companion.prototype, 'defaultNewExpense', {
    get: function () {
      return new RentExpense('', defaultExpenseCost, true, true);
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
    return this.n;
  };
  RentExpense.prototype.component2 = function () {
    return this.d;
  };
  RentExpense.prototype.component3 = function () {
    return this.x;
  };
  RentExpense.prototype.component4 = function () {
    return this.r;
  };
  RentExpense.prototype.component5 = function () {
    return this.originalDOMElement;
  };
  RentExpense.prototype.copy_tt7xri$ = function (type, monthlyCost, isRemovable, isRenamable, originalDOMElement) {
    return new RentExpense(type === void 0 ? this.n : type, monthlyCost === void 0 ? this.d : monthlyCost, isRemovable === void 0 ? this.x : isRemovable, isRenamable === void 0 ? this.r : isRenamable, originalDOMElement === void 0 ? this.originalDOMElement : originalDOMElement);
  };
  RentExpense.prototype.toString = function () {
    return 'RentExpense(type=' + Kotlin.toString(this.n) + (', monthlyCost=' + Kotlin.toString(this.d)) + (', isRemovable=' + Kotlin.toString(this.x)) + (', isRenamable=' + Kotlin.toString(this.r)) + (', originalDOMElement=' + Kotlin.toString(this.originalDOMElement)) + ')';
  };
  RentExpense.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.n) | 0;
    result = result * 31 + Kotlin.hashCode(this.d) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    result = result * 31 + Kotlin.hashCode(this.originalDOMElement) | 0;
    return result;
  };
  RentExpense.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.n, other.n) && Kotlin.equals(this.d, other.d) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.r, other.r) && Kotlin.equals(this.originalDOMElement, other.originalDOMElement)))));
  };
  function nonEmptyType($receiver, index) {
    return RentExpense$Companion_getInstance().type_9d67ql$($receiver.n, index + 1 | 0);
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function RentExpenses(allExpenses) {
    RentExpenses$Companion_getInstance();
    this.e = allExpenses;
    var $receiver = this.e;
    var transform = getPropertyCallableRef('monthlyCost', 1, function ($receiver) {
      return $receiver.d;
    });
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(transform(item));
    }
    this.totalExpenses = reduceTo(destination, 0.0, getCallableRef('plus', function ($receiver, other) {
      return $receiver + other;
    }));
  }
  RentExpenses.prototype.adding_pbrwj2$ = function (newExpense) {
    return new RentExpenses(adding(this.e, newExpense));
  };
  RentExpenses.prototype.toJson = function () {
    var tmp$ = allExpensesSerializedName;
    var $receiver = this.e;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.toJson());
    }
    return json([to(tmp$, destination)]);
  };
  function RentExpenses$Companion() {
    RentExpenses$Companion_instance = this;
    this.initial = new RentExpenses(listOf([RentExpense$Companion_getInstance().initialRent, RentExpense$Companion_getInstance().initialUtilities]));
  }
  RentExpenses$Companion.prototype.invoke_qk3xy8$ = function (raw) {
    var tmp$, tmp$_0;
    tmp$_0 = Kotlin.isArray(tmp$ = raw[allExpensesSerializedName]) ? tmp$ : null;
    if (tmp$_0 == null) {
      return null;
    }
    var destination = ArrayList_init(tmp$_0.length);
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== tmp$_0.length; ++tmp$_1) {
      var item = tmp$_0[tmp$_1];
      var tmp$_2 = destination.add_11rb$;
      var tmp$_3;
      tmp$_3 = RentExpense$Companion_getInstance().invoke_qk3xy8$(item);
      if (tmp$_3 == null) {
        return null;
      }
      tmp$_2.call(destination, tmp$_3);
    }
    return new RentExpenses(destination);
  };
  RentExpenses$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RentExpenses$Companion_instance = null;
  function RentExpenses$Companion_getInstance() {
    if (RentExpenses$Companion_instance === null) {
      new RentExpenses$Companion();
    }
    return RentExpenses$Companion_instance;
  }
  RentExpenses.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RentExpenses',
    interfaces: []
  };
  RentExpenses.prototype.component1 = function () {
    return this.e;
  };
  RentExpenses.prototype.copy_sgeyu7$ = function (allExpenses) {
    return new RentExpenses(allExpenses === void 0 ? this.e : allExpenses);
  };
  RentExpenses.prototype.toString = function () {
    return 'RentExpenses(allExpenses=' + Kotlin.toString(this.e) + ')';
  };
  RentExpenses.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.e) | 0;
    return result;
  };
  RentExpenses.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.e, other.e))));
  };
  var allRoommatesSerializedName;
  function RentRoommate(name, monthlyIncome, isRemovable, isRenamable, originalDOMElement, proportion) {
    RentRoommate$Companion_getInstance();
    if (originalDOMElement === void 0)
      originalDOMElement = null;
    if (proportion === void 0)
      proportion = null;
    this.n = name;
    this.d = monthlyIncome;
    this.x = isRemovable;
    this.r = isRenamable;
    this.originalDOMElement = originalDOMElement;
    this.proportion = proportion;
  }
  RentRoommate.prototype.toJson = function () {
    return json([to(resourceNameSerializedName, this.n), to(resourceDollarAmountSerializedName, this.d), to(resourceIsRemovableSerializedName, this.x), to(resourceIsRenamableSerializedName, this.r)]);
  };
  function RentRoommate$Companion() {
    RentRoommate$Companion_instance = this;
  }
  RentRoommate$Companion.prototype.invoke_qk3xy8$ = function (raw) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    tmp$_0 = typeof (tmp$ = raw[resourceNameSerializedName]) === 'string' ? tmp$ : null;
    if (tmp$_0 == null) {
      return null;
    }
    tmp$_2 = typeof (tmp$_1 = raw[resourceDollarAmountSerializedName]) === 'number' ? tmp$_1 : null;
    if (tmp$_2 == null) {
      return null;
    }
    tmp$_4 = typeof (tmp$_3 = raw[resourceIsRemovableSerializedName]) === 'boolean' ? tmp$_3 : null;
    if (tmp$_4 == null) {
      return null;
    }
    tmp$_6 = typeof (tmp$_5 = raw[resourceIsRenamableSerializedName]) === 'boolean' ? tmp$_5 : null;
    if (tmp$_6 == null) {
      return null;
    }
    return new RentRoommate(tmp$_0, tmp$_2, tmp$_4, tmp$_6);
  };
  Object.defineProperty(RentRoommate$Companion.prototype, 'initial', {
    get: function () {
      return new RentRoommate('', defaultRoommateIncome, false, true);
    }
  });
  Object.defineProperty(RentRoommate$Companion.prototype, 'defaultNewRoommate', {
    get: function () {
      return new RentRoommate('', defaultRoommateIncome, true, true);
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
    return this.n;
  };
  RentRoommate.prototype.component2 = function () {
    return this.d;
  };
  RentRoommate.prototype.component3 = function () {
    return this.x;
  };
  RentRoommate.prototype.component4 = function () {
    return this.r;
  };
  RentRoommate.prototype.component5 = function () {
    return this.originalDOMElement;
  };
  RentRoommate.prototype.component6 = function () {
    return this.proportion;
  };
  RentRoommate.prototype.copy_m0fch1$ = function (name, monthlyIncome, isRemovable, isRenamable, originalDOMElement, proportion) {
    return new RentRoommate(name === void 0 ? this.n : name, monthlyIncome === void 0 ? this.d : monthlyIncome, isRemovable === void 0 ? this.x : isRemovable, isRenamable === void 0 ? this.r : isRenamable, originalDOMElement === void 0 ? this.originalDOMElement : originalDOMElement, proportion === void 0 ? this.proportion : proportion);
  };
  RentRoommate.prototype.toString = function () {
    return 'RentRoommate(name=' + Kotlin.toString(this.n) + (', monthlyIncome=' + Kotlin.toString(this.d)) + (', isRemovable=' + Kotlin.toString(this.x)) + (', isRenamable=' + Kotlin.toString(this.r)) + (', originalDOMElement=' + Kotlin.toString(this.originalDOMElement)) + (', proportion=' + Kotlin.toString(this.proportion)) + ')';
  };
  RentRoommate.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.n) | 0;
    result = result * 31 + Kotlin.hashCode(this.d) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    result = result * 31 + Kotlin.hashCode(this.originalDOMElement) | 0;
    result = result * 31 + Kotlin.hashCode(this.proportion) | 0;
    return result;
  };
  RentRoommate.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.n, other.n) && Kotlin.equals(this.d, other.d) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.r, other.r) && Kotlin.equals(this.originalDOMElement, other.originalDOMElement) && Kotlin.equals(this.proportion, other.proportion)))));
  };
  function nonEmptyName($receiver, index) {
    return RentRoommate$Companion_getInstance().name_9d67ql$($receiver.n, index + 1 | 0);
  }
  function RentRoommates(allRoommates) {
    RentRoommates$Companion_getInstance();
    this.r = allRoommates;
    var $receiver = this.r;
    var transform = getPropertyCallableRef('monthlyIncome', 1, function ($receiver) {
      return $receiver.d;
    });
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(transform(item));
    }
    this.totalIncome = reduceTo(destination, 0.0, getCallableRef('plus', function ($receiver, other) {
      return $receiver + other;
    }));
  }
  RentRoommates.prototype.adding_pcqrmu$ = function (newRoommate) {
    return new RentRoommates(adding(this.r, newRoommate));
  };
  RentRoommates.prototype.toJson = function () {
    var tmp$ = allRoommatesSerializedName;
    var $receiver = this.r;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.toJson());
    }
    return json([to(tmp$, destination)]);
  };
  function RentRoommates$Companion() {
    RentRoommates$Companion_instance = this;
    this.initial = new RentRoommates(listOf([RentRoommate$Companion_getInstance().initial, RentRoommate$Companion_getInstance().initial]));
  }
  RentRoommates$Companion.prototype.invoke_qk3xy8$ = function (raw) {
    var tmp$, tmp$_0;
    tmp$_0 = Kotlin.isArray(tmp$ = raw[allRoommatesSerializedName]) ? tmp$ : null;
    if (tmp$_0 == null) {
      return null;
    }
    var destination = ArrayList_init(tmp$_0.length);
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== tmp$_0.length; ++tmp$_1) {
      var item = tmp$_0[tmp$_1];
      var tmp$_2 = destination.add_11rb$;
      var tmp$_3;
      tmp$_3 = RentRoommate$Companion_getInstance().invoke_qk3xy8$(item);
      if (tmp$_3 == null) {
        return null;
      }
      tmp$_2.call(destination, tmp$_3);
    }
    return new RentRoommates(destination);
  };
  RentRoommates$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RentRoommates$Companion_instance = null;
  function RentRoommates$Companion_getInstance() {
    if (RentRoommates$Companion_instance === null) {
      new RentRoommates$Companion();
    }
    return RentRoommates$Companion_instance;
  }
  RentRoommates.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RentRoommates',
    interfaces: []
  };
  RentRoommates.prototype.component1 = function () {
    return this.r;
  };
  RentRoommates.prototype.copy_a4l0xx$ = function (allRoommates) {
    return new RentRoommates(allRoommates === void 0 ? this.r : allRoommates);
  };
  RentRoommates.prototype.toString = function () {
    return 'RentRoommates(allRoommates=' + Kotlin.toString(this.r) + ')';
  };
  RentRoommates.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    return result;
  };
  RentRoommates.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.r, other.r))));
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
  var roommateInputRowDataName;
  var roommateInputRowSelector;
  var expenseInputRowDataName;
  var expenseInputRowSelector;
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
  var copyStateUrlButtonId;
  var copyStateUrlButtonSelector;
  var stateUrlFieldId;
  var stateUrlFieldSelector;
  var localStorageWarningId;
  var localStorageWarningSelector;
  var localStorageWarningExplicitRefusalButtonId;
  var localStorageWarningExplicitRefusalButtonSelector;
  var localStorageWarningExplicitConsentButtonId;
  var localStorageWarningExplicitConsentButtonSelector;
  var rentExpenseType;
  var utilitiesExpenseType;
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
  var RentSplit$state_metadata = new PropertyMetadata('state');
  Object.defineProperty(RentSplit.prototype, 'state', {
    get: function () {
      return this.state_8j2skj$_0.getValue_lrcp0p$(this, RentSplit$state_metadata);
    },
    set: function (state) {
      this.state_8j2skj$_0.setValue_9rddgb$(this, RentSplit$state_metadata, state);
    }
  });
  RentSplit.prototype.onReady = function () {
    this.reloadPageFromState_6taknv$(false);
    this.regenerateInputTables();
    this.registerListeners();
    this.recalculateRentSplit();
    save(this.state);
    this.presentToUser();
  };
  RentSplit.prototype.reloadPageFromState_6taknv$ = function (shouldReRegisterListeners) {
    if (shouldReRegisterListeners === void 0)
      shouldReRegisterListeners = true;
    this.applyStateToLocalStorageWarning();
    this.regenerateInputTables();
    if (shouldReRegisterListeners) {
      this.reRegisterListeners();
    }
    this.recalculateRentSplit();
  };
  RentSplit.prototype.applyStateToLocalStorageWarning = function () {
    if (this.state.l.c != null) {
      $(localStorageWarningSelector).addClass('hidden');
    }
     else {
      $(localStorageWarningSelector).removeClass('hidden');
    }
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
    $(localStorageWarningExplicitConsentButtonSelector).click(getCallableRef('didPressLocalStorageWarningExplicitConsentButton', function ($receiver, event) {
      return $receiver.didPressLocalStorageWarningExplicitConsentButton_9ojx7i$(event), Unit;
    }.bind(null, this)));
    $(localStorageWarningExplicitRefusalButtonSelector).click(getCallableRef('didPressLocalStorageWarningExplicitRefusalButton', function ($receiver, event) {
      return $receiver.didPressLocalStorageWarningExplicitRefusalButton_9ojx7i$(event), Unit;
    }.bind(null, this)));
    $(copyStateUrlButtonSelector).click(getCallableRef('didPressCopyUrlButton', function ($receiver, event) {
      return $receiver.didPressCopyUrlButton_9ojx7i$(event), Unit;
    }.bind(null, this)));
  };
  RentSplit.prototype.anyInputFieldDidChange_g0pdib$ = function (event) {
    this.reloadStateFromPage();
  };
  RentSplit.prototype.didPressLocalStorageWarningExplicitConsentButton_9ojx7i$ = function (event) {
    this.state = this.state.copy_2k6jng$(void 0, void 0, this.state.l.copy_hombyb$(UserConsent$explicitConsent_getInstance()));
  };
  RentSplit.prototype.didPressLocalStorageWarningExplicitRefusalButton_9ojx7i$ = function (event) {
    this.state = this.state.copy_2k6jng$(void 0, void 0, this.state.l.copy_hombyb$(UserConsent$explicitRefusal_getInstance()));
  };
  function RentSplit$didPressCopyUrlButton$lambda() {
    return $(copyStateUrlButtonSelector).removeClass('just-copied');
  }
  RentSplit.prototype.didPressCopyUrlButton_9ojx7i$ = function (event) {
    try {
      copyToClipboardOrThrow($(stateUrlFieldSelector));
      $(copyStateUrlButtonSelector).addClass('just-copied');
      window.setTimeout(RentSplit$didPressCopyUrlButton$lambda, 3000);
    }
     catch (error) {
      if (Kotlin.isType(error, Throwable)) {
        console.log('Failed to copy state URL!');
      }
       else
        throw error;
    }
  };
  RentSplit.prototype.reloadStateFromPage = function () {
    this.state = this.state.copy_2k6jng$(this.fetchRoommates(), this.fetchExpenses());
  };
  RentSplit.prototype.recalculateRentSplit = function () {
    var roommates = this.state.r;
    var expenses = this.state.e;
    this.recalculateRoommateProportions_4mt70t$(roommates);
    this.fillOutResults_ra4pb4$(roommates, expenses);
    this.notifyOfProblems_ra4pb4$(roommates, expenses);
  };
  RentSplit.prototype.presentToUser = function () {
    $('.rent').addClass('rent-ready');
  };
  RentSplit.prototype.fetchRoommates = function () {
    return this.roommateRowsToRoommates_r6ezyp$($(roommateInputRowSelector));
  };
  RentSplit.prototype.fetchExpenses = function () {
    return this.expenseRowsToExpenses_r6ezyp$($(expenseInputRowSelector));
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
    tmp$ = roommates.r.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.recalculateRoommateProportion_1jegqw$(element, totalIncome);
    }
    this.displayRoommateProportions_4mt70t$(roommates);
  };
  RentSplit.prototype.recalculateRoommateProportion_1jegqw$ = function (roommate, totalIncome) {
    roommate.proportion = roommate.d / totalIncome;
  };
  RentSplit.prototype.displayRoommateProportions_4mt70t$ = function (roommates) {
    var $receiver = roommates.r;
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
    this.regenerateInputTable_0(expenseInputRowSelector, this.state.e.e, RentSplit$regenerateExpenseInputTable$lambda(this), RentSplit$regenerateExpenseInputTable$lambda_0(this));
  };
  RentSplit.prototype.configureExistingExpenseInputRow_0 = function (existingExpenseInput, expense) {
    var jq_existingExpenseInput = $(existingExpenseInput);
    expense.originalDOMElement = jq_existingExpenseInput;
    $(expenseTypeInputSelector, existingExpenseInput).val(expense.n);
    $(expenseCostInputSelector, existingExpenseInput).val(expense.d);
    attr(jq_existingExpenseInput, expenseRenamabilityAttribute, expense.r);
    attr(jq_existingExpenseInput, expenseRemovabilityAttribute, expense.x);
  };
  RentSplit.prototype.regenerateRoommateInputTable_0 = function () {
    this.regenerateInputTable_0(roommateInputRowSelector, this.state.r.r, getCallableRef('configureExistingRoommateInputRow', function ($receiver, existingRoommateInputTableRow, roommate) {
      return $receiver.configureExistingRoommateInputRow_0(existingRoommateInputTableRow, roommate), Unit;
    }.bind(null, this)), getCallableRef('insertNewRoommateInputRow', function ($receiver, explicitIndex, roommate) {
      return $receiver.insertNewRoommateInputRow_7kd045$(explicitIndex, roommate), Unit;
    }.bind(null, this)));
  };
  RentSplit.prototype.configureExistingRoommateInputRow_0 = function (existingRoommateInputTableRow, roommate) {
    var jq_existingRoommateInputTableRow = $(existingRoommateInputTableRow);
    roommate.originalDOMElement = jq_existingRoommateInputTableRow;
    $(roommateNameInputSelector, existingRoommateInputTableRow).val(roommate.n);
    $(roommateIncomeInputSelector, existingRoommateInputTableRow).val(roommate.d);
    this.displayRoommateProportion_pcqrmu$(roommate);
    attr(jq_existingRoommateInputTableRow, roommateRenamabilityAttribute, roommate.r);
    attr(jq_existingRoommateInputTableRow, roommateRemovabilityAttribute, roommate.x);
  };
  RentSplit.prototype.didPressNewExpenseButton_9ojx7i$ = function (event) {
    this.addNewExpense_rhtjr1$(RentExpense$Companion_getInstance().defaultNewExpense, event);
  };
  RentSplit.prototype.addNewExpense_rhtjr1$ = function (newExpense, event) {
    if (event === void 0)
      event = null;
    this.state = addingNewExpense(this.state, newExpense);
  };
  RentSplit.prototype.insertNewExpenseInputRow_nly0u5$ = function (explicitIndex, expense) {
    if (explicitIndex === void 0)
      explicitIndex = null;
    var expenseInputHtml = this.buildExpenseInputRow_cymhq0$(explicitIndex != null ? explicitIndex : this.numberOfExpensesWithInputRows(), expense);
    expense.originalDOMElement = $(addAnExpenseRowSelector).before(expenseInputHtml).prev();
  };
  RentSplit.prototype.buildExpenseInputRow_cymhq0$ = function (index, expense) {
    return this.buildExpenseInputRow_cefq5e$(index, expense.n, expense.d, expense.r, expense.x);
  };
  RentSplit.prototype.buildExpenseInputRow_cefq5e$ = function (index, type, cost, isRenamable, isRemovable) {
    var expenseNumber = index + 1 | 0;
    var row = '<tr' + (' data-' + expenseInputRowDataName + '=' + '"' + expenseNumber + '"') + (' ' + expenseRenamabilityAttribute + "='" + isRenamable + "'") + (' ' + expenseRemovabilityAttribute + "='" + isRemovable + "'") + '>';
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
    return this.addNewRoommate_an8xux$(RentRoommate$Companion_getInstance().defaultNewRoommate, event);
  };
  RentSplit.prototype.addNewRoommate_an8xux$ = function (newRoommate, event) {
    if (event === void 0)
      event = null;
    this.state = addingNewRoommate(this.state, newRoommate);
  };
  RentSplit.prototype.insertNewRoommateInputRow_7kd045$ = function (explicitIndex, roommate) {
    if (explicitIndex === void 0)
      explicitIndex = null;
    var roommateInputHtml = this.buildRoommateInputRow_hi9t74$(explicitIndex != null ? explicitIndex : this.numberOfRoommatesWithInputRows(), roommate);
    roommate.originalDOMElement = $(addARoommateRowSelector).before(roommateInputHtml).prev();
  };
  RentSplit.prototype.buildRoommateInputRow_hi9t74$ = function (index, roommate) {
    return this.buildRoommateInputRow_cefq5e$(index, roommate.n, roommate.d, roommate.r, roommate.x);
  };
  RentSplit.prototype.buildRoommateInputRow_cefq5e$ = function (index, name, income, isRenamable, isRemovable) {
    var roommateNumber = index + 1 | 0;
    var row = '<tr' + (' data-' + roommateInputRowDataName + "='" + roommateNumber + "'") + (' ' + roommateRenamabilityAttribute + "='" + isRenamable + "'") + (' ' + roommateRemovabilityAttribute + "='" + isRemovable + "'") + '>';
    row += '<th class="plain">' + '<input' + ' type="text"' + ' class="roommate-name   text-right"' + (!(name == null || name.length === 0) ? ' value="' + name + '"' : '') + ' size="8"' + ' tabindex=0' + ' placeholder="Name"' + '/>' + '<\/th>';
    row += '<td class="plain vert-bottom">' + '<input' + ' type="number"' + ' class="roommate-income"' + ' required' + (' value=' + '"' + (income != null ? income : defaultRoommateIncome) + '"') + ' step="100"' + ' size="8"' + ' tabindex=0' + ' placeholder="Income"' + '/>' + '<\/td>';
    row += '<td class="roommate-proportion">Calculating<\/td>';
    if (isRemovable) {
      row += '<td class="remove-roommate-button color-danger"' + ' tabindex="0">' + '<i class="fa fa-minus-circle"><\/i>' + '<\/td>';
    }
    return row + '<\/tr>';
  };
  RentSplit.prototype.numberOfRoommates = function () {
    return this.state.r.r.size;
  };
  RentSplit.prototype.numberOfRoommatesWithInputRows = function () {
    return $(roommateInputRowSelector).length;
  };
  RentSplit.prototype.numberOfExpenses = function () {
    return this.state.e.e.size;
  };
  RentSplit.prototype.numberOfExpensesWithInputRows = function () {
    return $(expenseInputRowSelector).length;
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
    tmp$ = expenses.e.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      this.appendExpenseColumnHeader_w1v0qf$(jq_resultsTableHeadRow, item, (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
    }
    jq_resultsTableHeadRow.append('<th class="text-center">Total Cost<\/th>');
  };
  RentSplit.prototype.appendExpenseColumnHeader_w1v0qf$ = function (jq_resultsTableHeadRow, expense, index) {
    jq_resultsTableHeadRow.append("<th class='hide-small'>" + nonEmptyType(expense, index) + '<\/th>');
  };
  RentSplit.prototype.fillOutResultsTableBody_ra4pb4$ = function (roommates, expenses) {
    var jq_resultsTableBody = $(resultsTableBodySelector);
    jq_resultsTableBody.empty();
    var tmp$;
    tmp$ = roommates.r.iterator();
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
    var roommateName = nonEmptyName(roommate, rowIndex);
    var row = '<tr data-' + roommateResultRowDataName + "='" + roommateName + "'><th>" + roommateName + '<\/th>';
    row += joinToString(expenses.e, '', void 0, void 0, void 0, void 0, RentSplit$buildResultRow$lambda(roommate, this));
    row += '<th>' + get_dollarFormat(this.roommateTotalContributions_1jegqw$(roommate, expenses.totalExpenses)) + '<\/th>';
    return row + '<\/tr>';
  };
  RentSplit.prototype.roommateContribution_ykbhv8$ = function (roommate, expense) {
    var tmp$;
    return ((tmp$ = roommate.proportion) != null ? tmp$ : 0.0) * expense.d;
  };
  RentSplit.prototype.roommateTotalContributions_1jegqw$ = function (roommate, totalExpenses) {
    var tmp$;
    return ((tmp$ = roommate.proportion) != null ? tmp$ : 0.0) * totalExpenses;
  };
  RentSplit.prototype.notifyOfProblems_ra4pb4$ = function (roommates, expenses) {
    var $receiver = roommates.r;
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
      if (roommateTotalContributions > roommate.d)
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
      this$RentSplit.reloadPageFromState_6taknv$();
      save(this$RentSplit.state);
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
  var rentRoommatesSerializedName;
  var rentExpensesSerializedName;
  var localDataPreferencesSerializedName;
  var generalStateSerializedName;
  function RentSplitState(roommates, expenses, localDataPreferences) {
    RentSplitState$Companion_getInstance();
    this.r = roommates;
    this.e = expenses;
    this.l = localDataPreferences;
  }
  RentSplitState.prototype.toJson_i9b4g5$ = function (purpose) {
    switch (purpose.name) {
      case 'forLocalStorage':
        return json([to(rentRoommatesSerializedName, this.r.toJson()), to(rentExpensesSerializedName, this.e.toJson()), to(localDataPreferencesSerializedName, this.l.toJson())]);
      case 'forSharing':
        return json([to(rentRoommatesSerializedName, this.r.toJson()), to(rentExpensesSerializedName, this.e.toJson())]);
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  function RentSplitState$Companion() {
    RentSplitState$Companion_instance = this;
    this.initial = new RentSplitState(RentRoommates$Companion_getInstance().initial, RentExpenses$Companion_getInstance().initial, LocalDataPreferences$Companion_getInstance().initial);
  }
  RentSplitState$Companion.prototype.invoke_qk3xy8$ = function (raw) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    return new RentSplitState((tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = raw[rentRoommatesSerializedName], Object) ? tmp$ : null) != null ? RentRoommates$Companion_getInstance().invoke_qk3xy8$(tmp$_0) : null) != null ? tmp$_1 : RentRoommates$Companion_getInstance().initial, (tmp$_4 = (tmp$_3 = Kotlin.isType(tmp$_2 = raw[rentExpensesSerializedName], Object) ? tmp$_2 : null) != null ? RentExpenses$Companion_getInstance().invoke_qk3xy8$(tmp$_3) : null) != null ? tmp$_4 : RentExpenses$Companion_getInstance().initial, (tmp$_7 = (tmp$_6 = Kotlin.isType(tmp$_5 = raw[localDataPreferencesSerializedName], Object) ? tmp$_5 : null) != null ? LocalDataPreferences$Companion_getInstance().invoke_qk3xy8$(tmp$_6) : null) != null ? tmp$_7 : LocalDataPreferences$Companion_getInstance().initial);
  };
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
    return this.r;
  };
  RentSplitState.prototype.component2 = function () {
    return this.e;
  };
  RentSplitState.prototype.component3 = function () {
    return this.l;
  };
  RentSplitState.prototype.copy_2k6jng$ = function (roommates, expenses, localDataPreferences) {
    return new RentSplitState(roommates === void 0 ? this.r : roommates, expenses === void 0 ? this.e : expenses, localDataPreferences === void 0 ? this.l : localDataPreferences);
  };
  RentSplitState.prototype.toString = function () {
    return 'RentSplitState(roommates=' + Kotlin.toString(this.r) + (', expenses=' + Kotlin.toString(this.e)) + (', localDataPreferences=' + Kotlin.toString(this.l)) + ')';
  };
  RentSplitState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    result = result * 31 + Kotlin.hashCode(this.e) | 0;
    result = result * 31 + Kotlin.hashCode(this.l) | 0;
    return result;
  };
  RentSplitState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.r, other.r) && Kotlin.equals(this.e, other.e) && Kotlin.equals(this.l, other.l)))));
  };
  function load($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    var urlState = (tmp$ = (new URL(window.location.href)).searchParams.get(generalStateSerializedName)) != null ? deserializing($receiver, tmp$, SerializationPurpose$forSharing_getInstance()) : null;
    if (urlState != null) {
      window.history.pushState(null, document.title, '?');
    }
    if ((tmp$_1 = (tmp$_0 = window.localStorage.getItem(generalStateSerializedName)) != null ? deserializing($receiver, tmp$_0, SerializationPurpose$forLocalStorage_getInstance()) : null) != null) {
      if (urlState != null) {
        return urlState.copy_2k6jng$(void 0, void 0, tmp$_1.l);
      }
       else if (equals(tmp$_1.l.c, UserConsent$explicitConsent_getInstance())) {
        return tmp$_1;
      }
    }
    return urlState != null ? urlState : $receiver.initial;
  }
  function save($receiver) {
    var tmp$;
    var jsonStringForLocalStorage = serialized($receiver, SerializationPurpose$forLocalStorage_getInstance());
    var jsonStringForSharing = serialized($receiver, SerializationPurpose$forSharing_getInstance());
    $(stateUrlFieldSelector).val(window.location.protocol + '//' + window.location.host + window.location.pathname + '?' + generalStateSerializedName + '=' + jsonStringForSharing);
    tmp$ = $receiver.l.c;
    if (equals(tmp$, UserConsent$explicitConsent_getInstance()))
      window.localStorage.setItem(generalStateSerializedName, jsonStringForLocalStorage);
    else if (equals(tmp$, UserConsent$explicitRefusal_getInstance()))
      console.log('Opted not to save anything locally; user explicitly told us not to');
    else if (tmp$ == null)
      console.log("Opted not to save anything locally; user never explicitly told us that's OK");
  }
  function addingNewRoommate($receiver, newRoommate) {
    return $receiver.copy_2k6jng$($receiver.r.adding_pcqrmu$(newRoommate), $receiver.e);
  }
  function addingNewExpense($receiver, newExpense) {
    return $receiver.copy_2k6jng$($receiver.r, $receiver.e.adding_pbrwj2$(newExpense));
  }
  function serialized($receiver, purpose) {
    return JSON.stringify($receiver.toJson_i9b4g5$(purpose));
  }
  function deserializing$lambda(closure$jsonString, closure$purpose) {
    return function () {
      var tmp$, tmp$_0;
      var raw = JSON.parse(closure$jsonString);
      switch (closure$purpose.name) {
        case 'forLocalStorage':
          break;
        case 'forSharing':
          (tmp$_0 = Kotlin.isType(tmp$ = raw[localDataPreferencesSerializedName], Object) ? tmp$ : null) != null ? (tmp$_0[localStorageConsentSerializedName] = undefined, Unit) : null;
          break;
        default:Kotlin.noWhenBranchMatched();
          break;
      }
      return RentSplitState$Companion_getInstance().invoke_qk3xy8$(raw);
    };
  }
  function deserializing($receiver, jsonString, purpose) {
    return safeTry(deserializing$lambda(jsonString, purpose));
  }
  function SerializationPurpose(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SerializationPurpose_initFields() {
    SerializationPurpose_initFields = function () {
    };
    SerializationPurpose$forLocalStorage_instance = new SerializationPurpose('forLocalStorage', 0);
    SerializationPurpose$forSharing_instance = new SerializationPurpose('forSharing', 1);
  }
  var SerializationPurpose$forLocalStorage_instance;
  function SerializationPurpose$forLocalStorage_getInstance() {
    SerializationPurpose_initFields();
    return SerializationPurpose$forLocalStorage_instance;
  }
  var SerializationPurpose$forSharing_instance;
  function SerializationPurpose$forSharing_getInstance() {
    SerializationPurpose_initFields();
    return SerializationPurpose$forSharing_instance;
  }
  SerializationPurpose.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializationPurpose',
    interfaces: [Enum]
  };
  function SerializationPurpose$values() {
    return [SerializationPurpose$forLocalStorage_getInstance(), SerializationPurpose$forSharing_getInstance()];
  }
  SerializationPurpose.values = SerializationPurpose$values;
  function SerializationPurpose$valueOf(name) {
    switch (name) {
      case 'forLocalStorage':
        return SerializationPurpose$forLocalStorage_getInstance();
      case 'forSharing':
        return SerializationPurpose$forSharing_getInstance();
      default:throwISE('No enum constant RentSplit.SerializationPurpose.' + name);
    }
  }
  SerializationPurpose.valueOf_61zpoe$ = SerializationPurpose$valueOf;
  function UserConsent(name, ordinal, serialValue) {
    Enum.call(this);
    this.serialValue = serialValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function UserConsent_initFields() {
    UserConsent_initFields = function () {
    };
    UserConsent$explicitConsent_instance = new UserConsent('explicitConsent', 0, 'y');
    UserConsent$explicitRefusal_instance = new UserConsent('explicitRefusal', 1, 'n');
    UserConsent$Companion_getInstance();
  }
  var UserConsent$explicitConsent_instance;
  function UserConsent$explicitConsent_getInstance() {
    UserConsent_initFields();
    return UserConsent$explicitConsent_instance;
  }
  var UserConsent$explicitRefusal_instance;
  function UserConsent$explicitRefusal_getInstance() {
    UserConsent_initFields();
    return UserConsent$explicitRefusal_instance;
  }
  UserConsent.prototype.toJson = function () {
    return this.serialValue;
  };
  function UserConsent$Companion() {
    UserConsent$Companion_instance = this;
  }
  UserConsent$Companion.prototype.invoke_61zpoe$ = function (serialValue) {
    var $receiver = UserConsent$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (equals(element.serialValue, serialValue)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  UserConsent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UserConsent$Companion_instance = null;
  function UserConsent$Companion_getInstance() {
    UserConsent_initFields();
    if (UserConsent$Companion_instance === null) {
      new UserConsent$Companion();
    }
    return UserConsent$Companion_instance;
  }
  UserConsent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserConsent',
    interfaces: [Enum]
  };
  function UserConsent$values() {
    return [UserConsent$explicitConsent_getInstance(), UserConsent$explicitRefusal_getInstance()];
  }
  UserConsent.values = UserConsent$values;
  function UserConsent$valueOf(name) {
    switch (name) {
      case 'explicitConsent':
        return UserConsent$explicitConsent_getInstance();
      case 'explicitRefusal':
        return UserConsent$explicitRefusal_getInstance();
      default:throwISE('No enum constant RentSplit.UserConsent.' + name);
    }
  }
  UserConsent.valueOf_61zpoe$ = UserConsent$valueOf;
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
    if ($receiver.length === 0)
      return null;
    else {
      switch ($receiver.toLowerCase()) {
        case 'true':
        case 't':
        case 'yes':
        case 'y':
        case '1':
        case 'on':
          return true;
        case 'false':
        case 'f':
        case 'no':
        case 'n':
        case '0':
        case 'off':
          return false;
        default:return null;
      }
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
  function copyToClipboardOrThrow($receiver) {
    $receiver.select();
    return document.execCommand('copy');
  }
  var doNothing = defineInlineFunction('Rent Split 2.RentSplit.doNothing', function () {
  });
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
  function safeTry(closure) {
    try {
      return closure();
    }
     catch (_) {
      if (Kotlin.isType(_, Throwable)) {
        return null;
      }
       else
        throw _;
    }
  }
  var package$RentSplit = _.RentSplit || (_.RentSplit = {});
  Object.defineProperty(package$RentSplit, 'localStorageConsentSerializedName', {
    get: function () {
      return localStorageConsentSerializedName;
    }
  });
  Object.defineProperty(LocalDataPreferences, 'Companion', {
    get: LocalDataPreferences$Companion_getInstance
  });
  package$RentSplit.LocalDataPreferences = LocalDataPreferences;
  Object.defineProperty(package$RentSplit, 'resourceNameSerializedName', {
    get: function () {
      return resourceNameSerializedName;
    }
  });
  Object.defineProperty(package$RentSplit, 'resourceDollarAmountSerializedName', {
    get: function () {
      return resourceDollarAmountSerializedName;
    }
  });
  Object.defineProperty(package$RentSplit, 'resourceIsRemovableSerializedName', {
    get: function () {
      return resourceIsRemovableSerializedName;
    }
  });
  Object.defineProperty(package$RentSplit, 'resourceIsRenamableSerializedName', {
    get: function () {
      return resourceIsRenamableSerializedName;
    }
  });
  Object.defineProperty(package$RentSplit, 'allExpensesSerializedName', {
    get: function () {
      return allExpensesSerializedName;
    }
  });
  Object.defineProperty(RentExpense, 'Companion', {
    get: RentExpense$Companion_getInstance
  });
  package$RentSplit.RentExpense = RentExpense;
  package$RentSplit.nonEmptyType_nyrmdb$ = nonEmptyType;
  Object.defineProperty(RentExpenses, 'Companion', {
    get: RentExpenses$Companion_getInstance
  });
  package$RentSplit.RentExpenses = RentExpenses;
  Object.defineProperty(package$RentSplit, 'allRoommatesSerializedName', {
    get: function () {
      return allRoommatesSerializedName;
    }
  });
  Object.defineProperty(RentRoommate, 'Companion', {
    get: RentRoommate$Companion_getInstance
  });
  package$RentSplit.RentRoommate = RentRoommate;
  package$RentSplit.nonEmptyName_ne3jqj$ = nonEmptyName;
  Object.defineProperty(RentRoommates, 'Companion', {
    get: RentRoommates$Companion_getInstance
  });
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
  Object.defineProperty(package$RentSplit, 'roommateInputRowDataName', {
    get: function () {
      return roommateInputRowDataName;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateInputRowSelector', {
    get: function () {
      return roommateInputRowSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseInputRowDataName', {
    get: function () {
      return expenseInputRowDataName;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseInputRowSelector', {
    get: function () {
      return expenseInputRowSelector;
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
  Object.defineProperty(package$RentSplit, 'copyStateUrlButtonId', {
    get: function () {
      return copyStateUrlButtonId;
    }
  });
  Object.defineProperty(package$RentSplit, 'copyStateUrlButtonSelector', {
    get: function () {
      return copyStateUrlButtonSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'stateUrlFieldId', {
    get: function () {
      return stateUrlFieldId;
    }
  });
  Object.defineProperty(package$RentSplit, 'stateUrlFieldSelector', {
    get: function () {
      return stateUrlFieldSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'localStorageWarningId', {
    get: function () {
      return localStorageWarningId;
    }
  });
  Object.defineProperty(package$RentSplit, 'localStorageWarningSelector', {
    get: function () {
      return localStorageWarningSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'localStorageWarningExplicitRefusalButtonId', {
    get: function () {
      return localStorageWarningExplicitRefusalButtonId;
    }
  });
  Object.defineProperty(package$RentSplit, 'localStorageWarningExplicitRefusalButtonSelector', {
    get: function () {
      return localStorageWarningExplicitRefusalButtonSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'localStorageWarningExplicitConsentButtonId', {
    get: function () {
      return localStorageWarningExplicitConsentButtonId;
    }
  });
  Object.defineProperty(package$RentSplit, 'localStorageWarningExplicitConsentButtonSelector', {
    get: function () {
      return localStorageWarningExplicitConsentButtonSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'rentExpenseType', {
    get: function () {
      return rentExpenseType;
    }
  });
  Object.defineProperty(package$RentSplit, 'utilitiesExpenseType', {
    get: function () {
      return utilitiesExpenseType;
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
  Object.defineProperty(package$RentSplit, 'rentRoommatesSerializedName', {
    get: function () {
      return rentRoommatesSerializedName;
    }
  });
  Object.defineProperty(package$RentSplit, 'rentExpensesSerializedName', {
    get: function () {
      return rentExpensesSerializedName;
    }
  });
  Object.defineProperty(package$RentSplit, 'localDataPreferencesSerializedName', {
    get: function () {
      return localDataPreferencesSerializedName;
    }
  });
  Object.defineProperty(package$RentSplit, 'generalStateSerializedName', {
    get: function () {
      return generalStateSerializedName;
    }
  });
  Object.defineProperty(RentSplitState, 'Companion', {
    get: RentSplitState$Companion_getInstance
  });
  package$RentSplit.RentSplitState = RentSplitState;
  package$RentSplit.load_3hsl3g$ = load;
  package$RentSplit.save_fib44y$ = save;
  package$RentSplit.addingNewRoommate_40h57c$ = addingNewRoommate;
  package$RentSplit.addingNewExpense_9z58f4$ = addingNewExpense;
  package$RentSplit.serialized_6yyei5$ = serialized;
  package$RentSplit.deserializing_ezm63n$ = deserializing;
  Object.defineProperty(SerializationPurpose, 'forLocalStorage', {
    get: SerializationPurpose$forLocalStorage_getInstance
  });
  Object.defineProperty(SerializationPurpose, 'forSharing', {
    get: SerializationPurpose$forSharing_getInstance
  });
  package$RentSplit.SerializationPurpose = SerializationPurpose;
  Object.defineProperty(UserConsent, 'explicitConsent', {
    get: UserConsent$explicitConsent_getInstance
  });
  Object.defineProperty(UserConsent, 'explicitRefusal', {
    get: UserConsent$explicitRefusal_getInstance
  });
  Object.defineProperty(UserConsent, 'Companion', {
    get: UserConsent$Companion_getInstance
  });
  package$RentSplit.UserConsent = UserConsent;
  package$RentSplit.isNeitherNullNorEmpty_5cw0du$ = isNeitherNullNorEmpty;
  package$RentSplit.isNeitherNullNorBlank_5cw0du$ = isNeitherNullNorBlank;
  package$RentSplit.get_dollarFormat_yrwdxr$ = get_dollarFormat;
  package$RentSplit.toFixed_j6vyb1$ = toFixed;
  package$RentSplit.nonEmptyOrNull_pdl1vz$ = nonEmptyOrNull;
  package$RentSplit.toBooleanOrNull_pdl1vz$ = toBooleanOrNull;
  package$RentSplit.toBoolean_f4dhtg$ = toBoolean;
  package$RentSplit.reduceTo_i8uhts$ = reduceTo;
  package$RentSplit.adding_bv23uc$ = adding;
  package$RentSplit.copyToClipboardOrThrow_9ufosi$ = copyToClipboardOrThrow;
  package$RentSplit.doNothing = doNothing;
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
  var package$util = package$base.util || (package$base.util = {});
  package$util.safeTry_klfg04$ = safeTry;
  localStorageConsentSerializedName = 'c';
  resourceNameSerializedName = 'n';
  resourceDollarAmountSerializedName = 'd';
  resourceIsRemovableSerializedName = 'x';
  resourceIsRenamableSerializedName = 'r';
  allExpensesSerializedName = 'e';
  allRoommatesSerializedName = 'r';
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
  roommateInputRowDataName = 'roommate-row';
  roommateInputRowSelector = '[data-roommate-row]';
  expenseInputRowDataName = 'expense-row';
  expenseInputRowSelector = '[data-expense-row]';
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
  copyStateUrlButtonId = 'Copy-URL-Button';
  copyStateUrlButtonSelector = '#Copy-URL-Button';
  stateUrlFieldId = 'State-URL-Field';
  stateUrlFieldSelector = '#State-URL-Field';
  localStorageWarningId = 'Local-Storage-Warning';
  localStorageWarningSelector = '#Local-Storage-Warning';
  localStorageWarningExplicitRefusalButtonId = 'Local-Storage-Warning-Decline-Button';
  localStorageWarningExplicitRefusalButtonSelector = '#Local-Storage-Warning-Decline-Button';
  localStorageWarningExplicitConsentButtonId = 'Local-Storage-Warning-Consent-Button';
  localStorageWarningExplicitConsentButtonSelector = '#Local-Storage-Warning-Consent-Button';
  rentExpenseType = 'Rent';
  utilitiesExpenseType = 'Utilities';
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
  rentRoommatesSerializedName = 'r';
  rentExpensesSerializedName = 'e';
  localDataPreferencesSerializedName = 'l';
  generalStateSerializedName = 'generalState';
  main([]);
  Kotlin.defineModule('Rent Split 2', _);
  return _;
}(typeof this['Rent Split 2'] === 'undefined' ? {} : this['Rent Split 2'], kotlin);
