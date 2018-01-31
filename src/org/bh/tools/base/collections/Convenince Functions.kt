package org.bh.tools.base.collections

/*
 * @author Ben Leggiero
 * @since 2018-01-18
 */



fun <Element> List<Element>.indexOfFirstOrNull(evaluator: (Element) -> Boolean) = indexOfFirst(evaluator).let { if (it < 0) null else it}
