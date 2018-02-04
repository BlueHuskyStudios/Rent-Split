if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Rent Split 2'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Rent Split 2'.");
}
this['Rent Split 2'] = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toSet = Kotlin.kotlin.collections.toSet_us0mfu$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var equals = Kotlin.equals;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var getCallableRef = Kotlin.getCallableRef;
  var Throwable = Error;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var Pair = Kotlin.kotlin.Pair;
  var toString = Kotlin.toString;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_emfgvx$;
  var toSet_0 = Kotlin.kotlin.collections.toSet_7wnvza$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var throwCCE = Kotlin.throwCCE;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var Any = Object;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  var ObservableProperty = Kotlin.kotlin.properties.ObservableProperty;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  SerializationPurpose.prototype = Object.create(Enum.prototype);
  SerializationPurpose.prototype.constructor = SerializationPurpose;
  UserConsent.prototype = Object.create(Enum.prototype);
  UserConsent.prototype.constructor = UserConsent;
  observing$ObjectLiteral.prototype = Object.create(ObservableProperty.prototype);
  observing$ObjectLiteral.prototype.constructor = observing$ObjectLiteral;
  FiniteAmountSummary$all.prototype = Object.create(FiniteAmountSummary.prototype);
  FiniteAmountSummary$all.prototype.constructor = FiniteAmountSummary$all;
  FiniteAmountSummary$some.prototype = Object.create(FiniteAmountSummary.prototype);
  FiniteAmountSummary$some.prototype.constructor = FiniteAmountSummary$some;
  FiniteAmountSummary$none.prototype = Object.create(FiniteAmountSummary.prototype);
  FiniteAmountSummary$none.prototype.constructor = FiniteAmountSummary$none;
  Ternary.prototype = Object.create(Enum.prototype);
  Ternary.prototype.constructor = Ternary;
  CSSStyleDeclarationBlackhole.prototype = Object.create(CSSStyleDeclaration.prototype);
  CSSStyleDeclarationBlackhole.prototype.constructor = CSSStyleDeclarationBlackhole;
  HTMLCollectionBlackhole.prototype = Object.create(HTMLCollection.prototype);
  HTMLCollectionBlackhole.prototype.constructor = HTMLCollectionBlackhole;
  NodeListBlackhole.prototype = Object.create(NodeList.prototype);
  NodeListBlackhole.prototype.constructor = NodeListBlackhole;
  JSTernaryCheckboxTreeController.prototype = Object.create(TernaryCheckboxTree.prototype);
  JSTernaryCheckboxTreeController.prototype.constructor = JSTernaryCheckboxTreeController;
  function IdManager() {
    IdManager_instance = this;
    this.lastGeneratedId_0 = 0;
  }
  IdManager.prototype.generateNewId = function () {
    this.lastGeneratedId_0 = this.lastGeneratedId_0 + 1 | 0;
    return this.lastGeneratedId_0.toString();
  };
  IdManager.prototype.registerId_61zpoe$ = function (existingId) {
    var tmp$;
    if ((tmp$ = toIntOrNull(existingId)) != null) {
      if (tmp$ > this.lastGeneratedId_0) {
        this.lastGeneratedId_0 = tmp$;
      }
    }
    return this.lastGeneratedId_0.toString();
  };
  IdManager.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'IdManager',
    interfaces: []
  };
  var IdManager_instance = null;
  function IdManager_getInstance() {
    if (IdManager_instance === null) {
      new IdManager();
    }
    return IdManager_instance;
  }
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
  }
  LocalDataPreferences$Companion.prototype.invoke_qk3xy8$ = function (raw) {
    var tmp$, tmp$_0;
    return new LocalDataPreferences((tmp$_0 = typeof (tmp$ = raw[localStorageConsentSerializedName]) === 'string' ? tmp$ : null) != null ? UserConsent$Companion_getInstance().invoke_61zpoe$(tmp$_0) : null);
  };
  LocalDataPreferences$Companion.prototype.generateInitial = function () {
    return new LocalDataPreferences(null);
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
  var resourceIdSerializedName;
  var resourceNameSerializedName;
  var resourceDollarAmountSerializedName;
  var expenseApplicableRoommatesSerializedName;
  var resourceIsRemovableSerializedName;
  var resourceIsRenamableSerializedName;
  var allExpensesSerializedName;
  function RentExpense(id, type, monthlyCost, applicableRoommateIds, isRemovable, isRenamable, originalDOMElement) {
    RentExpense$Companion_getInstance();
    if (originalDOMElement === void 0)
      originalDOMElement = null;
    this.i = id;
    this.n = type;
    this.d = monthlyCost;
    this.f = applicableRoommateIds;
    this.x = isRemovable;
    this.r = isRenamable;
    this.originalDOMElement = originalDOMElement;
    IdManager_getInstance().registerId_61zpoe$(this.i);
  }
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  RentExpense.prototype.toJson = function () {
    var tmp$;
    return json([to(resourceIdSerializedName, this.i), to(resourceNameSerializedName, this.n), to(resourceDollarAmountSerializedName, this.d), to(resourceIsRemovableSerializedName, this.x), to(resourceIsRenamableSerializedName, this.r), to(expenseApplicableRoommatesSerializedName, (tmp$ = this.f) != null ? copyToArray(tmp$) : null)]);
  };
  RentExpense.prototype.appliesTo_pcqrmu$ = function (rentRoommate) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.f) != null ? tmp$.contains_11rb$(rentRoommate.i) : null) != null ? tmp$_0 : true;
  };
  function RentExpense$Companion() {
    RentExpense$Companion_instance = this;
    this.initialRent_r4hy5h$_0 = lazy(RentExpense$Companion$initialRent$lambda);
    this.initialUtilities_8549hm$_0 = lazy(RentExpense$Companion$initialUtilities$lambda);
  }
  RentExpense$Companion.prototype.invoke_qk3xy8$ = function (raw) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    var tmp$_14;
    if ((tmp$_0 = typeof (tmp$ = raw[resourceIdSerializedName]) === 'string' ? tmp$ : null) != null)
      tmp$_14 = tmp$_0;
    else {
      var $receiver = IdManager_getInstance().generateNewId();
      var message = 'No serialized expense ID; generating one to migrate it';
      console.log(message);
      tmp$_14 = $receiver;
    }
    tmp$_1 = tmp$_14;
    tmp$_3 = typeof (tmp$_2 = raw[resourceNameSerializedName]) === 'string' ? tmp$_2 : null;
    if (tmp$_3 == null) {
      var message_0 = 'No serialized expense type';
      console.log(message_0);
      return null;
    }
    tmp$_5 = typeof (tmp$_4 = raw[resourceDollarAmountSerializedName]) === 'number' ? tmp$_4 : null;
    if (tmp$_5 == null) {
      var message_1 = 'No serialized expense cost';
      console.log(message_1);
      return null;
    }
    tmp$_9 = (tmp$_8 = (tmp$_7 = Kotlin.isArray(tmp$_6 = raw[expenseApplicableRoommatesSerializedName]) ? tmp$_6 : null) != null ? toSet(tmp$_7) : null) != null ? tmp$_8 : RentExpenses$Companion_getInstance().allRoommates;
    tmp$_11 = typeof (tmp$_10 = raw[resourceIsRemovableSerializedName]) === 'boolean' ? tmp$_10 : null;
    if (tmp$_11 == null) {
      var message_2 = 'No serialized removability';
      console.log(message_2);
      return null;
    }
    tmp$_13 = typeof (tmp$_12 = raw[resourceIsRenamableSerializedName]) === 'boolean' ? tmp$_12 : null;
    if (tmp$_13 == null) {
      var message_3 = 'No serialized renamability';
      console.log(message_3);
      return null;
    }
    return new RentExpense(tmp$_1, tmp$_3, tmp$_5, tmp$_9, tmp$_11, tmp$_13);
  };
  Object.defineProperty(RentExpense$Companion.prototype, 'initialRent', {
    get: function () {
      return this.initialRent_r4hy5h$_0.value;
    }
  });
  Object.defineProperty(RentExpense$Companion.prototype, 'initialUtilities', {
    get: function () {
      return this.initialUtilities_8549hm$_0.value;
    }
  });
  RentExpense$Companion.prototype.generateNewExpense = function () {
    return new RentExpense(IdManager_getInstance().generateNewId(), '', defaultExpenseCost, RentExpenses$Companion_getInstance().allRoommates, true, true);
  };
  RentExpense$Companion.prototype.type_f5e6j7$ = function (ideal, backup) {
    var tmp$;
    return (tmp$ = ideal != null ? nonEmptyOrNull(ideal) : null) != null ? tmp$ : this.numberedType_61zpoe$(backup);
  };
  RentExpense$Companion.prototype.numberedType_61zpoe$ = function (number) {
    return 'Expense #' + number;
  };
  function RentExpense$Companion$initialRent$lambda() {
    return new RentExpense(IdManager_getInstance().generateNewId(), rentExpenseType, defaultRentExpenseCost, RentExpenses$Companion_getInstance().allRoommates, false, false);
  }
  function RentExpense$Companion$initialUtilities$lambda() {
    return new RentExpense(IdManager_getInstance().generateNewId(), utilitiesExpenseType, defaultUtilitiesExpenseCost, RentExpenses$Companion_getInstance().allRoommates, false, false);
  }
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
    return this.i;
  };
  RentExpense.prototype.component2 = function () {
    return this.n;
  };
  RentExpense.prototype.component3 = function () {
    return this.d;
  };
  RentExpense.prototype.component4 = function () {
    return this.f;
  };
  RentExpense.prototype.component5 = function () {
    return this.x;
  };
  RentExpense.prototype.component6 = function () {
    return this.r;
  };
  RentExpense.prototype.component7 = function () {
    return this.originalDOMElement;
  };
  RentExpense.prototype.copy_7xqv4k$ = function (id, type, monthlyCost, applicableRoommateIds, isRemovable, isRenamable, originalDOMElement) {
    return new RentExpense(id === void 0 ? this.i : id, type === void 0 ? this.n : type, monthlyCost === void 0 ? this.d : monthlyCost, applicableRoommateIds === void 0 ? this.f : applicableRoommateIds, isRemovable === void 0 ? this.x : isRemovable, isRenamable === void 0 ? this.r : isRenamable, originalDOMElement === void 0 ? this.originalDOMElement : originalDOMElement);
  };
  RentExpense.prototype.toString = function () {
    return 'RentExpense(id=' + Kotlin.toString(this.i) + (', type=' + Kotlin.toString(this.n)) + (', monthlyCost=' + Kotlin.toString(this.d)) + (', applicableRoommateIds=' + Kotlin.toString(this.f)) + (', isRemovable=' + Kotlin.toString(this.x)) + (', isRenamable=' + Kotlin.toString(this.r)) + (', originalDOMElement=' + Kotlin.toString(this.originalDOMElement)) + ')';
  };
  RentExpense.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.i) | 0;
    result = result * 31 + Kotlin.hashCode(this.n) | 0;
    result = result * 31 + Kotlin.hashCode(this.d) | 0;
    result = result * 31 + Kotlin.hashCode(this.f) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    result = result * 31 + Kotlin.hashCode(this.originalDOMElement) | 0;
    return result;
  };
  RentExpense.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.i, other.i) && Kotlin.equals(this.n, other.n) && Kotlin.equals(this.d, other.d) && Kotlin.equals(this.f, other.f) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.r, other.r) && Kotlin.equals(this.originalDOMElement, other.originalDOMElement)))));
  };
  function get_nonEmptyType($receiver) {
    return RentExpense$Companion_getInstance().type_f5e6j7$($receiver.n, $receiver.i);
  }
  function RentExpenses(allExpenses) {
    RentExpenses$Companion_getInstance();
    this.e = allExpenses;
    this.totalExpenses = reduceTo(this.e, 0.0, RentExpenses$totalExpenses$lambda);
  }
  RentExpenses.prototype.adding_pbrwj2$ = function (newExpense) {
    return new RentExpenses(adding(this.e, newExpense));
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
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
  RentExpenses.prototype.expenseForId_61zpoe$ = function (id) {
    var $receiver = this.e;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (equals(element.i, id)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  function RentExpenses$setting$lambda(closure$expense) {
    return function (it) {
      return equals(it.i, closure$expense.i);
    };
  }
  RentExpenses.prototype.setting_pbrwj2$ = function (expense) {
    var tmp$;
    var existingExpenseIndex = indexOfFirstOrNull(this.e, RentExpenses$setting$lambda(expense));
    if (existingExpenseIndex != null) {
      var expensesCopy = toMutableList(this.e);
      expensesCopy.set_wxm5ur$(existingExpenseIndex, expense);
      tmp$ = this.copy_sgeyu7$(expensesCopy);
    }
     else {
      tmp$ = this.adding_pbrwj2$(expense);
    }
    return tmp$;
  };
  RentExpenses.prototype.filter_8h766n$ = defineInlineFunction('Rent Split 2.RentSplit.RentExpenses.filter_8h766n$', wrapFunction(function () {
    var RentExpenses_init = _.RentSplit.RentExpenses;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    return function (function_0) {
      var $receiver = this.e;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (function_0(element))
          destination.add_11rb$(element);
      }
      return new RentExpenses_init(destination);
    };
  }));
  function RentExpenses$Companion() {
    RentExpenses$Companion_instance = this;
    this.allRoommates = null;
  }
  RentExpenses$Companion.prototype.generateInitial = function () {
    return new RentExpenses(listOf([RentExpense$Companion_getInstance().initialRent, RentExpense$Companion_getInstance().initialUtilities]));
  };
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
  function RentExpenses$totalExpenses$lambda(total, expense) {
    return total + expense.d;
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
  function RentRoommate(id, name, monthlyIncome, isRemovable, isRenamable, originalDOMElement) {
    RentRoommate$Companion_getInstance();
    if (originalDOMElement === void 0)
      originalDOMElement = null;
    this.i = id;
    this.n = name;
    this.d = monthlyIncome;
    this.x = isRemovable;
    this.r = isRenamable;
    this.originalDOMElement = originalDOMElement;
    IdManager_getInstance().registerId_61zpoe$(this.i);
  }
  RentRoommate.prototype.toJson = function () {
    return json([to(resourceIdSerializedName, this.i), to(resourceNameSerializedName, this.n), to(resourceDollarAmountSerializedName, this.d), to(resourceIsRemovableSerializedName, this.x), to(resourceIsRenamableSerializedName, this.r)]);
  };
  RentRoommate.prototype.contribution_qsnaur$ = function (to, allRoommates) {
    var tmp$;
    return ((tmp$ = allRoommates.incomePieChart.get_11rb$(this.i)) != null ? tmp$ : 0.0) * to.d;
  };
  function RentRoommate$Companion() {
    RentRoommate$Companion_instance = this;
  }
  RentRoommate$Companion.prototype.invoke_qk3xy8$ = function (raw) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
    var tmp$_10;
    if ((tmp$_0 = typeof (tmp$ = raw[resourceIdSerializedName]) === 'string' ? tmp$ : null) != null)
      tmp$_10 = tmp$_0;
    else {
      var $receiver = IdManager_getInstance().generateNewId();
      var message = 'No serialized roommate ID; generating one to migrate it';
      console.log(message);
      tmp$_10 = $receiver;
    }
    tmp$_1 = tmp$_10;
    tmp$_3 = typeof (tmp$_2 = raw[resourceNameSerializedName]) === 'string' ? tmp$_2 : null;
    if (tmp$_3 == null) {
      var message_0 = 'No serialized roommate name';
      console.log(message_0);
      return null;
    }
    tmp$_5 = typeof (tmp$_4 = raw[resourceDollarAmountSerializedName]) === 'number' ? tmp$_4 : null;
    if (tmp$_5 == null) {
      var message_1 = 'No serialized roommate income';
      console.log(message_1);
      return null;
    }
    tmp$_7 = typeof (tmp$_6 = raw[resourceIsRemovableSerializedName]) === 'boolean' ? tmp$_6 : null;
    if (tmp$_7 == null) {
      var message_2 = 'No serialized removability';
      console.log(message_2);
      return null;
    }
    tmp$_9 = typeof (tmp$_8 = raw[resourceIsRenamableSerializedName]) === 'boolean' ? tmp$_8 : null;
    if (tmp$_9 == null) {
      var message_3 = 'No serialized renamability';
      console.log(message_3);
      return null;
    }
    return new RentRoommate(tmp$_1, tmp$_3, tmp$_5, tmp$_7, tmp$_9);
  };
  RentRoommate$Companion.prototype.generateInitial = function () {
    return new RentRoommate(IdManager_getInstance().generateNewId(), '', defaultRoommateIncome, false, true);
  };
  RentRoommate$Companion.prototype.generateNewRoommate = function () {
    return new RentRoommate(IdManager_getInstance().generateNewId(), '', defaultRoommateIncome, true, true);
  };
  RentRoommate$Companion.prototype.name_f5e6j7$ = function (ideal, backup) {
    var tmp$;
    return (tmp$ = ideal != null ? nonEmptyOrNull(ideal) : null) != null ? tmp$ : this.numberedName_61zpoe$(backup);
  };
  RentRoommate$Companion.prototype.numberedName_61zpoe$ = function (number) {
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
    return this.i;
  };
  RentRoommate.prototype.component2 = function () {
    return this.n;
  };
  RentRoommate.prototype.component3 = function () {
    return this.d;
  };
  RentRoommate.prototype.component4 = function () {
    return this.x;
  };
  RentRoommate.prototype.component5 = function () {
    return this.r;
  };
  RentRoommate.prototype.component6 = function () {
    return this.originalDOMElement;
  };
  RentRoommate.prototype.copy_b4bw84$ = function (id, name, monthlyIncome, isRemovable, isRenamable, originalDOMElement) {
    return new RentRoommate(id === void 0 ? this.i : id, name === void 0 ? this.n : name, monthlyIncome === void 0 ? this.d : monthlyIncome, isRemovable === void 0 ? this.x : isRemovable, isRenamable === void 0 ? this.r : isRenamable, originalDOMElement === void 0 ? this.originalDOMElement : originalDOMElement);
  };
  RentRoommate.prototype.toString = function () {
    return 'RentRoommate(id=' + Kotlin.toString(this.i) + (', name=' + Kotlin.toString(this.n)) + (', monthlyIncome=' + Kotlin.toString(this.d)) + (', isRemovable=' + Kotlin.toString(this.x)) + (', isRenamable=' + Kotlin.toString(this.r)) + (', originalDOMElement=' + Kotlin.toString(this.originalDOMElement)) + ')';
  };
  RentRoommate.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.i) | 0;
    result = result * 31 + Kotlin.hashCode(this.n) | 0;
    result = result * 31 + Kotlin.hashCode(this.d) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    result = result * 31 + Kotlin.hashCode(this.originalDOMElement) | 0;
    return result;
  };
  RentRoommate.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.i, other.i) && Kotlin.equals(this.n, other.n) && Kotlin.equals(this.d, other.d) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.r, other.r) && Kotlin.equals(this.originalDOMElement, other.originalDOMElement)))));
  };
  function get_nonEmptyName($receiver) {
    return RentRoommate$Companion_getInstance().name_f5e6j7$($receiver.n, $receiver.i);
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
    this.incomePieChart_xues5a$_0 = lazy(RentRoommates$incomePieChart$lambda(this));
    var $receiver_0 = this.r;
    var transform_0 = getPropertyCallableRef('id', 1, function ($receiver) {
      return $receiver.i;
    });
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      destination_0.add_11rb$(transform_0(item_0));
    }
    this.allRoommateIds = destination_0;
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
  RentRoommates.prototype.filter_44cvmn$ = defineInlineFunction('Rent Split 2.RentSplit.RentRoommates.filter_44cvmn$', wrapFunction(function () {
    var RentRoommates_init = _.RentSplit.RentRoommates;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    return function (function_0) {
      var $receiver = this.r;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (function_0(element))
          destination.add_11rb$(element);
      }
      return new RentRoommates_init(destination);
    };
  }));
  Object.defineProperty(RentRoommates.prototype, 'incomePieChart', {
    get: function () {
      return this.incomePieChart_xues5a$_0.value;
    }
  });
  function RentRoommates$Companion() {
    RentRoommates$Companion_instance = this;
  }
  RentRoommates$Companion.prototype.generateInitial = function () {
    return new RentRoommates(listOf([RentRoommate$Companion_getInstance().generateInitial(), RentRoommate$Companion_getInstance().generateInitial()]));
  };
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
  function RentRoommates$incomePieChart$lambda$lambda(this$RentRoommates) {
    return function (pieChart, roommate) {
      var key = roommate.i;
      var value = roommate.d / this$RentRoommates.totalIncome;
      pieChart.put_xwzc9p$(key, value);
      return pieChart;
    };
  }
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function RentRoommates$incomePieChart$lambda(this$RentRoommates) {
    return function () {
      return reduceTo(this$RentRoommates.r, LinkedHashMap_init(), RentRoommates$incomePieChart$lambda$lambda(this$RentRoommates));
    };
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
  var resultsTableSelector;
  var resultsTableBodySelector;
  var resultsTableHeadRowSelector;
  var resourceIdDataName;
  var resourceIdAttribute;
  var resourceIdSelector;
  var expenseApplicableRoommatesDataName;
  var expenseApplicableRoommatesAttribute;
  var expenseApplicableRoommatesSelector;
  var expenseHasApplicableRoommatesClassName;
  var expenseHasApplicableRoommatesSelector;
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
  var expenseFilterButtonClass;
  var expenseFilterButtonSelector;
  var expenseFilterDialogId;
  var expenseFilterDialogSelector;
  var expenseFilterDialogCancelButtonId;
  var expenseFilterDialogCancelButtonSelector;
  var expenseFilterDialogOkButtonId;
  var expenseFilterDialogOkButtonSelector;
  var expenseFilterDialogExpenseNameClassName;
  var expenseFilterDialogExpenseNameSelector;
  var expenseFilterApplicableRoommateChecklistId;
  var expenseFilterApplicableRoommateChecklistSelector;
  var expenseFilterApplicableRoommateChecklistItemClass;
  var expenseFilterApplicableRoommateChecklistItemSelector;
  var expenseFilterEveryoneCheckboxId;
  var expenseFilterEveryoneCheckboxSelector;
  var expenseFilterApplicableRoommateCheckboxClass;
  var expenseFilterApplicableRoommateCheckboxSelector;
  var expenseFilterDialogCurrentExpenseDataName;
  var expenseFilterDialogCurrentExpenseAttribute;
  var expenseFilterDialogCurrentExpenseSelector;
  var expenseFilterAnyCheckboxSelector;
  var expenseFilterButtonExpenseRelationDataName;
  var expenseFilterButtonExpenseRelationAttribute;
  var expenseFilterButtonExpenseRelationSelector;
  var anyInputFieldSelector;
  var anyInputButtonSelector;
  var anyInputSelector;
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
    var tmp$;
    this.expenseFilterChecklistController_ttpzpq$_0 = observing((tmp$ = null) == null || Kotlin.isType(tmp$, JSTernaryCheckboxTreeController) ? tmp$ : throwCCE(), void 0, void 0, RentSplit$expenseFilterChecklistController$lambda(this));
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
  var RentSplit$expenseFilterChecklistController_metadata = new PropertyMetadata('expenseFilterChecklistController');
  Object.defineProperty(RentSplit.prototype, 'expenseFilterChecklistController', {
    get: function () {
      return this.expenseFilterChecklistController_ttpzpq$_0.getValue_lrcp0p$(this, RentSplit$expenseFilterChecklistController_metadata);
    },
    set: function (expenseFilterChecklistController) {
      this.expenseFilterChecklistController_ttpzpq$_0.setValue_9rddgb$(this, RentSplit$expenseFilterChecklistController_metadata, expenseFilterChecklistController);
    }
  });
  RentSplit.prototype.onReady = function () {
    this.preLoadConfigurations();
    this.reloadPageFromState_6taknv$(false);
    this.regenerateInputTables();
    this.registerListeners();
    this.recalculateRentSplit();
    save(this.state);
    this.presentToUser();
  };
  RentSplit.prototype.preLoadConfigurations = function () {
    $('html').addClass(TouchBasics_getInstance().isTouchSupported() ? 'touch-supported' : 'touch-not-supported');
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
  RentSplit.prototype.reRegisterFilterDialogListeners = function () {
    $(anyInputSelector, $(expenseFilterDialogSelector)).off();
    this.registerFilterDialogListeners();
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
    this.registerFilterDialogListeners();
  };
  RentSplit.prototype.registerFilterDialogListeners = function () {
    $(expenseFilterButtonSelector).click(getCallableRef('didPressFilterButton', function ($receiver, event) {
      return $receiver.didPressFilterButton_9ojx7i$(event), Unit;
    }.bind(null, this)));
    $(expenseFilterDialogCancelButtonSelector).click(getCallableRef('didPressFilterDialogCancelButton', function ($receiver, event) {
      return $receiver.didPressFilterDialogCancelButton_9ojx7i$(event), Unit;
    }.bind(null, this)));
    $(expenseFilterDialogOkButtonSelector).click(getCallableRef('didPressFilterDialogOkButton', function ($receiver, event) {
      return $receiver.didPressFilterDialogOkButton_9ojx7i$(event), Unit;
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
        var message = 'Failed to copy state URL!';
        console.log(message);
      }
       else
        throw error;
    }
  };
  RentSplit.prototype.didPressFilterButton_9ojx7i$ = function (event) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_0 = Kotlin.isType(tmp$ = event.currentTarget, Element) ? tmp$ : null;
    if (tmp$_0 == null) {
      var message = 'No element targeted in the filter button click event';
      console.log(message);
      return Unit;
    }
    tmp$_1 = this.expenseForFilterButton_2rdptt$(tmp$_0);
    if (tmp$_1 == null) {
      var message_0 = 'No expense matching ID in filter button';
      console.log(message_0);
      return Unit;
    }
    this.showExpenseDialog_pbrwj2$(tmp$_1);
  };
  RentSplit.prototype.applicableRoommateCheckboxesDidChange_fsqkh5$ = function (oldValue, newValue) {
    booleanAttr_0($(expenseFilterDialogOkButtonSelector), 'disabled', newValue === Ternary$false_getInstance());
  };
  RentSplit.prototype.didPressFilterDialogCancelButton_9ojx7i$ = function (event) {
    var tmp$;
    (tmp$ = this.expenseFilterDialog) != null ? (tmp$.close(), Unit) : null;
  };
  RentSplit.prototype.didPressFilterDialogOkButton_9ojx7i$ = function (event) {
    var tmp$;
    var expense = this.expenseInFilterDialog();
    if (expense != null) {
      this.state = this.state.setting_pbrwj2$(expense.copy_7xqv4k$(void 0, void 0, void 0, this.applicableRoommateIdsInFilterDialog_6taknv$()));
    }
     else {
      var message = 'No expense found in filter dialog!';
      console.log(message);
    }
    (tmp$ = this.expenseFilterDialog) != null ? (tmp$.close(), Unit) : null;
  };
  RentSplit.prototype.reloadStateFromPage = function () {
    this.state = this.state.copy_2k6jng$(this.fetchRoommates(), this.fetchExpenses());
  };
  RentSplit.prototype.recalculateRentSplit = function () {
    var resultsTable = resultsTableModel(this.state);
    RentSplitViewGenerator_getInstance().fillOutResults_1a4gu5$(resultsTable);
    this.notifyOfProblems_1a4gu5$(resultsTable);
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
    return new RentRoommates(asList(mapNotNull(jq_roommateRows, RentSplit$roommateRowsToRoommates$lambda(this))));
  };
  function RentSplit$expenseRowsToExpenses$lambda(this$RentSplit) {
    return function (index, expenseRow) {
      return this$RentSplit.expenseRowToExpense_folkv9$(index, $(expenseRow));
    };
  }
  RentSplit.prototype.expenseRowsToExpenses_r6ezyp$ = function (jq_expenseRows) {
    return new RentExpenses(asList(mapNotNull(jq_expenseRows, RentSplit$expenseRowsToExpenses$lambda(this))));
  };
  RentSplit.prototype.roommateRowToRoommate_folkv9$ = function (index, jq_roommateRow) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    tmp$_0 = (tmp$ = $(jq_roommateRow).data(resourceIdDataName)) != null ? tmp$.toString() : null;
    if (tmp$_0 == null) {
      var message = 'No ID on page!';
      console.log(message);
      return null;
    }
    tmp$_2 = (tmp$_1 = $(roommateNameInputSelector, jq_roommateRow).val()) != null ? tmp$_1 : '';
    tmp$_4 = (tmp$_3 = $(roommateIncomeInputSelector, jq_roommateRow).val()) != null ? toDoubleOrNull(tmp$_3) : null;
    if (tmp$_4 == null) {
      var message_0 = 'No monthly income on page!';
      console.log(message_0);
      return null;
    }
    return new RentRoommate(tmp$_0, tmp$_2, tmp$_4, (tmp$_6 = (tmp$_5 = jq_roommateRow.attr(roommateRemovabilityAttribute)) != null ? toBooleanOrNull(tmp$_5) : null) != null ? tmp$_6 : true, (tmp$_8 = (tmp$_7 = jq_roommateRow.attr(roommateRenamabilityAttribute)) != null ? toBooleanOrNull(tmp$_7) : null) != null ? tmp$_8 : true, jq_roommateRow);
  };
  RentSplit.prototype.expenseRowToExpense_folkv9$ = function (index, jq_expenseRow) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
    tmp$_0 = (tmp$ = jq_expenseRow.data(resourceIdDataName)) != null ? tmp$.toString() : null;
    if (tmp$_0 == null) {
      var message = 'No ID on page!';
      console.log(message);
      return null;
    }
    tmp$_2 = (tmp$_1 = $(expenseTypeInputSelector, jq_expenseRow).val()) != null ? tmp$_1 : '';
    tmp$_6 = (tmp$_5 = (tmp$_4 = (tmp$_3 = jq_expenseRow.data(expenseApplicableRoommatesDataName)) != null ? tmp$_3.toString() : null) != null ? getCallableRef('expenseApplicableRoommatesFromString', function ($receiver, expenseApplicableRoommatesString) {
      return $receiver.expenseApplicableRoommatesFromString_61zpoe$(expenseApplicableRoommatesString);
    }.bind(null, this))(tmp$_4) : null) != null ? tmp$_5 : RentExpenses$Companion_getInstance().allRoommates;
    tmp$_8 = (tmp$_7 = $(expenseCostInputSelector, jq_expenseRow).val()) != null ? toDoubleOrNull(tmp$_7) : null;
    if (tmp$_8 == null) {
      var message_0 = 'No monthly cost on page!';
      console.log(message_0);
      return null;
    }
    return new RentExpense(tmp$_0, tmp$_2, tmp$_8, tmp$_6, (tmp$_10 = (tmp$_9 = jq_expenseRow.attr(expenseRemovabilityAttribute)) != null ? toBooleanOrNull(tmp$_9) : null) != null ? tmp$_10 : true, (tmp$_12 = (tmp$_11 = jq_expenseRow.attr(expenseRenamabilityAttribute)) != null ? toBooleanOrNull(tmp$_11) : null) != null ? tmp$_12 : true, jq_expenseRow);
  };
  RentSplit.prototype.expenseApplicableRoommatesFromString_61zpoe$ = function (expenseApplicableRoommatesString) {
    return toSetOfIds(expenseApplicableRoommatesString);
  };
  RentSplit.prototype.expenseForFilterButton_2rdptt$ = function (filterButton) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = $(filterButton).data(expenseFilterButtonExpenseRelationDataName)) != null ? tmp$.toString() : null) != null ? getCallableRef('expenseForId', function ($receiver, id) {
      return $receiver.expenseForId_61zpoe$(id);
    }.bind(null, this))(tmp$_0) : null;
  };
  RentSplit.prototype.expenseForId_61zpoe$ = function (id) {
    return this.state.e.expenseForId_61zpoe$(id);
  };
  RentSplit.prototype.expenseInFilterDialog = function () {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = this.expenseFilterDialog) != null ? $(tmp$) : null) != null ? tmp$_0.data(expenseFilterDialogCurrentExpenseDataName) : null) != null ? this.expenseForId_61zpoe$(tmp$_1.toString()) : null;
  };
  RentSplit.prototype.applicableRoommateIdsInFilterDialog_6taknv$ = function (ignoreEveryoneCheckbox) {
    if (ignoreEveryoneCheckbox === void 0)
      ignoreEveryoneCheckbox = false;
    var tmp$;
    var tmp$_0 = this.summarizeFilterDialogApplicableRoommates_6taknv$(ignoreEveryoneCheckbox);
    var summary = tmp$_0.component1()
    , set = tmp$_0.component2();
    if (Kotlin.isType(summary, FiniteAmountSummary$all))
      tmp$ = RentExpenses$Companion_getInstance().allRoommates;
    else if (Kotlin.isType(summary, FiniteAmountSummary$some) || Kotlin.isType(summary, FiniteAmountSummary$none))
      tmp$ = set;
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  function RentSplit$summarizeFilterDialogApplicableRoommates$lambda(f, element) {
    var id = toString($(element).data(resourceIdDataName));
    var tmp$, tmp$_0;
    return ((tmp$_0 = (tmp$ = $(element).prop('checked')) != null ? toBooleanOrNull(tmp$) : null) != null ? tmp$_0 : false) ? id : null;
  }
  RentSplit.prototype.summarizeFilterDialogApplicableRoommates_6taknv$ = function (ignoreEveryoneCheckbox) {
    if (ignoreEveryoneCheckbox === void 0)
      ignoreEveryoneCheckbox = false;
    var tmp$;
    var allCheckboxes = $(expenseFilterApplicableRoommateCheckboxSelector);
    var tmp$_0 = !ignoreEveryoneCheckbox;
    if (tmp$_0) {
      var $receiver = $(expenseFilterEveryoneCheckboxSelector);
      var tmp$_1, tmp$_2;
      var tmp$_3 = (tmp$_2 = (tmp$_1 = $receiver.prop('checked')) != null ? toBooleanOrNull(tmp$_1) : null) != null ? tmp$_2 : false;
      if (tmp$_3) {
        var tmp$_4, tmp$_5;
        tmp$_3 = !((tmp$_5 = (tmp$_4 = $receiver.prop('indeterminate')) != null ? toBooleanOrNull(tmp$_4) : null) != null ? tmp$_5 : false);
      }
      tmp$_0 = tmp$_3;
    }
    if (tmp$_0) {
      tmp$ = new Pair(new FiniteAmountSummary$all(allCheckboxes.length), emptySet());
    }
     else {
      var checkedRoommateIds = filterNotNull(allCheckboxes.map(RentSplit$summarizeFilterDialogApplicableRoommates$lambda));
      var tmp$_6, tmp$_7;
      tmp$_6 = checkedRoommateIds.size;
      if (tmp$_6 === 0)
        tmp$_7 = new FiniteAmountSummary$none();
      else {
        if (tmp$_6 === this.state.r.r.size)
          tmp$_7 = new FiniteAmountSummary$all(allCheckboxes.length);
        else {
          tmp$_7 = new FiniteAmountSummary$some(checkedRoommateIds.size, allCheckboxes.length);
        }
      }
      tmp$ = new Pair(tmp$_7, toSet_0(checkedRoommateIds));
    }
    return tmp$;
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
  RentSplit.prototype.configureExistingExpenseInputRow_0 = function (existingExpenseInputRow, expense) {
    var jq_existingExpenseInputRow = $(existingExpenseInputRow);
    expense.originalDOMElement = jq_existingExpenseInputRow;
    $(expenseTypeInputSelector, existingExpenseInputRow).val(expense.n);
    $(expenseCostInputSelector, existingExpenseInputRow).val(expense.d);
    jq_existingExpenseInputRow.attr(expenseRenamabilityAttribute, expense.r);
    jq_existingExpenseInputRow.attr(expenseRemovabilityAttribute, expense.x);
    if (expense.f == null) {
      jq_existingExpenseInputRow.data(expenseApplicableRoommatesDataName, null);
      jq_existingExpenseInputRow.removeClass(expenseHasApplicableRoommatesClassName);
    }
     else {
      jq_existingExpenseInputRow.data(expenseApplicableRoommatesDataName, copyToArray(expense.f));
      jq_existingExpenseInputRow.addClass(expenseHasApplicableRoommatesClassName);
    }
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
    RentSplitViewGenerator_getInstance().displayRoommateProportion_zem1ah$(rentSplitResultRow(roommate, this.state));
    jq_existingRoommateInputTableRow.attr(roommateRenamabilityAttribute, roommate.r);
    jq_existingRoommateInputTableRow.attr(roommateRemovabilityAttribute, roommate.x);
  };
  RentSplit.prototype.reconfigureExpenseDialog_pbrwj2$ = function (expense) {
    $(expenseFilterDialogSelector).data(expenseFilterDialogCurrentExpenseDataName, expense.i);
    $(expenseFilterDialogExpenseNameSelector).text(sanitizedForHtml(get_nonEmptyType(expense)));
    this.fillExpenseFilterApplicableRoommateList_pbrwj2$(expense);
    this.reRegisterFilterDialogListeners();
  };
  function RentSplit$fillExpenseFilterApplicableRoommateList$lambda(f, element) {
    return element;
  }
  RentSplit.prototype.fillExpenseFilterApplicableRoommateList_pbrwj2$ = function (expense) {
    var tmp$, tmp$_0;
    $(expenseFilterApplicableRoommateChecklistItemSelector).remove();
    $(expenseFilterApplicableRoommateChecklistSelector).append(this.buildExpenseFilterApplicableRoommateList_pbrwj2$(expense));
    tmp$_0 = Kotlin.isType(tmp$ = $(expenseFilterEveryoneCheckboxSelector).get(0), HTMLInputElement) ? tmp$ : null;
    if (tmp$_0 == null) {
      return;
    }
    var everyoneCheckbox = tmp$_0;
    var $receiver = $(expenseFilterApplicableRoommateCheckboxSelector).map(RentSplit$fillExpenseFilterApplicableRoommateList$lambda);
    var destination = ArrayList_init($receiver.length);
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
      var item = $receiver[tmp$_1];
      var tmp$_2 = destination.add_11rb$;
      var tmp$_3, tmp$_4;
      tmp$_4 = Kotlin.isType(tmp$_3 = item, HTMLInputElement) ? tmp$_3 : null;
      if (tmp$_4 == null) {
        return;
      }
      tmp$_2.call(destination, tmp$_4);
    }
    var roommateCheckboxes = destination;
    this.expenseFilterChecklistController = JSTernaryCheckboxTreeController_init(everyoneCheckbox, roommateCheckboxes);
  };
  function RentSplit$buildExpenseFilterApplicableRoommateList$lambda(closure$expense, this$RentSplit) {
    return function (htmlString, roommate) {
      return htmlString + this$RentSplit.buildExpenseFilterApplicableRoommateListItem_m1r9kw$(closure$expense, roommate);
    };
  }
  RentSplit.prototype.buildExpenseFilterApplicableRoommateList_pbrwj2$ = function (expense) {
    return reduceTo(this.state.r.r, '', RentSplit$buildExpenseFilterApplicableRoommateList$lambda(expense, this));
  };
  RentSplit.prototype.buildExpenseFilterApplicableRoommateListItem_m1r9kw$ = function (expense, roommate) {
    return '<li' + " class='checklist-item expense-filter-applicable-roommate'>" + '<label>' + '<input' + (' ' + resourceIdAttribute + "='" + roommate.i + "'") + " class='expense-filter-applicable-roommate-checkbox'" + " type='checkbox'" + (' ' + (expense.appliesTo_pcqrmu$(roommate) ? 'checked' : '')) + '/>' + (' ' + sanitizedForHtml(get_nonEmptyName(roommate))) + '<\/label>' + '<\/li>';
  };
  RentSplit.prototype.showExpenseDialog_pbrwj2$ = function (expense) {
    var tmp$;
    this.reconfigureExpenseDialog_pbrwj2$(expense);
    (tmp$ = this.expenseFilterDialog) != null ? (tmp$.showModal(), Unit) : null;
  };
  Object.defineProperty(RentSplit.prototype, 'expenseFilterDialog', {
    get: function () {
      var tmp$, tmp$_0;
      var tmp$_1;
      if ((tmp$_0 = Kotlin.isType(tmp$ = $(expenseFilterDialogSelector).get(0), HTMLDialogElement) ? tmp$ : null) != null)
        tmp$_1 = tmp$_0;
      else {
        var message = 'Could not find dialog element!';
        console.log(message);
        tmp$_1 = null;
      }
      return tmp$_1;
    }
  });
  RentSplit.prototype.didPressNewExpenseButton_9ojx7i$ = function (event) {
    this.addNewExpense_rhtjr1$(RentExpense$Companion_getInstance().generateNewExpense(), event);
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
    return this.buildExpenseInputRow_c99a2s$(index, expense.i, expense.n, expense.d, expense.f, expense.r, expense.x);
  };
  RentSplit.prototype.buildExpenseInputRow_c99a2s$ = function (index, id, type, cost, applicableRoommates, isRenamable, isRemovable) {
    var expenseNumber = index + 1 | 0;
    var row = '<tr' + " class='hides-something-until-hover'" + (' ' + resourceIdAttribute + "='" + id + "'") + (' data-' + expenseInputRowDataName + '=' + '"' + expenseNumber + '"') + (' ' + expenseRenamabilityAttribute + "='" + isRenamable + "'") + (' ' + expenseRemovabilityAttribute + "='" + isRemovable + "'") + (applicableRoommates == null ? '' : ' ' + expenseApplicableRoommatesAttribute + "='" + serializedSetOfIds(applicableRoommates) + "'") + '>';
    var tmp$ = '<th class=' + '"' + (isRenamable ? 'plain   ' : '') + 'has-floating-button' + '"' + '>' + ("<button class='" + expenseFilterButtonClass + "   floats-to-left   hidden-until-parent-hover' " + expenseFilterButtonExpenseRelationAttribute + "='" + id + "'><i class='fa fa-filter'><\/i><\/button>") + '<input' + (' type=' + '"' + (isRenamable ? 'text' : 'hidden') + '"') + ' class="expense-type   text-right"' + (!(type == null || type.length === 0) ? ' value=' + '"' + toString(type) + '"' : '') + ' size="8"' + ' tabindex=0' + (' placeholder=' + '"' + RentExpense$Companion_getInstance().numberedType_61zpoe$(id) + '"') + '/>';
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
    return this.addNewRoommate_an8xux$(RentRoommate$Companion_getInstance().generateNewRoommate(), event);
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
    return this.buildRoommateInputRow_yi75pw$(index, roommate.i, roommate.n, roommate.d, roommate.r, roommate.x);
  };
  RentSplit.prototype.buildRoommateInputRow_yi75pw$ = function (index, id, name, income, isRenamable, isRemovable) {
    var roommateNumber = index + 1 | 0;
    var row = '<tr' + (' ' + resourceIdAttribute + "='" + id + "'") + (' data-' + roommateInputRowDataName + "='" + roommateNumber + "'") + (' ' + roommateRenamabilityAttribute + "='" + isRenamable + "'") + (' ' + roommateRemovabilityAttribute + "='" + isRemovable + "'") + '>';
    row += '<th class="plain">' + '<input' + ' type="text"' + ' class="roommate-name   text-right"' + (!(name == null || name.length === 0) ? ' value="' + name + '"' : '') + ' size="8"' + ' tabindex=0' + (' placeholder=' + '"' + RentRoommate$Companion_getInstance().numberedName_61zpoe$(id) + '"') + '/>' + '<\/th>';
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
  RentSplit.prototype.notifyOfProblems_1a4gu5$ = function (table) {
    var $receiver = table.rows;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.totalContributions > element.representedRoommate.d)
        destination.add_11rb$(element);
    }
    var roommatesWhoOweTooMuch = destination;
    var tmp$_0;
    tmp$_0 = roommatesWhoOweTooMuch.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var name = sanitizedForHtml(get_nonEmptyName(element_0.representedRoommate));
      $('[data-' + roommateResultRowDataName + "='" + name + "']").addClass(roommateWhoOwesTooMuchClassName).attr('title', name + ' owes ' + (element_0.totalContributions - element_0.representedRoommate.d) + ' too much!');
    }
  };
  RentSplit.prototype.get_appliesToAllRoommates_3ssen7$ = function ($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = $receiver.f) != null ? tmp$.containsAll_brywnq$(this.state.r.allRoommateIds) : null) != null ? tmp$_0 : false;
  };
  RentSplit.prototype.applicableRoommateSummary_tyj22f$ = function ($receiver, applicableRoommateIds) {
    if (applicableRoommateIds === void 0)
      applicableRoommateIds = $receiver.f;
    var tmp$, tmp$_0;
    var totalRoommateCount = this.state.r.r.size;
    var applicableRoommateCount = (tmp$ = applicableRoommateIds != null ? applicableRoommateIds.size : null) != null ? tmp$ : totalRoommateCount;
    var difference = totalRoommateCount - applicableRoommateCount | 0;
    if (difference === totalRoommateCount)
      tmp$_0 = new FiniteAmountSummary$none();
    else if (difference === 0)
      tmp$_0 = new FiniteAmountSummary$all(applicableRoommateCount);
    else
      tmp$_0 = new FiniteAmountSummary$some(applicableRoommateCount, totalRoommateCount);
    return tmp$_0;
  };
  function RentSplit$state$lambda(this$RentSplit) {
    return function (f, f_0) {
      this$RentSplit.reloadPageFromState_6taknv$();
      save(this$RentSplit.state);
      return Unit;
    };
  }
  function RentSplit$expenseFilterChecklistController$lambda$lambda(this$RentSplit) {
    return function (oldState, newState) {
      this$RentSplit.applicableRoommateCheckboxesDidChange_fsqkh5$(oldState, newState);
      return Unit;
    };
  }
  function RentSplit$expenseFilterChecklistController$lambda(this$RentSplit) {
    return function (oldValue, newValue) {
      var tmp$, tmp$_0, tmp$_1;
      oldValue != null ? (oldValue.deinit(), Unit) : null;
      newValue != null ? (newValue.onStateChange_nrmh93$(RentSplit$expenseFilterChecklistController$lambda$lambda(this$RentSplit)), Unit) : null;
      tmp$ = oldValue != null ? oldValue.state : null;
      tmp$_1 = (tmp$_0 = newValue != null ? newValue.state : null) != null ? tmp$_0 : Ternary$indeterminate_getInstance();
      this$RentSplit.applicableRoommateCheckboxesDidChange_fsqkh5$(tmp$, tmp$_1);
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
  function resultsTableModel($receiver) {
    var $receiver_0 = $receiver.e.e;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(sanitizedForHtml(get_nonEmptyType(item)));
    }
    var $receiver_1 = $receiver.r.r;
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_0;
    tmp$_0 = $receiver_1.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      destination_0.add_11rb$(rentSplitResultRow(item_0, $receiver));
    }
    return new RentSplitResultTable(destination, destination_0);
  }
  function rentSplitResultRow$lambda(rowTotal, cell) {
    return rowTotal + (cell != null ? cell : 0.0);
  }
  function rentSplitResultRow($receiver, overallState) {
    var tmp$;
    var $receiver_0 = overallState.e.e;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1 = destination.add_11rb$;
      var transform$result;
      if (item.appliesTo_pcqrmu$($receiver)) {
        var $receiver_1 = overallState.r.r;
        var destination_0 = ArrayList_init();
        var tmp$_2;
        tmp$_2 = $receiver_1.iterator();
        while (tmp$_2.hasNext()) {
          var element = tmp$_2.next();
          if (item.appliesTo_pcqrmu$(element))
            destination_0.add_11rb$(element);
        }
        transform$result = $receiver.contribution_qsnaur$(item, new RentRoommates(destination_0));
      }
       else {
        transform$result = null;
      }
      tmp$_1.call(destination, transform$result);
    }
    var cells = destination;
    var rowTotal = reduceTo(cells, 0.0, rentSplitResultRow$lambda);
    return new RentSplitResultRow($receiver, sanitizedForHtml(get_nonEmptyName($receiver)), cells, rowTotal, (tmp$ = overallState.r.incomePieChart.get_11rb$($receiver.i)) != null ? tmp$ : 0.0);
  }
  function RentSplitResultTable(columnHeaders, rows) {
    this.columnHeaders = columnHeaders;
    this.rows = rows;
  }
  RentSplitResultTable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RentSplitResultTable',
    interfaces: []
  };
  RentSplitResultTable.prototype.component1 = function () {
    return this.columnHeaders;
  };
  RentSplitResultTable.prototype.component2 = function () {
    return this.rows;
  };
  RentSplitResultTable.prototype.copy_nnrplx$ = function (columnHeaders, rows) {
    return new RentSplitResultTable(columnHeaders === void 0 ? this.columnHeaders : columnHeaders, rows === void 0 ? this.rows : rows);
  };
  RentSplitResultTable.prototype.toString = function () {
    return 'RentSplitResultTable(columnHeaders=' + Kotlin.toString(this.columnHeaders) + (', rows=' + Kotlin.toString(this.rows)) + ')';
  };
  RentSplitResultTable.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.columnHeaders) | 0;
    result = result * 31 + Kotlin.hashCode(this.rows) | 0;
    return result;
  };
  RentSplitResultTable.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.columnHeaders, other.columnHeaders) && Kotlin.equals(this.rows, other.rows)))));
  };
  function RentSplitResultRow(representedRoommate, rowHeader, cells, totalContributions, incomeProportion) {
    this.representedRoommate = representedRoommate;
    this.rowHeader = rowHeader;
    this.cells = cells;
    this.totalContributions = totalContributions;
    this.incomeProportion = incomeProportion;
  }
  RentSplitResultRow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RentSplitResultRow',
    interfaces: []
  };
  RentSplitResultRow.prototype.component1 = function () {
    return this.representedRoommate;
  };
  RentSplitResultRow.prototype.component2 = function () {
    return this.rowHeader;
  };
  RentSplitResultRow.prototype.component3 = function () {
    return this.cells;
  };
  RentSplitResultRow.prototype.component4 = function () {
    return this.totalContributions;
  };
  RentSplitResultRow.prototype.component5 = function () {
    return this.incomeProportion;
  };
  RentSplitResultRow.prototype.copy_8a21sy$ = function (representedRoommate, rowHeader, cells, totalContributions, incomeProportion) {
    return new RentSplitResultRow(representedRoommate === void 0 ? this.representedRoommate : representedRoommate, rowHeader === void 0 ? this.rowHeader : rowHeader, cells === void 0 ? this.cells : cells, totalContributions === void 0 ? this.totalContributions : totalContributions, incomeProportion === void 0 ? this.incomeProportion : incomeProportion);
  };
  RentSplitResultRow.prototype.toString = function () {
    return 'RentSplitResultRow(representedRoommate=' + Kotlin.toString(this.representedRoommate) + (', rowHeader=' + Kotlin.toString(this.rowHeader)) + (', cells=' + Kotlin.toString(this.cells)) + (', totalContributions=' + Kotlin.toString(this.totalContributions)) + (', incomeProportion=' + Kotlin.toString(this.incomeProportion)) + ')';
  };
  RentSplitResultRow.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.representedRoommate) | 0;
    result = result * 31 + Kotlin.hashCode(this.rowHeader) | 0;
    result = result * 31 + Kotlin.hashCode(this.cells) | 0;
    result = result * 31 + Kotlin.hashCode(this.totalContributions) | 0;
    result = result * 31 + Kotlin.hashCode(this.incomeProportion) | 0;
    return result;
  };
  RentSplitResultRow.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.representedRoommate, other.representedRoommate) && Kotlin.equals(this.rowHeader, other.rowHeader) && Kotlin.equals(this.cells, other.cells) && Kotlin.equals(this.totalContributions, other.totalContributions) && Kotlin.equals(this.incomeProportion, other.incomeProportion)))));
  };
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
    this.initial_3lnauh$_0 = lazy(RentSplitState$Companion$initial$lambda);
  }
  RentSplitState$Companion.prototype.invoke_qk3xy8$ = function (raw) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    return new RentSplitState((tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = raw[rentRoommatesSerializedName], Object) ? tmp$ : null) != null ? RentRoommates$Companion_getInstance().invoke_qk3xy8$(tmp$_0) : null) != null ? tmp$_1 : RentRoommates$Companion_getInstance().generateInitial(), (tmp$_4 = (tmp$_3 = Kotlin.isType(tmp$_2 = raw[rentExpensesSerializedName], Object) ? tmp$_2 : null) != null ? RentExpenses$Companion_getInstance().invoke_qk3xy8$(tmp$_3) : null) != null ? tmp$_4 : RentExpenses$Companion_getInstance().generateInitial(), (tmp$_7 = (tmp$_6 = Kotlin.isType(tmp$_5 = raw[localDataPreferencesSerializedName], Object) ? tmp$_5 : null) != null ? LocalDataPreferences$Companion_getInstance().invoke_qk3xy8$(tmp$_6) : null) != null ? tmp$_7 : LocalDataPreferences$Companion_getInstance().generateInitial());
  };
  Object.defineProperty(RentSplitState$Companion.prototype, 'initial', {
    get: function () {
      return this.initial_3lnauh$_0.value;
    }
  });
  function RentSplitState$Companion$initial$lambda() {
    return new RentSplitState(RentRoommates$Companion_getInstance().generateInitial(), RentExpenses$Companion_getInstance().generateInitial(), LocalDataPreferences$Companion_getInstance().generateInitial());
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
  RentSplitState.prototype.setting_pbrwj2$ = function (expense) {
    return this.copy_2k6jng$(void 0, this.e.setting_pbrwj2$(expense));
  };
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
    switch (purpose.name) {
      case 'forLocalStorage':
        return JSON.stringify($receiver.toJson_i9b4g5$(purpose));
      case 'forSharing':
        return encodeURIComponent(JSON.stringify($receiver.toJson_i9b4g5$(purpose)));
      default:return Kotlin.noWhenBranchMatched();
    }
  }
  function deserializing$lambda(closure$purpose, closure$jsonString) {
    return function () {
      var tmp$, tmp$_0;
      var raw;
      switch (closure$purpose.name) {
        case 'forLocalStorage':
          raw = JSON.parse(closure$jsonString);
          break;
        case 'forSharing':
          raw = JSON.parse(decodeURIComponent(closure$jsonString));
          (tmp$_0 = Kotlin.isType(tmp$ = raw[localDataPreferencesSerializedName], Object) ? tmp$ : null) != null ? (tmp$_0[localStorageConsentSerializedName] = undefined, Unit) : null;
          break;
        default:Kotlin.noWhenBranchMatched();
          break;
      }
      return RentSplitState$Companion_getInstance().invoke_qk3xy8$(raw);
    };
  }
  function deserializing($receiver, jsonString, purpose) {
    return safeTry(deserializing$lambda(purpose, jsonString));
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
  function RentSplitViewGenerator() {
    RentSplitViewGenerator_instance = this;
  }
  RentSplitViewGenerator.prototype.addExpenseColumnHeaderToDom_i0mql$ = function (jq_resultsTableHeadRow, headerText) {
    jq_resultsTableHeadRow.append(this.buildExpenseColumnHeader_61zpoe$(headerText));
  };
  RentSplitViewGenerator.prototype.buildExpenseColumnHeader_61zpoe$ = function (headerText) {
    return "<th class='hide-small'>" + headerText + '<\/th>';
  };
  function RentSplitViewGenerator$buildResultRow$lambda(cell) {
    var tmp$;
    return "<td class='hide-small'>" + ((tmp$ = cell != null ? get_dollarFormat(cell) : null) != null ? tmp$ : '\u2014') + '<\/td>';
  }
  RentSplitViewGenerator.prototype.buildResultRow_zem1ah$ = function (model) {
    var roommateName = model.rowHeader;
    var row = '<tr data-' + roommateResultRowDataName + "='" + roommateName + "'><th>" + roommateName + '<\/th>';
    row += joinToString(model.cells, '', void 0, void 0, void 0, void 0, RentSplitViewGenerator$buildResultRow$lambda);
    row += '<th>' + get_dollarFormat(model.totalContributions) + '<\/th>';
    return row + '<\/tr>';
  };
  RentSplitViewGenerator.prototype.fillOutResults_1a4gu5$ = function (model) {
    this.fillOutResultsTableHead_1a4gu5$(model);
    this.fillOutResultsTableBody_1a4gu5$(model);
    this.displayRoommateProportions_1a4gu5$(model);
  };
  RentSplitViewGenerator.prototype.fillOutResultsTableHead_1a4gu5$ = function (model) {
    var jq_resultsTableHeadRow = $(resultsTableHeadRowSelector);
    jq_resultsTableHeadRow.empty();
    jq_resultsTableHeadRow.append(this.buildResultsTableHeadRoommateNameColumnTitle());
    var tmp$;
    tmp$ = model.columnHeaders.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.addExpenseColumnHeaderToDom_i0mql$(jq_resultsTableHeadRow, element);
    }
    jq_resultsTableHeadRow.append(this.buildResultsTableHeadRoommateTotalContributionsColumnTitle());
  };
  RentSplitViewGenerator.prototype.buildResultsTableHeadRoommateNameColumnTitle = function () {
    return '<th class="text-center">Name<\/th>';
  };
  RentSplitViewGenerator.prototype.buildResultsTableHeadRoommateTotalContributionsColumnTitle = function () {
    return '<th class="text-center">Total Cost<\/th>';
  };
  RentSplitViewGenerator.prototype.fillOutResultsTableBody_1a4gu5$ = function (model) {
    var jq_resultsTableBody = $(resultsTableBodySelector);
    jq_resultsTableBody.empty();
    var tmp$;
    tmp$ = model.rows.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.addResultRowToDom_2qskos$(jq_resultsTableBody, element);
    }
  };
  RentSplitViewGenerator.prototype.addResultRowToDom_2qskos$ = function (jq_resultsTableBody, model) {
    jq_resultsTableBody.append(this.buildResultRow_zem1ah$(model));
  };
  RentSplitViewGenerator.prototype.displayRoommateProportions_1a4gu5$ = function (model) {
    var tmp$;
    tmp$ = model.rows.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.displayRoommateProportion_zem1ah$(element);
    }
  };
  RentSplitViewGenerator.prototype.displayRoommateProportion_zem1ah$ = function (model) {
    var tmp$;
    if ((tmp$ = model.representedRoommate.originalDOMElement) != null) {
      $(roommateProportionSelector, tmp$).html(toFixed(model.incomeProportion * 100.0, 2) + '%');
    }
  };
  RentSplitViewGenerator.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RentSplitViewGenerator',
    interfaces: []
  };
  var RentSplitViewGenerator_instance = null;
  function RentSplitViewGenerator_getInstance() {
    if (RentSplitViewGenerator_instance === null) {
      new RentSplitViewGenerator();
    }
    return RentSplitViewGenerator_instance;
  }
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
    if (typeof $receiver === 'boolean')
      return $receiver;
    else if (typeof $receiver === 'string') {
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
     else if (typeof $receiver === 'number') {
      switch ($receiver) {
        case 0:
          return false;
        case 1:
          return true;
        default:return null;
      }
    }
     else
      return null;
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
  var alsoLog = defineInlineFunction('Rent Split 2.RentSplit.alsoLog_vxumlc$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var getCallableRef = Kotlin.getCallableRef;
    return function ($receiver, message, logger) {
      if (logger === void 0)
        logger = getCallableRef('consoleLogString', function (message) {
          console.log(message);
          return Unit;
        });
      console.log(message);
      return $receiver;
    };
  }));
  var log = defineInlineFunction('Rent Split 2.RentSplit.log_hyc7mn$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var getCallableRef = Kotlin.getCallableRef;
    return function (message, logger) {
      if (logger === void 0)
        logger = getCallableRef('consoleLogString', function (message) {
          console.log(message);
          return Unit;
        });
      console.log(message);
    };
  }));
  var consoleLogString = defineInlineFunction('Rent Split 2.RentSplit.consoleLogString_61zpoe$', function (message) {
    console.log(message);
  });
  function toSetOfIds($receiver) {
    return toSet_0(split($receiver, Kotlin.charArrayOf(91, 44, 93)));
  }
  function serializedSetOfIds($receiver) {
    return joinToString($receiver, ',', '[', ']');
  }
  function sanitizedForHtml($receiver) {
    return replace(replace(Regex_init('&(?!amp;amp;)').replace_x2uqeu$($receiver, '&amp;'), '<', '&lt;'), '>', '&gt;');
  }
  function TouchManager() {
    TouchManager_instance = this;
    this.listeners_0 = emptySet();
  }
  TouchManager.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TouchManager',
    interfaces: []
  };
  var TouchManager_instance = null;
  function TouchManager_getInstance() {
    if (TouchManager_instance === null) {
      new TouchManager();
    }
    return TouchManager_instance;
  }
  function TouchEventHandler() {
  }
  TouchEventHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TouchEventHandler',
    interfaces: []
  };
  var asList_0 = defineInlineFunction('Rent Split 2.jQueryInterface.asList_9ufosi$', wrapFunction(function () {
    var asList = Kotlin.kotlin.collections.asList_us0mfu$;
    return function ($receiver) {
      return asList($receiver.toArray());
    };
  }));
  function mapNotNull$lambda(closure$mapper, closure$newArray) {
    return function (index, element) {
      var mapped = closure$mapper(index, element);
      if (mapped != null) {
        closure$newArray.v = closure$newArray.v.concat([mapped]);
      }
      return Unit;
    };
  }
  function mapNotNull($receiver, mapper) {
    var newArray = {v: []};
    forEachIndexed($receiver, mapNotNull$lambda(mapper, newArray));
    return newArray.v;
  }
  function iterator$ObjectLiteral(this$iterator) {
    this.this$iterator = this$iterator;
    this.iteratorIndex = 0;
  }
  iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.iteratorIndex < this.this$iterator.length;
  };
  iterator$ObjectLiteral.prototype.next = function () {
    var next = this.this$iterator.get(this.iteratorIndex);
    this.iteratorIndex = this.iteratorIndex + 1 | 0;
    return next;
  };
  iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Iterator]
  };
  function iterator($receiver) {
    if ($receiver.length === 0) {
      return Kotlin.arrayIterator([]);
    }
    return new iterator$ObjectLiteral($receiver);
  }
  function forEach($receiver, iterator_0) {
    var tmp$;
    tmp$ = iterator($receiver);
    while (tmp$.hasNext()) {
      var it = tmp$.next();
      iterator_0(it);
    }
  }
  function forEachIndexed($receiver, iterator_0) {
    var tmp$;
    var index = 0;
    tmp$ = iterator($receiver);
    while (tmp$.hasNext()) {
      var it = tmp$.next();
      iterator_0(index, it);
      index = index + 1 | 0;
    }
  }
  var booleanAttr = defineInlineFunction('Rent Split 2.jQueryInterface.booleanAttr_pl09c0$', wrapFunction(function () {
    var toBooleanOrNull = _.RentSplit.toBooleanOrNull_s8jyvk$;
    return function ($receiver, name) {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = $receiver.prop(name)) != null ? toBooleanOrNull(tmp$) : null) != null ? tmp$_0 : false;
    };
  }));
  function booleanAttr_0($receiver, name, newValue) {
    var tmp$, tmp$_0;
    if (newValue === true) {
      tmp$_0 = $receiver.prop(name, name);
    }
     else {
      $receiver.prop(name, (tmp$ = null) == null || typeof tmp$ === 'string' ? tmp$ : throwCCE());
      tmp$_0 = $receiver.removeProp(name);
    }
    return tmp$_0;
  }
  var disabled = defineInlineFunction('Rent Split 2.jQueryInterface.disabled_9ufosi$', wrapFunction(function () {
    var toBooleanOrNull = _.RentSplit.toBooleanOrNull_s8jyvk$;
    return function ($receiver) {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = $receiver.prop('disabled')) != null ? toBooleanOrNull(tmp$) : null) != null ? tmp$_0 : false;
    };
  }));
  var disabled_0 = defineInlineFunction('Rent Split 2.jQueryInterface.disabled_5laha2$', wrapFunction(function () {
    var booleanAttr = _.jQueryInterface.booleanAttr_86h6l4$;
    return function ($receiver, newValue) {
      return booleanAttr($receiver, 'disabled', newValue);
    };
  }));
  var checked = defineInlineFunction('Rent Split 2.jQueryInterface.checked_9ufosi$', wrapFunction(function () {
    var toBooleanOrNull = _.RentSplit.toBooleanOrNull_s8jyvk$;
    return function ($receiver) {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = $receiver.prop('checked')) != null ? toBooleanOrNull(tmp$) : null) != null ? tmp$_0 : false;
    };
  }));
  function checked_0($receiver, newValue) {
    $receiver.prop('indeterminate', false);
    return booleanAttr_0($receiver, 'checked', newValue);
  }
  var indeterminate = defineInlineFunction('Rent Split 2.jQueryInterface.indeterminate_9ufosi$', wrapFunction(function () {
    var toBooleanOrNull = _.RentSplit.toBooleanOrNull_s8jyvk$;
    return function ($receiver) {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = $receiver.prop('indeterminate')) != null ? toBooleanOrNull(tmp$) : null) != null ? tmp$_0 : false;
    };
  }));
  var indeterminate_0 = defineInlineFunction('Rent Split 2.jQueryInterface.indeterminate_5laha2$', function ($receiver, newValue) {
    return $receiver.prop('indeterminate', newValue);
  });
  var checkedNotIndeterminate = defineInlineFunction('Rent Split 2.jQueryInterface.checkedNotIndeterminate_9ufosi$', wrapFunction(function () {
    var toBooleanOrNull = _.RentSplit.toBooleanOrNull_s8jyvk$;
    return function ($receiver) {
      var tmp$, tmp$_0;
      var tmp$_1 = (tmp$_0 = (tmp$ = $receiver.prop('checked')) != null ? toBooleanOrNull(tmp$) : null) != null ? tmp$_0 : false;
      if (tmp$_1) {
        var tmp$_2, tmp$_3;
        tmp$_1 = !((tmp$_3 = (tmp$_2 = $receiver.prop('indeterminate')) != null ? toBooleanOrNull(tmp$_2) : null) != null ? tmp$_3 : false);
      }
      return tmp$_1;
    };
  }));
  var get_parentElement = defineInlineFunction('Rent Split 2.jQueryInterface.get_parentElement_s15u7w$', function ($receiver) {
    return $receiver.parentElement;
  });
  function indexOfFirstOrNull($receiver, evaluator) {
    var indexOfFirst$result;
    indexOfFirst$break: do {
      var tmp$;
      var index = 0;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        if (evaluator(item)) {
          indexOfFirst$result = index;
          break indexOfFirst$break;
        }
        index = index + 1 | 0;
      }
      indexOfFirst$result = -1;
    }
     while (false);
    var it = indexOfFirst$result;
    return it < 0 ? null : it;
  }
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
  var get_crypto = defineInlineFunction('Rent Split 2.org.bh.tools.base.jsShim.get_crypto_nz12v2$', function ($receiver) {
    return $receiver.crypto;
  });
  var get_msCrypto = defineInlineFunction('Rent Split 2.org.bh.tools.base.jsShim.get_msCrypto_nz12v2$', function ($receiver) {
    return $receiver.msCrypto;
  });
  var crypto;
  var toString_0 = defineInlineFunction('Rent Split 2.org.bh.tools.base.jsShim.toString_798l30$', function ($receiver, base) {
    return $receiver.toString(base);
  });
  var toString_1 = defineInlineFunction('Rent Split 2.org.bh.tools.base.jsShim.toString_di2vk2$', function ($receiver, base) {
    return $receiver.toString(base);
  });
  var toString_2 = defineInlineFunction('Rent Split 2.org.bh.tools.base.jsShim.toString_dqglrj$', function ($receiver, base) {
    return $receiver.toString(base);
  });
  var toString_3 = defineInlineFunction('Rent Split 2.org.bh.tools.base.jsShim.toString_if0zpk$', function ($receiver, base) {
    return $receiver.toString(base);
  });
  var replace_0 = defineInlineFunction('Rent Split 2.org.bh.tools.base.jsShim.replace_he2ph6$', function ($receiver, regExp, replacer) {
    return $receiver.replace(regExp, replacer);
  });
  function FiniteAmountSummary(exactAmount) {
    FiniteAmountSummary$Companion_getInstance();
    this.exactAmount = exactAmount;
  }
  function FiniteAmountSummary$all(maximumPossibleAMount) {
    FiniteAmountSummary.call(this, maximumPossibleAMount);
  }
  FiniteAmountSummary$all.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'all',
    interfaces: [FiniteAmountSummary]
  };
  function FiniteAmountSummary$some(exactAmount, maximumPossibleAmount) {
    FiniteAmountSummary.call(this, exactAmount);
    this.maximumPossibleAmount = maximumPossibleAmount;
  }
  FiniteAmountSummary$some.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'some',
    interfaces: [FiniteAmountSummary]
  };
  function FiniteAmountSummary$none() {
    FiniteAmountSummary.call(this, null);
  }
  FiniteAmountSummary$none.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'none',
    interfaces: [FiniteAmountSummary]
  };
  function FiniteAmountSummary$Companion() {
    FiniteAmountSummary$Companion_instance = this;
  }
  FiniteAmountSummary$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FiniteAmountSummary$Companion_instance = null;
  function FiniteAmountSummary$Companion_getInstance() {
    if (FiniteAmountSummary$Companion_instance === null) {
      new FiniteAmountSummary$Companion();
    }
    return FiniteAmountSummary$Companion_instance;
  }
  FiniteAmountSummary.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FiniteAmountSummary',
    interfaces: []
  };
  function invoke($receiver, exactAmount, maximumPossibleAmount) {
    var tmp$;
    if (equals(exactAmount, maximumPossibleAmount))
      tmp$ = new FiniteAmountSummary$all(maximumPossibleAmount);
    else if (equals(exactAmount, 0))
      tmp$ = new FiniteAmountSummary$none();
    else
      tmp$ = new FiniteAmountSummary$some(exactAmount, maximumPossibleAmount);
    return tmp$;
  }
  function invoke_0($receiver, approximateAmount, maximumPossibleAmount) {
    var tmp$;
    if (approximateAmount === maximumPossibleAmount)
      tmp$ = new FiniteAmountSummary$all(maximumPossibleAmount);
    else if (approximateAmount === 0.0)
      tmp$ = new FiniteAmountSummary$none();
    else
      tmp$ = new FiniteAmountSummary$some(roundToInt(approximateAmount), maximumPossibleAmount);
    return tmp$;
  }
  function Ternary(name, ordinal, asBoolean) {
    Enum.call(this);
    this.asBoolean = asBoolean;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Ternary_initFields() {
    Ternary_initFields = function () {
    };
    Ternary$true_instance = new Ternary('true', 0, true);
    Ternary$false_instance = new Ternary('false', 1, false);
    Ternary$indeterminate_instance = new Ternary('indeterminate', 2, null);
    Ternary$Companion_getInstance();
  }
  var Ternary$true_instance;
  function Ternary$true_getInstance() {
    Ternary_initFields();
    return Ternary$true_instance;
  }
  var Ternary$false_instance;
  function Ternary$false_getInstance() {
    Ternary_initFields();
    return Ternary$false_instance;
  }
  var Ternary$indeterminate_instance;
  function Ternary$indeterminate_getInstance() {
    Ternary_initFields();
    return Ternary$indeterminate_instance;
  }
  function Ternary$Companion() {
    Ternary$Companion_instance = this;
  }
  Ternary$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Ternary$Companion_instance = null;
  function Ternary$Companion_getInstance() {
    Ternary_initFields();
    if (Ternary$Companion_instance === null) {
      new Ternary$Companion();
    }
    return Ternary$Companion_instance;
  }
  Ternary.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ternary',
    interfaces: [Enum]
  };
  function Ternary$values() {
    return [Ternary$true_getInstance(), Ternary$false_getInstance(), Ternary$indeterminate_getInstance()];
  }
  Ternary.values = Ternary$values;
  function Ternary$valueOf(name) {
    switch (name) {
      case 'true':
        return Ternary$true_getInstance();
      case 'false':
        return Ternary$false_getInstance();
      case 'indeterminate':
        return Ternary$indeterminate_getInstance();
      default:throwISE('No enum constant org.bh.tools.base.struct.Ternary.' + name);
    }
  }
  Ternary.valueOf_61zpoe$ = Ternary$valueOf;
  function invoke_1($receiver, fromBoolean) {
    if (fromBoolean === true)
      return Ternary$true_getInstance();
    else if (fromBoolean === false)
      return Ternary$false_getInstance();
    else
      return Kotlin.noWhenBranchMatched();
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
  function TernaryCheckboxTree(children, text, id) {
    this.children = children;
    this.text_kabazs$_0 = text;
    this.id_hn756u$_0 = id;
    this.stateChangeObservers_5dru4n$_0 = ArrayList_init();
    this.shouldUpdateChildrenBasedOnState_uc0g85$_0 = true;
    this.shouldUpdateStateBasedOnChildren_xmc661$_0 = true;
    this.state_anhe36$_0 = observing(Ternary$indeterminate_getInstance(), void 0, void 0, TernaryCheckboxTree$state$lambda(this));
    var tmp$;
    tmp$ = this.children.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.onStateChange_nrmh93$(TernaryCheckboxTree_init$lambda$lambda(this));
    }
    this.updateStateBasedOnChildren_vw7nbo$_0();
  }
  Object.defineProperty(TernaryCheckboxTree.prototype, 'text', {
    get: function () {
      return this.text_kabazs$_0;
    }
  });
  Object.defineProperty(TernaryCheckboxTree.prototype, 'id', {
    get: function () {
      return this.id_hn756u$_0;
    }
  });
  var TernaryCheckboxTree$state_metadata = new PropertyMetadata('state');
  Object.defineProperty(TernaryCheckboxTree.prototype, 'state', {
    get: function () {
      return this.state_anhe36$_0.getValue_lrcp0p$(this, TernaryCheckboxTree$state_metadata);
    },
    set: function (state) {
      this.state_anhe36$_0.setValue_9rddgb$(this, TernaryCheckboxTree$state_metadata, state);
    }
  });
  TernaryCheckboxTree.prototype.onStateChange_nrmh93$ = function (stateChangeObserver) {
    this.stateChangeObservers_5dru4n$_0.add_11rb$(stateChangeObserver);
  };
  TernaryCheckboxTree.prototype.updateChildrenBasedOnState_otg7qq$_0 = function () {
    if (!this.shouldUpdateChildrenBasedOnState_uc0g85$_0) {
      return;
    }
    switch (this.state.name) {
      case 'true':
      case 'false':
        this.shouldUpdateStateBasedOnChildren_xmc661$_0 = false;
        var tmp$;
        tmp$ = this.children.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          element.state = this.state;
        }

        this.shouldUpdateStateBasedOnChildren_xmc661$_0 = true;
        break;
      case 'indeterminate':
        return;
    }
  };
  TernaryCheckboxTree.prototype.updateStateBasedOnChildren_vw7nbo$_0 = function () {
    var tmp$, tmp$_0;
    if (!this.shouldUpdateStateBasedOnChildren_xmc661$_0) {
      return;
    }
    this.shouldUpdateChildrenBasedOnState_uc0g85$_0 = false;
    tmp$ = invoke_2(FiniteAmountSummary$Companion_getInstance(), this.children);
    if (Kotlin.isType(tmp$, FiniteAmountSummary$all))
      tmp$_0 = Ternary$true_getInstance();
    else if (Kotlin.isType(tmp$, FiniteAmountSummary$none))
      tmp$_0 = Ternary$false_getInstance();
    else if (Kotlin.isType(tmp$, FiniteAmountSummary$some))
      tmp$_0 = Ternary$indeterminate_getInstance();
    else
      tmp$_0 = Kotlin.noWhenBranchMatched();
    this.state = tmp$_0;
    this.shouldUpdateChildrenBasedOnState_uc0g85$_0 = true;
  };
  TernaryCheckboxTree.prototype.deinit = function () {
    this.stateChangeObservers_5dru4n$_0.clear();
  };
  function TernaryCheckboxTree$state$lambda(this$TernaryCheckboxTree) {
    return function (oldState, newState) {
      this$TernaryCheckboxTree.updateChildrenBasedOnState_otg7qq$_0();
      var tmp$;
      tmp$ = this$TernaryCheckboxTree.stateChangeObservers_5dru4n$_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element(oldState, newState);
      }
      return Unit;
    };
  }
  function TernaryCheckboxTree_init$lambda$lambda(this$TernaryCheckboxTree) {
    return function (f, f_0) {
      this$TernaryCheckboxTree.updateStateBasedOnChildren_vw7nbo$_0();
      return Unit;
    };
  }
  TernaryCheckboxTree.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TernaryCheckboxTree',
    interfaces: [TernaryCheckbox]
  };
  function invoke$lambda(count, checkbox) {
    var tmp$;
    switch (checkbox.state.name) {
      case 'indeterminate':
        tmp$ = 0.5;
        break;
      case 'true':
        tmp$ = 1.0;
        break;
      case 'false':
        tmp$ = 0.0;
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return count + tmp$;
  }
  function invoke_2($receiver, checkboxes) {
    return invoke_0(FiniteAmountSummary$Companion_getInstance(), reduceTo(checkboxes, 0.0, invoke$lambda), checkboxes.size);
  }
  function TouchBasics() {
    TouchBasics_instance = this;
  }
  TouchBasics.prototype.isTouchSupported = function () {
    return eval("'ontouchstart' in window") || eval('!!navigator.maxTouchPoints');
  };
  TouchBasics.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TouchBasics',
    interfaces: []
  };
  var TouchBasics_instance = null;
  function TouchBasics_getInstance() {
    if (TouchBasics_instance === null) {
      new TouchBasics();
    }
    return TouchBasics_instance;
  }
  function CSSStyleDeclarationBlackhole() {
    CSSStyleDeclarationBlackhole_instance = this;
    CSSStyleDeclaration.call(this);
  }
  CSSStyleDeclarationBlackhole.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CSSStyleDeclarationBlackhole',
    interfaces: []
  };
  var CSSStyleDeclarationBlackhole_instance = null;
  function CSSStyleDeclarationBlackhole_getInstance() {
    if (CSSStyleDeclarationBlackhole_instance === null) {
      new CSSStyleDeclarationBlackhole();
    }
    return CSSStyleDeclarationBlackhole_instance;
  }
  function HTMLCollectionBlackhole() {
    HTMLCollectionBlackhole_instance = this;
    HTMLCollection.call(this);
  }
  HTMLCollectionBlackhole.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HTMLCollectionBlackhole',
    interfaces: []
  };
  var HTMLCollectionBlackhole_instance = null;
  function HTMLCollectionBlackhole_getInstance() {
    if (HTMLCollectionBlackhole_instance === null) {
      new HTMLCollectionBlackhole();
    }
    return HTMLCollectionBlackhole_instance;
  }
  function NodeListBlackhole() {
    NodeListBlackhole_instance = this;
    NodeList.call(this);
  }
  NodeListBlackhole.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NodeListBlackhole',
    interfaces: []
  };
  var NodeListBlackhole_instance = null;
  function NodeListBlackhole_getInstance() {
    if (NodeListBlackhole_instance === null) {
      new NodeListBlackhole();
    }
    return NodeListBlackhole_instance;
  }
  function Checkbox() {
  }
  Checkbox.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Checkbox',
    interfaces: [CheckboxBase]
  };
  function TernaryCheckbox() {
  }
  TernaryCheckbox.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TernaryCheckbox',
    interfaces: [CheckboxBase]
  };
  function CheckboxBase() {
  }
  CheckboxBase.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CheckboxBase',
    interfaces: [Widget]
  };
  function Widget() {
  }
  Widget.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Widget',
    interfaces: []
  };
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  function JSCheckboxController(controlledElement) {
    this.controlledElement = controlledElement;
    this.onStateChangeObservers_0 = LinkedHashSet_init();
    this.controlledElement.onchange = JSCheckboxController_init$lambda(this);
  }
  Object.defineProperty(JSCheckboxController.prototype, 'text', {
    get: function () {
      return this.controlledElement.textContent;
    },
    set: function (value) {
      this.controlledElement.textContent = value;
    }
  });
  Object.defineProperty(JSCheckboxController.prototype, 'id', {
    get: function () {
      return this.controlledElement.id;
    }
  });
  Object.defineProperty(JSCheckboxController.prototype, 'state', {
    get: function () {
      return get_ternaryState(this.controlledElement);
    },
    set: function (value) {
      set_ternaryState(this.controlledElement, value);
    }
  });
  JSCheckboxController.prototype.onStateChange_nrmh93$ = function (stateChangeObserver) {
    this.onStateChangeObservers_0.add_11rb$(stateChangeObserver);
  };
  function JSCheckboxController_init$lambda(this$JSCheckboxController) {
    return function (it) {
      var $receiver = this$JSCheckboxController.onStateChangeObservers_0;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element(null, this$JSCheckboxController.state);
      }
      return Unit;
    };
  }
  JSCheckboxController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JSCheckboxController',
    interfaces: [TernaryCheckbox]
  };
  function get_ternaryState($receiver) {
    var tmp$;
    tmp$ = $receiver.indeterminate;
    if (tmp$ === true)
      return Ternary$indeterminate_getInstance();
    else if (tmp$ === false)
      return invoke_1(Ternary$Companion_getInstance(), $receiver.checked);
    else
      return Kotlin.noWhenBranchMatched();
  }
  function set_ternaryState($receiver, value) {
    switch (value.name) {
      case 'true':
        $receiver.checked = true;
        $receiver.indeterminate = false;
        break;
      case 'false':
        $receiver.checked = false;
        $receiver.indeterminate = false;
        break;
      case 'indeterminate':
        $receiver.indeterminate = true;
        break;
    }
  }
  function JSTernaryCheckboxTreeController(rootCheckbox, children) {
    JSTernaryCheckboxTreeController$Companion_getInstance();
    tmp$ = rootCheckbox.id;
    var tmp$;
    TernaryCheckboxTree.call(this, children, rootCheckbox.text, tmp$);
    this.rootCheckbox = rootCheckbox;
    this.rootCheckbox.state = this.state;
    this.rootCheckbox.onStateChange_nrmh93$(JSTernaryCheckboxTreeController_init$lambda(this));
    this.onStateChange_nrmh93$(JSTernaryCheckboxTreeController_init$lambda_0(this));
  }
  function JSTernaryCheckboxTreeController$deinit$lambda(f, f_0) {
    return Unit;
  }
  JSTernaryCheckboxTreeController.prototype.deinit = function () {
    this.rootCheckbox.onStateChange_nrmh93$(JSTernaryCheckboxTreeController$deinit$lambda);
    TernaryCheckboxTree.prototype.deinit.call(this);
  };
  function JSTernaryCheckboxTreeController$Companion() {
    JSTernaryCheckboxTreeController$Companion_instance = this;
  }
  JSTernaryCheckboxTreeController$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JSTernaryCheckboxTreeController$Companion_instance = null;
  function JSTernaryCheckboxTreeController$Companion_getInstance() {
    if (JSTernaryCheckboxTreeController$Companion_instance === null) {
      new JSTernaryCheckboxTreeController$Companion();
    }
    return JSTernaryCheckboxTreeController$Companion_instance;
  }
  function JSTernaryCheckboxTreeController_init$lambda(this$JSTernaryCheckboxTreeController) {
    return function (f, newState) {
      this$JSTernaryCheckboxTreeController.state = newState;
      return Unit;
    };
  }
  function JSTernaryCheckboxTreeController_init$lambda_0(this$JSTernaryCheckboxTreeController) {
    return function (f, newState) {
      this$JSTernaryCheckboxTreeController.rootCheckbox.state = newState;
      return Unit;
    };
  }
  JSTernaryCheckboxTreeController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JSTernaryCheckboxTreeController',
    interfaces: [TernaryCheckboxTree]
  };
  function JSTernaryCheckboxTreeController_init(rootCheckbox, children, $this) {
    $this = $this || Object.create(JSTernaryCheckboxTreeController.prototype);
    var tmp$ = new JSCheckboxController(rootCheckbox);
    var destination = ArrayList_init(collectionSizeOrDefault(children, 10));
    var tmp$_0;
    tmp$_0 = children.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(new JSCheckboxController(item));
    }
    JSTernaryCheckboxTreeController.call($this, tmp$, destination);
    return $this;
  }
  var package$RentSplit = _.RentSplit || (_.RentSplit = {});
  Object.defineProperty(package$RentSplit, 'IdManager', {
    get: IdManager_getInstance
  });
  Object.defineProperty(package$RentSplit, 'localStorageConsentSerializedName', {
    get: function () {
      return localStorageConsentSerializedName;
    }
  });
  Object.defineProperty(LocalDataPreferences, 'Companion', {
    get: LocalDataPreferences$Companion_getInstance
  });
  package$RentSplit.LocalDataPreferences = LocalDataPreferences;
  Object.defineProperty(package$RentSplit, 'resourceIdSerializedName', {
    get: function () {
      return resourceIdSerializedName;
    }
  });
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
  Object.defineProperty(package$RentSplit, 'expenseApplicableRoommatesSerializedName', {
    get: function () {
      return expenseApplicableRoommatesSerializedName;
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
  $$importsForInline$$['Rent Split 2'] = _;
  Object.defineProperty(RentExpense, 'Companion', {
    get: RentExpense$Companion_getInstance
  });
  package$RentSplit.RentExpense = RentExpense;
  package$RentSplit.get_nonEmptyType_3ssen7$ = get_nonEmptyType;
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
  package$RentSplit.get_nonEmptyName_4mt6yx$ = get_nonEmptyName;
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
  Object.defineProperty(package$RentSplit, 'resourceIdDataName', {
    get: function () {
      return resourceIdDataName;
    }
  });
  Object.defineProperty(package$RentSplit, 'resourceIdAttribute', {
    get: function () {
      return resourceIdAttribute;
    }
  });
  Object.defineProperty(package$RentSplit, 'resourceIdSelector', {
    get: function () {
      return resourceIdSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseApplicableRoommatesDataName', {
    get: function () {
      return expenseApplicableRoommatesDataName;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseApplicableRoommatesAttribute', {
    get: function () {
      return expenseApplicableRoommatesAttribute;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseApplicableRoommatesSelector', {
    get: function () {
      return expenseApplicableRoommatesSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseHasApplicableRoommatesClassName', {
    get: function () {
      return expenseHasApplicableRoommatesClassName;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseHasApplicableRoommatesSelector', {
    get: function () {
      return expenseHasApplicableRoommatesSelector;
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
  Object.defineProperty(package$RentSplit, 'expenseFilterButtonClass', {
    get: function () {
      return expenseFilterButtonClass;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterButtonSelector', {
    get: function () {
      return expenseFilterButtonSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterDialogId', {
    get: function () {
      return expenseFilterDialogId;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterDialogSelector', {
    get: function () {
      return expenseFilterDialogSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterDialogCancelButtonId', {
    get: function () {
      return expenseFilterDialogCancelButtonId;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterDialogCancelButtonSelector', {
    get: function () {
      return expenseFilterDialogCancelButtonSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterDialogOkButtonId', {
    get: function () {
      return expenseFilterDialogOkButtonId;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterDialogOkButtonSelector', {
    get: function () {
      return expenseFilterDialogOkButtonSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterDialogExpenseNameClassName', {
    get: function () {
      return expenseFilterDialogExpenseNameClassName;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterDialogExpenseNameSelector', {
    get: function () {
      return expenseFilterDialogExpenseNameSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterApplicableRoommateChecklistId', {
    get: function () {
      return expenseFilterApplicableRoommateChecklistId;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterApplicableRoommateChecklistSelector', {
    get: function () {
      return expenseFilterApplicableRoommateChecklistSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterApplicableRoommateChecklistItemClass', {
    get: function () {
      return expenseFilterApplicableRoommateChecklistItemClass;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterApplicableRoommateChecklistItemSelector', {
    get: function () {
      return expenseFilterApplicableRoommateChecklistItemSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterEveryoneCheckboxId', {
    get: function () {
      return expenseFilterEveryoneCheckboxId;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterEveryoneCheckboxSelector', {
    get: function () {
      return expenseFilterEveryoneCheckboxSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterApplicableRoommateCheckboxClass', {
    get: function () {
      return expenseFilterApplicableRoommateCheckboxClass;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterApplicableRoommateCheckboxSelector', {
    get: function () {
      return expenseFilterApplicableRoommateCheckboxSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterDialogCurrentExpenseDataName', {
    get: function () {
      return expenseFilterDialogCurrentExpenseDataName;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterDialogCurrentExpenseAttribute', {
    get: function () {
      return expenseFilterDialogCurrentExpenseAttribute;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterDialogCurrentExpenseSelector', {
    get: function () {
      return expenseFilterDialogCurrentExpenseSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterAnyCheckboxSelector', {
    get: function () {
      return expenseFilterAnyCheckboxSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterButtonExpenseRelationDataName', {
    get: function () {
      return expenseFilterButtonExpenseRelationDataName;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterButtonExpenseRelationAttribute', {
    get: function () {
      return expenseFilterButtonExpenseRelationAttribute;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterButtonExpenseRelationSelector', {
    get: function () {
      return expenseFilterButtonExpenseRelationSelector;
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
  package$RentSplit.RentSplit = RentSplit;
  package$RentSplit.main_kand9s$ = main;
  package$RentSplit.resultsTableModel_fib44y$ = resultsTableModel;
  package$RentSplit.rentSplitResultRow_8fwuai$ = rentSplitResultRow;
  package$RentSplit.RentSplitResultTable = RentSplitResultTable;
  package$RentSplit.RentSplitResultRow = RentSplitResultRow;
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
  Object.defineProperty(package$RentSplit, 'RentSplitViewGenerator', {
    get: RentSplitViewGenerator_getInstance
  });
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
  package$RentSplit.toBooleanOrNull_s8jyvk$ = toBooleanOrNull;
  package$RentSplit.toBoolean_f4dhtg$ = toBoolean;
  package$RentSplit.reduceTo_i8uhts$ = reduceTo;
  package$RentSplit.adding_bv23uc$ = adding;
  package$RentSplit.copyToClipboardOrThrow_9ufosi$ = copyToClipboardOrThrow;
  package$RentSplit.doNothing = doNothing;
  package$RentSplit.consoleLogString_61zpoe$ = consoleLogString;
  package$RentSplit.log_hyc7mn$ = log;
  package$RentSplit.alsoLog_vxumlc$ = alsoLog;
  package$RentSplit.toSetOfIds_pdl1vz$ = toSetOfIds;
  package$RentSplit.serializedSetOfIds_gevexo$ = serializedSetOfIds;
  package$RentSplit.sanitizedForHtml_pdl1vz$ = sanitizedForHtml;
  Object.defineProperty(package$RentSplit, 'TouchManager', {
    get: TouchManager_getInstance
  });
  package$RentSplit.TouchEventHandler = TouchEventHandler;
  var package$jQueryInterface = _.jQueryInterface || (_.jQueryInterface = {});
  package$jQueryInterface.asList_9ufosi$ = asList_0;
  package$jQueryInterface.mapNotNull_fo801r$ = mapNotNull;
  package$jQueryInterface.iterator_9ufosi$ = iterator;
  package$jQueryInterface.forEach_f8zjg0$ = forEach;
  package$jQueryInterface.forEachIndexed_53xvis$ = forEachIndexed;
  package$jQueryInterface.booleanAttr_pl09c0$ = booleanAttr;
  package$jQueryInterface.booleanAttr_86h6l4$ = booleanAttr_0;
  package$jQueryInterface.disabled_9ufosi$ = disabled;
  package$jQueryInterface.disabled_5laha2$ = disabled_0;
  package$jQueryInterface.checked_9ufosi$ = checked;
  package$jQueryInterface.checked_5laha2$ = checked_0;
  package$jQueryInterface.indeterminate_9ufosi$ = indeterminate;
  package$jQueryInterface.indeterminate_5laha2$ = indeterminate_0;
  package$jQueryInterface.checkedNotIndeterminate_9ufosi$ = checkedNotIndeterminate;
  package$jQueryInterface.get_parentElement_s15u7w$ = get_parentElement;
  var package$org = _.org || (_.org = {});
  var package$bh = package$org.bh || (package$org.bh = {});
  var package$tools = package$bh.tools || (package$bh.tools = {});
  var package$base = package$tools.base || (package$tools.base = {});
  var package$collections = package$base.collections || (package$base.collections = {});
  package$collections.indexOfFirstOrNull_dmm9ex$ = indexOfFirstOrNull;
  var package$func = package$base.func || (package$base.func = {});
  package$func.Observing = Observing;
  package$func.NullWSB_287e2$ = NullWSB;
  package$func.NullSSB_287e2$ = NullSSB;
  package$func.NullDSB_287e2$ = NullDSB;
  package$func.observing_bjs5ud$ = observing;
  var package$jsShim = package$base.jsShim || (package$base.jsShim = {});
  package$jsShim.get_crypto_nz12v2$ = get_crypto;
  package$jsShim.get_msCrypto_nz12v2$ = get_msCrypto;
  Object.defineProperty(package$jsShim, 'crypto', {
    get: function () {
      return crypto;
    }
  });
  package$jsShim.toString_798l30$ = toString_0;
  package$jsShim.toString_di2vk2$ = toString_1;
  package$jsShim.toString_dqglrj$ = toString_2;
  package$jsShim.toString_if0zpk$ = toString_3;
  package$jsShim.replace_he2ph6$ = replace_0;
  FiniteAmountSummary.all = FiniteAmountSummary$all;
  FiniteAmountSummary.some = FiniteAmountSummary$some;
  FiniteAmountSummary.none = FiniteAmountSummary$none;
  Object.defineProperty(FiniteAmountSummary, 'Companion', {
    get: FiniteAmountSummary$Companion_getInstance
  });
  var package$struct = package$base.struct || (package$base.struct = {});
  package$struct.FiniteAmountSummary = FiniteAmountSummary;
  package$struct.invoke_27ruav$ = invoke;
  package$struct.invoke_4xrro1$ = invoke_0;
  Object.defineProperty(Ternary, 'true', {
    get: Ternary$true_getInstance
  });
  Object.defineProperty(Ternary, 'false', {
    get: Ternary$false_getInstance
  });
  Object.defineProperty(Ternary, 'indeterminate', {
    get: Ternary$indeterminate_getInstance
  });
  Object.defineProperty(Ternary, 'Companion', {
    get: Ternary$Companion_getInstance
  });
  package$struct.Ternary = Ternary;
  package$struct.invoke_aa6xk2$ = invoke_1;
  var package$util = package$base.util || (package$base.util = {});
  package$util.safeTry_klfg04$ = safeTry;
  var package$ui = package$tools.ui || (package$tools.ui = {});
  var package$behavior = package$ui.behavior || (package$ui.behavior = {});
  package$behavior.TernaryCheckboxTree = TernaryCheckboxTree;
  package$behavior.invoke_ujmawj$ = invoke_2;
  var package$touch = package$ui.touch || (package$ui.touch = {});
  Object.defineProperty(package$touch, 'TouchBasics', {
    get: TouchBasics_getInstance
  });
  var package$utilities = package$ui.utilities || (package$ui.utilities = {});
  Object.defineProperty(package$utilities, 'CSSStyleDeclarationBlackhole', {
    get: CSSStyleDeclarationBlackhole_getInstance
  });
  Object.defineProperty(package$utilities, 'HTMLCollectionBlackhole', {
    get: HTMLCollectionBlackhole_getInstance
  });
  Object.defineProperty(package$utilities, 'NodeListBlackhole', {
    get: NodeListBlackhole_getInstance
  });
  var package$widget = package$ui.widget || (package$ui.widget = {});
  package$widget.Checkbox = Checkbox;
  package$widget.TernaryCheckbox = TernaryCheckbox;
  package$widget.CheckboxBase = CheckboxBase;
  package$widget.Widget = Widget;
  var package$js = package$widget.js || (package$widget.js = {});
  package$js.JSCheckboxController = JSCheckboxController;
  package$js.get_ternaryState_rsvr4l$ = get_ternaryState;
  package$js.set_ternaryState_g8v3lp$ = set_ternaryState;
  Object.defineProperty(JSTernaryCheckboxTreeController, 'Companion', {
    get: JSTernaryCheckboxTreeController$Companion_getInstance
  });
  package$js.JSTernaryCheckboxTreeController_init_cbr6g3$ = JSTernaryCheckboxTreeController_init;
  package$js.JSTernaryCheckboxTreeController = JSTernaryCheckboxTreeController;
  localStorageConsentSerializedName = 'c';
  resourceIdSerializedName = 'i';
  resourceNameSerializedName = 'n';
  resourceDollarAmountSerializedName = 'd';
  expenseApplicableRoommatesSerializedName = 'f';
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
  resultsTableSelector = '#Results';
  resultsTableBodySelector = '#Results>tbody';
  resultsTableHeadRowSelector = '#Results>thead>tr';
  resourceIdDataName = 'id';
  resourceIdAttribute = 'data-id';
  resourceIdSelector = '[data-id]';
  expenseApplicableRoommatesDataName = 'applicable-roommate-ids';
  expenseApplicableRoommatesAttribute = 'data-applicable-roommate-ids';
  expenseApplicableRoommatesSelector = '[data-applicable-roommate-ids]';
  expenseHasApplicableRoommatesClassName = 'has-applicable-roommates';
  expenseHasApplicableRoommatesSelector = '.has-applicable-roommates';
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
  expenseFilterButtonClass = 'filter-button';
  expenseFilterButtonSelector = '.filter-button';
  expenseFilterDialogId = 'filter-dialog';
  expenseFilterDialogSelector = '#filter-dialog';
  expenseFilterDialogCancelButtonId = 'filter-dialog-cancel-button';
  expenseFilterDialogCancelButtonSelector = '#filter-dialog-cancel-button';
  expenseFilterDialogOkButtonId = 'filter-dialog-ok-button';
  expenseFilterDialogOkButtonSelector = '#filter-dialog-ok-button';
  expenseFilterDialogExpenseNameClassName = 'expense-name';
  expenseFilterDialogExpenseNameSelector = '.expense-name';
  expenseFilterApplicableRoommateChecklistId = 'expense-filter-applicable-roommate-checklist';
  expenseFilterApplicableRoommateChecklistSelector = '#expense-filter-applicable-roommate-checklist';
  expenseFilterApplicableRoommateChecklistItemClass = 'expense-filter-applicable-roommate';
  expenseFilterApplicableRoommateChecklistItemSelector = '.expense-filter-applicable-roommate';
  expenseFilterEveryoneCheckboxId = 'roommate-filter-everyone-checkbox';
  expenseFilterEveryoneCheckboxSelector = '#roommate-filter-everyone-checkbox';
  expenseFilterApplicableRoommateCheckboxClass = 'expense-filter-applicable-roommate-checkbox';
  expenseFilterApplicableRoommateCheckboxSelector = '.expense-filter-applicable-roommate-checkbox';
  expenseFilterDialogCurrentExpenseDataName = 'current-expense';
  expenseFilterDialogCurrentExpenseAttribute = 'data-current-expense';
  expenseFilterDialogCurrentExpenseSelector = '[data-current-expense]';
  expenseFilterAnyCheckboxSelector = '#filter-dialog input[type=checkbox]';
  expenseFilterButtonExpenseRelationDataName = 'expense';
  expenseFilterButtonExpenseRelationAttribute = 'data-expense';
  expenseFilterButtonExpenseRelationSelector = '[data-expense]';
  anyInputFieldSelector = 'input,.roommate-name,.roommate-income,.expense-type,.expense-cost';
  anyInputButtonSelector = '#Add-Roommate-Button,#Add-Expense-Button,' + '.remove-roommate-button,.remove-expense-button,' + '.filter-button,#filter-dialog-cancel-button,#filter-dialog-ok-button';
  anyInputSelector = 'input,.roommate-name,.roommate-income,.expense-type,.expense-cost,#Add-Roommate-Button,#Add-Expense-Button,.remove-roommate-button,.remove-expense-button,.filter-button,#filter-dialog-cancel-button,#filter-dialog-ok-button';
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
  var tmp$;
  crypto = (tmp$ = window.crypto) != null ? tmp$ : window.msCrypto;
  main([]);
  Kotlin.defineModule('Rent Split 2', _);
  return _;
}(typeof this['Rent Split 2'] === 'undefined' ? {} : this['Rent Split 2'], kotlin);
