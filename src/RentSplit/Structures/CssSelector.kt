@file:Suppress("MemberVisibilityCanBePrivate")

package RentSplit

/**
 * @author Ben Leggiero
 * @since 2018-02-06
 */

interface AnyCssSelector {
    val cssSelectorString: String
}



interface CssSelectorWithoutValue : AnyCssSelector {
    val htmlAttributeName: String
}



interface CssSelectorWithValue : CssSelectorWithoutValue {
    fun attributeSelector(parameter: CssParameterForSelector): String {
        return "[$htmlAttributeName${parameter.operator}\"${parameter.parameterText}\"${if (parameter.caseInsensitive) " i" else ""}]"
    }

    override val cssSelectorString: String get() = "[$htmlAttributeName]"
}



sealed class CssParameterForSelector(val parameterText: String, val caseInsensitive: Boolean) {
    class exactly(parameterText: String, caseInsensitive: Boolean = false): CssParameterForSelector(parameterText, caseInsensitive)
    class listContainsExactly(listItem: String, caseInsensitive: Boolean = false): CssParameterForSelector(listItem, caseInsensitive)
    class languageSubCode(subCode: String, caseInsensitive: Boolean = false): CssParameterForSelector(subCode, caseInsensitive)
    class startsWith(prefix: String, caseInsensitive: Boolean = false): CssParameterForSelector(prefix, caseInsensitive)
    class endsWith(suffix: String, caseInsensitive: Boolean = false): CssParameterForSelector(suffix, caseInsensitive)
    class contains(needle: String, caseInsensitive: Boolean = false): CssParameterForSelector(needle, caseInsensitive)

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

class CssElement(val elementName: String): AnyCssSelector {
    override val cssSelectorString get() = elementName
}

class CssClass(val className: String): CssSelectorWithoutValue {
    override val htmlAttributeName: String by lazy { "class" }
    override val cssSelectorString by lazy { ".$className" }
}



class CssId(val idName: String): CssSelectorWithoutValue {
    override val htmlAttributeName by lazy { "id" }
    override val cssSelectorString by lazy { "#$idName" }
}



class DataAttribute(val dataName: String): CssSelectorWithValue {
    override val htmlAttributeName by lazy { "data-$dataName" }
}



class CompoundSelector(val selectorCombiner: SelectorCombiner): AnyCssSelector {
    override val cssSelectorString: String get() = selectorCombiner.cssSelectorString
}



sealed class SelectorCombiner(val lhs: AnyCssSelector, val rhs: AnyCssSelector, val cssStringifier: () -> String): AnyCssSelector {

    override val cssSelectorString: String get() = cssStringifier()

    open class BinaryCombinator(lhs: AnyCssSelector, rhs: AnyCssSelector, combinator: String): SelectorCombiner(lhs, rhs, { "${lhs.cssSelectorString}$combinator${rhs.cssSelectorString}" })

    class either(lhs: AnyCssSelector, rhs: AnyCssSelector): BinaryCombinator(lhs, rhs, ",")
    class container(parent: AnyCssSelector, child: AnyCssSelector): BinaryCombinator(parent, child, ">")
    class sibling(sister: AnyCssSelector, brother: AnyCssSelector): BinaryCombinator(sister, brother, "~")
    class immediateSibling(sister: AnyCssSelector, brother: AnyCssSelector): BinaryCombinator(sister, brother, "+")
}



@Suppress("NOTHING_TO_INLINE")
inline infix fun AnyCssSelector.or(rhs: AnyCssSelector) = SelectorCombiner.either(this, rhs)

@Suppress("NOTHING_TO_INLINE")
inline infix fun AnyCssSelector.containing(child: AnyCssSelector) = SelectorCombiner.container(parent = this, child = child)

@Suppress("NOTHING_TO_INLINE")
inline infix fun AnyCssSelector.justBefore(brother: AnyCssSelector) = SelectorCombiner.immediateSibling(sister = this, brother = brother)

@Suppress("NOTHING_TO_INLINE")
inline infix fun AnyCssSelector.before(brother: AnyCssSelector) = SelectorCombiner.sibling(sister = this, brother = brother)
