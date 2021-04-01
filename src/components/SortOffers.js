import React, { useState } from 'react'

function SortOffers({rateSort}) {
    const [close, setClose] = useState(false);

    function handleClick(event) {
        console.log(event.target.value);
        if (event.target.value === 'percent') {
            rateSort();
        }
    }


    return (
        <div className="sortOffers">
            <button onClick={() => setClose(close => !close)}>Sort</button>
            {close && 
                <div className="startSort">
                    <label>
                        <input type="radio" onChange={handleClick} name="sortOffer" value="percent" />Меньше процент
                    </label>
                    <label>
                        <input type="radio" onChange={handleClick} name="sortOffer" value="credit" />Больше кредит
                    </label>
                    <label>
                        <input type="radio" onChange={handleClick} name="sortOffer" value="firstPayment" />Меньше взнос
                    </label>
                </div>
            }
        </div>
    )
}

export default SortOffers