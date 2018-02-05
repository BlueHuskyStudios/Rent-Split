package org.bh.tools.base.func

import kotlin.properties.*
import kotlin.reflect.*

/**
 * Copyright BHStudios ©2016 BH-1-PS. Made for BH Tic Tac Toe IntelliJ Project.
 *
 * Allows you to run code that determines if a value should be set, to prepare for it to be set, andor to react to it
 * being set. The intended syntax is:
 *
 * ```
 * var foo: Bar by Observing(Bar(),
 *     shouldSet = {
 *         baz.isValidState()
 *     },
 *     willSet = {
 *         baz.prepareToDoTheThing()
 *     },
 *     didSet = {
 *         baz.doTheThing()
 *     })
 * ```
 *
 * Note that each observation function is optional! So this is just fine:
 *
 * ```
 * var foo: Bar by Observing(Bar(),
 *     willSet = {
 *         baz.doTheThingPreemptively()
 *     })
 * ```
 *
 * @param initialValue The initial value of the property
 * @param shouldSet    `[optional]` - The block which will be called to determine if a value should be changed.
 *                     Returning `false` from this block will cause the value to remain the same and the `willSet` and
 *                     `didSet` blocks to be skipped. *This is a bad place to put code that you simply want to run
 *                     before the value is set!* If you want to run code before the value is set, but which won't
 *                     help decide if it should be set, use `willSet`.
 * @param willSet      `[optional]` - The block which will be called before the value is changed. At this point, nothing
 *                     will stop the value from being changed. If you want to decide whether the value should change,
 *                     use the `shouldSet` block.
 * @param didSet       `[optional]` - The block which will be called after the value has been changed. It is
 *                     nonsensical to modify the value within this block.
 *
 * @author Ben Leggiero
 * @since 2016-10-03
 */
class Observing<in ThisRefType, PropertyType>(
        var initialValue: PropertyType,
        val shouldSet: ShouldSetBlock<PropertyType> = NullSSB(),
        val willSet: WillSetBlock<PropertyType> = NullWSB(),
        val didSet: DidSetBlock<PropertyType> = NullDSB()
) : ReadWriteProperty<ThisRefType, PropertyType> {
    val syncLock = Any()

    override fun getValue(thisRef: ThisRefType, property: KProperty<*>): PropertyType {
        return initialValue
    }

    override fun setValue(thisRef: ThisRefType, property: KProperty<*>, value: PropertyType) {
        synchronized(syncLock) {
            if (shouldSet(initialValue, value)) {
                val oldValue = initialValue
                willSet(oldValue, value)
                initialValue = value
                didSet(oldValue, value)
            }
        }
    }
}

/**
 * The kind of block called before something is set
 */
typealias WillSetBlock<PropertyType> = ___SetBlock<PropertyType, Unit>

/**
 * The kind of block called after something is set
 */
typealias ShouldSetBlock<PropertyType> = ___SetBlock<PropertyType, Boolean>

/**
 * The kind of block called after something is set
 */
typealias DidSetBlock<PropertyType> = ___SetBlock<PropertyType, Unit>

/**
 * Some kind of block called at some point when something is set
 */
private typealias ___SetBlock<PropertyType, ReturnType> = (oldValue: PropertyType, newValue: PropertyType) -> ReturnType


/**
 * A non-functioning [WillSetBlock] that would otherwise do something before setting
 */
fun <PropertyType> NullWSB(): WillSetBlock<PropertyType> = { _, _ -> }

/**
 * A non-functioning [ShouldSetBlock] that would otherwise do something after setting
 */
fun <PropertyType> NullSSB(): ShouldSetBlock<PropertyType> = { _, _ -> true }

/**
 * A non-functioning [DidSetBlock] that would otherwise do something after setting
 */
fun <PropertyType> NullDSB(): DidSetBlock<PropertyType> = { _, _ -> }


/**
 * Allows you to run code that determines if a value should be set, to prepare for it to be set, andor to react to it
 * being set. The intended syntax is:
 *
 * ```
 * var foo: Bar by observing(Bar(),
 *     shouldSet = {
 *         baz.isValidState()
 *     },
 *     willSet = {
 *         baz.prepareToDoTheThing()
 *     },
 *     didSet = {
 *         baz.doTheThing()
 *     })
 * ```
 *
 * Note that each observation function is optional! So this is just fine:
 *
 * ```
 * var foo: Bar by Observing(Bar(),
 *     willSet = {
 *         baz.doTheThingPreemptively()
 *     })
 * ```
 *
 * @param initialValue The initial value of the property
 * @param shouldSet    `[optional]` - The block which will be called to determine if a value should be changed.
 *                     Returning `false` from this block will cause the value to remain the same and the `willSet` and
 *                     `didSet` blocks to be skipped. *This is a bad place to put code that you simply want to run
 *                     before the value is set!* If you want to run code before the value is set, but which won't
 *                     help decide if it should be set, use `willSet`.
 * @param willSet      `[optional]` - The block which will be called before the value is changed. At this point, nothing
 *                     will stop the value from being changed. If you want to decide whether the value should change,
 *                     use the `shouldSet` block.
 * @param didSet       `[optional]` - The block which will be called after the value has been changed. It is
 *                     nonsensical to modify the value within this block.
 *
 * @author [hotkey on StackOverflow](http://stackoverflow.com/a/39842353/453435)
 */
fun <PropertyType> observing(initialValue: PropertyType,
                             willSet: WillSetBlock<PropertyType> = NullWSB(),
                             shouldSet: ShouldSetBlock<PropertyType> = NullSSB(),
                             didSet: DidSetBlock<PropertyType> = NullDSB()
) = object : ObservableProperty<PropertyType>(initialValue) {
    override fun beforeChange(property: KProperty<*>, oldValue: PropertyType, newValue: PropertyType): Boolean
            = if (shouldSet(oldValue, newValue)) {
        willSet(oldValue, newValue); true
    } else {
        false
    }

    override fun afterChange(property: KProperty<*>, oldValue: PropertyType, newValue: PropertyType)
            = didSet(oldValue, newValue)
}
