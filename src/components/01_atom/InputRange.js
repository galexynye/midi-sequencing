import React from 'react'

export const InputRange = ({ _handleChange, value, label, labelText }) => {
    return (
        <div>
            <label htmlFor={label}>{labelText}</label>
            <input onChange={_handleChange} value={value} name={label} type="range" min="0" max="1" step=".01"></input>
            <p></p>
        </div>
    )
}



