import React, { Component } from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'


// These are common utilities all in one file for ease of import. 




// Width Wrapper - Defaults to width to 100% or whatever it's in, with optional width prop or small width prop

export const WidthWrapper = styled.div`
    width: ${props => props.width || "100%"};
    min-width: 0;
    padding: ${props => props.padding || "0px"};
    max-width: 100%;
    margin: ${props => props.margin || 'auto'};     
     @media screen and (max-width: ${props => props.breakPoint ? props.breakPoint + 'px' : msTheme.breakPoints.medium + 'px'}) {
            width: ${props => props.widthSmall || '100%'};        
            margin: ${ props => props.marginSmall ? props.marginSmall : props.margin ? props.margin : 'auto'};
            padding: ${props => props.paddingSmall || '0px'};
     }
    /* ${msTheme.mediaquery().medium}{
           width: ${props => props.widthSmall || '100%'};        
           margin: ${ props => props.marginSmall ? props.marginSmall : props.margin ? props.margin : 'auto'}
    }    */
`

// Flexbox Organism - A Flexbox with everything centered

export const FlexboxOrganism = styled.div`
    display: flex;
    min-width: 0;
    flex-flow: ${props => props.flexFlow || 'row wrap'};
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};
    padding: ${props => props.padding || '0px'};
    margin: ${props => props.margin || '0px'};
    height: ${props => props.height || 'auto'};
    @media screen and (max-width: ${props => props.breakPoint ? props.breakPoint + 'px' : msTheme.breakPoints.medium + 'px'}) {
        height: ${props => props.heightSmall || '100%'}
    }
`

export const GridContainer = styled.div`
  width: ${props => props.width || '97%'};
  max-width: ${props => props.maxWidth || msTheme.widths.wide};
  margin: ${props => props.margin || '0 auto'} ;  
  display: grid;
  grid-template-columns: ${props => props.gTC || '1fr 1fr 1fr'};
  grid-template-rows: ${props => props.gridTemplateRows || 'auto'};
  grid-gap: ${props => props.gridGap || '20px'};
  ${msTheme.mediaquery().medium}{
    grid-template-columns: ${props => props.gTCM || '1fr 1fr'};
    margin: ${props => props.marginM ? props.marginM : props.margin ? props.margin : '0 auto'} ;  
    width: ${props => props.width || '95%'};
  }
  ${msTheme.mediaquery().small}{
    grid-template-columns: ${props => props.gTCS || '1fr'};
    margin: ${props => props.marginS ? props.marginS : props.marginM ? props.marginM : props.margin ? props.margin : '0 auto'} ;  
    width: ${props => props.width || '94%'};
  }
`


// Padding Wrapper - Default Padding is From the Global THEME. Outer wrapper in the CONTENT CONTAINER (below)

export const PaddingWrapper = styled.div`
    min-width: 0;
    width: ${props => props.width || '100%'};
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
        const { children, width, widthSmall, outerMargin, margin, marginSmall, padding, paddingSmall, } = this.props
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
        const { width, widthSmall, margin, marginSmall, src, borderRadius } = this.props
        return (
            <ImageWrapper width={width} widthSmall={widthSmall} margin={margin} marginSmall={marginSmall} borderRadius={borderRadius}>
                <img src={src} />
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