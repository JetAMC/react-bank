import React, { useState } from 'react'

function RangeInput({ data }) {
    const [value, setValue] = useState(data.defaultValue);

    const showValue = e => setValue(e.target.value);

    return (
        <div className="range-filter">
            <div>
                <h4>{data.title}</h4>
            </div>
            <div className="range-input">
                <label>
                    <p>{data.type}</p>
                    <input type="text" value={value} onChange={showValue} />
                </label>
                <input type="range" min={data.min} max={data.max} step="1" value={value} onChange={showValue} />
            </div>
            <div className="radio-buttons">
                {data.term.map(option => 
                <label className="custom-input">
                    <span>{option} {data.type}</span>
                    <input type="radio" value={option} name={data.radioName} checked={value === option ? true : false} onChange={showValue} />
                </label>
                )}
            </div>
        </div>
    )
}

export default RangeInput