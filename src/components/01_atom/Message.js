import React from 'react'
import styled from 'styled-components'
import { msTheme } from "../../styles/Theme";

export const MessageStyle = styled.div`
    text-align: center;
    h2{
        margin:-5px 0px 5px 0px;
        padding: 0px;
    }
    p{
        font-family: ${msTheme.font.headerFont};
        margin: 5px 0px 10px 0px;
    }
`

export const Message = props => {
    return (
        <MessageStyle>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </MessageStyle>
    )
}


