package org.bh.tools.ui.touch

/**
 * @author Ben Leggiero
 * @since 2018-01-15
 */
object TouchBasics {
    /**
     * Attempts to determine whether touch events are supported on this device.
     */
    fun isTouchSupported(): Boolean {
        return eval("'ontouchstart' in window")        // works on most browsers
                || eval("!!navigator.maxTouchPoints")    // works on IE10/11 and Surface

    }
}

