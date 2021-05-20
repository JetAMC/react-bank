import React from 'react'
import cn from "classnames"

function RangeInput({ data, value, onChange }) {
    const showValue = e => onChange(e.target.value);

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
                {data.term.map(option => {
                    const checked = value === option;
                    return (
                        <label className={cn("custom-input", checked && "label-active")}>
                            <span>{option} {data.type}</span>
                            <input type="radio" value={option} name={data.radioName} checked={checked} onChange={showValue} />
                        </label>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default RangeInput
