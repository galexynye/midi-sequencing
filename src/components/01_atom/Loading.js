import React from 'react'
import ReactLoading from 'react-loading'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'


export const LoadingStyle = styled.div`
    background-color: 'white';
    padding: 20px;
    display: flex;
    flex-flow: column;
    align-items: center;
    p{
        color: ${props => props.color || msTheme.colors.text};
        font-family: ${msTheme.font.headerFont};
        margin: 0px 0px 10px 0px;
    }
`

export const Loading = ({ text, type, color, textColor }) => {
    return (
        <LoadingStyle color={textColor}>
            <ReactLoading
                type={type ? type : "bars"}
                color={color ? color : msTheme.colors.secondary}
                height={50}
                width={50}
            />
            <p>{text}</p>
        </LoadingStyle>
    )
}


