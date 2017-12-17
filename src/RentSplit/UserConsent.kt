package RentSplit

/**
 * Describes to what the degree the user has expressed their consent
 *
 * @author Ben Leggiero
 * @since 2017-12-16
 */
enum class UserConsent(
        /**
         * The value used to serialize this consent.
         * Once you choose this, it should never be changed, lest you introduce version incompatibilities.
         */
        val serialValue: String
) {
    /**
     * The user has explicitly been informed of the thing to which they are consenting, they have acknowledged it, and
     * they have explicitly told us that they give their consent.
     */
    explicitConsent("y"),

    /**
     * The user has explicitly been informed of the thing to which they are consenting, they have acknowledged it, and
     * they have explicitly told us that they **refuse** to give their consent.
     */
    explicitRefusal("n"),

    ;


    fun toJson() = this.serialValue


    companion object {
        /**
         * Finds a [UserConsent] value whose serial value matches the given one. If none is found, `null` is returned.
         */
        operator fun invoke(serialValue: String): UserConsent? {
            return values().firstOrNull { it.serialValue == serialValue }
        }
    }
}
