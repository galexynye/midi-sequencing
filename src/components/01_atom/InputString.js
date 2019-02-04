import React, { Component } from 'react'
import styled from 'styled-components'
import { Input } from '../01_atom/Input'
import { msTheme } from '../../styles/Theme'

const InputStringStyle = styled(Input)`  
    padding: 0px;
`

// Input strings WITHOUT a label and border, such as the on the ebook form 

export const InputString = ({ type, border, value, _handleChange, placeholder, bgColor, label, labelText, paddingInput, marginInput, required }) => {
    return (
        <InputStringStyle bgColor={bgColor} border={border} paddingInput={paddingInput} marginInput={marginInput}>
            <label htmlFor={label}>{labelText}</label>
            <input type={type} value={value} name={label} onChange={_handleChange} placeholder={placeholder} id={label} required={required} >
            </input>
        </InputStringStyle>
    )

}
