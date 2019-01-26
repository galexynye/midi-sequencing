import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'

export const CardHeaderStyle = styled.div`
    white-space: nowrap; 
    width: ${props => props.width || '100%'}; 
    /* width: 300px; */
    overflow: hidden;
    text-overflow: ellipsis ;
    color: ${msTheme.colors.text};
    display: block;
    font-family: ${msTheme.font.headerFont};
    font-size: 28px;
    margin: 10px 0px;    
	font-weight: 600;
	letter-spacing: -1px;
	line-height: 39px;
    ${msTheme.mediaquery().large}{   
        white-space: pre-wrap;   
        width: 100%;
    }
`

export const CardHeader = ({ text, width }) => {
    return (
        <CardHeaderStyle width={width}>
            {text}
        </CardHeaderStyle>
    )
}


