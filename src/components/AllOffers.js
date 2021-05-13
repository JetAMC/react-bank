import React, { useState } from 'react'
import offers from './offers'
import SingleOffer from './SingleOffer'
import SortOffers from './SortOffers'
import RangeInput from './RangeInput'
import RangeCredit from '../RangeCredit.json'
import RangePayment from '../RangePayment.json'


const comparators = {
    percent: (a, b) => a.rate < b.rate ? -1 : 1,
    credit: (a, b) => a.maxAmount > b.maxAmount ? -1 : 1,
    firstPayment: (a, b) => a.minInitialPayment < b.minInitialPayment ? -1 : 1,
};

function AllOffers(props) {
    // https://ru.reactjs.org/docs/lifting-state-up.html
    // dokumentacija react perepisana na hukah


    const [sort, setSort] = useState('percent');
    const sortedArr = [...offers.offers].sort(comparators[sort]);

    return(
        <div className="main-page">
            <div className="all-offers">
                <SortOffers sort={sort} rateSort={setSort} />
                {sortedArr.map(offer => {
                    return <SingleOffer offer={offer} open={props.open} />
                })}
            </div>
            <div>
                <RangeInput data={RangeCredit} />
                <RangeInput data={RangePayment} />
            </div>
        </div>

    )
}

export default AllOffers