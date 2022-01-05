package org.bh.tools.io.net

import org.w3c.dom.url.*

/*
 * @author Ben Leggiero
 * @since 2018-02-25
 */



/**
 * Attempts to create a copy of this URL object. The copy can be safely modified without risk of side-effects on this instance.
 */
fun URL.copy() = URL(this.toString())


/**
 * Attempts to create a deep copy of this URL object.
 */
inline fun URL.deepCopy() = copy()
