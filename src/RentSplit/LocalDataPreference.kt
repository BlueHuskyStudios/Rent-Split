package RentSplit

import kotlin.js.Json
import kotlin.js.json



// DO NOT CHANGE THESE
const val localStorageConsentSerializedName = "c"



/**
 * @author Ben Leggiero
 * @since 2017-12-16
 */
data class LocalDataPreference(
    /**
     * The user's consent to using LocalStorage
     */
    @JsName("c")
    val localStorageConsent: UserConsent?
) {

    fun toJson() = json(localStorageConsentSerializedName to localStorageConsent?.toJson())

    companion object {
        /**
         * Creates a [LocalDataPreference] instance out of JSON, or returns `null` if that can't be done.
         *
         * The given JSON must be formatted like one of these:
         *
         * ```
         * {
         *     "c": String?
         * }
         *
         * {
         * }
         * ```
         */
        operator fun invoke(raw: Json): LocalDataPreference? {
            return LocalDataPreference(
                    localStorageConsent = (raw["c"] as? String)?.let { UserConsent(serialValue = it) })
        }


        val initial = LocalDataPreference(localStorageConsent = null)
    }
}
