import React, { Component } from 'react'
import styled from 'styled-components'
import { Input } from '../01_atom/Input'
import { msTheme } from '../../styles/Theme'

const InputStringStyle = styled(Input)`    

`


export const InputString = ({ type, value, _handleChange, placeholder, bgColor, label, labelText }) => {
    return (
        <InputStringStyle bgColor={bgColor}>
            <label for={label}>{labelText}</label>
            <input type={type} value={value} onChange={_handleChange} placeholder={placeholder} id={label}  >

            </input>

        </InputStringStyle>
    )

}
