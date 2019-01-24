import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
/* INNER WRAPPER IN CONTENT CONTAINER */

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