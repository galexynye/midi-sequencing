import React, { PureComponent } from 'react'
import styled from 'styled-components'

const FixedOverlayStyle = styled.div`
    position:fixed;
    top:0;
    left:0;
    min-width: 100vw;
    min-height: 100vh;
    overflow-x: none;
    overflow-y: none;
    background-color: white;
`

export class FixedOverlay extends PureComponent {
    render() {
        const { children } = this.props
        return (
            <FixedOverlayStyle>
                {children}
            </FixedOverlayStyle>
        )
    }
}
