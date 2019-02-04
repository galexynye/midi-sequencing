import React, { Component } from 'react'
import styled from 'styled-components'
import { Input } from '../01_atom/Input'
import { msTheme } from '../../styles/Theme'

const InputStringStyle = styled(Input)`  
    padding: ${props => props.padding || msTheme.utilities().inputAndButtonShare.padding};
    border: ${props => props.border || msTheme.utilities().inputAndButtonShare.border};
    input{
        width: 100%;
        padding: 0px;
        margin:0px;        
    }
`

// Input strings WITHOUT a label and border, such as the on the ebook form 

export const InputStringNoLabel = ({ type, border, value, _handleChange, placeholder, bgColor, label, labelText, paddingInput, marginInput, required }) => {
    return (
        <InputStringStyle bgColor={bgColor} border={border} paddingInput={paddingInput} marginInput={marginInput}>
            {/* <label htmlFor={label}>{labelText}</label> */}
            <input type={type} value={value} onChange={_handleChange} placeholder={placeholder} name={label} id={label} required={required} >
            </input>
        </InputStringStyle>
    )

}
