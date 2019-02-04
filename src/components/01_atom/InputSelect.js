import React, { Component } from 'react'
import styled from 'styled-components'
import { Input } from './Input'
import { msTheme } from '../../styles/Theme'

const InputSelectStyle = styled(Input)`  
    padding: 0px;
    /* textarea{
        font-size: 16px;
        font-family: ${msTheme.font.headerFont};        
    } */
`



export class InputSelect extends React.PureComponent {
    render() {
        const { options, border, value, _handleChange, placeholder, bgColor, label, labelText, paddingInput, marginInput, required } = this.props

        const selectOptions = options.map(o => <option value={o} key={o}>{o}</option>)

        return (
            <InputSelectStyle bgColor={bgColor} border={border} paddingInput={paddingInput} marginInput={marginInput}>
                <label htmlFor={label}>{labelText}</label>
                <select value={value} onChange={_handleChange} placeholder={placeholder} name={label} id={label} required={required}>
                    {selectOptions}
                </select>
            </InputSelectStyle>
        )
    }
}
