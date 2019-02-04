import React, { Component } from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
import { Input } from '../01_atom/Input'
import { ButtonCTAStyle } from '../01_atom/ButtonCTA'

// Mostly will want to use the ButtonCTAStyle for this submit
const InputSubmitStyle = styled(ButtonCTAStyle)`
        text-align: center;
        &:hover{
            cursor:pointer;
        }
        
        input{            
            /* padding:0px 25%; */
            font-size: 19px;
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

