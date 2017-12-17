package RentSplit

import jQueryInterface.jq
import org.bh.tools.base.util.safeTry
import org.w3c.dom.url.URL
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Json
import kotlin.js.json



// DO NOT CHANGE THESE
const val rentRoommatesSerializedName = "r"
const val rentExpensesSerializedName = "e"
const val localDataPreferencesSerializedName = "l"
const val generalStateSerializedName = "generalState"



/**
 * Represents a state of the Rent Split app
 */
data class RentSplitState(
        /** All roommates that will be splitting the rent */
        @JsName(rentRoommatesSerializedName)
        val roommates: RentRoommates,

        /** All expenses that will be split among the roommates */
        @JsName(rentExpensesSerializedName)
        val expenses: RentExpenses,

        /** The user's preferences regarding storage of data locally */
        @JsName(localDataPreferencesSerializedName)
        val localDataPreferences: LocalDataPreferences
) {

    /**
     * Converts this state into a JSON object
     */
    fun toJson() = json(rentRoommatesSerializedName to roommates.toJson(),
                        rentExpensesSerializedName to expenses.toJson(),
                        localDataPreferencesSerializedName to localDataPreferences.toJson())

    companion object {
        /**
         * Creates a [RentSplitState] out of JSON, or returns `null` if that can't be done.
         *
         * The given JSON must be formatted like this:
         *
         * ```
         * {
         *     "r": JSON<RentRoommates>,
         *     "e": JSON<RentExpenses>,
         *     "l": JSON<LocalDataPreferences>
         * }
         * ```
         *
         * @see RentRoommates
         * @see RentExpenses
         * @see LocalDataPreferences
         */
        @Suppress("UNCHECKED_CAST_TO_NATIVE_INTERFACE")
        operator fun invoke(raw: Json): RentSplitState? {
            return RentSplitState(roommates = RentRoommates(raw = (raw[rentRoommatesSerializedName] as? Json) ?: return null) ?: return null,
                                  expenses = RentExpenses(raw = raw[rentExpensesSerializedName] as? Json ?: return null) ?: return null,
                                  localDataPreferences = LocalDataPreferences(raw = raw[localDataPreferencesSerializedName] as? Json ?: return null) ?: return null)
        }


        /**
         * The default state to use when no other is available
         */
        val default = RentSplitState(
                RentRoommates(listOf(RentRoommate.initial, RentRoommate.initial)),
                RentExpenses(listOf(RentExpense.initialRent, RentExpense.initialUtilities)),
                LocalDataPreferences.initial)
    }
}


/**
 * In the future, this will deserialize the state, or provide the default one.
 * Right now, it just provides the default one.
 */
fun RentSplitState.Companion.load(): RentSplitState {
    val urlState = URL(window.location.href).searchParams.get(generalStateSerializedName)?.let(::deserializing)
    window.history.pushState(null, document.title, "?")

    return urlState
            ?: (window.localStorage.getItem(generalStateSerializedName)?.let(::deserializing)
                ?: this.default)
}


/**
 * Saves this state to the disk, if and only if the user has explicitly consented to such an action
 */
fun RentSplitState.save() {
    val jsonString = serialized()

    // Only save to the local storage if the user consented
    when (this.localDataPreferences.localStorageConsent) {
        UserConsent.explicitConsent ->
            window.localStorage.setItem(generalStateSerializedName, jsonString)

        UserConsent.explicitRefusal -> console.log("Opted not to save anything locally; user explicitly told us not to")

        null -> console.log("Opted not to save anything locally; user never explicitly told us that's OK")
    }
}


/**
 * Returns a copy of this state, but with the given roommate added in
 */
fun RentSplitState.addingNewRoommate(newRoommate: RentRoommate): RentSplitState {
    return copy(roommates = this.roommates.adding(newRoommate), expenses = this.expenses)
}


/**
 * Returns a copy of this state, but with the given roommate added in
 */
fun RentSplitState.addingNewExpense(newExpense: RentExpense): RentSplitState {
    return copy(roommates = this.roommates, expenses = this.expenses.adding(newExpense))
}


/**
 * Converts this state into a string. First, all field names are shortened
 */
fun RentSplitState.serialized(): String = JSON.stringify(this.toJson())


/**
 * Converts a shortened-name state string (as created with [serialized]) into a [RentSplitState]
 */
@Suppress("unused")
fun RentSplitState.Companion.deserializing(jsonString: String): RentSplitState? =
    safeTry {
        val raw = JSON.parse<Json>(jsonString)
        return@safeTry RentSplitState(raw = raw)
    }
