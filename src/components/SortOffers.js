import React, { useState } from 'react'

function SortOffers(props) {
    const [close, setClose] = useState(false);
    console.log(props.onChange);
    return (
        <div className="sortOffers">
            <button onClick={() => setClose(close => !close)}>Sort</button>
            {close && 
                <div className="startSort">
                    <label>
                        <input type="radio" name="sortOffer" />Меньше процент
                    </label>
                    <label>
                        <input type="radio" name="sortOffer" />Больше кредит
                    </label>
                    <label>
                        <input type="radio" name="sortOffer" />Меньше взнос
                    </label>
                </div>
            }
        </div>
    )
}

export default SortOffers