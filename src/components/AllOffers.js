import React, { useState } from 'react'
import offers from './offers'
import SingleOffer from './SingleOffer'
import SortOffers from './SortOffers'


function AllOffers(props) {
    const sortedArr = [...offers.offers];
    // sortedArr.sort((a, b) => {
    //     // console.log(a.maxAmount);
    //     return a.rate < b.rate ? -1 : 1;
    // });
    // pri klike na input, pokazatj kakoj input kliknut
    // veshaem oncahge odinakovij u vseh + handlchange funkcija, prinimet event i tam, budet value

    // https://ru.reactjs.org/docs/lifting-state-up.html

    // v zavisimoti ot tipa sort delatj sortirovku

    const [sort, setSort] = useState(null);

    function rateSort() {
        setSort(sortedArr.sort((a, b) => a.rate < b.rate ? -1 : 1));
    }

    // sortedArr.sort((a, b) => a.rate < b.rate ? -1 : 1)

    return(
        <div className="all-offers">
            <SortOffers sort={sort} rateSort={rateSort} />
            {sortedArr.map(offer => {
                return <SingleOffer offer={offer} open={props.open} />
            })}
        </div>
    )
}

export default AllOffers