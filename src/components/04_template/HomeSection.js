import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'

export const HomeSection = styled.section`
    background-color:  ${props => props.bgColor || 'white'};
    /* padding-bottom: 50px; */
    padding: ${props => props.padding || "90px 0px 90px 0px"};
    /* border-bottom: 1px solid ${msTheme.colors.textlight}; */
    border-bottom: 2px solid lightgray;
    /* h2{
        text-align: center;
        margin-bottom: 40px;  
        font-size: 25px;      
        color : ${msTheme.colors.textlight};
        font-weight: 50;               
       
    }
   */
    h3 {
        font-family: ${msTheme.font.headerFont};
        margin-bottom: 20px;
    } 

    p{
        font-family: ${msTheme.font.headerFont};
        margin-bottom: 20px;
        /* width: 100%; */
        /* text-align: center; */
    }
    
     /* color: ${props => props.color || msTheme.colors.text} */
  
`