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
            max-width: 100%;      
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
  width: ${props => props.width || '93%'};
  max-width: ${props => props.maxWidth || msTheme.widths.wide};
  margin: ${props => props.margin || '0 auto'} ;  
  display: grid;
  grid-template-columns: ${props => props.gTC || '1fr 1fr 1fr'};
  grid-template-rows: ${props => props.gridTemplateRows || 'auto'};
  grid-gap: ${props => props.gridGap || '20px'};
  ${msTheme.mediaquery().large}{
      grid-template-columns: ${props => props.gTCL || '1fr 1fr'};
      grid-gap: ${props => props.gridGapL ? props.gridGapL : props.gridGap ? props.gridGap : '20px'};
  }
  ${msTheme.mediaquery().medium}{
    grid-template-columns: ${props => props.gTCM || '1fr 1fr'};
    margin: ${props => props.marginM ? props.marginM : props.margin ? props.margin : '0 auto'} ;  
    width: ${props => props.width || '95%'};
     grid-gap: ${props => props.gridGapM ? props.gridGapM : props.gridGapL ? props.gridGapL : props.gridGap ? props.gridGap : '20px'};
  }
  ${msTheme.mediaquery().small}{
    grid-template-columns: ${props => props.gTCS || '1fr'};
    margin: ${props => props.marginS ? props.marginS : props.marginM ? props.marginM : props.margin ? props.margin : '0 auto'} ;  
    width: ${props => props.width || '94%'};
    grid-gap: ${props => props.gridGapS ? props.gridGapS : props.gridGapM ? props.gridGapM : props.gridGapL ? props.gridGapL : props.gridGap ? props.gridGap : '20px'};
  }
`


export const GridItem = styled.div`
   
    align-self: ${props => props.alignSelf || 'auto'};
    grid-column-start: ${props => props.gCS || 'auto'};
    grid-column-end: ${props => props.gCE || 'auto'};
    grid-row-start: ${props => props.gRS || 'auto'};
    grid-row-end: ${props => props.gRE || 'auto'}; 
    order: ${props => props.order || 'auto'};    
    ${msTheme.mediaquery().large}{
        grid-column-start: ${props => props.gCSL || props.gCS || 'auto'};
        grid-column-end: ${props => props.gCEL || props.gCE || 'auto'};
        grid-row-start: ${props => props.gRSL || props.gRS || 'auto'};
        grid-row-end: ${props => props.gREL || props.gRE || 'auto'}; 
        order: ${props => props.orderL ? props.orderL : props.order ? props.order : 'auto'};

    }
    ${msTheme.mediaquery().medium}{
        grid-column-start: ${props => props.gCSM || 'auto'};
        grid-column-end: ${props => props.gCEM || 'auto'};
        grid-row-start: ${props => props.gRSM || 'auto'};
        grid-row-end: ${props => props.gREM || 'auto'}; 
        order: ${props => props.orderM ? props.orderM : props.orderL ? props.orderL : props.order ? props.order : 'auto'};

    }
    ${msTheme.mediaquery().small}{
        grid-column-start: ${props => props.gCSS || 'auto'};
        grid-column-end: ${props => props.gCES || 'auto'};
        grid-row-start: ${props => props.gRSS || 'auto'};
        grid-row-end: ${props => props.gRES || 'auto'}; 
        order: ${props => props.orderS ? props.orderS : props.orderM ? props.orderM : props.orderL ? props.orderL : props.order ? props.order : 'auto'};

    }
`


// Padding Wrapper - Default Padding is From the Global THEME.

export const PaddingWrapper = styled.div`        
    padding: ${props => props.padding || `${msTheme.padding.globalVertical} ${msTheme.padding.globalSide}`};    
    ${msTheme.mediaquery().medium}{
        padding: ${props => props.paddingSmall || `${msTheme.padding.globalVerticalSmall} ${msTheme.padding.globalSideSmall}`};        
    }
`

// ResponsivePhoto - takes src as prop and outputs a responsive photo. extended from the WidthWrapper

const ImageWrapper = styled(WidthWrapper)`
    img{
        max-height: ${props => props.maxHeight || 'auto'};
        max-width: 100%;
        border-radius: ${props => props.borderRadius || '0px'};
    }
`

export class ResponsivePhoto extends React.PureComponent {
    render() {
        const { src, borderRadius, maxHeight } = this.props
        return (
            <ImageWrapper borderRadius={borderRadius} maxHeight={maxHeight}>
                <img src={src} />
            </ImageWrapper>
        )
    }
}


// Responsive Iframe - Exactly what it says little man. Wrap an Iframe In it

export const ResponsiveIframe = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: ${props => props.paddingTop || '56.25%'};
/* audio height is so we see the react player controls on chrome */
  audio{
      height: 42px !important;   
      border-radius: 0px !important;  
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${props => props.height || '100%'};
    border: 0;

  }
`