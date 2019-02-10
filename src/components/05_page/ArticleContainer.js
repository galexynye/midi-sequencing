import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'

// Change this to a class component that renders children?

export const ArticleContainer = styled.article`
    position: relative;
    max-width: ${props => props.width || msTheme.widths.article};
    margin: ${props => props.margin || '30px auto 0px auto'};
    padding: ${props => props.padding || msTheme.padding.globalSide};   
    h2{
        margin-top: 40px;
         :first-child{
        margin-top: 10px;
    }
    }
     
    ${msTheme.mediaquery().medium}{
        margin-top: 10px;
        padding-bottom: 10px;
        h1{
            font-size: 45px;
            line-height: 45px;
       
            word-wrap: break-word;
        }
    }   
`

