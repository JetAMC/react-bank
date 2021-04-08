import React from 'react'
import '../index.css'
import Features from './Features'

const bankObj = {
    'bank-psb': 'ПСБ',
    'bank-gpb': 'ГПБ',
    'bank-vtb': 'ВТБ',
    'bank-raif': 'РАИФ',
    'bank-delta': 'ДЕЛЬТА'
}

function SingleOffer({offer, open}) {
    const product = offer.product === 'NEW' ? 'Новостройка' : 'Старый дом';

    function handleClick() {
        open(offer);
    }
    // console.log(offer);
    return (
        <div>
            <div className="single-offer">
                <div>
                    <h3>{bankObj[offer.bankId]}</h3>
                    <span>{product}</span>
                </div>
                <Features features={offer.features} />
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
                <button onClick={handleClick}>Хочу консультацию</button>
            </div>
        </div>
    )
}

export default SingleOffer