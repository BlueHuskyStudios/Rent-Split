package org.bh.tools.base.collections.extensions

/*
 * Copyright BHStudios ©2016 BH-1-PS. Made for Snek.
 *
 * @author Kyli Rouge
 * @since 2016-11-09
 */





/**
 * @return the first element, or throws `NoSuchElementException` if there are no elements.
 */
inline val <ElementType> Iterable<ElementType>.first: ElementType get() = first()



/**
 * @return the first element, or `null` if there are no elements.
 */
inline val <ElementType> Iterable<ElementType>.firstOrNull: ElementType? get() = firstOrNull()



/**
 * @return the first element, or throws `NoSuchElementException` if there are no elements.
 */
inline val <ElementType> Iterable<ElementType>.last: ElementType get() = last()



/**
 * @return the first element, or `null` if there are no elements.
 */
inline val <ElementType> Iterable<ElementType>.lastOrNull: ElementType? get() = lastOrNull()


/**
 * Removes the first item in the list (if there is one) and returns it. If there is no first element in the list, no
 * action is performed and `null` is returned
 */
@Suppress("NOTHING_TO_INLINE")
inline fun <Element> MutableList<Element>.removeFirst(): Element? = removeAt(index = 0)


//inline fun <Element> MutableList<Element>.plusAssign(): Element? = plus



data class Triad<out Type>(val a: Type, val b: Type, val c: Type)



val <Type> Triad<Type>.left get() = a
val <Type> Triad<Type>.center get() = b
val <Type> Triad<Type>.right get() = c



typealias TriadComparator<Type> = (triad: Triad<Type>) -> Boolean



/**
 * Iterates through this by contiguous groups of three (triads), and asks the given triad comparator if that's the
 * group it's looking for. If that comparator ever returns `true`, that triad is immediately returned and the
 * iteration ceases.
 *
 * Iteration proceeds one at a time, not by groups of three. For example, in the array `[1, 2, 3, 4, 5]`, this function
 * will iterate over `[1, 2, 3]`, `[2, 3, 4]`, and `[3, 4, 5]`.
 *
 * `null` is returned if the comparator never returns `true`, or if there are fewer than three items in the iterable.
 *
 * @param triadComparator The comparator that will compare against contiguous triads in this iterable
 *
 * @return The first triad for which the comparator returned `true`, or `null`.
 */
inline fun <ElementType> Iterable<ElementType>.firstOrNullComparingTriads(crossinline triadComparator: TriadComparator<ElementType>): Triad<ElementType>? {
    val iterator = iterator()

    if (!iterator.hasNext()) return null
    var previousCenter: ElementType = iterator.next()

    if (!iterator.hasNext()) return null
    var previousRight: ElementType = iterator.next()

    while (iterator.hasNext()) {
        val left = previousCenter
        val center = previousRight
        val right = iterator.next()

        val triad = Triad(left, center, right)
        if (triadComparator(triad)) {
            return triad
        } else {
            previousCenter = center
            previousRight = right
        }
    }

    return null
}



typealias PairComparator<Type> = (pair: Pair<Type, Type>) -> Boolean



/**
 * Iterates through this by contiguous groups of two, and asks the given pair comparator if that's the
 * pair it's looking for. If that comparator ever returns `true`, that pair is immediately returned and the
 * iteration ceases.
 *
 * Iteration proceeds one at a time, not by groups of two. For example, in the array `[1, 2, 3, 4]`, this function
 * will iterate over `[1, 2]`, `[2, 3]`, and `[3, 4]`.
 *
 * `null` is returned if the comparator never returns `true`, or if there are fewer than two items in the iterable.
 *
 * @param pairComparator The comparator that will compare against contiguous pairs in this iterable
 *
 * @return The first pair for which the comparator returned `true`, or `null`.
 */
inline fun <ElementType> Iterable<ElementType>.firstOrNullComparingPairs(crossinline pairComparator: PairComparator<ElementType>): Pair<ElementType, ElementType>? {
    val iterator = iterator()

    if (!iterator.hasNext()) return null
    var previousRight: ElementType = iterator.next()

    while (iterator.hasNext()) {
        val left = previousRight
        val right = iterator.next()

        val pair = Pair(left, right)
        if (pairComparator(pair)) {
            return pair
        } else {
            previousRight = right
        }
    }

    return null
}



typealias Reducer<ElementType, ResultType> = (runningValue: ResultType, currentValue: ElementType) -> ResultType



/**
 * Reduces this Iterable of one type to a single value of the same type, starting with a value of the same type as the
 * starting value. Note that studies show that mutating and returning the starting value is faster than creating and
 * returning a new value each time. ( for instance: http://stackoverflow.com/q/33750636/453435 )
 *
 * @param startingValue The first value to pass to the reducer
 * @param reducer       The block to call for each element, which will take in that element and the current reduced
 *                      value, and returns a new reduced value.
 *
 * @return This Iterable, reduced to a single value
 */
fun <ElementType, StartingType: ResultType, ResultType>
        Iterable<ElementType>
        .reduceTo(startingValue: StartingType, reducer: Reducer<ElementType, ResultType>)
        : ResultType {

    var runningValue: ResultType = startingValue
    forEach { currentValue ->
        runningValue = reducer(runningValue, currentValue)
    }
    return runningValue
}


/**
 * Allows you to reduce a possibly-empty array. If the array is empty, the block is never called and `null` is always returned
 */
inline fun <S, T: S> Iterable<T>.safeReduce(operation: (S, T) -> S): S?
        = if (count() < 1) null else reduce(operation)


/**
 * Allows you to reduce a possibly-empty array. If the array is empty, the block is never called and `null` is always returned
 */
inline fun <S, T: S> Collection<T>.safeReduce(operation: (S, T) -> S): S?
        = if (isEmpty()) null else reduce(operation)


/**
 * Creates a string from this [Iterable], where the given `prefix` appears at the beginning of the string, `glue`
 * appears between each element, and `suffix` appears at the end of the string.
 */
fun <ElementType> Iterable<ElementType>.toString(prefix: CharSequence = "", glue: CharSequence, suffix: CharSequence = ""): String {
    return this.joinToString(prefix = prefix, separator = glue, postfix = suffix)
}


@Suppress("NOTHING_TO_INLINE")
inline fun <ElementType, IterableType: Iterable<ElementType>> IterableType.nonEmpty(): IterableType? = if (count() > 0) this else null
inline val <ElementType, IterableType: Iterable<ElementType>> IterableType.nonEmpty get() = nonEmpty()