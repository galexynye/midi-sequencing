import React, { Component } from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
import { Input } from '../01_atom/Input'

// Mostly will want to use the ButtonCTAStyle for this submit
const InputSubmitStyle = styled(Input)`
text-align: center;
        &:hover{
            cursor:pointer;
        }
        
        input{
            padding: 0px;
            background-color: #ffffff00;
            border: none;
            margin: auto;
            color: ${props => props.color || msTheme.colors.text};
            &:hover{
                cursor:pointer;
            }
        
        }
     
`

export const InputSubmit = ({ value, _handleSubmit, bgColor, color }) => {
    return (
        <InputSubmitStyle
            bgColor={bgColor}
            color={color}
        >
            <input type="submit" value={value} onSubmit={_handleSubmit}>
            </input>
        </InputSubmitStyle>
    )
}

