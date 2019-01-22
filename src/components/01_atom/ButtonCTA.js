import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'

//This will be a functional component

export const ButtonCTAStyle = styled.button`
  margin: 5px 0px;
  border: none;
  border-radius: 15px;
  padding: 10px 25px;
  font-family: ${msTheme.font.headerFont};
  font-size: 17px;
  width: ${props => props.width || ''};
  max-width: 100%;
  color: ${props => props.color || msTheme.colors.text};
  background-color: ${props => props.bgColor || msTheme.colors.greenlight};
  &:hover{
    cursor: pointer;
    background-color: ${msTheme.colors.greenlight};
    text-decoration: underline
  }
  ${msTheme.mediaquery().small}{
    padding: 10px 20px;
  }
`

export class ButtonCTA extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { color, bgColor, _handleClick, text, width } = this.props
    return (
      <ButtonCTAStyle
        onClick={_handleClick}
        color={color}
        bgColor={bgColor}
        width={width}
      >
        {text}
      </ ButtonCTAStyle>
    )
  }
}


