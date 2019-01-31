import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'

export const TitleStyle = styled.div`
    text-align: ${props => props.textAlign || 'center'};
    height: ${props => props.height || 'auto'};
    /* h3 {
        text-align: left;
    } */
`

export const FormMainTitleStyle = styled.h2`
  
    font-size: ${props => props.fontSize || '80px'};
    margin: ${props => props.margin || '0px auto 10px auto'};
    padding: ${props => props.padding || '0px'};
    line-height: ${props => props.lineHeight || '75px'};
    color: ${props => props.color || 'white'};
    ${msTheme.mediaquery().medium}{
        /* width: 500px; */
        max-width: 100%;
    }
    ${msTheme.mediaquery().small}{
        font-size: ${props => props.fontSizeSmall || '35px'};
        line-height: ${props => props.lineHeightSmall || '35px'};
    }
    ${msTheme.mediaquery().smallHeight}{
        width: 100vw;
        font-size: 30px;
        line-height: 30px;
    }
`

export const FormSubTitleStyle = styled.h3`
    font-family: ${msTheme.font.headerFont};
    font-size: 20px;
     margin: 0px auto 20px auto;
    /* max-width: 350px; */
    line-height: 25px;
    ${msTheme.mediaquery().medium}{
        width: 350px;
        max-width: 100%;
    }
      ${msTheme.mediaquery().smallHeight}{
        font-size: 14px;
        line-height: 16px;
    }
    
`

export class Title extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        const { title, titleHeight, subtitle, color, marginTitle, titlePadding, fontSize, fontSizeSmall, lineHeight, lineHeightSmall, } = this.props

        return (
            <TitleStyle height={titleHeight}>
                <FormMainTitleStyle color={color} margin={marginTitle} padding={titlePadding} fontSize={fontSize} fontSizeSmall={fontSizeSmall} lineHeight={lineHeight} lineHeightSmall={lineHeightSmall}>
                    {title}
                </FormMainTitleStyle>
                {subtitle && <FormSubTitleStyle>{subtitle}</FormSubTitleStyle>}
            </TitleStyle>
        )
    }
}
