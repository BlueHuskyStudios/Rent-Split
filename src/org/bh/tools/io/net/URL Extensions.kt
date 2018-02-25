package org.bh.tools.io.net

import org.w3c.dom.url.*

/*
 * @author Ben Leggiero
 * @since 2018-02-25
 */



/**
 * Creates a copy of this URL object. The copy can be safely modified without risk of side-effects on this instance.
 */
fun URL.copy() = URL(this.toString())
inline fun URL.deepCopy() = copy()
