package RentSplit

/*
 * Compressed forms of the data structures, for (de)serialization
 *
 * @author Ben Leggiero
 * @since 2017-12-10
 */



interface CompressedDataStructure<out Uncompressed> {
    fun uncompressed(): Uncompressed
}



class CompressedRentSplitState(
        val r: CompressedRentRoommates,
        val e: CompressedRentExpenses
) : CompressedDataStructure<RentSplitState> {

    constructor(rentSplitState: RentSplitState) : this(r = CompressedRentRoommates(rentSplitState.roommates),
                                                       e = CompressedRentExpenses(rentSplitState.expenses))

    override fun uncompressed() = RentSplitState(roommates = r.uncompressed(), expenses = e.uncompressed())
}



class CompressedRentRoommates(
        val r: List<CompressedRentRoommate>
) : CompressedDataStructure<RentRoommates> {

    constructor(rentRoommates: RentRoommates) : this(r = rentRoommates.allRoommates.map { CompressedRentRoommate(it) })

    override fun uncompressed() = RentRoommates(allRoommates = r.map { it.uncompressed() })
}



class CompressedRentRoommate(
        /** The roommate's name */
        val n: String,

        /** The dollar amount of the roommate's monthly income */
        val d: Double,

        /** Indicates whether this roommate can be removed from the list of roommates */
        val x: Boolean,

        /** [currently unused] Indicates whether this roommate can be renamed */
        val r: Boolean
) : CompressedDataStructure<RentRoommate> {
    constructor(rentRoommate: RentRoommate) : this(n = rentRoommate.name,
                                                   d = rentRoommate.monthlyIncome,
                                                   x = rentRoommate.isRemovable,
                                                   r = rentRoommate.isRenamable)


    override fun uncompressed() = RentRoommate(name = n, monthlyIncome = d, isRemovable = x, isRenamable = r)
}



class CompressedRentExpenses(
        val e: List<CompressedRentExpense>
) : CompressedDataStructure<RentExpenses> {

    constructor(rentExpenses: RentExpenses) : this(e = rentExpenses.allExpenses.map { CompressedRentExpense(it) })

    override fun uncompressed() = RentExpenses(allExpenses = e.map { it.uncompressed() })
}



class CompressedRentExpense(
        /** The expense's type (name) */
        val n: String,

        /** The dollar amount of the expense's monthly cost */
        val d: Double,

        /** Indicates whether this expense can be removed from the list of roommates */
        val x: Boolean,

        /** [currently unused] Indicates whether this expense can be renamed */
        val r: Boolean
) : CompressedDataStructure<RentExpense> {

    constructor(rentExpense: RentExpense) : this(n = rentExpense.type,
                                                 d = rentExpense.monthlyCost,
                                                 x = rentExpense.isRemovable,
                                                 r = rentExpense.isRenamable)

    override fun uncompressed() = RentExpense(type = n, monthlyCost = d, isRemovable = x, isRenamable = r)
}
