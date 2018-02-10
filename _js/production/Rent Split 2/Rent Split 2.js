if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Rent Split 2'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Rent Split 2'.");
}
this['Rent Split 2'] = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var getCallableRef = Kotlin.getCallableRef;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var Pair = Kotlin.kotlin.Pair;
  var toString = Kotlin.toString;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_emfgvx$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var equals = Kotlin.equals;
  var Throwable = Error;
  var throwCCE = Kotlin.throwCCE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var toSet_0 = Kotlin.kotlin.collections.toSet_us0mfu$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var Any = Object;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  var ObservableProperty = Kotlin.kotlin.properties.ObservableProperty;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var toShort = Kotlin.toShort;
  CssParameterForAttributeSelector$exactly.prototype = Object.create(CssParameterForAttributeSelector.prototype);
  CssParameterForAttributeSelector$exactly.prototype.constructor = CssParameterForAttributeSelector$exactly;
  CssParameterForAttributeSelector$listContainsExactly.prototype = Object.create(CssParameterForAttributeSelector.prototype);
  CssParameterForAttributeSelector$listContainsExactly.prototype.constructor = CssParameterForAttributeSelector$listContainsExactly;
  CssParameterForAttributeSelector$languageSubCode.prototype = Object.create(CssParameterForAttributeSelector.prototype);
  CssParameterForAttributeSelector$languageSubCode.prototype.constructor = CssParameterForAttributeSelector$languageSubCode;
  CssParameterForAttributeSelector$startsWith.prototype = Object.create(CssParameterForAttributeSelector.prototype);
  CssParameterForAttributeSelector$startsWith.prototype.constructor = CssParameterForAttributeSelector$startsWith;
  CssParameterForAttributeSelector$endsWith.prototype = Object.create(CssParameterForAttributeSelector.prototype);
  CssParameterForAttributeSelector$endsWith.prototype.constructor = CssParameterForAttributeSelector$endsWith;
  CssParameterForAttributeSelector$contains.prototype = Object.create(CssParameterForAttributeSelector.prototype);
  CssParameterForAttributeSelector$contains.prototype.constructor = CssParameterForAttributeSelector$contains;
  SelectorCombiner$BinaryCombinator.prototype = Object.create(SelectorCombiner.prototype);
  SelectorCombiner$BinaryCombinator.prototype.constructor = SelectorCombiner$BinaryCombinator;
  SelectorCombiner$either.prototype = Object.create(SelectorCombiner$BinaryCombinator.prototype);
  SelectorCombiner$either.prototype.constructor = SelectorCombiner$either;
  SelectorCombiner$container.prototype = Object.create(SelectorCombiner$BinaryCombinator.prototype);
  SelectorCombiner$container.prototype.constructor = SelectorCombiner$container;
  SelectorCombiner$sibling.prototype = Object.create(SelectorCombiner$BinaryCombinator.prototype);
  SelectorCombiner$sibling.prototype.constructor = SelectorCombiner$sibling;
  SelectorCombiner$immediateSibling.prototype = Object.create(SelectorCombiner$BinaryCombinator.prototype);
  SelectorCombiner$immediateSibling.prototype.constructor = SelectorCombiner$immediateSibling;
  SerializationPurpose.prototype = Object.create(Enum.prototype);
  SerializationPurpose.prototype.constructor = SerializationPurpose;
  UserConsent.prototype = Object.create(Enum.prototype);
  UserConsent.prototype.constructor = UserConsent;
  GooGlUrlShortener$RequestParameter$longUrl.prototype = Object.create(GooGlUrlShortener$RequestParameter.prototype);
  GooGlUrlShortener$RequestParameter$longUrl.prototype.constructor = GooGlUrlShortener$RequestParameter$longUrl;
  GooGlUrlShortener$ShortenResponse$success.prototype = Object.create(GooGlUrlShortener$ShortenResponse.prototype);
  GooGlUrlShortener$ShortenResponse$success.prototype.constructor = GooGlUrlShortener$ShortenResponse$success;
  GooGlUrlShortener$ShortenResponse$error.prototype = Object.create(GooGlUrlShortener$ShortenResponse.prototype);
  GooGlUrlShortener$ShortenResponse$error.prototype.constructor = GooGlUrlShortener$ShortenResponse$error;
  GooGlUrlShortener$ShortenResponse$unknownError.prototype = Object.create(GooGlUrlShortener$ShortenResponse.prototype);
  GooGlUrlShortener$ShortenResponse$unknownError.prototype.constructor = GooGlUrlShortener$ShortenResponse$unknownError;
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
  JSTernaryCheckboxTreeController.prototype = Object.create(TernaryCheckboxTree.prototype);
  JSTernaryCheckboxTreeController.prototype.constructor = JSTernaryCheckboxTreeController;
  var addARoommateRow;
  var addARoommateButton;
  var removeARoommateButton;
  var addAnExpenseRow;
  var addAnExpenseButton;
  var removeAnExpenseButton;
  var roommateInputRow;
  var expenseInputRow;
  var roommateResultRow;
  var roommateNameInput;
  var roommateIncomeInput;
  var roommateProportion;
  var roommateAnyInputField;
  var roommateWhoOwesTooMuch;
  var roommateRemovability;
  var roommateRenamability;
  var expenseTypeInput;
  var expenseCostInput;
  var expenseAnyInputField;
  var expenseRemovability;
  var expenseRenamability;
  var resultRow;
  var resultsTable;
  var resultsTableBody;
  var resultsTableHeadRow;
  var resourceId;
  var expenseApplicableRoommates;
  var expenseHasApplicableRoommates;
  var copyStateUrlButton;
  var stateUrlField;
  var localStorageWarning;
  var localStorageWarningExplicitRefusalButton;
  var localStorageWarningExplicitConsentButton;
  var justCopiedAlerting;
  var shareUrlHolder;
  var stateUrlStatus;
  var canHaveStatus;
  var showStatus;
  var expenseFilterButton;
  var expenseFilterDialog;
  var expenseFilterDialogCancelButton;
  var expenseFilterDialogOkButton;
  var expenseFilterDialogExpenseName;
  var expenseFilterApplicableRoommateChecklist;
  var expenseFilterApplicableRoommateChecklistItem;
  var expenseFilterEveryoneCheckbox;
  var expenseFilterApplicableRoommateCheckbox;
  var expenseFilterDialogCurrentExpense;
  var expenseFilterAnyCheckboxSelector;
  var expenseFilterButtonExpenseRelation;
  var anyInputField;
  var anyInputButton;
  var anyInput;
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
  function RentSplitApp() {
    this.state_h4a1g6$_0 = observing(load(RentSplitState$Companion_getInstance()), void 0, void 0, RentSplitApp$state$lambda(this));
    var tmp$;
    this.expenseFilterChecklistController_qbygrd$_0 = observing((tmp$ = null) == null || Kotlin.isType(tmp$, JSTernaryCheckboxTreeController) ? tmp$ : throwCCE(), void 0, void 0, RentSplitApp$expenseFilterChecklistController$lambda(this));
  }
  var RentSplitApp$state_metadata = new PropertyMetadata('state');
  Object.defineProperty(RentSplitApp.prototype, 'state', {
    get: function () {
      return this.state_h4a1g6$_0.getValue_lrcp0p$(this, RentSplitApp$state_metadata);
    },
    set: function (state) {
      this.state_h4a1g6$_0.setValue_9rddgb$(this, RentSplitApp$state_metadata, state);
    }
  });
  var RentSplitApp$expenseFilterChecklistController_metadata = new PropertyMetadata('expenseFilterChecklistController');
  Object.defineProperty(RentSplitApp.prototype, 'expenseFilterChecklistController', {
    get: function () {
      return this.expenseFilterChecklistController_qbygrd$_0.getValue_lrcp0p$(this, RentSplitApp$expenseFilterChecklistController_metadata);
    },
    set: function (expenseFilterChecklistController) {
      this.expenseFilterChecklistController_qbygrd$_0.setValue_9rddgb$(this, RentSplitApp$expenseFilterChecklistController_metadata, expenseFilterChecklistController);
    }
  });
  RentSplitApp.prototype.onReady = function () {
    this.preLoadConfigurations();
    this.reloadPageFromState_6taknv$(false);
    this.regenerateInputTables();
    this.registerListeners();
    this.recalculateRentSplit();
    save(this.state);
    this.presentToUser();
  };
  function RentSplitApp$preLoadConfigurations$lambda(this$RentSplitApp) {
    return function (it) {
      this$RentSplitApp.replaceShareUrlWithPromptToGenerateANewOne_0();
      return Unit;
    };
  }
  var jq = $;
  RentSplitApp.prototype.preLoadConfigurations = function () {
    $('html').addClass(TouchBasics_getInstance().isTouchSupported() ? 'touch-supported' : 'touch-not-supported');
    this.replaceShareUrlWithPromptToGenerateANewOne_0();
    jq(stateUrlField.cssSelectorString).on('changeData', void 0, RentSplitApp$preLoadConfigurations$lambda(this));
  };
  RentSplitApp.prototype.reloadPageFromState_6taknv$ = function (shouldReRegisterListeners) {
    if (shouldReRegisterListeners === void 0)
      shouldReRegisterListeners = true;
    this.applyStateToLocalStorageWarning();
    this.regenerateInputTables();
    if (shouldReRegisterListeners) {
      this.reRegisterListeners();
    }
    this.recalculateRentSplit();
  };
  RentSplitApp.prototype.applyStateToLocalStorageWarning = function () {
    if (this.state.l.c != null) {
      jq(localStorageWarning.cssSelectorString).addClass('hidden');
    }
     else {
      jq(localStorageWarning.cssSelectorString).removeClass('hidden');
    }
  };
  RentSplitApp.prototype.reRegisterListeners = function () {
    jq(anyInput.cssSelectorString).off();
    this.registerListeners();
  };
  RentSplitApp.prototype.reRegisterFilterDialogListeners = function () {
    var cssSelector = anyInput;
    var context = jq(expenseFilterDialog.cssSelectorString);
    jq(cssSelector.cssSelectorString, context).off();
    this.registerFilterDialogListeners();
  };
  RentSplitApp.prototype.registerListeners = function () {
    jq(anyInputField.cssSelectorString).change(getCallableRef('anyInputFieldDidChange', function ($receiver, event) {
      return $receiver.anyInputFieldDidChange_g0pdib$(event), Unit;
    }.bind(null, this)));
    jq(addAnExpenseButton.cssSelectorString).click(getCallableRef('didPressNewExpenseButton', function ($receiver, event) {
      return $receiver.didPressNewExpenseButton_9ojx7i$(event), Unit;
    }.bind(null, this)));
    jq(removeAnExpenseButton.cssSelectorString).click(getCallableRef('didPressRemoveExpenseButton', function ($receiver, event) {
      return $receiver.didPressRemoveExpenseButton_9ojx7i$(event), Unit;
    }.bind(null, this)));
    jq(addARoommateButton.cssSelectorString).click(getCallableRef('didPressNewRoommateButton', function ($receiver, event) {
      return $receiver.didPressNewRoommateButton_9ojx7i$(event), Unit;
    }.bind(null, this)));
    jq(removeARoommateButton.cssSelectorString).click(getCallableRef('didPressRemoveRoommateButton', function ($receiver, event) {
      return $receiver.didPressRemoveRoommateButton_9ojx7i$(event), Unit;
    }.bind(null, this)));
    jq(localStorageWarningExplicitConsentButton.cssSelectorString).click(getCallableRef('didPressLocalStorageWarningExplicitConsentButton', function ($receiver, event) {
      return $receiver.didPressLocalStorageWarningExplicitConsentButton_9ojx7i$(event), Unit;
    }.bind(null, this)));
    jq(localStorageWarningExplicitRefusalButton.cssSelectorString).click(getCallableRef('didPressLocalStorageWarningExplicitRefusalButton', function ($receiver, event) {
      return $receiver.didPressLocalStorageWarningExplicitRefusalButton_9ojx7i$(event), Unit;
    }.bind(null, this)));
    jq(copyStateUrlButton.cssSelectorString).click(getCallableRef('didPressShareButton', function ($receiver, event) {
      return $receiver.didPressShareButton_9ojx7i$(event), Unit;
    }.bind(null, this)));
    this.registerFilterDialogListeners();
  };
  RentSplitApp.prototype.registerFilterDialogListeners = function () {
    jq(expenseFilterButton.cssSelectorString).click(getCallableRef('didPressFilterButton', function ($receiver, event) {
      return $receiver.didPressFilterButton_9ojx7i$(event), Unit;
    }.bind(null, this)));
    jq(expenseFilterDialogCancelButton.cssSelectorString).click(getCallableRef('didPressFilterDialogCancelButton', function ($receiver, event) {
      return $receiver.didPressFilterDialogCancelButton_9ojx7i$(event), Unit;
    }.bind(null, this)));
    jq(expenseFilterDialogOkButton.cssSelectorString).click(getCallableRef('didPressFilterDialogOkButton', function ($receiver, event) {
      return $receiver.didPressFilterDialogOkButton_9ojx7i$(event), Unit;
    }.bind(null, this)));
  };
  RentSplitApp.prototype.anyInputFieldDidChange_g0pdib$ = function (event) {
    this.reloadStateFromPage();
  };
  RentSplitApp.prototype.didPressLocalStorageWarningExplicitConsentButton_9ojx7i$ = function (event) {
    this.state = this.state.copy_2k6jng$(void 0, void 0, this.state.l.copy_hombyb$(UserConsent$explicitConsent_getInstance()));
  };
  RentSplitApp.prototype.didPressLocalStorageWarningExplicitRefusalButton_9ojx7i$ = function (event) {
    this.state = this.state.copy_2k6jng$(void 0, void 0, this.state.l.copy_hombyb$(UserConsent$explicitRefusal_getInstance()));
  };
  RentSplitApp.prototype.didPressShareButton_9ojx7i$ = function (event) {
    this.userWantsShareUrl();
  };
  RentSplitApp.prototype.didPressFilterButton_9ojx7i$ = function (event) {
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
  RentSplitApp.prototype.applicableRoommateCheckboxesDidChange_esuzu6$ = function (newValue) {
    booleanAttr_0(jq(expenseFilterDialogOkButton.cssSelectorString), 'disabled', newValue === Ternary$false_getInstance());
  };
  RentSplitApp.prototype.didPressFilterDialogCancelButton_9ojx7i$ = function (event) {
    var tmp$;
    (tmp$ = this.expenseFilterDialogElement) != null ? (tmp$.close(), Unit) : null;
  };
  RentSplitApp.prototype.didPressFilterDialogOkButton_9ojx7i$ = function (event) {
    var tmp$;
    var expense = this.expenseInFilterDialog();
    if (expense != null) {
      this.state = this.state.setting_pbrwj2$(expense.copy_7xqv4k$(void 0, void 0, void 0, this.applicableRoommateIdsInFilterDialog_6taknv$()));
    }
     else {
      var message = 'No expense found in filter dialog!';
      console.log(message);
    }
    (tmp$ = this.expenseFilterDialogElement) != null ? (tmp$.close(), Unit) : null;
  };
  RentSplitApp.prototype.reloadStateFromPage = function () {
    this.state = this.state.copy_2k6jng$(this.fetchRoommates(), this.fetchExpenses());
  };
  RentSplitApp.prototype.recalculateRentSplit = function () {
    var resultsTable = resultsTableModel(this.state);
    RentSplitViewGenerator_getInstance().fillOutResults_1a4gu5$(resultsTable);
    this.notifyOfProblems_1a4gu5$(resultsTable);
  };
  RentSplitApp.prototype.presentToUser = function () {
    $('.rent').addClass('rent-ready');
  };
  RentSplitApp.prototype.fetchRoommates = function () {
    return this.roommateRowsToRoommates_r6ezyp$(jq(roommateInputRow.cssSelectorString));
  };
  RentSplitApp.prototype.fetchExpenses = function () {
    return this.expenseRowsToExpenses_r6ezyp$(jq(expenseInputRow.cssSelectorString));
  };
  function RentSplitApp$roommateRowsToRoommates$lambda(this$RentSplitApp) {
    return function (index, roommateRow) {
      return this$RentSplitApp.roommateRowToRoommate_folkv9$(index, $(roommateRow));
    };
  }
  RentSplitApp.prototype.roommateRowsToRoommates_r6ezyp$ = function (jq_roommateRows) {
    return new RentRoommates(asList(mapNotNull(jq_roommateRows, RentSplitApp$roommateRowsToRoommates$lambda(this))));
  };
  function RentSplitApp$expenseRowsToExpenses$lambda(this$RentSplitApp) {
    return function (index, expenseRow) {
      return this$RentSplitApp.expenseRowToExpense_folkv9$(index, $(expenseRow));
    };
  }
  RentSplitApp.prototype.expenseRowsToExpenses_r6ezyp$ = function (jq_expenseRows) {
    return new RentExpenses(asList(mapNotNull(jq_expenseRows, RentSplitApp$expenseRowsToExpenses$lambda(this))));
  };
  RentSplitApp.prototype.roommateRowToRoommate_folkv9$ = function (index, jq_roommateRow) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    tmp$_0 = (tmp$ = $(jq_roommateRow).data(resourceId.dataName)) != null ? tmp$.toString() : null;
    if (tmp$_0 == null) {
      var message = 'No ID on page!';
      console.log(message);
      return null;
    }
    tmp$_2 = (tmp$_1 = jq(roommateNameInput.cssSelectorString, jq_roommateRow).val()) != null ? tmp$_1 : '';
    tmp$_4 = (tmp$_3 = jq(roommateIncomeInput.cssSelectorString, jq_roommateRow).val()) != null ? toDoubleOrNull(tmp$_3) : null;
    if (tmp$_4 == null) {
      var message_0 = 'No monthly income on page!';
      console.log(message_0);
      return null;
    }
    return new RentRoommate(tmp$_0, tmp$_2, tmp$_4, (tmp$_6 = (tmp$_5 = jq_roommateRow.attr(roommateRemovability.htmlAttributeName)) != null ? toBooleanOrNull(tmp$_5) : null) != null ? tmp$_6 : true, (tmp$_8 = (tmp$_7 = jq_roommateRow.attr(roommateRenamability.htmlAttributeName)) != null ? toBooleanOrNull(tmp$_7) : null) != null ? tmp$_8 : true, jq_roommateRow);
  };
  RentSplitApp.prototype.expenseRowToExpense_folkv9$ = function (index, jq_expenseRow) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
    tmp$_0 = (tmp$ = jq_expenseRow.data(resourceId.dataName)) != null ? tmp$.toString() : null;
    if (tmp$_0 == null) {
      var message = 'No ID on page!';
      console.log(message);
      return null;
    }
    tmp$_2 = (tmp$_1 = jq(expenseTypeInput.cssSelectorString, jq_expenseRow).val()) != null ? tmp$_1 : '';
    tmp$_6 = (tmp$_5 = (tmp$_4 = (tmp$_3 = jq_expenseRow.data(expenseApplicableRoommates.dataName)) != null ? tmp$_3.toString() : null) != null ? getCallableRef('expenseApplicableRoommatesFromString', function ($receiver, expenseApplicableRoommatesString) {
      return $receiver.expenseApplicableRoommatesFromString_61zpoe$(expenseApplicableRoommatesString);
    }.bind(null, this))(tmp$_4) : null) != null ? tmp$_5 : RentExpenses$Companion_getInstance().allRoommates;
    tmp$_8 = (tmp$_7 = jq(expenseCostInput.cssSelectorString, jq_expenseRow).val()) != null ? toDoubleOrNull(tmp$_7) : null;
    if (tmp$_8 == null) {
      var message_0 = 'No monthly cost on page!';
      console.log(message_0);
      return null;
    }
    return new RentExpense(tmp$_0, tmp$_2, tmp$_8, tmp$_6, (tmp$_10 = (tmp$_9 = jq_expenseRow.attr(expenseRemovability.htmlAttributeName)) != null ? toBooleanOrNull(tmp$_9) : null) != null ? tmp$_10 : true, (tmp$_12 = (tmp$_11 = jq_expenseRow.attr(expenseRenamability.htmlAttributeName)) != null ? toBooleanOrNull(tmp$_11) : null) != null ? tmp$_12 : true, jq_expenseRow);
  };
  RentSplitApp.prototype.expenseApplicableRoommatesFromString_61zpoe$ = function (expenseApplicableRoommatesString) {
    return toSetOfIds(expenseApplicableRoommatesString);
  };
  RentSplitApp.prototype.expenseForFilterButton_2rdptt$ = function (filterButton) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = $(filterButton).data(expenseFilterButtonExpenseRelation.dataName)) != null ? tmp$.toString() : null) != null ? getCallableRef('expenseForId', function ($receiver, id) {
      return $receiver.expenseForId_61zpoe$(id);
    }.bind(null, this))(tmp$_0) : null;
  };
  RentSplitApp.prototype.expenseForId_61zpoe$ = function (id) {
    return this.state.e.expenseForId_61zpoe$(id);
  };
  RentSplitApp.prototype.expenseInFilterDialog = function () {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = this.expenseFilterDialogElement) != null ? $(tmp$) : null) != null ? tmp$_0.data(expenseFilterDialogCurrentExpense.dataName) : null) != null ? this.expenseForId_61zpoe$(tmp$_1.toString()) : null;
  };
  RentSplitApp.prototype.applicableRoommateIdsInFilterDialog_6taknv$ = function (ignoreEveryoneCheckbox) {
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
  function RentSplitApp$summarizeFilterDialogApplicableRoommates$lambda(f, element) {
    var id = toString($(element).data(resourceId.dataName));
    var tmp$, tmp$_0;
    return ((tmp$_0 = (tmp$ = $(element).prop('checked')) != null ? toBooleanOrNull(tmp$) : null) != null ? tmp$_0 : false) ? id : null;
  }
  RentSplitApp.prototype.summarizeFilterDialogApplicableRoommates_6taknv$ = function (ignoreEveryoneCheckbox) {
    if (ignoreEveryoneCheckbox === void 0)
      ignoreEveryoneCheckbox = false;
    var tmp$;
    var allCheckboxes = jq(expenseFilterApplicableRoommateCheckbox.cssSelectorString);
    var tmp$_0 = !ignoreEveryoneCheckbox;
    if (tmp$_0) {
      var $receiver = jq(expenseFilterEveryoneCheckbox.cssSelectorString);
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
      var checkedRoommateIds = filterNotNull(allCheckboxes.map(RentSplitApp$summarizeFilterDialogApplicableRoommates$lambda));
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
      tmp$ = new Pair(tmp$_7, toSet(checkedRoommateIds));
    }
    return tmp$;
  };
  RentSplitApp.prototype.regenerateInputTables = function () {
    this.regenerateRoommateInputTable_0();
    this.regenerateExpenseInputTable_0();
  };
  RentSplitApp.prototype.regenerateInputTable_0 = function (rowSelector, allResources, configureExistingInput, insertNewInput) {
    var existingInputs = asList(jq(rowSelector.cssSelectorString).toArray());
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
  function RentSplitApp$regenerateExpenseInputTable$lambda(this$RentSplitApp) {
    return function (existingExpenseInput, expense) {
      this$RentSplitApp.configureExistingExpenseInputRow_0(existingExpenseInput, expense);
      return Unit;
    };
  }
  function RentSplitApp$regenerateExpenseInputTable$lambda_0(this$RentSplitApp) {
    return function (explicitIndex, expense) {
      this$RentSplitApp.insertNewExpenseInputRow_nly0u5$(explicitIndex, expense);
      return Unit;
    };
  }
  RentSplitApp.prototype.regenerateExpenseInputTable_0 = function () {
    this.regenerateInputTable_0(expenseInputRow, this.state.e.e, RentSplitApp$regenerateExpenseInputTable$lambda(this), RentSplitApp$regenerateExpenseInputTable$lambda_0(this));
  };
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  RentSplitApp.prototype.configureExistingExpenseInputRow_0 = function (existingExpenseInputRow, expense) {
    var jq_existingExpenseInputRow = $(existingExpenseInputRow);
    expense.originalDOMElement = jq_existingExpenseInputRow;
    jq(expenseTypeInput.cssSelectorString, existingExpenseInputRow).val(expense.n);
    jq(expenseCostInput.cssSelectorString, existingExpenseInputRow).val(expense.d);
    jq_existingExpenseInputRow.attr(expenseRenamability.htmlAttributeName, expense.r);
    jq_existingExpenseInputRow.attr(expenseRemovability.htmlAttributeName, expense.x);
    if (expense.f == null) {
      jq_existingExpenseInputRow.data(expenseApplicableRoommates.dataName, null);
      jq_existingExpenseInputRow.removeClass(expenseHasApplicableRoommates.className);
    }
     else {
      jq_existingExpenseInputRow.data(expenseApplicableRoommates.dataName, copyToArray(expense.f));
      jq_existingExpenseInputRow.addClass(expenseHasApplicableRoommates.className);
    }
  };
  RentSplitApp.prototype.regenerateRoommateInputTable_0 = function () {
    this.regenerateInputTable_0(roommateInputRow, this.state.r.r, getCallableRef('configureExistingRoommateInputRow', function ($receiver, existingRoommateInputTableRow, roommate) {
      return $receiver.configureExistingRoommateInputRow_0(existingRoommateInputTableRow, roommate), Unit;
    }.bind(null, this)), getCallableRef('insertNewRoommateInputRow', function ($receiver, explicitIndex, roommate) {
      return $receiver.insertNewRoommateInputRow_7kd045$(explicitIndex, roommate), Unit;
    }.bind(null, this)));
  };
  RentSplitApp.prototype.configureExistingRoommateInputRow_0 = function (existingRoommateInputTableRow, roommate) {
    var jq_existingRoommateInputTableRow = $(existingRoommateInputTableRow);
    roommate.originalDOMElement = jq_existingRoommateInputTableRow;
    jq(roommateNameInput.cssSelectorString, existingRoommateInputTableRow).val(roommate.n);
    jq(roommateIncomeInput.cssSelectorString, existingRoommateInputTableRow).val(roommate.d);
    RentSplitViewGenerator_getInstance().displayRoommateProportion_zem1ah$(rentSplitResultRow(roommate, this.state));
    jq_existingRoommateInputTableRow.attr(roommateRenamability.htmlAttributeName, roommate.r);
    jq_existingRoommateInputTableRow.attr(roommateRemovability.htmlAttributeName, roommate.x);
  };
  RentSplitApp.prototype.reconfigureExpenseDialog_pbrwj2$ = function (expense) {
    jq(expenseFilterDialog.cssSelectorString).data(expenseFilterDialogCurrentExpense.dataName, expense.i);
    jq(expenseFilterDialogExpenseName.cssSelectorString).text(sanitizedForHtml(get_nonEmptyType(expense)));
    this.fillExpenseFilterApplicableRoommateList_pbrwj2$(expense);
    this.reRegisterFilterDialogListeners();
  };
  function RentSplitApp$fillExpenseFilterApplicableRoommateList$lambda(f, element) {
    return element;
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  RentSplitApp.prototype.fillExpenseFilterApplicableRoommateList_pbrwj2$ = function (expense) {
    var tmp$, tmp$_0;
    jq(expenseFilterApplicableRoommateChecklistItem.cssSelectorString).remove();
    jq(expenseFilterApplicableRoommateChecklist.cssSelectorString).append(this.buildExpenseFilterApplicableRoommateList_pbrwj2$(expense));
    tmp$_0 = Kotlin.isType(tmp$ = jq(expenseFilterEveryoneCheckbox.cssSelectorString).get(0), HTMLInputElement) ? tmp$ : null;
    if (tmp$_0 == null) {
      return;
    }
    var everyoneCheckbox = tmp$_0;
    var $receiver = jq(expenseFilterApplicableRoommateCheckbox.cssSelectorString).map(RentSplitApp$fillExpenseFilterApplicableRoommateList$lambda);
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
  function RentSplitApp$buildExpenseFilterApplicableRoommateList$lambda(closure$expense, this$RentSplitApp) {
    return function (htmlString, roommate) {
      return htmlString + this$RentSplitApp.buildExpenseFilterApplicableRoommateListItem_m1r9kw$(closure$expense, roommate);
    };
  }
  RentSplitApp.prototype.buildExpenseFilterApplicableRoommateList_pbrwj2$ = function (expense) {
    var $receiver = this.state.r.r;
    var runningValue = {v: ''};
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      runningValue.v = RentSplitApp$buildExpenseFilterApplicableRoommateList$lambda(expense, this)(runningValue.v, element);
    }
    return runningValue.v;
  };
  RentSplitApp.prototype.buildExpenseFilterApplicableRoommateListItem_m1r9kw$ = function (expense, roommate) {
    return '<li' + (" class='checklist-item " + expenseFilterApplicableRoommateChecklistItem.className + "'>") + '<label>' + '<input' + (' ' + resourceId.htmlAttributeName + "='" + roommate.i + "'") + (" class='" + expenseFilterApplicableRoommateCheckbox.className + "'") + " type='checkbox'" + (' ' + (expense.appliesTo_pcqrmu$(roommate) ? 'checked' : '')) + '/>' + (' ' + sanitizedForHtml(get_nonEmptyName(roommate))) + '<\/label>' + '<\/li>';
  };
  RentSplitApp.prototype.showExpenseDialog_pbrwj2$ = function (expense) {
    var tmp$;
    this.reconfigureExpenseDialog_pbrwj2$(expense);
    (tmp$ = this.expenseFilterDialogElement) != null ? (tmp$.showModal(), Unit) : null;
  };
  Object.defineProperty(RentSplitApp.prototype, 'expenseFilterDialogElement', {
    get: function () {
      var tmp$, tmp$_0;
      var tmp$_1;
      if ((tmp$_0 = Kotlin.isType(tmp$ = jq(expenseFilterDialog.cssSelectorString).get(0), HTMLDialogElement) ? tmp$ : null) != null)
        tmp$_1 = tmp$_0;
      else {
        var message = 'Could not find dialog element!';
        console.log(message);
        tmp$_1 = null;
      }
      return tmp$_1;
    }
  });
  RentSplitApp.prototype.didPressNewExpenseButton_9ojx7i$ = function (event) {
    this.addNewExpense_rhtjr1$(RentExpense$Companion_getInstance().generateNewExpense(), event);
  };
  RentSplitApp.prototype.addNewExpense_rhtjr1$ = function (newExpense, event) {
    if (event === void 0)
      event = null;
    this.state = addingNewExpense(this.state, newExpense);
  };
  RentSplitApp.prototype.insertNewExpenseInputRow_nly0u5$ = function (explicitIndex, expense) {
    if (explicitIndex === void 0)
      explicitIndex = null;
    var expenseInputHtml = this.buildExpenseInputRow_cymhq0$(explicitIndex != null ? explicitIndex : this.numberOfExpensesCurrentlyOnPage(), expense);
    expense.originalDOMElement = jq(addAnExpenseRow.cssSelectorString).before(expenseInputHtml).prev();
  };
  RentSplitApp.prototype.buildExpenseInputRow_cymhq0$ = function (index, expense) {
    return this.buildExpenseInputRow_c99a2s$(index, expense.i, expense.n, expense.d, expense.f, expense.r, expense.x);
  };
  RentSplitApp.prototype.buildExpenseInputRow_c99a2s$ = function (index, id, type, cost, applicableRoommates, isRenamable, isRemovable) {
    var expenseNumber = index + 1 | 0;
    var row = '<tr' + " class='hides-something-until-hover'" + (' ' + resourceId.htmlAttributeName + "='" + id + "'") + (' data-' + expenseInputRow.dataName + '=' + '"' + expenseNumber + '"') + (' ' + expenseRenamability.htmlAttributeName + "='" + isRenamable + "'") + (' ' + expenseRemovability.htmlAttributeName + "='" + isRemovable + "'") + (applicableRoommates == null ? '' : ' ' + expenseApplicableRoommates.htmlAttributeName + "='" + serializedSetOfIds(applicableRoommates) + "'") + '>';
    var tmp$ = '<th class=' + '"' + (isRenamable ? 'plain   ' : '') + 'has-floating-button' + '"' + '>' + ("<button class='" + expenseFilterButton.className + "   floats-to-left   hidden-until-parent-hover' " + expenseFilterButtonExpenseRelation.htmlAttributeName + "='" + id + "'><i class='fa fa-filter'><\/i><\/button>") + '<input' + (' type=' + '"' + (isRenamable ? 'text' : 'hidden') + '"') + (' class=' + '"' + expenseTypeInput.className + '   text-right' + '"') + (!(type == null || type.length === 0) ? ' value=' + '"' + toString(type) + '"' : '') + ' size="8"' + ' tabindex=0' + (' placeholder=' + '"' + RentExpense$Companion_getInstance().numberedType_61zpoe$(id) + '"') + '/>';
    var tmp$_0 = !isRenamable;
    if (tmp$_0) {
      tmp$_0 = !(type == null || type.length === 0);
    }
    row += tmp$ + (tmp$_0 ? type : '') + '<\/th>';
    row += '<td class="plain vert-bottom">' + '<input' + ' type="number"' + (!(type == null || type.length === 0) ? ' id=' + '"' + 'total-' + toString(type) + '"' : '') + (' class=' + '"' + expenseCostInput.className + '"') + ' required' + (' value=' + '"' + (cost != null ? cost : defaultExpenseCost) + '"') + ' step="10"' + ' size="8"' + ' tabindex=0' + ' placeholder="Monthly Cost"' + '/>' + '<\/td>';
    if (isRemovable) {
      row += '<td' + (' class=' + '"' + removeAnExpenseButton.className + ' color-danger' + '"') + ' tabindex="0">' + '<i class="fa fa-minus-circle"><\/i>' + '<\/td>';
    }
    return row + '<\/tr>';
  };
  RentSplitApp.prototype.didPressNewRoommateButton_9ojx7i$ = function (event) {
    return this.addNewRoommate_an8xux$(RentRoommate$Companion_getInstance().generateNewRoommate(), event);
  };
  RentSplitApp.prototype.addNewRoommate_an8xux$ = function (newRoommate, event) {
    if (event === void 0)
      event = null;
    this.state = addingNewRoommate(this.state, newRoommate);
  };
  RentSplitApp.prototype.insertNewRoommateInputRow_7kd045$ = function (explicitIndex, roommate) {
    if (explicitIndex === void 0)
      explicitIndex = null;
    var roommateInputHtml = this.buildRoommateInputRow_hi9t74$(explicitIndex != null ? explicitIndex : this.numberOfRoommatesCurrentlyOnPage(), roommate);
    roommate.originalDOMElement = jq(addARoommateRow.cssSelectorString).before(roommateInputHtml).prev();
  };
  RentSplitApp.prototype.buildRoommateInputRow_hi9t74$ = function (index, roommate) {
    return this.buildRoommateInputRow_yi75pw$(index, roommate.i, roommate.n, roommate.d, roommate.r, roommate.x);
  };
  RentSplitApp.prototype.buildRoommateInputRow_yi75pw$ = function (index, id, name, income, isRenamable, isRemovable) {
    var roommateNumber = index + 1 | 0;
    var row = '<tr' + (' ' + resourceId.htmlAttributeName + "='" + id + "'") + (' data-' + roommateInputRow.dataName + "='" + roommateNumber + "'") + (' ' + roommateRenamability.htmlAttributeName + "='" + isRenamable + "'") + (' ' + roommateRemovability.htmlAttributeName + "='" + isRemovable + "'") + '>';
    row += '<th class="plain">' + '<input' + ' type="text"' + (' class=' + '"' + roommateNameInput.className + '   text-right' + '"') + (!(name == null || name.length === 0) ? ' value="' + name + '"' : '') + ' size="8"' + ' tabindex=0' + (' placeholder=' + '"' + RentRoommate$Companion_getInstance().numberedName_61zpoe$(id) + '"') + '/>' + '<\/th>';
    row += '<td class="plain vert-bottom">' + '<input' + ' type="number"' + (' class=' + '"' + roommateIncomeInput.className + '"') + ' required' + (' value=' + '"' + (income != null ? income : defaultRoommateIncome) + '"') + ' step="100"' + ' size="8"' + ' tabindex=0' + ' placeholder="Income"' + '/>' + '<\/td>';
    row += '<td class=' + '"' + roommateProportion.className + '"' + '>Calculating<\/td>';
    if (isRemovable) {
      row += '<td class=' + '"' + removeARoommateButton.className + ' color-danger' + '"' + ' tabindex="0">' + '<i class="fa fa-minus-circle"><\/i>' + '<\/td>';
    }
    return row + '<\/tr>';
  };
  RentSplitApp.prototype.numberOfRoommatesCurrentlyOnPage = function () {
    return jq(roommateInputRow.cssSelectorString).length;
  };
  RentSplitApp.prototype.numberOfExpensesCurrentlyOnPage = function () {
    return jq(expenseInputRow.cssSelectorString).length;
  };
  RentSplitApp.prototype.didPressRemoveExpenseButton_9ojx7i$ = function (event) {
    var tmp$;
    var expenseRow = (tmp$ = event.currentTarget) != null ? tmp$.parentElement : null;
    expenseRow != null ? (expenseRow.remove(), Unit) : null;
    this.reloadStateFromPage();
  };
  RentSplitApp.prototype.didPressRemoveRoommateButton_9ojx7i$ = function (event) {
    var tmp$;
    var roommateRow = (tmp$ = event.currentTarget) != null ? tmp$.parentElement : null;
    roommateRow != null ? (roommateRow.remove(), Unit) : null;
    this.reloadStateFromPage();
  };
  RentSplitApp.prototype.notifyOfProblems_1a4gu5$ = function (table) {
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
      $('[data-' + roommateResultRow.dataName + "='" + name + "']").addClass(roommateWhoOwesTooMuch.className).attr('title', name + ' owes ' + (element_0.totalContributions - element_0.representedRoommate.d) + ' too much!');
    }
  };
  function RentSplitApp$userWantsShareUrl$lambda(this$RentSplitApp) {
    return function (response, guaranteedUrl) {
      var tmp$, tmp$_0;
      this$RentSplitApp.placeShareUrlOnPage_0(guaranteedUrl);
      this$RentSplitApp.copyShareUrl_0();
      if (Kotlin.isType(response, GooGlUrlShortener$ShortenResponse$success)) {
        var message = 'Shortened URL!';
        console.log(message);
      }
       else if (Kotlin.isType(response, GooGlUrlShortener$ShortenResponse$error)) {
        this$RentSplitApp.alertUserOfFailureToGenerateShareUrl_0('\u26A0\uFE0F Could not shorten URL');
        var object = response.errors;
        console.log(object);
        var message_0 = (tmp$_0 = (tmp$ = nonEmptyOrNull(response.message)) != null ? tmp$ : get_statusText(response)) != null ? tmp$_0 : 'No message';
        console.log(message_0);
      }
      return Unit;
    };
  }
  RentSplitApp.prototype.userWantsShareUrl = function () {
    this.alertUserOfUrlGenerationStart_0();
    this.generateShareUrl_0(RentSplitApp$userWantsShareUrl$lambda(this));
  };
  function RentSplitApp$generateShareUrl$lambda(closure$callback, closure$sharingUrl) {
    return function (response) {
      var tmp$, tmp$_0, tmp$_1;
      closure$callback(response, (tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = response, GooGlUrlShortener$ShortenResponse$success) ? tmp$ : null) != null ? tmp$_0.shortUrl : null) != null ? tmp$_1 : closure$sharingUrl);
      return Unit;
    };
  }
  RentSplitApp.prototype.generateShareUrl_0 = function (callback) {
    var tmp$;
    var jsonStringForSharing = serialized(this.state, SerializationPurpose$forSharing_getInstance());
    var actualProtocol = window.location.protocol;
    if (equals(actualProtocol, 'file:'))
      tmp$ = 'https://rent-split.bhstudios.org/?generalState=';
    else
      tmp$ = window.location.protocol + '//' + window.location.host + window.location.pathname + '?' + generalStateSerializedName + '=';
    var sharingUrlPrefix = tmp$;
    var sharingUrlString = sharingUrlPrefix + jsonStringForSharing;
    var sharingUrl = new URL(sharingUrlString);
    (new GooGlUrlShortener(gooGlAccessToken)).shorten_5nfh8w$(sharingUrl, RentSplitApp$generateShareUrl$lambda(callback, sharingUrl));
  };
  function RentSplitApp$copyShareUrl$lambda() {
    jq(copyStateUrlButton.cssSelectorString).removeClass(justCopiedAlerting.className);
    return Unit;
  }
  RentSplitApp.prototype.copyShareUrl_0 = function () {
    try {
      copyToClipboardOrThrow(jq(stateUrlField.cssSelectorString));
      jq(copyStateUrlButton.cssSelectorString).addClass(justCopiedAlerting.className);
      delay_0(Kotlin.Long.fromInt(3), RentSplitApp$copyShareUrl$lambda);
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
  RentSplitApp.prototype.placeShareUrlOnPage_0 = function (url) {
    jq(stateUrlField.cssSelectorString).val(url.toString());
  };
  RentSplitApp.prototype.alertUserOfUrlGenerationStart_0 = function () {
    this.shareUrlErrorText_0 = 'Shortening\u2026';
    this.showUrlStatusNow_0();
  };
  function RentSplitApp$hideUrlStatusSoon$lambda(this$RentSplitApp) {
    return function () {
      this$RentSplitApp.hideUrlStatusNow_0();
      return Unit;
    };
  }
  RentSplitApp.prototype.hideUrlStatusSoon = function () {
    delay_0(Kotlin.Long.fromInt(3), RentSplitApp$hideUrlStatusSoon$lambda(this));
  };
  RentSplitApp.prototype.hideUrlStatusNow_0 = function () {
    jq(shareUrlHolder.cssSelectorString).removeClass(showStatus.className);
  };
  RentSplitApp.prototype.showUrlStatusNow_0 = function () {
    jq(shareUrlHolder.cssSelectorString).addClass(showStatus.className);
  };
  Object.defineProperty(RentSplitApp.prototype, 'shareUrlErrorText_0', {
    get: function () {
      var tmp$;
      return (tmp$ = jq(shareUrlHolder.cssSelectorString).data(stateUrlStatus.dataName)) != null ? tmp$.toString() : null;
    },
    set: function (value) {
      jq(shareUrlHolder.cssSelectorString).data(stateUrlStatus.dataName, value).attr(stateUrlStatus.htmlAttributeName, value);
    }
  });
  RentSplitApp.prototype.alertUserOfSuccessfulGenerationOfShareUrl_0 = function () {
    this.shareUrlErrorText_0 = 'Shortened!';
    this.showUrlStatusNow_0();
    this.hideUrlStatusSoon();
  };
  RentSplitApp.prototype.alertUserOfFailureToGenerateShareUrl_0 = function (statusText) {
    this.shareUrlErrorText_0 = statusText;
    this.showUrlStatusNow_0();
    this.hideUrlStatusSoon();
  };
  RentSplitApp.prototype.replaceShareUrlWithPromptToGenerateANewOne_0 = function () {
    jq(stateUrlField.cssSelectorString).val('Get a new share URL: \uD83D\uDC49\uD83C\uDFFD');
  };
  function RentSplitApp$state$lambda(this$RentSplitApp) {
    return function (f, f_0) {
      this$RentSplitApp.reloadPageFromState_6taknv$();
      save(this$RentSplitApp.state);
      return Unit;
    };
  }
  function RentSplitApp$expenseFilterChecklistController$lambda$lambda(this$RentSplitApp) {
    return function (f, newState) {
      this$RentSplitApp.applicableRoommateCheckboxesDidChange_esuzu6$(newState);
      return Unit;
    };
  }
  function RentSplitApp$expenseFilterChecklistController$lambda(this$RentSplitApp) {
    return function (oldValue, newValue) {
      var tmp$, tmp$_0;
      oldValue != null ? (oldValue.deinit(), Unit) : null;
      newValue != null ? (newValue.onStateChange_nrmh93$(RentSplitApp$expenseFilterChecklistController$lambda$lambda(this$RentSplitApp)), Unit) : null;
      tmp$_0 = (tmp$ = newValue != null ? newValue.state : null) != null ? tmp$ : Ternary$indeterminate_getInstance();
      this$RentSplitApp.applicableRoommateCheckboxesDidChange_esuzu6$(tmp$_0);
      return Unit;
    };
  }
  RentSplitApp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RentSplitApp',
    interfaces: []
  };
  function main$lambda() {
    (new RentSplitApp()).onReady();
    return Unit;
  }
  function main(args) {
    $(main$lambda);
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
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
    var runningValue = {v: 0.0};
    var tmp$_3;
    tmp$_3 = cells.iterator();
    while (tmp$_3.hasNext()) {
      var element_0 = tmp$_3.next();
      runningValue.v = rentSplitResultRow$lambda(runningValue.v, element_0);
    }
    var rowTotal = runningValue.v;
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
    var row = '<tr ' + roommateResultRow.htmlAttributeName + "='" + roommateName + "'><th>" + roommateName + '<\/th>';
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
    var jq_resultsTableHeadRow = jq(resultsTableHeadRow.cssSelectorString);
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
    var jq_resultsTableBody = jq(resultsTableBody.cssSelectorString);
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
      jq(roommateProportion.cssSelectorString, tmp$).html(toFixed(model.incomeProportion * 100.0, 2) + '%');
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
  function AnyCssSelector() {
  }
  AnyCssSelector.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyCssSelector',
    interfaces: []
  };
  function CssHtmlAttribute() {
  }
  Object.defineProperty(CssHtmlAttribute.prototype, 'cssSelectorString', {
    get: function () {
      return '[' + this.htmlAttributeName + ']';
    }
  });
  CssHtmlAttribute.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CssHtmlAttribute',
    interfaces: [AnyCssSelector]
  };
  function CssHtmlAttributeWithValue() {
  }
  CssHtmlAttributeWithValue.prototype.cssSelectorString_8ij0n9$ = function (parameter) {
    return '[' + this.htmlAttributeName + parameter.operator + '"' + parameter.parameterText + '"' + (parameter.caseInsensitive ? ' i' : '') + ']';
  };
  CssHtmlAttributeWithValue.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CssHtmlAttributeWithValue',
    interfaces: [CssHtmlAttribute]
  };
  function CssParameterForAttributeSelector(parameterText, caseInsensitive) {
    this.parameterText = parameterText;
    this.caseInsensitive = caseInsensitive;
  }
  function CssParameterForAttributeSelector$exactly(parameterText, caseInsensitive) {
    if (caseInsensitive === void 0)
      caseInsensitive = false;
    CssParameterForAttributeSelector.call(this, parameterText, caseInsensitive);
  }
  CssParameterForAttributeSelector$exactly.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'exactly',
    interfaces: [CssParameterForAttributeSelector]
  };
  function CssParameterForAttributeSelector$listContainsExactly(listItem, caseInsensitive) {
    if (caseInsensitive === void 0)
      caseInsensitive = false;
    CssParameterForAttributeSelector.call(this, listItem, caseInsensitive);
  }
  CssParameterForAttributeSelector$listContainsExactly.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'listContainsExactly',
    interfaces: [CssParameterForAttributeSelector]
  };
  function CssParameterForAttributeSelector$languageSubCode(subCode, caseInsensitive) {
    if (caseInsensitive === void 0)
      caseInsensitive = false;
    CssParameterForAttributeSelector.call(this, subCode, caseInsensitive);
  }
  CssParameterForAttributeSelector$languageSubCode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'languageSubCode',
    interfaces: [CssParameterForAttributeSelector]
  };
  function CssParameterForAttributeSelector$startsWith(prefix, caseInsensitive) {
    if (caseInsensitive === void 0)
      caseInsensitive = false;
    CssParameterForAttributeSelector.call(this, prefix, caseInsensitive);
  }
  CssParameterForAttributeSelector$startsWith.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'startsWith',
    interfaces: [CssParameterForAttributeSelector]
  };
  function CssParameterForAttributeSelector$endsWith(suffix, caseInsensitive) {
    if (caseInsensitive === void 0)
      caseInsensitive = false;
    CssParameterForAttributeSelector.call(this, suffix, caseInsensitive);
  }
  CssParameterForAttributeSelector$endsWith.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'endsWith',
    interfaces: [CssParameterForAttributeSelector]
  };
  function CssParameterForAttributeSelector$contains(needle, caseInsensitive) {
    if (caseInsensitive === void 0)
      caseInsensitive = false;
    CssParameterForAttributeSelector.call(this, needle, caseInsensitive);
  }
  CssParameterForAttributeSelector$contains.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'contains',
    interfaces: [CssParameterForAttributeSelector]
  };
  Object.defineProperty(CssParameterForAttributeSelector.prototype, 'operator', {
    get: function () {
      var tmp$;
      if (Kotlin.isType(this, CssParameterForAttributeSelector$exactly))
        tmp$ = '';
      else if (Kotlin.isType(this, CssParameterForAttributeSelector$listContainsExactly))
        tmp$ = '~';
      else if (Kotlin.isType(this, CssParameterForAttributeSelector$languageSubCode))
        tmp$ = '|';
      else if (Kotlin.isType(this, CssParameterForAttributeSelector$startsWith))
        tmp$ = '^';
      else if (Kotlin.isType(this, CssParameterForAttributeSelector$endsWith))
        tmp$ = '$';
      else if (Kotlin.isType(this, CssParameterForAttributeSelector$contains))
        tmp$ = '*';
      else
        tmp$ = Kotlin.noWhenBranchMatched();
      return tmp$ + '=';
    }
  });
  CssParameterForAttributeSelector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssParameterForAttributeSelector',
    interfaces: []
  };
  function CssElement(elementName) {
    this.elementName = elementName;
  }
  Object.defineProperty(CssElement.prototype, 'cssSelectorString', {
    get: function () {
      return this.elementName;
    }
  });
  CssElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssElement',
    interfaces: [AnyCssSelector]
  };
  function CssClass(className) {
    this.className = className;
    this.htmlAttributeName_ksnhwq$_0 = lazy(CssClass$htmlAttributeName$lambda);
    this.cssSelectorString_8fgjrh$_0 = lazy(CssClass$cssSelectorString$lambda(this));
  }
  Object.defineProperty(CssClass.prototype, 'htmlAttributeName', {
    get: function () {
      return this.htmlAttributeName_ksnhwq$_0.value;
    }
  });
  Object.defineProperty(CssClass.prototype, 'cssSelectorString', {
    get: function () {
      return this.cssSelectorString_8fgjrh$_0.value;
    }
  });
  function CssClass$htmlAttributeName$lambda() {
    return 'class';
  }
  function CssClass$cssSelectorString$lambda(this$CssClass) {
    return function () {
      return '.' + this$CssClass.className;
    };
  }
  CssClass.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssClass',
    interfaces: [CssHtmlAttribute]
  };
  function CssId(idName) {
    this.idName = idName;
    this.htmlAttributeName_rbfksl$_0 = lazy(CssId$htmlAttributeName$lambda);
    this.cssSelectorString_ehkfic$_0 = lazy(CssId$cssSelectorString$lambda(this));
  }
  Object.defineProperty(CssId.prototype, 'htmlAttributeName', {
    get: function () {
      return this.htmlAttributeName_rbfksl$_0.value;
    }
  });
  Object.defineProperty(CssId.prototype, 'cssSelectorString', {
    get: function () {
      return this.cssSelectorString_ehkfic$_0.value;
    }
  });
  function CssId$htmlAttributeName$lambda() {
    return 'id';
  }
  function CssId$cssSelectorString$lambda(this$CssId) {
    return function () {
      return '#' + this$CssId.idName;
    };
  }
  CssId.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CssId',
    interfaces: [CssHtmlAttribute]
  };
  function DataAttribute(dataName) {
    this.dataName = dataName;
    this.htmlAttributeName_81nimx$_0 = lazy(DataAttribute$htmlAttributeName$lambda(this));
  }
  Object.defineProperty(DataAttribute.prototype, 'htmlAttributeName', {
    get: function () {
      return this.htmlAttributeName_81nimx$_0.value;
    }
  });
  function DataAttribute$htmlAttributeName$lambda(this$DataAttribute) {
    return function () {
      return 'data-' + this$DataAttribute.dataName;
    };
  }
  DataAttribute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataAttribute',
    interfaces: [CssHtmlAttributeWithValue]
  };
  function SelectorCombiner(lhs, rhs, cssStringifier) {
    this.lhs = lhs;
    this.rhs = rhs;
    this.cssStringifier = cssStringifier;
  }
  Object.defineProperty(SelectorCombiner.prototype, 'cssSelectorString', {
    get: function () {
      return this.cssStringifier();
    }
  });
  function SelectorCombiner$BinaryCombinator(lhs, rhs, combinator) {
    SelectorCombiner.call(this, lhs, rhs, SelectorCombiner$SelectorCombiner$BinaryCombinator_init$lambda(lhs, combinator, rhs));
  }
  function SelectorCombiner$SelectorCombiner$BinaryCombinator_init$lambda(closure$lhs, closure$combinator, closure$rhs) {
    return function () {
      return closure$lhs.cssSelectorString + closure$combinator + closure$rhs.cssSelectorString;
    };
  }
  SelectorCombiner$BinaryCombinator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BinaryCombinator',
    interfaces: [SelectorCombiner]
  };
  function SelectorCombiner$either(lhs, rhs) {
    SelectorCombiner$BinaryCombinator.call(this, lhs, rhs, ',');
  }
  SelectorCombiner$either.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'either',
    interfaces: [SelectorCombiner$BinaryCombinator]
  };
  function SelectorCombiner$container(parent, child) {
    SelectorCombiner$BinaryCombinator.call(this, parent, child, '>');
  }
  SelectorCombiner$container.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'container',
    interfaces: [SelectorCombiner$BinaryCombinator]
  };
  function SelectorCombiner$sibling(sister, brother) {
    SelectorCombiner$BinaryCombinator.call(this, sister, brother, '~');
  }
  SelectorCombiner$sibling.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'sibling',
    interfaces: [SelectorCombiner$BinaryCombinator]
  };
  function SelectorCombiner$immediateSibling(sister, brother) {
    SelectorCombiner$BinaryCombinator.call(this, sister, brother, '+');
  }
  SelectorCombiner$immediateSibling.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'immediateSibling',
    interfaces: [SelectorCombiner$BinaryCombinator]
  };
  SelectorCombiner.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SelectorCombiner',
    interfaces: [AnyCssSelector]
  };
  var or = defineInlineFunction('Rent Split 2.RentSplit.or_qxw4fl$', wrapFunction(function () {
    var SelectorCombiner$SelectorCombiner$either_init = _.RentSplit.SelectorCombiner.either;
    return function ($receiver, rhs) {
      return new SelectorCombiner$SelectorCombiner$either_init($receiver, rhs);
    };
  }));
  var containing = defineInlineFunction('Rent Split 2.RentSplit.containing_qxw4fl$', wrapFunction(function () {
    var SelectorCombiner$SelectorCombiner$container_init = _.RentSplit.SelectorCombiner.container;
    return function ($receiver, child) {
      return new SelectorCombiner$SelectorCombiner$container_init($receiver, child);
    };
  }));
  var justBefore = defineInlineFunction('Rent Split 2.RentSplit.justBefore_qxw4fl$', wrapFunction(function () {
    var SelectorCombiner$SelectorCombiner$immediateSibling_init = _.RentSplit.SelectorCombiner.immediateSibling;
    return function ($receiver, brother) {
      return new SelectorCombiner$SelectorCombiner$immediateSibling_init($receiver, brother);
    };
  }));
  var before = defineInlineFunction('Rent Split 2.RentSplit.before_qxw4fl$', wrapFunction(function () {
    var SelectorCombiner$SelectorCombiner$sibling_init = _.RentSplit.SelectorCombiner.sibling;
    return function ($receiver, brother) {
      return new SelectorCombiner$SelectorCombiner$sibling_init($receiver, brother);
    };
  }));
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
    tmp$_9 = (tmp$_8 = (tmp$_7 = Kotlin.isArray(tmp$_6 = raw[expenseApplicableRoommatesSerializedName]) ? tmp$_6 : null) != null ? toSet_0(tmp$_7) : null) != null ? tmp$_8 : RentExpenses$Companion_getInstance().allRoommates;
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
    var $receiver = this.e;
    var runningValue = {v: 0.0};
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      runningValue.v = RentExpenses$totalExpenses$lambda(runningValue.v, element);
    }
    this.totalExpenses = runningValue.v;
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
    var reducer = getCallableRef('plus', function ($receiver, other) {
      return $receiver + other;
    });
    var runningValue = {v: 0.0};
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      runningValue.v = reducer(runningValue.v, element);
    }
    this.totalIncome = runningValue.v;
    this.incomePieChart_xues5a$_0 = lazy(RentRoommates$incomePieChart$lambda(this));
    var $receiver_0 = this.r;
    var transform_0 = getPropertyCallableRef('id', 1, function ($receiver) {
      return $receiver.i;
    });
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
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
      var tmp$ = this$RentRoommates.r;
      var startingValue = LinkedHashMap_init();
      var reducer = RentRoommates$incomePieChart$lambda$lambda(this$RentRoommates);
      var runningValue = {v: startingValue};
      var tmp$_0;
      tmp$_0 = tmp$.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        runningValue.v = reducer(runningValue.v, element);
      }
      return runningValue.v;
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
  var rentRoommatesSerializedName;
  var rentExpensesSerializedName;
  var localDataPreferencesSerializedName;
  var generalStateSerializedName;
  var gooGlAccessToken;
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
        return get_urlEncoded(JSON.stringify($receiver.toJson_i9b4g5$(purpose)));
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
  function get_urlEncoded($receiver) {
    return encodeURIComponent($receiver);
  }
  function get_urlDecoded($receiver) {
    return decodeURIComponent($receiver);
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
  var log_0 = defineInlineFunction('Rent Split 2.RentSplit.log_7uhc0p$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var getCallableRef = Kotlin.getCallableRef;
    return function (object, logger) {
      if (logger === void 0)
        logger = getCallableRef('consoleLog', function (object) {
          console.log(object);
          return Unit;
        });
      console.log(object);
    };
  }));
  var consoleLogString = defineInlineFunction('Rent Split 2.RentSplit.consoleLogString_61zpoe$', function (message) {
    console.log(message);
  });
  var consoleLog = defineInlineFunction('Rent Split 2.RentSplit.consoleLog_mh5how$', function (object) {
    console.log(object);
  });
  function toSetOfIds($receiver) {
    return toSet(split($receiver, Kotlin.charArrayOf(91, 44, 93)));
  }
  function serializedSetOfIds($receiver) {
    return joinToString($receiver, ',', '[', ']');
  }
  function sanitizedForHtml($receiver) {
    return replace(replace(Regex_init('&(?!amp;amp;)').replace_x2uqeu$($receiver, '&amp;'), '<', '&lt;'), '>', '&gt;');
  }
  function GooGlUrlShortener(accessKey) {
    this.accessKey = accessKey;
  }
  function GooGlUrlShortener$shorten$lambda(closure$responseListener) {
    return function (it) {
      closure$responseListener(GooGlUrlShortener$ShortenResponse$Companion_getInstance().invoke_142kgh$(it));
      return Unit;
    };
  }
  GooGlUrlShortener.prototype.shorten_5nfh8w$ = function (longUrl, responseListener) {
    HttpRequest_init('https://www.googleapis.com/urlshortener/v1/url?key=' + this.accessKey, (new GooGlUrlShortener$RequestParameters([new GooGlUrlShortener$RequestParameter$longUrl(longUrl)])).toRequestMap()).open_eue948$('POST', GooGlUrlShortener$shorten$lambda(responseListener));
  };
  function GooGlUrlShortener$RequestParameter(key, value, requestValueGenerator) {
    GooGlUrlShortener$RequestParameter$Keys_getInstance();
    this.key = key;
    this.value = value;
    this.requestValue_3awx3k$_0 = lazy(GooGlUrlShortener$RequestParameter$requestValue$lambda(requestValueGenerator, this));
  }
  Object.defineProperty(GooGlUrlShortener$RequestParameter.prototype, 'requestValue', {
    get: function () {
      return this.requestValue_3awx3k$_0.value;
    }
  });
  function GooGlUrlShortener$RequestParameter$longUrl(url) {
    GooGlUrlShortener$RequestParameter.call(this, GooGlUrlShortener$RequestParameter$Keys_getInstance().longUrl, url, GooGlUrlShortener$RequestParameter$GooGlUrlShortener$RequestParameter$longUrl_init$lambda);
  }
  function GooGlUrlShortener$RequestParameter$GooGlUrlShortener$RequestParameter$longUrl_init$lambda(it) {
    return it.toString();
  }
  GooGlUrlShortener$RequestParameter$longUrl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'longUrl',
    interfaces: [GooGlUrlShortener$RequestParameter]
  };
  function GooGlUrlShortener$RequestParameter$Keys() {
    GooGlUrlShortener$RequestParameter$Keys_instance = this;
    this.longUrl = 'longUrl';
  }
  GooGlUrlShortener$RequestParameter$Keys.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Keys',
    interfaces: []
  };
  var GooGlUrlShortener$RequestParameter$Keys_instance = null;
  function GooGlUrlShortener$RequestParameter$Keys_getInstance() {
    if (GooGlUrlShortener$RequestParameter$Keys_instance === null) {
      new GooGlUrlShortener$RequestParameter$Keys();
    }
    return GooGlUrlShortener$RequestParameter$Keys_instance;
  }
  function GooGlUrlShortener$RequestParameter$requestValue$lambda(closure$requestValueGenerator, this$RequestParameter) {
    return function () {
      return closure$requestValueGenerator(this$RequestParameter.value);
    };
  }
  GooGlUrlShortener$RequestParameter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RequestParameter',
    interfaces: []
  };
  function GooGlUrlShortener$RequestParameters(allParameters) {
    this.allParameters = allParameters;
  }
  function GooGlUrlShortener$RequestParameters$toRequestMap$lambda(requestMap, parameter) {
    var key = parameter.key;
    var value = parameter.requestValue;
    requestMap.put_xwzc9p$(key, value);
    return requestMap;
  }
  GooGlUrlShortener$RequestParameters.prototype.toRequestMap = function () {
    var tmp$ = asList(this.allParameters);
    var runningValue = {v: LinkedHashMap_init()};
    var tmp$_0;
    tmp$_0 = tmp$.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      runningValue.v = GooGlUrlShortener$RequestParameters$toRequestMap$lambda(runningValue.v, element);
    }
    return runningValue.v;
  };
  function GooGlUrlShortener$RequestParameters$toRequestUriParameterString$lambda(it) {
    return it.key + '=' + it.requestValue;
  }
  GooGlUrlShortener$RequestParameters.prototype.toRequestUriParameterString = function () {
    return '?' + joinToString_0(this.allParameters, '&', void 0, void 0, void 0, void 0, GooGlUrlShortener$RequestParameters$toRequestUriParameterString$lambda);
  };
  GooGlUrlShortener$RequestParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RequestParameters',
    interfaces: []
  };
  function GooGlUrlShortener$ShortenResponse(httpResponse) {
    GooGlUrlShortener$ShortenResponse$Companion_getInstance();
    this.httpResponse = httpResponse;
  }
  function GooGlUrlShortener$ShortenResponse$success(kind, shortUrlString, longUrlString, httpResponse) {
    GooGlUrlShortener$ShortenResponse$success$Companion_getInstance();
    if (httpResponse === void 0)
      httpResponse = null;
    GooGlUrlShortener$ShortenResponse.call(this, httpResponse);
    this.kind = kind;
    this.id = shortUrlString;
    this.longUrlString = longUrlString;
    this.shortUrl_jwv10o$_0 = lazy(GooGlUrlShortener$ShortenResponse$success$shortUrl$lambda(this));
    this.longUrl_42ucna$_0 = lazy(GooGlUrlShortener$ShortenResponse$success$longUrl$lambda(this));
  }
  Object.defineProperty(GooGlUrlShortener$ShortenResponse$success.prototype, 'shortUrl', {
    get: function () {
      return this.shortUrl_jwv10o$_0.value;
    }
  });
  Object.defineProperty(GooGlUrlShortener$ShortenResponse$success.prototype, 'longUrl', {
    get: function () {
      return this.longUrl_42ucna$_0.value;
    }
  });
  function GooGlUrlShortener$ShortenResponse$success$Companion() {
    GooGlUrlShortener$ShortenResponse$success$Companion_instance = this;
  }
  function GooGlUrlShortener$ShortenResponse$success$Companion$invoke$lambda(closure$httpResponse) {
    return function () {
      return JSON.parse(closure$httpResponse.text);
    };
  }
  GooGlUrlShortener$ShortenResponse$success$Companion.prototype.invoke_142kgh$ = function (httpResponse) {
    return safeTry(GooGlUrlShortener$ShortenResponse$success$Companion$invoke$lambda(httpResponse));
  };
  GooGlUrlShortener$ShortenResponse$success$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GooGlUrlShortener$ShortenResponse$success$Companion_instance = null;
  function GooGlUrlShortener$ShortenResponse$success$Companion_getInstance() {
    if (GooGlUrlShortener$ShortenResponse$success$Companion_instance === null) {
      new GooGlUrlShortener$ShortenResponse$success$Companion();
    }
    return GooGlUrlShortener$ShortenResponse$success$Companion_instance;
  }
  function GooGlUrlShortener$ShortenResponse$success$shortUrl$lambda(this$success) {
    return function () {
      return new URL(this$success.id);
    };
  }
  function GooGlUrlShortener$ShortenResponse$success$longUrl$lambda(this$success) {
    return function () {
      return new URL(this$success.longUrlString);
    };
  }
  GooGlUrlShortener$ShortenResponse$success.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'success',
    interfaces: [GooGlUrlShortener$ShortenResponse]
  };
  function GooGlUrlShortener$ShortenResponse$error(allErrors, code, message, httpResponse) {
    GooGlUrlShortener$ShortenResponse$error$Companion_getInstance();
    if (httpResponse === void 0)
      httpResponse = null;
    GooGlUrlShortener$ShortenResponse.call(this, httpResponse);
    this.errors = allErrors;
    this.code = code;
    this.message = message;
  }
  function GooGlUrlShortener$ShortenResponse$error$Companion() {
    GooGlUrlShortener$ShortenResponse$error$Companion_instance = this;
  }
  function GooGlUrlShortener$ShortenResponse$error$Companion$invoke$lambda(closure$httpResponse) {
    return function () {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_1 = GooGlUrlShortener$ShortenResponse$error$Companion_getInstance();
      tmp$_0 = (tmp$ = JSON.parse(closure$httpResponse.text)['error']) != null ? tmp$ : null;
      if (tmp$_0 == null) {
        return null;
      }
      return tmp$_1.invoke_cwgkzm$(tmp$_0, closure$httpResponse);
    };
  }
  GooGlUrlShortener$ShortenResponse$error$Companion.prototype.invoke_142kgh$ = function (httpResponse) {
    return safeTry(GooGlUrlShortener$ShortenResponse$error$Companion$invoke$lambda(httpResponse));
  };
  GooGlUrlShortener$ShortenResponse$error$Companion.prototype.invoke_cwgkzm$ = function (json, httpResponse) {
    if (httpResponse === void 0)
      httpResponse = null;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var $receiver = json['errors'];
    var destination = ArrayList_init($receiver.length);
    var tmp$_3;
    for (tmp$_3 = 0; tmp$_3 !== $receiver.length; ++tmp$_3) {
      var item = $receiver[tmp$_3];
      var tmp$_4 = destination.add_11rb$;
      var tmp$_5;
      tmp$_5 = GooGlUrlShortener$ShortenResponse$SingleError$Companion_getInstance().invoke_qk3xy8$(item);
      if (tmp$_5 == null) {
        return null;
      }
      tmp$_4.call(destination, tmp$_5);
    }
    tmp$_0 = typeof (tmp$ = json['code']) === 'number' ? tmp$ : null;
    if (tmp$_0 == null) {
      return null;
    }
    tmp$_2 = typeof (tmp$_1 = json['message']) === 'string' ? tmp$_1 : null;
    if (tmp$_2 == null) {
      return null;
    }
    return new GooGlUrlShortener$ShortenResponse$error(destination, tmp$_0, tmp$_2, httpResponse);
  };
  GooGlUrlShortener$ShortenResponse$error$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GooGlUrlShortener$ShortenResponse$error$Companion_instance = null;
  function GooGlUrlShortener$ShortenResponse$error$Companion_getInstance() {
    if (GooGlUrlShortener$ShortenResponse$error$Companion_instance === null) {
      new GooGlUrlShortener$ShortenResponse$error$Companion();
    }
    return GooGlUrlShortener$ShortenResponse$error$Companion_instance;
  }
  GooGlUrlShortener$ShortenResponse$error.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'error',
    interfaces: [GooGlUrlShortener$ShortenResponse]
  };
  function GooGlUrlShortener$ShortenResponse$SingleError(domain, reason, message, locationType, location) {
    GooGlUrlShortener$ShortenResponse$SingleError$Companion_getInstance();
    this.domain = domain;
    this.reason = reason;
    this.message = message;
    this.locationType = locationType;
    this.location = location;
  }
  function GooGlUrlShortener$ShortenResponse$SingleError$Companion() {
    GooGlUrlShortener$ShortenResponse$SingleError$Companion_instance = this;
  }
  GooGlUrlShortener$ShortenResponse$SingleError$Companion.prototype.invoke_qk3xy8$ = function (json) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    tmp$_0 = typeof (tmp$ = json['domain']) === 'string' ? tmp$ : null;
    if (tmp$_0 == null) {
      return null;
    }
    tmp$_2 = typeof (tmp$_1 = json['reason']) === 'string' ? tmp$_1 : null;
    if (tmp$_2 == null) {
      return null;
    }
    tmp$_4 = typeof (tmp$_3 = json['message']) === 'string' ? tmp$_3 : null;
    if (tmp$_4 == null) {
      return null;
    }
    tmp$_6 = typeof (tmp$_5 = json['locationType']) === 'string' ? tmp$_5 : null;
    if (tmp$_6 == null) {
      return null;
    }
    tmp$_8 = typeof (tmp$_7 = json['location']) === 'string' ? tmp$_7 : null;
    if (tmp$_8 == null) {
      return null;
    }
    return new GooGlUrlShortener$ShortenResponse$SingleError(tmp$_0, tmp$_2, tmp$_4, tmp$_6, tmp$_8);
  };
  GooGlUrlShortener$ShortenResponse$SingleError$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GooGlUrlShortener$ShortenResponse$SingleError$Companion_instance = null;
  function GooGlUrlShortener$ShortenResponse$SingleError$Companion_getInstance() {
    if (GooGlUrlShortener$ShortenResponse$SingleError$Companion_instance === null) {
      new GooGlUrlShortener$ShortenResponse$SingleError$Companion();
    }
    return GooGlUrlShortener$ShortenResponse$SingleError$Companion_instance;
  }
  GooGlUrlShortener$ShortenResponse$SingleError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SingleError',
    interfaces: []
  };
  GooGlUrlShortener$ShortenResponse$SingleError.prototype.component1 = function () {
    return this.domain;
  };
  GooGlUrlShortener$ShortenResponse$SingleError.prototype.component2 = function () {
    return this.reason;
  };
  GooGlUrlShortener$ShortenResponse$SingleError.prototype.component3 = function () {
    return this.message;
  };
  GooGlUrlShortener$ShortenResponse$SingleError.prototype.component4 = function () {
    return this.locationType;
  };
  GooGlUrlShortener$ShortenResponse$SingleError.prototype.component5 = function () {
    return this.location;
  };
  GooGlUrlShortener$ShortenResponse$SingleError.prototype.copy_x0a6t6$ = function (domain, reason, message, locationType, location) {
    return new GooGlUrlShortener$ShortenResponse$SingleError(domain === void 0 ? this.domain : domain, reason === void 0 ? this.reason : reason, message === void 0 ? this.message : message, locationType === void 0 ? this.locationType : locationType, location === void 0 ? this.location : location);
  };
  GooGlUrlShortener$ShortenResponse$SingleError.prototype.toString = function () {
    return 'SingleError(domain=' + Kotlin.toString(this.domain) + (', reason=' + Kotlin.toString(this.reason)) + (', message=' + Kotlin.toString(this.message)) + (', locationType=' + Kotlin.toString(this.locationType)) + (', location=' + Kotlin.toString(this.location)) + ')';
  };
  GooGlUrlShortener$ShortenResponse$SingleError.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.domain) | 0;
    result = result * 31 + Kotlin.hashCode(this.reason) | 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    result = result * 31 + Kotlin.hashCode(this.locationType) | 0;
    result = result * 31 + Kotlin.hashCode(this.location) | 0;
    return result;
  };
  GooGlUrlShortener$ShortenResponse$SingleError.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.domain, other.domain) && Kotlin.equals(this.reason, other.reason) && Kotlin.equals(this.message, other.message) && Kotlin.equals(this.locationType, other.locationType) && Kotlin.equals(this.location, other.location)))));
  };
  function GooGlUrlShortener$ShortenResponse$unknownError(httpResponse) {
    GooGlUrlShortener$ShortenResponse.call(this, httpResponse);
  }
  GooGlUrlShortener$ShortenResponse$unknownError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'unknownError',
    interfaces: [GooGlUrlShortener$ShortenResponse]
  };
  function GooGlUrlShortener$ShortenResponse$Companion() {
    GooGlUrlShortener$ShortenResponse$Companion_instance = this;
  }
  GooGlUrlShortener$ShortenResponse$Companion.prototype.invoke_142kgh$ = function (httpResponse) {
    var tmp$;
    if (JSON.parse(httpResponse.text)['error'] != null) {
      tmp$ = GooGlUrlShortener$ShortenResponse$error$Companion_getInstance().invoke_142kgh$(httpResponse);
    }
     else {
      tmp$ = GooGlUrlShortener$ShortenResponse$success$Companion_getInstance().invoke_142kgh$(httpResponse);
    }
    return tmp$ != null ? tmp$ : new GooGlUrlShortener$ShortenResponse$unknownError(httpResponse);
  };
  GooGlUrlShortener$ShortenResponse$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GooGlUrlShortener$ShortenResponse$Companion_instance = null;
  function GooGlUrlShortener$ShortenResponse$Companion_getInstance() {
    if (GooGlUrlShortener$ShortenResponse$Companion_instance === null) {
      new GooGlUrlShortener$ShortenResponse$Companion();
    }
    return GooGlUrlShortener$ShortenResponse$Companion_instance;
  }
  GooGlUrlShortener$ShortenResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShortenResponse',
    interfaces: []
  };
  GooGlUrlShortener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GooGlUrlShortener',
    interfaces: []
  };
  function get_wasSuccessful($receiver) {
    if (Kotlin.isType($receiver, GooGlUrlShortener$ShortenResponse$success))
      return true;
    else if (Kotlin.isType($receiver, GooGlUrlShortener$ShortenResponse$error) || Kotlin.isType($receiver, GooGlUrlShortener$ShortenResponse$unknownError))
      return false;
    else
      return Kotlin.noWhenBranchMatched();
  }
  function get_statusText($receiver) {
    var tmp$;
    return (tmp$ = $receiver.httpResponse) != null ? tmp$.statusText : null;
  }
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
  var jq_0 = defineInlineFunction('Rent Split 2.jQueryInterface.jq_1u92oz$', wrapFunction(function () {
    var jq = $;
    return function (cssSelector) {
      return jq(cssSelector.cssSelectorString);
    };
  }));
  var jq_1 = defineInlineFunction('Rent Split 2.jQueryInterface.jq_3qujwq$', wrapFunction(function () {
    var jq = $;
    return function (cssSelector, context) {
      return jq(cssSelector.cssSelectorString, context);
    };
  }));
  var jq_2 = defineInlineFunction('Rent Split 2.jQueryInterface.jq_ch0s56$', wrapFunction(function () {
    var jq = $;
    return function (cssSelector, context) {
      return jq(cssSelector.cssSelectorString, context);
    };
  }));
  var jq_3 = defineInlineFunction('Rent Split 2.jQueryInterface.jq_5358jw$', wrapFunction(function () {
    var jq = $;
    return function (cssSelector, context) {
      var context_0 = jq(context.cssSelectorString);
      return jq(cssSelector.cssSelectorString, context_0);
    };
  }));
  var get_jq = defineInlineFunction('Rent Split 2.jQueryInterface.get_jq_dzaqfo$', wrapFunction(function () {
    var jq = $;
    return function ($receiver) {
      return jq($receiver.cssSelectorString);
    };
  }));
  var addClass = defineInlineFunction('Rent Split 2.jQueryInterface.addClass_u9bwps$', function ($receiver, class_0) {
    return $receiver.addClass(class_0.className);
  });
  var removeClass = defineInlineFunction('Rent Split 2.jQueryInterface.removeClass_u9bwps$', function ($receiver, class_0) {
    return $receiver.removeClass(class_0.className);
  });
  var data = defineInlineFunction('Rent Split 2.jQueryInterface.data_b7bhqf$', function ($receiver, data) {
    return $receiver.data(data.dataName);
  });
  var data_0 = defineInlineFunction('Rent Split 2.jQueryInterface.data_l9wfl1$', function ($receiver, data, value) {
    return $receiver.data(data.dataName, value);
  });
  var attr = defineInlineFunction('Rent Split 2.jQueryInterface.attr_phnjxj$', function ($receiver, attribute) {
    return $receiver.attr(attribute.htmlAttributeName);
  });
  var attr_0 = defineInlineFunction('Rent Split 2.jQueryInterface.attr_2ul80f$', function ($receiver, attribute, value) {
    return $receiver.attr(attribute.htmlAttributeName, value);
  });
  var attr_1 = defineInlineFunction('Rent Split 2.jQueryInterface.attr_db73uc$', function ($receiver, attribute, value) {
    return $receiver.attr(attribute.htmlAttributeName, value);
  });
  var attr_2 = defineInlineFunction('Rent Split 2.jQueryInterface.attr_mpifw4$', function ($receiver, attribute, value) {
    return $receiver.attr(attribute.htmlAttributeName, value);
  });
  var onChangeData = defineInlineFunction('Rent Split 2.jQueryInterface.onChangeData_x0svav$', function ($receiver, action) {
    $receiver.on('changeData', void 0, action);
  });
  var get_parentElement = defineInlineFunction('Rent Split 2.jQueryInterface.get_parentElement_s15u7w$', function ($receiver) {
    return $receiver.parentElement;
  });
  function delay(seconds, then) {
    window.setTimeout(then, roundToInt(seconds * 1000));
  }
  function delay_0(seconds, then) {
    window.setTimeout(then, seconds.multiply(Kotlin.Long.fromInt(1000)));
  }
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
  var get_first = defineInlineFunction('Rent Split 2.org.bh.tools.base.collections.extensions.get_first_4mqhgw$', wrapFunction(function () {
    var first = Kotlin.kotlin.collections.first_7wnvza$;
    return function ($receiver) {
      return first($receiver);
    };
  }));
  var get_firstOrNull = defineInlineFunction('Rent Split 2.org.bh.tools.base.collections.extensions.get_firstOrNull_4mqhgw$', wrapFunction(function () {
    var firstOrNull = Kotlin.kotlin.collections.firstOrNull_7wnvza$;
    return function ($receiver) {
      return firstOrNull($receiver);
    };
  }));
  var get_last = defineInlineFunction('Rent Split 2.org.bh.tools.base.collections.extensions.get_last_4mqhgw$', wrapFunction(function () {
    var last = Kotlin.kotlin.collections.last_7wnvza$;
    return function ($receiver) {
      return last($receiver);
    };
  }));
  var get_lastOrNull = defineInlineFunction('Rent Split 2.org.bh.tools.base.collections.extensions.get_lastOrNull_4mqhgw$', wrapFunction(function () {
    var lastOrNull = Kotlin.kotlin.collections.lastOrNull_7wnvza$;
    return function ($receiver) {
      return lastOrNull($receiver);
    };
  }));
  var removeFirst = defineInlineFunction('Rent Split 2.org.bh.tools.base.collections.extensions.removeFirst_vvxzk3$', function ($receiver) {
    return $receiver.removeAt_za3lpa$(0);
  });
  function Triad(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  Triad.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Triad',
    interfaces: []
  };
  Triad.prototype.component1 = function () {
    return this.a;
  };
  Triad.prototype.component2 = function () {
    return this.b;
  };
  Triad.prototype.component3 = function () {
    return this.c;
  };
  Triad.prototype.copy_1l1jfh$ = function (a, b, c) {
    return new Triad(a === void 0 ? this.a : a, b === void 0 ? this.b : b, c === void 0 ? this.c : c);
  };
  Triad.prototype.toString = function () {
    return 'Triad(a=' + Kotlin.toString(this.a) + (', b=' + Kotlin.toString(this.b)) + (', c=' + Kotlin.toString(this.c)) + ')';
  };
  Triad.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    result = result * 31 + Kotlin.hashCode(this.c) | 0;
    return result;
  };
  Triad.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.a, other.a) && Kotlin.equals(this.b, other.b) && Kotlin.equals(this.c, other.c)))));
  };
  function get_left($receiver) {
    return $receiver.a;
  }
  function get_center($receiver) {
    return $receiver.b;
  }
  function get_right($receiver) {
    return $receiver.c;
  }
  var firstOrNullComparingTriads = defineInlineFunction('Rent Split 2.org.bh.tools.base.collections.extensions.firstOrNullComparingTriads_csic9r$', wrapFunction(function () {
    var Triad_init = _.org.bh.tools.base.collections.extensions.Triad;
    return function ($receiver, triadComparator) {
      var iterator = $receiver.iterator();
      if (!iterator.hasNext())
        return null;
      var previousCenter = iterator.next();
      if (!iterator.hasNext())
        return null;
      var previousRight = iterator.next();
      while (iterator.hasNext()) {
        var left = previousCenter;
        var center = previousRight;
        var right = iterator.next();
        var triad = new Triad_init(left, center, right);
        if (triadComparator(triad)) {
          return triad;
        }
         else {
          previousCenter = center;
          previousRight = right;
        }
      }
      return null;
    };
  }));
  var firstOrNullComparingPairs = defineInlineFunction('Rent Split 2.org.bh.tools.base.collections.extensions.firstOrNullComparingPairs_cf0iqu$', wrapFunction(function () {
    var Pair_init = Kotlin.kotlin.Pair;
    return function ($receiver, pairComparator) {
      var iterator = $receiver.iterator();
      if (!iterator.hasNext())
        return null;
      var previousRight = iterator.next();
      while (iterator.hasNext()) {
        var left = previousRight;
        var right = iterator.next();
        var pair = new Pair_init(left, right);
        if (pairComparator(pair)) {
          return pair;
        }
         else {
          previousRight = right;
        }
      }
      return null;
    };
  }));
  var reduceTo = defineInlineFunction('Rent Split 2.org.bh.tools.base.collections.extensions.reduceTo_db6zb0$', wrapFunction(function () {
    return function ($receiver, startingValue, reducer) {
      var runningValue = {v: startingValue};
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        runningValue.v = reducer(runningValue.v, element);
      }
      return runningValue.v;
    };
  }));
  var safeReduce = defineInlineFunction('Rent Split 2.org.bh.tools.base.collections.extensions.safeReduce_lrrcxv$', wrapFunction(function () {
    var count = Kotlin.kotlin.collections.count_7wnvza$;
    var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
    return function ($receiver, operation) {
      var tmp$;
      if (count($receiver) < 1)
        tmp$ = null;
      else {
        var iterator = $receiver.iterator();
        if (!iterator.hasNext())
          throw UnsupportedOperationException_init("Empty collection can't be reduced.");
        var accumulator = iterator.next();
        while (iterator.hasNext()) {
          accumulator = operation(accumulator, iterator.next());
        }
        tmp$ = accumulator;
      }
      return tmp$;
    };
  }));
  var safeReduce_0 = defineInlineFunction('Rent Split 2.org.bh.tools.base.collections.extensions.safeReduce_w5eg7r$', wrapFunction(function () {
    var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
    return function ($receiver, operation) {
      var tmp$;
      if ($receiver.isEmpty())
        tmp$ = null;
      else {
        var iterator = $receiver.iterator();
        if (!iterator.hasNext())
          throw UnsupportedOperationException_init("Empty collection can't be reduced.");
        var accumulator = iterator.next();
        while (iterator.hasNext()) {
          accumulator = operation(accumulator, iterator.next());
        }
        tmp$ = accumulator;
      }
      return tmp$;
    };
  }));
  function toString_0($receiver, prefix, glue, suffix) {
    if (prefix === void 0)
      prefix = '';
    if (suffix === void 0)
      suffix = '';
    return joinToString($receiver, glue, prefix, suffix);
  }
  var nonEmpty = defineInlineFunction('Rent Split 2.org.bh.tools.base.collections.extensions.nonEmpty_b5o7sk$', wrapFunction(function () {
    var count = Kotlin.kotlin.collections.count_7wnvza$;
    return function ($receiver) {
      return count($receiver) > 0 ? $receiver : null;
    };
  }));
  var get_nonEmpty = defineInlineFunction('Rent Split 2.org.bh.tools.base.collections.extensions.get_nonEmpty_yfwuwe$', wrapFunction(function () {
    var count = Kotlin.kotlin.collections.count_7wnvza$;
    return function ($receiver) {
      return count($receiver) > 0 ? $receiver : null;
    };
  }));
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
  var toString_1 = defineInlineFunction('Rent Split 2.org.bh.tools.base.jsShim.toString_798l30$', function ($receiver, base) {
    return $receiver.toString(base);
  });
  var toString_2 = defineInlineFunction('Rent Split 2.org.bh.tools.base.jsShim.toString_di2vk2$', function ($receiver, base) {
    return $receiver.toString(base);
  });
  var toString_3 = defineInlineFunction('Rent Split 2.org.bh.tools.base.jsShim.toString_dqglrj$', function ($receiver, base) {
    return $receiver.toString(base);
  });
  var toString_4 = defineInlineFunction('Rent Split 2.org.bh.tools.base.jsShim.toString_if0zpk$', function ($receiver, base) {
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
  function invoke_2($receiver, fromBoolean) {
    if (fromBoolean === true)
      return Ternary$true_getInstance();
    else if (fromBoolean === false)
      return Ternary$false_getInstance();
    else if (fromBoolean == null)
      return Ternary$indeterminate_getInstance();
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
  function HttpRequest(requestURL, headers) {
    if (headers === void 0)
      headers = emptyMap();
    this.requestURL = requestURL;
    this.headers = headers;
  }
  HttpRequest.prototype.get_m8ahyy$ = function (responseListener) {
    this.open_eue948$('GET', responseListener);
  };
  function HttpRequest$open$lambda(closure$request, closure$responseListener) {
    return function (it) {
      if (closure$request.readyState === XMLHttpRequest.DONE)
        closure$responseListener(HttpResponse_init(closure$request));
      return Unit;
    };
  }
  HttpRequest.prototype.open_eue948$ = function (method, responseListener) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = HttpRequest$open$lambda(request, responseListener);
    open(request, method, this.requestURL.toString(), this.headers, true);
    request.send();
  };
  HttpRequest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpRequest',
    interfaces: []
  };
  function HttpRequest_init(requestURL, headers, $this) {
    if (headers === void 0)
      headers = emptyMap();
    $this = $this || Object.create(HttpRequest.prototype);
    HttpRequest.call($this, new URL(requestURL), headers);
    return $this;
  }
  function open($receiver, method, url, headers, async, username, password) {
    if (username === void 0)
      username = null;
    if (password === void 0)
      password = null;
    $receiver.open(method, url, async, username, password);
    var tmp$;
    tmp$ = headers.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.setRequestHeader(element.key, element.value);
    }
  }
  function HttpResponse(text, status, statusText) {
    this.text = text;
    this.status = status;
    this.statusText = statusText;
  }
  Object.defineProperty(HttpResponse.prototype, 'wasSuccessful', {
    get: function () {
      return this.status === toShort(200);
    }
  });
  HttpResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpResponse',
    interfaces: []
  };
  function HttpResponse_init(xmlHttpResponse, $this) {
    $this = $this || Object.create(HttpResponse.prototype);
    HttpResponse.call($this, xmlHttpResponse.responseText, xmlHttpResponse.status, xmlHttpResponse.statusText);
    return $this;
  }
  HttpResponse.prototype.component1 = function () {
    return this.text;
  };
  HttpResponse.prototype.component2 = function () {
    return this.status;
  };
  HttpResponse.prototype.component3 = function () {
    return this.statusText;
  };
  HttpResponse.prototype.copy_fryogh$ = function (text, status, statusText) {
    return new HttpResponse(text === void 0 ? this.text : text, status === void 0 ? this.status : status, statusText === void 0 ? this.statusText : statusText);
  };
  HttpResponse.prototype.toString = function () {
    return 'HttpResponse(text=' + Kotlin.toString(this.text) + (', status=' + Kotlin.toString(this.status)) + (', statusText=' + Kotlin.toString(this.statusText)) + ')';
  };
  HttpResponse.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.status) | 0;
    result = result * 31 + Kotlin.hashCode(this.statusText) | 0;
    return result;
  };
  HttpResponse.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.text, other.text) && Kotlin.equals(this.status, other.status) && Kotlin.equals(this.statusText, other.statusText)))));
  };
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
    tmp$ = invoke_3(FiniteAmountSummary$Companion_getInstance(), this.children);
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
  function invoke_3($receiver, checkboxes) {
    var tmp$ = FiniteAmountSummary$Companion_getInstance();
    var runningValue = {v: 0.0};
    var tmp$_0;
    tmp$_0 = checkboxes.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      runningValue.v = invoke$lambda(runningValue.v, element);
    }
    return invoke_0(tmp$, runningValue.v, checkboxes.size);
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
  Object.defineProperty(package$RentSplit, 'addARoommateRow', {
    get: function () {
      return addARoommateRow;
    }
  });
  Object.defineProperty(package$RentSplit, 'addARoommateButton', {
    get: function () {
      return addARoommateButton;
    }
  });
  Object.defineProperty(package$RentSplit, 'removeARoommateButton', {
    get: function () {
      return removeARoommateButton;
    }
  });
  Object.defineProperty(package$RentSplit, 'addAnExpenseRow', {
    get: function () {
      return addAnExpenseRow;
    }
  });
  Object.defineProperty(package$RentSplit, 'addAnExpenseButton', {
    get: function () {
      return addAnExpenseButton;
    }
  });
  Object.defineProperty(package$RentSplit, 'removeAnExpenseButton', {
    get: function () {
      return removeAnExpenseButton;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateInputRow', {
    get: function () {
      return roommateInputRow;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseInputRow', {
    get: function () {
      return expenseInputRow;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateResultRow', {
    get: function () {
      return roommateResultRow;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateNameInput', {
    get: function () {
      return roommateNameInput;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateIncomeInput', {
    get: function () {
      return roommateIncomeInput;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateProportion', {
    get: function () {
      return roommateProportion;
    }
  });
  $$importsForInline$$['Rent Split 2'] = _;
  Object.defineProperty(package$RentSplit, 'roommateAnyInputField', {
    get: function () {
      return roommateAnyInputField;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateWhoOwesTooMuch', {
    get: function () {
      return roommateWhoOwesTooMuch;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateRemovability', {
    get: function () {
      return roommateRemovability;
    }
  });
  Object.defineProperty(package$RentSplit, 'roommateRenamability', {
    get: function () {
      return roommateRenamability;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseTypeInput', {
    get: function () {
      return expenseTypeInput;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseCostInput', {
    get: function () {
      return expenseCostInput;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseAnyInputField', {
    get: function () {
      return expenseAnyInputField;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseRemovability', {
    get: function () {
      return expenseRemovability;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseRenamability', {
    get: function () {
      return expenseRenamability;
    }
  });
  Object.defineProperty(package$RentSplit, 'resultRow', {
    get: function () {
      return resultRow;
    }
  });
  Object.defineProperty(package$RentSplit, 'resultsTable', {
    get: function () {
      return resultsTable;
    }
  });
  Object.defineProperty(package$RentSplit, 'resultsTableBody', {
    get: function () {
      return resultsTableBody;
    }
  });
  Object.defineProperty(package$RentSplit, 'resultsTableHeadRow', {
    get: function () {
      return resultsTableHeadRow;
    }
  });
  Object.defineProperty(package$RentSplit, 'resourceId', {
    get: function () {
      return resourceId;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseApplicableRoommates', {
    get: function () {
      return expenseApplicableRoommates;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseHasApplicableRoommates', {
    get: function () {
      return expenseHasApplicableRoommates;
    }
  });
  Object.defineProperty(package$RentSplit, 'copyStateUrlButton', {
    get: function () {
      return copyStateUrlButton;
    }
  });
  Object.defineProperty(package$RentSplit, 'stateUrlField', {
    get: function () {
      return stateUrlField;
    }
  });
  Object.defineProperty(package$RentSplit, 'localStorageWarning', {
    get: function () {
      return localStorageWarning;
    }
  });
  Object.defineProperty(package$RentSplit, 'localStorageWarningExplicitRefusalButton', {
    get: function () {
      return localStorageWarningExplicitRefusalButton;
    }
  });
  Object.defineProperty(package$RentSplit, 'localStorageWarningExplicitConsentButton', {
    get: function () {
      return localStorageWarningExplicitConsentButton;
    }
  });
  Object.defineProperty(package$RentSplit, 'justCopiedAlerting', {
    get: function () {
      return justCopiedAlerting;
    }
  });
  Object.defineProperty(package$RentSplit, 'shareUrlHolder', {
    get: function () {
      return shareUrlHolder;
    }
  });
  Object.defineProperty(package$RentSplit, 'stateUrlStatus', {
    get: function () {
      return stateUrlStatus;
    }
  });
  Object.defineProperty(package$RentSplit, 'canHaveStatus', {
    get: function () {
      return canHaveStatus;
    }
  });
  Object.defineProperty(package$RentSplit, 'showStatus', {
    get: function () {
      return showStatus;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterButton', {
    get: function () {
      return expenseFilterButton;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterDialog', {
    get: function () {
      return expenseFilterDialog;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterDialogCancelButton', {
    get: function () {
      return expenseFilterDialogCancelButton;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterDialogOkButton', {
    get: function () {
      return expenseFilterDialogOkButton;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterDialogExpenseName', {
    get: function () {
      return expenseFilterDialogExpenseName;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterApplicableRoommateChecklist', {
    get: function () {
      return expenseFilterApplicableRoommateChecklist;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterApplicableRoommateChecklistItem', {
    get: function () {
      return expenseFilterApplicableRoommateChecklistItem;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterEveryoneCheckbox', {
    get: function () {
      return expenseFilterEveryoneCheckbox;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterApplicableRoommateCheckbox', {
    get: function () {
      return expenseFilterApplicableRoommateCheckbox;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterDialogCurrentExpense', {
    get: function () {
      return expenseFilterDialogCurrentExpense;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterAnyCheckboxSelector', {
    get: function () {
      return expenseFilterAnyCheckboxSelector;
    }
  });
  Object.defineProperty(package$RentSplit, 'expenseFilterButtonExpenseRelation', {
    get: function () {
      return expenseFilterButtonExpenseRelation;
    }
  });
  Object.defineProperty(package$RentSplit, 'anyInputField', {
    get: function () {
      return anyInputField;
    }
  });
  Object.defineProperty(package$RentSplit, 'anyInputButton', {
    get: function () {
      return anyInputButton;
    }
  });
  Object.defineProperty(package$RentSplit, 'anyInput', {
    get: function () {
      return anyInput;
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
  Object.defineProperty(package$RentSplit, 'IdManager', {
    get: IdManager_getInstance
  });
  package$RentSplit.RentSplitApp = RentSplitApp;
  package$RentSplit.main_kand9s$ = main;
  package$RentSplit.resultsTableModel_fib44y$ = resultsTableModel;
  package$RentSplit.rentSplitResultRow_8fwuai$ = rentSplitResultRow;
  package$RentSplit.RentSplitResultTable = RentSplitResultTable;
  package$RentSplit.RentSplitResultRow = RentSplitResultRow;
  Object.defineProperty(package$RentSplit, 'RentSplitViewGenerator', {
    get: RentSplitViewGenerator_getInstance
  });
  package$RentSplit.AnyCssSelector = AnyCssSelector;
  package$RentSplit.CssHtmlAttribute = CssHtmlAttribute;
  package$RentSplit.CssHtmlAttributeWithValue = CssHtmlAttributeWithValue;
  CssParameterForAttributeSelector.exactly = CssParameterForAttributeSelector$exactly;
  CssParameterForAttributeSelector.listContainsExactly = CssParameterForAttributeSelector$listContainsExactly;
  CssParameterForAttributeSelector.languageSubCode = CssParameterForAttributeSelector$languageSubCode;
  CssParameterForAttributeSelector.startsWith = CssParameterForAttributeSelector$startsWith;
  CssParameterForAttributeSelector.endsWith = CssParameterForAttributeSelector$endsWith;
  CssParameterForAttributeSelector.contains = CssParameterForAttributeSelector$contains;
  package$RentSplit.CssParameterForAttributeSelector = CssParameterForAttributeSelector;
  package$RentSplit.CssElement = CssElement;
  package$RentSplit.CssClass = CssClass;
  package$RentSplit.CssId = CssId;
  package$RentSplit.DataAttribute = DataAttribute;
  SelectorCombiner.BinaryCombinator = SelectorCombiner$BinaryCombinator;
  SelectorCombiner.either = SelectorCombiner$either;
  SelectorCombiner.container = SelectorCombiner$container;
  SelectorCombiner.sibling = SelectorCombiner$sibling;
  SelectorCombiner.immediateSibling = SelectorCombiner$immediateSibling;
  package$RentSplit.SelectorCombiner = SelectorCombiner;
  package$RentSplit.or_qxw4fl$ = or;
  package$RentSplit.containing_qxw4fl$ = containing;
  package$RentSplit.justBefore_qxw4fl$ = justBefore;
  package$RentSplit.before_qxw4fl$ = before;
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
  Object.defineProperty(package$RentSplit, 'gooGlAccessToken', {
    get: function () {
      return gooGlAccessToken;
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
  package$RentSplit.get_urlEncoded_pdl1vz$ = get_urlEncoded;
  package$RentSplit.get_urlDecoded_pdl1vz$ = get_urlDecoded;
  package$RentSplit.isNeitherNullNorEmpty_5cw0du$ = isNeitherNullNorEmpty;
  package$RentSplit.isNeitherNullNorBlank_5cw0du$ = isNeitherNullNorBlank;
  package$RentSplit.get_dollarFormat_yrwdxr$ = get_dollarFormat;
  package$RentSplit.toFixed_j6vyb1$ = toFixed;
  package$RentSplit.nonEmptyOrNull_pdl1vz$ = nonEmptyOrNull;
  package$RentSplit.toBooleanOrNull_s8jyvk$ = toBooleanOrNull;
  package$RentSplit.toBoolean_f4dhtg$ = toBoolean;
  package$RentSplit.adding_bv23uc$ = adding;
  package$RentSplit.copyToClipboardOrThrow_9ufosi$ = copyToClipboardOrThrow;
  package$RentSplit.doNothing = doNothing;
  package$RentSplit.consoleLogString_61zpoe$ = consoleLogString;
  package$RentSplit.log_hyc7mn$ = log;
  package$RentSplit.alsoLog_vxumlc$ = alsoLog;
  package$RentSplit.consoleLog_mh5how$ = consoleLog;
  package$RentSplit.log_7uhc0p$ = log_0;
  package$RentSplit.toSetOfIds_pdl1vz$ = toSetOfIds;
  package$RentSplit.serializedSetOfIds_gevexo$ = serializedSetOfIds;
  package$RentSplit.sanitizedForHtml_pdl1vz$ = sanitizedForHtml;
  GooGlUrlShortener$RequestParameter.longUrl = GooGlUrlShortener$RequestParameter$longUrl;
  Object.defineProperty(GooGlUrlShortener$RequestParameter, 'Keys', {
    get: GooGlUrlShortener$RequestParameter$Keys_getInstance
  });
  GooGlUrlShortener.RequestParameter = GooGlUrlShortener$RequestParameter;
  GooGlUrlShortener.RequestParameters = GooGlUrlShortener$RequestParameters;
  Object.defineProperty(GooGlUrlShortener$ShortenResponse$success, 'Companion', {
    get: GooGlUrlShortener$ShortenResponse$success$Companion_getInstance
  });
  GooGlUrlShortener$ShortenResponse.success = GooGlUrlShortener$ShortenResponse$success;
  Object.defineProperty(GooGlUrlShortener$ShortenResponse$error, 'Companion', {
    get: GooGlUrlShortener$ShortenResponse$error$Companion_getInstance
  });
  GooGlUrlShortener$ShortenResponse.error = GooGlUrlShortener$ShortenResponse$error;
  Object.defineProperty(GooGlUrlShortener$ShortenResponse$SingleError, 'Companion', {
    get: GooGlUrlShortener$ShortenResponse$SingleError$Companion_getInstance
  });
  GooGlUrlShortener$ShortenResponse.SingleError = GooGlUrlShortener$ShortenResponse$SingleError;
  GooGlUrlShortener$ShortenResponse.unknownError = GooGlUrlShortener$ShortenResponse$unknownError;
  Object.defineProperty(GooGlUrlShortener$ShortenResponse, 'Companion', {
    get: GooGlUrlShortener$ShortenResponse$Companion_getInstance
  });
  GooGlUrlShortener.ShortenResponse = GooGlUrlShortener$ShortenResponse;
  package$RentSplit.GooGlUrlShortener = GooGlUrlShortener;
  package$RentSplit.get_wasSuccessful_i51kfp$ = get_wasSuccessful;
  package$RentSplit.get_statusText_i51kfp$ = get_statusText;
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
  package$jQueryInterface.jq_1u92oz$ = jq_0;
  package$jQueryInterface.jq_3qujwq$ = jq_1;
  package$jQueryInterface.jq_ch0s56$ = jq_2;
  package$jQueryInterface.get_jq_dzaqfo$ = get_jq;
  package$jQueryInterface.jq_5358jw$ = jq_3;
  package$jQueryInterface.addClass_u9bwps$ = addClass;
  package$jQueryInterface.removeClass_u9bwps$ = removeClass;
  package$jQueryInterface.data_b7bhqf$ = data;
  package$jQueryInterface.data_l9wfl1$ = data_0;
  package$jQueryInterface.attr_phnjxj$ = attr;
  package$jQueryInterface.attr_2ul80f$ = attr_0;
  package$jQueryInterface.attr_db73uc$ = attr_1;
  package$jQueryInterface.attr_mpifw4$ = attr_2;
  package$jQueryInterface.onChangeData_x0svav$ = onChangeData;
  package$jQueryInterface.get_parentElement_s15u7w$ = get_parentElement;
  var package$org = _.org || (_.org = {});
  var package$bh = package$org.bh || (package$org.bh = {});
  var package$tools = package$bh.tools || (package$bh.tools = {});
  var package$async = package$tools.async || (package$tools.async = {});
  package$async.delay_5jeynf$ = delay;
  package$async.delay_u83pai$ = delay_0;
  var package$base = package$tools.base || (package$tools.base = {});
  var package$collections = package$base.collections || (package$base.collections = {});
  package$collections.indexOfFirstOrNull_dmm9ex$ = indexOfFirstOrNull;
  var package$extensions = package$collections.extensions || (package$collections.extensions = {});
  package$extensions.get_first_4mqhgw$ = get_first;
  package$extensions.get_firstOrNull_4mqhgw$ = get_firstOrNull;
  package$extensions.get_last_4mqhgw$ = get_last;
  package$extensions.get_lastOrNull_4mqhgw$ = get_lastOrNull;
  package$extensions.removeFirst_vvxzk3$ = removeFirst;
  package$extensions.Triad = Triad;
  package$extensions.get_left_1pmd2p$ = get_left;
  package$extensions.get_center_1pmd2p$ = get_center;
  package$extensions.get_right_1pmd2p$ = get_right;
  package$extensions.firstOrNullComparingTriads_csic9r$ = firstOrNullComparingTriads;
  package$extensions.firstOrNullComparingPairs_cf0iqu$ = firstOrNullComparingPairs;
  package$extensions.reduceTo_db6zb0$ = reduceTo;
  package$extensions.safeReduce_lrrcxv$ = safeReduce;
  package$extensions.safeReduce_w5eg7r$ = safeReduce_0;
  package$extensions.toString_j63yia$ = toString_0;
  package$extensions.nonEmpty_b5o7sk$ = nonEmpty;
  package$extensions.get_nonEmpty_yfwuwe$ = get_nonEmpty;
  var package$func = package$base.func || (package$base.func = {});
  package$func.Observing = Observing;
  package$func.NullWSB_287e2$ = NullWSB;
  package$func.NullSSB_287e2$ = NullSSB;
  package$func.NullDSB_287e2$ = NullDSB;
  package$func.observing_bjs5ud$ = observing;
  var package$jsShim = package$base.jsShim || (package$base.jsShim = {});
  package$jsShim.toString_798l30$ = toString_1;
  package$jsShim.toString_di2vk2$ = toString_2;
  package$jsShim.toString_dqglrj$ = toString_3;
  package$jsShim.toString_if0zpk$ = toString_4;
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
  package$struct.invoke_yniobj$ = invoke_2;
  var package$util = package$base.util || (package$base.util = {});
  package$util.safeTry_klfg04$ = safeTry;
  var package$io = package$tools.io || (package$tools.io = {});
  var package$net = package$io.net || (package$io.net = {});
  package$net.HttpRequest_init_mvjluj$ = HttpRequest_init;
  package$net.HttpRequest = HttpRequest;
  package$net.HttpResponse_init_1endcj$ = HttpResponse_init;
  package$net.HttpResponse = HttpResponse;
  var package$ui = package$tools.ui || (package$tools.ui = {});
  var package$behavior = package$ui.behavior || (package$ui.behavior = {});
  package$behavior.TernaryCheckboxTree = TernaryCheckboxTree;
  package$behavior.invoke_ujmawj$ = invoke_3;
  var package$touch = package$ui.touch || (package$ui.touch = {});
  Object.defineProperty(package$touch, 'TouchBasics', {
    get: TouchBasics_getInstance
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
  Object.defineProperty(CssHtmlAttributeWithValue.prototype, 'cssSelectorString', Object.getOwnPropertyDescriptor(CssHtmlAttribute.prototype, 'cssSelectorString'));
  DataAttribute.prototype.cssSelectorString_8ij0n9$ = CssHtmlAttributeWithValue.prototype.cssSelectorString_8ij0n9$;
  Object.defineProperty(DataAttribute.prototype, 'cssSelectorString', Object.getOwnPropertyDescriptor(CssHtmlAttributeWithValue.prototype, 'cssSelectorString'));
  addARoommateRow = new CssId('Add-Roommate-Row');
  addARoommateButton = new CssId('Add-Roommate-Button');
  removeARoommateButton = new CssClass('remove-roommate-button');
  addAnExpenseRow = new CssId('Add-Expense-Row');
  addAnExpenseButton = new CssId('Add-Expense-Button');
  removeAnExpenseButton = new CssClass('remove-expense-button');
  roommateInputRow = new DataAttribute('roommate-row');
  expenseInputRow = new DataAttribute('expense-row');
  roommateResultRow = new DataAttribute('result-' + roommateInputRow.dataName);
  roommateNameInput = new CssClass('roommate-name');
  roommateIncomeInput = new CssClass('roommate-income');
  roommateProportion = new CssClass('roommate-proportion');
  roommateAnyInputField = new SelectorCombiner$either(roommateNameInput, roommateIncomeInput);
  roommateWhoOwesTooMuch = new CssClass('roommate-owes-too-much');
  roommateRemovability = new DataAttribute('roommate-removable');
  roommateRenamability = new DataAttribute('roommate-renamable');
  expenseTypeInput = new CssClass('expense-type');
  expenseCostInput = new CssClass('expense-cost');
  expenseAnyInputField = new SelectorCombiner$either(expenseTypeInput, expenseCostInput);
  expenseRemovability = new DataAttribute('expense-removable');
  expenseRenamability = new DataAttribute('expense-renamable');
  resultRow = new DataAttribute('result-roommate-row');
  resultsTable = new CssId('Results');
  resultsTableBody = new SelectorCombiner$container(resultsTable, new CssElement('tbody'));
  resultsTableHeadRow = new SelectorCombiner$container(new SelectorCombiner$container(resultsTable, new CssElement('thead')), new CssElement('tr'));
  resourceId = new DataAttribute('id');
  expenseApplicableRoommates = new DataAttribute('applicable-roommate-ids');
  expenseHasApplicableRoommates = new CssClass('has-applicable-roommates');
  copyStateUrlButton = new CssId('Copy-URL-Button');
  stateUrlField = new CssId('State-URL-Field');
  localStorageWarning = new CssId('Local-Storage-Warning');
  localStorageWarningExplicitRefusalButton = new CssId('Local-Storage-Warning-Decline-Button');
  localStorageWarningExplicitConsentButton = new CssId('Local-Storage-Warning-Consent-Button');
  justCopiedAlerting = new CssClass('just-copied');
  shareUrlHolder = new CssId('State-URL-Holder');
  stateUrlStatus = new DataAttribute('status-text');
  canHaveStatus = new CssClass('can-have-status');
  showStatus = new CssClass('show-status');
  expenseFilterButton = new CssClass('filter-button');
  expenseFilterDialog = new CssId('Filter-Dialog');
  expenseFilterDialogCancelButton = new CssId('Filter-Dialog-Cancel-Button');
  expenseFilterDialogOkButton = new CssId('Filter-Dialog-Ok-Button');
  expenseFilterDialogExpenseName = new CssClass('expense-name');
  expenseFilterApplicableRoommateChecklist = new CssId('Expense-Filter-Applicable-Roommate-Checklist');
  expenseFilterApplicableRoommateChecklistItem = new CssClass('expense-filter-applicable-roommate');
  expenseFilterEveryoneCheckbox = new CssId('Roommate-Filter-Everyone-Checkbox');
  expenseFilterApplicableRoommateCheckbox = new CssClass('expense-filter-applicable-roommate-checkbox');
  expenseFilterDialogCurrentExpense = new DataAttribute('current-expense');
  expenseFilterAnyCheckboxSelector = expenseFilterDialog.cssSelectorString + ' input[type=checkbox]';
  expenseFilterButtonExpenseRelation = new DataAttribute('expense');
  anyInputField = new SelectorCombiner$either(new SelectorCombiner$either(new CssElement('input'), roommateAnyInputField), expenseAnyInputField);
  anyInputButton = new SelectorCombiner$either(new SelectorCombiner$either(new SelectorCombiner$either(new SelectorCombiner$either(new SelectorCombiner$either(new SelectorCombiner$either(addARoommateButton, addAnExpenseButton), removeARoommateButton), removeAnExpenseButton), expenseFilterButton), expenseFilterDialogCancelButton), expenseFilterDialogOkButton);
  anyInput = new SelectorCombiner$either(anyInputField, anyInputButton);
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
  localStorageConsentSerializedName = 'c';
  resourceIdSerializedName = 'i';
  resourceNameSerializedName = 'n';
  resourceDollarAmountSerializedName = 'd';
  expenseApplicableRoommatesSerializedName = 'f';
  resourceIsRemovableSerializedName = 'x';
  resourceIsRenamableSerializedName = 'r';
  allExpensesSerializedName = 'e';
  allRoommatesSerializedName = 'r';
  rentRoommatesSerializedName = 'r';
  rentExpensesSerializedName = 'e';
  localDataPreferencesSerializedName = 'l';
  generalStateSerializedName = 'generalState';
  gooGlAccessToken = 'AIzaSyBsJvWOGsHnIcPi-wnIB3WAaILRKsI8Pmo';
  main([]);
  Kotlin.defineModule('Rent Split 2', _);
  return _;
}(typeof this['Rent Split 2'] === 'undefined' ? {} : this['Rent Split 2'], kotlin);
