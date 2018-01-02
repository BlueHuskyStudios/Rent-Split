package RentSplit

/*
 * @author Ben Leggiero
 * @since 2017-12-29
 */



typealias ID = String



private var lastGeneratedId = 0

fun generateNewId(): ID {
    lastGeneratedId += 1
    return lastGeneratedId.toString()
}