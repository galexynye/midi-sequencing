import styled from 'styled-components'
import { msTheme } from '../../../styles/Theme'

export const HomeSection = styled.section`
    background-color:  ${props => props.bgColor || 'white'};    
    padding: ${props => props.padding || "90px 0px 90px 0px"};
    /* border-bottom: 2px solid lightgray; */
    h3 {
        font-family: ${msTheme.font.headerFont};
        margin-bottom: 20px;
    } 

    p{
        font-family: ${msTheme.font.headerFont};
        margin-bottom: 20px;        
    }         
  
`