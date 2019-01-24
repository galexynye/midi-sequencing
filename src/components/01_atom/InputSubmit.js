import React, { Component } from 'react'
import styled from 'styled-components'
import { Input } from '../01_atom/Input'
// Mostly will want to use the ButtonCTAStyle for this submit
const InputSubmitStyle = styled(Input)`
        &:hover{
            cursor:pointer;
        }
        input{
            &:hover{
                cursor:pointer;
            }
            background-color: #ffffff00;
        }
`

export class InputSubmit extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { value, _handleSubmit, bgColor } = this.props
        return (
            <InputSubmitStyle bgColor={bgColor}>
                <input type="submit" value={value} onSubmit={_handleSubmit}>
                </input>
            </InputSubmitStyle>
        )
    }
}

