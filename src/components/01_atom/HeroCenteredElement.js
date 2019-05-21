import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'

const HeroCenteredElementStyle = styled.div`
    position: absolute;
    background-color: ${props => props.bgColor || 'none'};
    padding: 10px;
    left: ${props => props.left || '50%'};
    top: ${props => props.top || '50%'};    
    transform: translateX(-50%); 
    ${msTheme.mediaquery().medium}{
        top: ${props => props.topMedium || '20%'};
        h1{            
            font-size: 45px;
            line-height: 45px;
            font-weight: 600;
            
        }
    }
     ${msTheme.mediaquery().smallHeight}{
        top: ${props => props.topSmall || '13%'};
    }
`


export const HeroCenteredElement = ({ children, top, left, topMedium, topSmall, bgColor }) => {
    return (
        <HeroCenteredElementStyle top={top} left={left} topMedium={topMedium} topSmall={topSmall} bgColor={bgColor}>
            {children}
        </HeroCenteredElementStyle>
    )
}


