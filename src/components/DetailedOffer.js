import React from 'react'
import offers from './offers'
import BankNames from '../BankNames.json'
import FeatureWithDescription from './FeatureWithDescription'
import ApartmentType from '../ApartmentType.json'

function DetailedOffer({ match, open }) {
    const currentOfferId = match.params.id;
    const currentOffer = offers.offers.find(offer => offer.offerId === currentOfferId);
    if (!currentOffer) {
        return <div>error</div>
    }

    function handleClick() {
        open(currentOffer)
    }

    return (
        <div className="single-offer">
            <div>
                <h3>{BankNames[currentOffer.bankId]}</h3>
                <span>{ApartmentType[currentOffer.product]}</span>
            </div>
            <div className="offer-rates">
                <div>
                    <span>Ставка</span>
                    <p>{(currentOffer.rate * 100).toFixed(2) + '%'}</p>
                </div>
                <div>
                    <span>Макс. кредит</span>
                    <p>{currentOffer.maxAmount + ' ₽'}</p>
                </div>
                <div>
                    <span>Взнос от</span>
                    <p>{currentOffer.minInitialPayment * 100 + '%'}</p>
                 </div>
            </div>
            <h3 className="feature-list-title">Возможности и преимущества</h3>
            {currentOffer.features.map(feature => <div>{<FeatureWithDescription nameId={feature} />}</div>)}
            <button className="offer-button" onClick={handleClick}>Хочу консультацию</button>
        </div>
    )
}

export default DetailedOffer
