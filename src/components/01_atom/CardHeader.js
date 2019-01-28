import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
import { Link } from 'gatsby'

export const CardHeaderStyle = styled.div`
    white-space: nowrap; 
    width: ${props => props.width || '100%'}; 
    /* width: 300px; */
    overflow: hidden;
    text-overflow: ellipsis ;
    color: ${msTheme.colors.text};
    display: block;
    font-family: ${msTheme.font.headerFont};
    font-size: 22px;
    margin: 10px 0px;    
	font-weight: 600;
	letter-spacing: -1px;
	line-height: 39px;
    a{
       color: ${msTheme.colors.text}; 
       text-decoration: none;
       padding: 0px;
    }
    &:hover{
        cursor: pointer; 
        
        a{
            color: ${msTheme.colors.primary};
            text-decoration: none;
        }
            
    }
    ${msTheme.mediaquery().large}{   
        white-space: pre-wrap;       
        width: 100%;
       margin-left:-5px;
    }
`

export const CardHeader = ({ text, width, slug }) => {
    return (
        <CardHeaderStyle width={width}>
            <Link to={slug}> {text}</Link>
        </CardHeaderStyle>
    )
}


