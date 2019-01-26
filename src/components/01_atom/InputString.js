import React, { Component } from 'react'
import styled from 'styled-components'
import { Input } from '../01_atom/Input'
import { msTheme } from '../../styles/Theme'

const InputStringStyle = styled(Input)`    

`


export const InputString = ({ type, value, _handleChange, placeholder, bgColor }) => {
    return (
        <InputStringStyle bgColor={bgColor}>
            <input type={type} value={value} onChange={_handleChange} placeholder={placeholder}  >

            </input>
        </InputStringStyle>
    )

}
