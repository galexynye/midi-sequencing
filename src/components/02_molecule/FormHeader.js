import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'

export const FormHeaderStyle = styled.div`
    text-align: center;
    /* h3 {
        text-align: left;
    } */
`

export const FormTitleStyle = styled.h2`
    font-size: 45px;
    margin: 0px 0px 10px 0px;
    ${msTheme.mediaquery().medium}{
        width: 500px;
        max-width: 100%;
    }
    ${msTheme.mediaquery().small}{
        font-size: 30px;
    }
`

export const FormSubTitleStyle = styled.h3`
    font-family: ${msTheme.font.headerFont};
    font-size: 20px;
    /* max-width: 350px; */
    line-height: 25px;
    ${msTheme.mediaquery().medium}{
        width: 350px;
        max-width: 100%;
    }
`

export const FormHeader = (props) => {
    return (
        <FormHeaderStyle>
            <FormTitleStyle>
                {props.title}
            </FormTitleStyle>
            {props.subtitle && <FormSubTitleStyle>{props.subtitle}</FormSubTitleStyle>}
        </FormHeaderStyle>
    )
}
