import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'

const PageTitleStyle = styled.div`
    margin: ${props => props.margin || "40px 0px 0px 0px"};
    background-color: ${props => props.bgColor || 'none'};
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0px 20px;
    h1{ 
        color: ${props => props.color || msTheme.colors.primary};
        /* max-width: ${msTheme.widths.article}; */
        margin: 0px;
        margin-right: auto;
        margin-left: auto; 
        /* padding: ${msTheme.padding.globalSide};    */
        padding: 20px 0px;   
        word-wrap: break-word;
         font-size: 84px;
        line-height: 86px;

    }
    
    ${msTheme.mediaquery().medium}{
       margin: ${props => props.marginSmall || "10px 0px 0px 0px"};
        h1{
            font-size: 45px;
            line-height: 47px;
             /* margin-bottom: 15px; */
             word-wrap: break-word;
             padding: 20px 0px;
        }
    } 
`


export const PageTitle = ({ text, title, description, bgColor, color, margin }) => {
    return (
        <PageTitleStyle bgColor={bgColor} color={color} margin={margin}>
            <h1>
                {text ? text : ''}
                {title ? title : ''}
            </h1>
            {description && <p className="headerFont mT20">{description}</p>}
        </PageTitleStyle>
    )
}



