import React from 'react'
import styled from 'styled-components'
import { msTheme } from "../../styles/Theme";

export const MessageStyle = styled.div`
    text-align: center;
    
    h2{
        margin:-5px 0px 0px 0px;
        padding: 0px;
        color: ${props => props.colorHeader || msTheme.colors.text};
    }
    p{
        font-family: ${msTheme.font.headerFont};
        color: ${props => props.colorMessage || msTheme.colors.text};
        margin: 5px 0px 10px 0px;
    }
`

export const Message = props => {
    return (
        <MessageStyle colorHeader={props.colorHeader} colorMessage={props.colorMessage}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </MessageStyle>
    )
}


