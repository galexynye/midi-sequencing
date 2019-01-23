import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
import { Input } from "../01_atom/Input";

const ButtonCTAStyle = styled(Input)`
  padding: 0px;
  border: none;
  button {
    width: 100%;    
    padding: ${props => props.padding || msTheme.utilities().inputAndButtonShare.padding};
    /* ${msTheme.utilities().inputAndButtonShare.padding} See Input.js for why padding is done this way */
    color: ${props => props.color || msTheme.colors.text};
    font-size: 19px;
    border: ${props => props.border || msTheme.utilities().inputAndButtonShare.border};
    border-radius: ${props => props.borderRadius || msTheme.utilities().inputAndButtonShare.borderRadius};
    background-color: ${props => props.bgColor || 'white'};
    &:hover{
      cursor: pointer;
      /* background-color: ${msTheme.colors.greenlight}; */
      /* text-decoration: underline */
    } 
    ${msTheme.mediaquery().medium}{
      padding: ${props => props.paddingSmall || msTheme.utilities().inputAndButtonShare.paddingSmall}
    }
  }
`


export class ButtonCTA extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { color, bgColor, _handleClick, text, width } = this.props
    return (
      <ButtonCTAStyle color={color} bgColor={bgColor} width={width} >
        <button onClick={_handleClick}>
          {text}
        </ button>
      </ButtonCTAStyle>
    )
  }
}


