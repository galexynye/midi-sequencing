import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'

const PageTitleStyle = styled.div`
    
    background-color: ${props => props.bgColor || 'white'};
   
  
    h1{ 
        color: ${props => props.color || msTheme.colors.text};
        max-width: ${msTheme.widths.article};
        margin: 0px;
        margin-right: auto;
        margin-left: auto; 
        /* padding: ${msTheme.padding.globalSide};    */
        padding: 100px 0px;   
        word-wrap: break-word;

    }
    
    ${msTheme.mediaquery().medium}{
   
        h1{
            font-size: 45px;
            line-height: 45px;
             margin-bottom: 15px;
             word-wrap: break-word;
             padding: 50px;
        }
    } 
`


export const PageTitle = ({ text, bgColor, color }) => {
    return (
        <PageTitleStyle bgColor={bgColor} color={color}>
            <h1>
                {text}
            </h1>
        </PageTitleStyle>
    )
}



