import React, { useState } from 'react'

function SortOffers({sort, rateSort}) {
    const [close, setClose] = useState(false);
    function handleClick(event) {
        rateSort(event.target.value);
    }


    return (
        <div className="sortOffers">
            <button onClick={() => setClose(close => !close)}>Sort</button>
            {close && 
                <div className="startSort">
                    <label>
                        <input type="radio" onChange={handleClick} checked={sort === 'percent'} name="sortOffer" value="percent" />Меньше процент
                    </label>
                    <label>
                        <input type="radio" onChange={handleClick} checked={sort === 'credit'} name="sortOffer" value="credit" />Больше кредит
                    </label>
                    <label>
                        <input type="radio" onChange={handleClick} checked={sort === 'firstPayment'} name="sortOffer" value="firstPayment" />Меньше взнос
                    </label>
                </div>
            }
        </div>
    )
}

export default SortOffers

// https://prod.liveshare.vsengsaas.visualstudio.com/join?604F2BF9BBD2C4A2A6B5334804F584278C4F