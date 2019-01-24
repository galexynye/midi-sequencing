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
    font-size: 80px;
    margin: 0px auto 10px auto;
    line-height: 70px;
    color: white;
    ${msTheme.mediaquery().medium}{
        /* width: 500px; */
        max-width: 100%;
    }
    ${msTheme.mediaquery().small}{
        font-size: 35px;
        line-height: 35px;
    }
    ${msTheme.mediaquery().smallHeight}{
        width: 100vw;
        font-size: 30px;
        line-height: 30px;
    }
`

export const FormSubTitleStyle = styled.h3`
    font-family: ${msTheme.font.headerFont};
    font-size: 20px;
     margin: 0px auto 20px auto;
    /* max-width: 350px; */
    line-height: 25px;
    ${msTheme.mediaquery().medium}{
        width: 350px;
        max-width: 100%;
    }
      ${msTheme.mediaquery().smallHeight}{
        font-size: 14px;
        line-height: 16px;
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
