@file:Suppress("PackageDirectoryMismatch")
package RentSplit

import RentSplit.SerializationPurpose.*
import RentSplit.UserConsent.*
import org.bh.tools.base.util.*
import org.w3c.dom.url.*
import kotlin.browser.*
import kotlin.js.*


// DO NOT CHANGE THESE
const val rentRoommatesSerializedName = "r"
const val rentExpensesSerializedName = "e"
const val localDataPreferencesSerializedName = "l"
const val generalStateSerializedName = "generalState"
const val gooGlAccessToken = "AIzaSyBsJvWOGsHnIcPi-wnIB3WAaILRKsI8Pmo"



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
    fun toJson(purpose: SerializationPurpose) = when(purpose) {
        forLocalStorage -> json(rentRoommatesSerializedName to roommates.toJson(),
                                rentExpensesSerializedName to expenses.toJson(),
                                localDataPreferencesSerializedName to localDataPreferences.toJson())

        forSharing -> json(rentRoommatesSerializedName to roommates.toJson(),
                           rentExpensesSerializedName to expenses.toJson())
    }

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
        @Suppress("UNCHECKED_CAST_TO_NATIVE_INTERFACE", "UNCHECKED_CAST_TO_EXTERNAL_INTERFACE")
        operator fun invoke(raw: Json): RentSplitState? {
            return RentSplitState(roommates = (raw[rentRoommatesSerializedName] as? Json)?.let { RentRoommates(raw = it) } ?: RentRoommates.generateInitial(),
                                  expenses = (raw[rentExpensesSerializedName] as? Json)?.let { RentExpenses(raw = it) } ?: RentExpenses.generateInitial(),
                                  localDataPreferences = (raw[localDataPreferencesSerializedName] as? Json)?.let { LocalDataPreferences(raw = it) } ?: LocalDataPreferences.generateInitial())
        }


        /**
         * The initial state to use when no other is available
         */
        val initial by lazy {
            RentSplitState(
                    RentRoommates.generateInitial(),
                    RentExpenses.generateInitial(),
                    LocalDataPreferences.generateInitial())
        }
    }

    fun setting(expense: RentExpense): RentSplitState {
        return copy(expenses = expenses.setting(expense))
    }
}



/**
 * Deserializes the state from the URL or local storage
 */
fun RentSplitState.Companion.load(): RentSplitState {
    val urlState = URL(window.location.href).searchParams.get(generalStateSerializedName)?.let { deserializing(it, forSharing) }
    if (urlState != null) {
        window.history.pushState(null, document.title, "?") // remove the ugly long JSON string from the URL
    }

    (window.localStorage.getItem(generalStateSerializedName)?.let { deserializing(it, forLocalStorage) })?.let { locallyStored ->
        if (urlState != null) {
            // If there was a valid state shared in the URL, then the only data it cannot contain is the local data
            // preferences. If we can get that out of local storage, we will use that.
            return urlState.copy(localDataPreferences = locallyStored.localDataPreferences)
        }
        else if (locallyStored.localDataPreferences.localStorageConsent == explicitConsent) {
            // If there was no valid state in the URL, but there was in local storage, and it indicates that the user
            // previously explicitly consented to using local storage, then use that.
            return locallyStored
        }
    }

    // If there was no local storage, we got here. We might've still gotten a URL state so if we did then use that.
    // Else, there's no state to be loaded so use the preset initial state.
    return urlState ?: this.initial
}


/**
 * Saves this state to the disk, if and only if the user has explicitly consented to such an action
 */
fun RentSplitState.save() {
    val jsonStringForLocalStorage = serialized(forLocalStorage)

    // Only save to the local storage if the user consented
    when (this.localDataPreferences.localStorageConsent) {
        UserConsent.explicitConsent ->
            window.localStorage.setItem(generalStateSerializedName, jsonStringForLocalStorage)

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
fun RentSplitState.serialized(purpose: SerializationPurpose) = when (purpose) {
    forLocalStorage -> JSON.stringify(this.toJson(purpose))
    forSharing -> JSON.stringify(this.toJson(purpose)).urlEncoded
}


/**
 * Converts a shortened-name state string (as created with [serialized]) into a [RentSplitState]
 */
@Suppress("unused")
fun RentSplitState.Companion.deserializing(jsonString: String, purpose: SerializationPurpose): RentSplitState? =
    safeTry {
        val raw: Json

        when (purpose) {
            forLocalStorage -> raw = JSON.parse(jsonString)
            forSharing -> {
                raw = JSON.parse(decodeURIComponent(jsonString))
                @Suppress("UNCHECKED_CAST_TO_EXTERNAL_INTERFACE")
                (raw[localDataPreferencesSerializedName] as? Json)?.set(localStorageConsentSerializedName, undefined)
            }
        }
        return@safeTry RentSplitState(raw = raw)
    }



/**
 * Describes why something was or should be (de)serialized. These should not imply incompatible (de)serialization
 * approaches, but instead describe what to include/omit when (de)serializing
 */
enum class SerializationPurpose {
    /**
     * Serialized for keeping local storage on the client machine
     */
    forLocalStorage,

    /**
     * Serialized for sharing to another client's machine
     */
    forSharing
}
