import React, { Component } from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'


// These are common utilities all in one file for ease of import. 




// Width Wrapper - Defaults to width to 100% or whatever it's in, with optional width prop or small width prop

export const WidthWrapper = styled.div`
    /* position: relative; */
    width: ${props => props.width || "100%"};
    padding: ${props => props.padding || "0px"};
    max-width: 100%;
    margin: ${props => props.margin || 'auto'}; 
    ${msTheme.mediaquery().medium}{
           width: ${props => props.widthSmall || '100%'};
           margin: ${props => props.marginSmall || 'auto'}
    }   
`

// Flexbox Organism - Default flex box with everything centered

export const FlexboxOrganism = styled.div`
    display: flex;
    flex-flow: ${props => props.flexFlow || 'row wrap'};
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};
    padding: ${props => props.padding || '0px'};
    margin: ${props => props.margin || '0px'};
    height: ${props => props.height || '100%'};
    ${msTheme.mediaquery().medium}{
        height: ${props => props.heightSmall || '100%'}
    }
`


// Padding Wrapper - Default Padding is From the Global THEME. Outer wrapper in the CONTENT CONTAINER (below)

export const PaddingWrapper = styled.div`
    padding: ${props => props.padding || `${msTheme.padding.globalVertical} ${msTheme.padding.globalSide}`};
    margin: ${props => props.margin || '0px'};
    ${msTheme.mediaquery().medium}{
        padding: ${props => props.paddingSmall || `${msTheme.padding.globalVerticalSmall} ${msTheme.padding.globalSideSmall}`};
        margin: ${props => props.marginSmall || '0px'};
    }
`


// Content Container - Used to set the padding for the page

export class ContentContainer extends React.PureComponent {
    render() {
        const { children, width, widthSmall, outerMargin, margin, marginSmall, padding, paddingSmall } = this.props
        return (
            <PaddingWrapper margin={outerMargin} marginSmall={marginSmall} padding={padding} paddingSmall={paddingSmall} >
                <WidthWrapper width={width} widthSmall={widthSmall} margin={margin}>
                    {children}
                </WidthWrapper>
            </PaddingWrapper>
        )
    }
}


// ResponsivePhoto - takes src as prop and outputs a responsive photo. extended from the WidthWrapper

const ImageWrapper = styled(WidthWrapper)`
    img{
        max-width: 100%;
        border-radius: ${props => props.borderRadius || '0px'};
    }
`

export class ResponsivePhoto extends React.PureComponent {
    render() {
        const { width, widthSmall, margin, marginSmall, img, borderRadius } = this.props
        return (
            <ImageWrapper width={width} widthSmall={widthSmall} margin={margin} marginSmall={marginSmall} borderRadius={borderRadius}>
                <img src={img} />
            </ImageWrapper>
        )
    }
}


// Responsive Iframe - Exactly what it says little man. Wrap an Iframe In it

export const ResponsiveIframe = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`