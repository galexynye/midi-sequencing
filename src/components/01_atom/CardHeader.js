import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
import { Link } from 'gatsby'

export const CardHeaderStyle = styled.div`
    /* white-space: nowrap;  */
    /* width: ${props => props.width || '100%'};  */
    /* overflow: hidden;
    text-overflow: ellipsis ; */
    color: ${msTheme.colors.primary};
    display: block;
    font-family: ${msTheme.font.headerFont};
    font-size: 22px;
    margin: 10px 0px;    
	font-weight: 600;
	letter-spacing: -1px;
	line-height: 28px;
    min-height: ${props => props.minHeight || 'auto'};
    a{
       /* color: ${msTheme.colors.primary};  */
       color: ${ props => props.linkColor || msTheme.colors.text};
       text-decoration: none;
       padding: 0px;
    }
    &:hover{
        cursor: pointer; 
        
        a{
            color: ${ props => props.linkColorHover || msTheme.colors.primary};
            text-decoration: none;
        }
            
    }
    ${msTheme.mediaquery().large}{   
        white-space: pre-wrap;       
        width: 100%;
       margin-left:-5px;
    }
    ${msTheme.mediaquery().medium}{
        min-height: ${props => props.minHeightM || 'auto'}
    }
`

export const CardHeader = ({ text, width, minHeight, slug, linkColor, linkColorHover }) => {
    return (
        <CardHeaderStyle
            width={width}
            linkColor={linkColor}
            linkColorHover={linkColorHover}
            minHeight={minHeight}
        >
            <Link to={slug}> {text}</Link>
        </CardHeaderStyle>
    )
}


