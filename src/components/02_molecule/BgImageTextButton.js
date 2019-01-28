import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { BackgroundImage } from "../01_atom/BackgroundImage";
import { ButtonCTA } from '../01_atom/ButtonCTA'

export class BgImageTextButton extends PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        const { children } = this.props
        return (
            <div>
                <BackgroundImage>
                    {children}
                </BackgroundImage>
                <ButtonCTA bgColor="blue" text="Find out more" />
            </div>
        )
    }
}
