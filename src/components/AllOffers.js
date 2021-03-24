import React, { useState } from 'react'
import offers from './offers'
import SingleOffer from './SingleOffer'
import SortOffers from './SortOffers'

function AllOffers(props) {
    const [sort, setSort] = useState(true);

    // stroki po kotorim sort
    // v setsort peredatj sposob sortirovki
    // pri nazhatii na button vijezhaet snizu okno, pri nazhatii "OK" ili vne okna to zakrivaetsja (pri swipe vniz zakrivaetsja, posmtoretj)
    // svjazhitsjua specialist konkretnogo banka

    // https://ru.reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator

    const sortedArr = [...offers.offers];

    sortedArr.sort((a, b) => {
        return a.rate < b.rate ? -1 : 1;
    });

    return(
        <div className="all-offers">
            <SortOffers sort={sort} onChange={setSort} />
            {sortedArr.map(offer => {
                return <SingleOffer offer={offer} />
            })}
        </div>
    )
}

export default AllOffers