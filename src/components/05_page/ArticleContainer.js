import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'

// Change this to a class component that renders children?

export const ArticleContainer = styled.article`
    /*TODO: Change to variable */
    position: relative;
    max-width: ${props => props.width || msTheme.widths.article};
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto; 
    padding: ${msTheme.padding.globalSide};   
    h2{
        margin-top: 40px;
         :first-child{
        margin-top: 10px;
    }
    }
     
    ${msTheme.mediaquery().medium}{
        margin-top: 10px;
        h1{
            font-size: 45px;
            line-height: 45px;
             margin-bottom: 15px;
             word-wrap: break-word;
        }
    }   
`

