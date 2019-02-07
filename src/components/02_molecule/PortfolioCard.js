
import React, { PureComponent } from 'react'
import styled from 'styled-components'

const PortfolioCardStyle = styled.div`
img {
    display: block;
}

`

export class PortfolioCard extends PureComponent {
    render() {
        const { children } = this.props
        return (
            <PortfolioCardStyle>
                {children}
            </PortfolioCardStyle>
        )
    }
}
