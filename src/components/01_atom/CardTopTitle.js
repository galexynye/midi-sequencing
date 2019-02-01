import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'

const CardTopTitleStyle = styled.h2`
    margin: ${props => props.margin || '10px 0px'};
    color: ${props => props.color || msTheme.colors.text};
    font-size: ${props => props.fontSize || msTheme.fontSize.h2};
     @media screen and (max-width: ${props => props.breakPoint ? props.breakPoint + 'px' : msTheme.breakPoints.medium + 'px'}){
        display: none;
    }
`


export class CardTopTitle extends React.PureComponent {

    render() {
        const { title, color, fontSize, margin, breakPoint } = this.props
        return (
            <CardTopTitleStyle color={color} fontSize={fontSize} margin={margin} breakPoint={breakPoint}>
                {title}
            </CardTopTitleStyle>
        )
    }
}
