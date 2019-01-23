import React, { Component } from 'react'
import styled from 'styled-components'
import { Input } from '../01_atom/Input'

const InputStringStyle = styled(Input)`
    /* background-color: blue; */
 
`


export class InputString extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const { type, value, _handleChange, placeholder, bgColor } = this.props;
        return (
            <InputStringStyle bgColor={bgColor}>
                <input type={type} value={value} onChange={_handleChange} placeholder={placeholder}  >

                </input>
            </InputStringStyle>
        )
    }
}
