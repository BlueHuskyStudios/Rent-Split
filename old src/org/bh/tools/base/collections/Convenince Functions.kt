package org.bh.tools.base.collections

/*
 * @author Ben Leggiero
 * @since 2018-01-18
 */



/**
 * Returns the index of the first item in this list that matches the given evaluator, or `null` if there is none
 */
fun <Element> List<Element>.indexOfFirstOrNull(evaluator: (Element) -> Boolean) = indexOfFirst(evaluator).let { if (it < 0) null else it}
