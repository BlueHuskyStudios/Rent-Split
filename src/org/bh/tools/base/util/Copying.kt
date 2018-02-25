package org.bh.tools.base.util

/*
 * @author Ben Leggiero
 * @since 2018-02-24
 */

fun <T> T.deepCopy(): T = JSON.parse(JSON.stringify(this))
