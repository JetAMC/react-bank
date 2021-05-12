import React from 'react'
import '../index.css'
import Features from './Features'
import BankNames from '../BankNames.json'
import ApartmentType from '../ApartmentType.json'

function SingleOffer({offer, open}) {
    function handleClick() {
        open(offer);
    }
    return (
        <div>
            <div className="single-offer">
                <div>
                    <h3>{BankNames[offer.bankId]}</h3>
                    <span>{ApartmentType[offer.product]}</span>
                </div>
                <Features id={offer.offerId} features={offer.features} />
                <div className="offer-rates">
                    <div>
                        <span>Ставка</span>
                        <p>{(offer.rate * 100).toFixed(2) + '%'}</p>
                    </div>
                    <div>
                        <span>Макс. кредит</span>
                        <p>{offer.maxAmount + ' ₽'}</p>
                    </div>
                    <div>
                        <span>Взнос от</span>
                        <p>{offer.minInitialPayment * 100 + '%'}</p>
                    </div>
                </div>
                <button className="offer-button" onClick={handleClick}>Хочу консультацию</button>
            </div>
        </div>
    )
}

export default SingleOffer