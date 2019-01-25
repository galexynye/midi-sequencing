import React from 'react'
import styled from 'styled-components'
import { Input } from "../01_atom/Input";

const ButtonCTAStyle = styled(Input)`
    &:hover{
      cursor: pointer;
    } 
`


export const ButtonCTA = ({ _handleClick, color, bgColor, text, width, margin, padding }) => {
  return (
    <ButtonCTAStyle
      onClick={_handleClick}
      as="button"
      color={color}
      bgColor={bgColor}
      width={width}
      margin={margin}
      padding={padding}
    >
      {text}
    </ButtonCTAStyle>
  )
}


