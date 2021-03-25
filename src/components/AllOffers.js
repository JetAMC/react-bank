import React, { useState } from 'react'
import offers from './offers'
import SingleOffer from './SingleOffer'
import SortOffers from './SortOffers'


function AllOffers(props) {
    const sortedArr = [...offers.offers];
    sortedArr.sort((a, b) => {
        // console.log(a.maxAmount);
        return a.rate < b.rate ? -1 : 1;
    });
    // pri klike na inoput, pokazatj kakoj input kliknut
    // veshaem value
    //veshaem oncahge odinakovij u vseh + handlchange funkcija, prinimet event i tam, budert value

    // https://ru.reactjs.org/docs/lifting-state-up.html
    const [sort, setSort] = useState(false);

    // v zavisimoti ot tipa sort delatj sortirovku

    return(
        <div className="all-offers">
            <SortOffers sort={sort} onChange={setSort} />
            {sortedArr.map(offer => {
                return <SingleOffer offer={offer} open={props.open} />
            })}
        </div>
    )
}

export default AllOffers