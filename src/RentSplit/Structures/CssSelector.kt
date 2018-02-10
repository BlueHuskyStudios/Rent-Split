@file:Suppress("MemberVisibilityCanBePrivate")

package RentSplit

/**
 * Represents any CSS selector
 *
 * @author Ben Leggiero
 * @since 2018-02-06
 */
interface AnyCssSelector {
    /**
     * The string version of this selector
     */
    val cssSelectorString: String
}



/**
 * A CSS selector that represents an HTML attribute (like `disabled` or `checked`) that has no value
 */
interface CssHtmlAttribute : AnyCssSelector {
    /**
     * The name of the HTML attribute
     */
    val htmlAttributeName: String

    override val cssSelectorString: String get() = "[$htmlAttributeName]"
}



/**
 * A CSS selector that represents an HTML attribute (like `id` or `href`) that can have a value
 */
interface CssHtmlAttributeWithValue : CssHtmlAttribute {
    /**
     * The string version of this selector, specifying the parameter
     */
    fun cssSelectorString(parameter: CssParameterForAttributeSelector): String {
        return "[$htmlAttributeName${parameter.operator}\"${parameter.parameterText}\"${if (parameter.caseInsensitive) " i" else ""}]"
    }
}



/**
 * A parameter that is associated with a CSS attribute selector (like the `^="Foo"` part of `id^="Foo"`)
 */
sealed class CssParameterForAttributeSelector(
        /**
         * The text of the parameter value (like `Foo` in `id^="Foo"`)
         */
        val parameterText: String,

        /**
         * If specified, letter case is not a factor of comparison; `Foo` would be equivalent to `foo`
         */
        val caseInsensitive: Boolean) {

    /**
     * The parameter must match this string exactly
     */
    class exactly(parameterText: String, caseInsensitive: Boolean = false): CssParameterForAttributeSelector(parameterText, caseInsensitive)

    /**
     * The parameter must be a list (like `foo="bar,baz,qux"`), and it must contain exactly this string (like `baz`)
     */
    class listContainsExactly(listItem: String, caseInsensitive: Boolean = false): CssParameterForAttributeSelector(listItem, caseInsensitive)

    /**
     * The parameter must be a language code (like `lang="en-US"`) with the given subcode (like `en`)
     */
    class languageSubCode(subCode: String, caseInsensitive: Boolean = false): CssParameterForAttributeSelector(subCode, caseInsensitive)

    /**
     * The parameter must start with this string
     */
    class startsWith(prefix: String, caseInsensitive: Boolean = false): CssParameterForAttributeSelector(prefix, caseInsensitive)

    /**
     * The parameter must end with this string
     */
    class endsWith(suffix: String, caseInsensitive: Boolean = false): CssParameterForAttributeSelector(suffix, caseInsensitive)

    /**
     * The parameter must contain this string; no fancy list of subcode processing is done
     */
    class contains(needle: String, caseInsensitive: Boolean = false): CssParameterForAttributeSelector(needle, caseInsensitive)

    /**
     * The operator of this selector, like `=` or `*=`
     */
    val operator: String get() = when (this) {
        is exactly -> ""
        is listContainsExactly -> "~"
        is languageSubCode -> "|"
        is startsWith -> "^"
        is endsWith -> "$"
        is contains -> "*"
    } + "="
}



// MARK: - Implementations

/**
 * An HTML element that a CSS selector can select, like `span` or `tbody`.
 */
class CssElement(val elementName: String): AnyCssSelector {
    override val cssSelectorString get() = elementName
}



/**
 * A CSS class
 */
class CssClass(val className: String): CssHtmlAttribute {
    override val htmlAttributeName: String by lazy { "class" }
    override val cssSelectorString by lazy { ".$className" }
}



/**
 * A CSS ID
 */
class CssId(val idName: String): CssHtmlAttribute {
    override val htmlAttributeName by lazy { "id" }
    override val cssSelectorString by lazy { "#$idName" }
}



/**
 * A data attribute of an element, like `data-foo="bar"`
 *
 * See also: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*
 */
class DataAttribute(val dataName: String): CssHtmlAttributeWithValue {
    override val htmlAttributeName by lazy { "data-$dataName" }
}



/**
 * Combines multiple selectors, like `#Foo, .bar` or `#Foo > .bar`.
 */
sealed class SelectorCombiner(val lhs: AnyCssSelector, val rhs: AnyCssSelector, val cssStringifier: () -> String): AnyCssSelector {

    override val cssSelectorString: String get() = cssStringifier()

    /**
     * Combines two CSS selectors
     */
    open class BinaryCombinator(lhs: AnyCssSelector, rhs: AnyCssSelector, combinator: String): SelectorCombiner(lhs, rhs, { "${lhs.cssSelectorString}$combinator${rhs.cssSelectorString}" })

    /**
     * Selects anything selected by `lhs` andor `rhs`; neither has priority nor affects the other.
     *
     * This is the CSS `,`
     */
    class either(lhs: AnyCssSelector, rhs: AnyCssSelector): BinaryCombinator(lhs, rhs, ",")

    /**
     * Selects every `child` of `parent`. `parent` is never selected
     *
     * This is the CSS `>`
     */
    class container(parent: AnyCssSelector, child: AnyCssSelector): BinaryCombinator(parent, child, ">")

    /**
     * Selects every `brother` that is a sibling of `sister`. `sister` is never selected.
     *
     * This is the CSS `~`
     */
    class sibling(sister: AnyCssSelector, brother: AnyCssSelector): BinaryCombinator(sister, brother, "~")

    /**
     * Selects every `brother` that comes after its sibling `sister`. `sister` is never selected.
     *
     * This is the CSS `+`
     */
    class immediateSibling(sister: AnyCssSelector, brother: AnyCssSelector): BinaryCombinator(sister, brother, "+")
}



/**
 * Selects anything selected by either of the two selectors.
 *
 * This is the CSS `,`
 */
@Suppress("NOTHING_TO_INLINE")
inline infix fun AnyCssSelector.or(rhs: AnyCssSelector) = SelectorCombiner.either(this, rhs)

/**
 * Selects anything that the left-hand selector contains which also matches the right-hand one. The right-hand element is the selected one.
 *
 * This is the CSS `>`
 */
@Suppress("NOTHING_TO_INLINE")
inline infix fun AnyCssSelector.containing(child: AnyCssSelector) = SelectorCombiner.container(parent = this, child = child)

/**
 * Selects anything the right-hand selector matches which also succeeds the left-hand one as a sibling.
 *
 * This is the CSS `+`
 */
@Suppress("NOTHING_TO_INLINE")
inline infix fun AnyCssSelector.justBefore(brother: AnyCssSelector) = SelectorCombiner.immediateSibling(sister = this, brother = brother)

/**
 * Selects anything the right-hand selector matches which is also a sibling of the left-hand one.
 *
 * This is the CSS `~`
 */
@Suppress("NOTHING_TO_INLINE")
inline infix fun AnyCssSelector.before(brother: AnyCssSelector) = SelectorCombiner.sibling(sister = this, brother = brother)
