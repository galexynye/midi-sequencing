import React from 'react'
import styled from 'styled-components'
import { Input } from "../01_atom/Input";
import { WidthWrapper } from "../00_utilities/Utilities";
import { msTheme } from '../../styles/Theme'
import { Link } from 'gatsby'

// If 'href' props is passed button is an anchor link, if 'to' props is passed, it's a is Gatsby Link, otherwise it's a button that will handle a function

export const ButtonCTAStyle = styled.button`
  margin: ${props => props.margin || "0px 0px 15px 0px"};
  padding: ${props => props.padding || msTheme.utilities().inputAndButtonShare.padding};
  border: ${props => props.border || msTheme.utilities().inputAndButtonShare.border};
  border-radius: ${props => props.borderRadius || msTheme.utilities().inputAndButtonShare.borderRadius};
  font-family: ${msTheme.font.headerFont};
  font-size: 19px;
  width: 100%; 
  max-width: 100%;
  color: ${props => props.color || msTheme.colors.text};
  align-self: flex-end;

  background-color: ${props => props.bgColor || 'white'};

  ${msTheme.mediaquery().medium}{
    padding: ${props => props.paddingSmall || msTheme.utilities().inputAndButtonShare.paddingSmall};
    display: ${props => props.displayM || 'inline-block'};
  }
  &:hover{
    text-decoration: none;
    cursor: pointer;
  }

`


export class ButtonCTA extends React.PureComponent {
  constructor(props) {
    super(props)

  }

  render() {
    const { _handleClick, color, bgColor, text, width, margin, padding, href, to, borderRadius, displayM } = this.props

    if (href) {
      return (
        <a href={href}>
          <ButtonCTAStyle bgColor={bgColor} color={color} width={width} margin={margin} padding={padding} borderRadius={borderRadius} displayM={displayM}>
            {text}
          </ButtonCTAStyle>
        </a>
      )
    }
    if (to) {
      return (
        <Link to={to}>
          <ButtonCTAStyle bgColor={bgColor} color={color} width={width} margin={margin} padding={padding} borderRadius={borderRadius} displayM={displayM}>
            {text}
          </ButtonCTAStyle>
        </Link>
      )
    }
    return (
      <ButtonCTAStyle onClick={_handleClick} bgColor={bgColor} color={color} width={width} margin={margin} padding={padding} borderRadius={borderRadius} displayM={displayM}>
        {text}
      </ButtonCTAStyle>
    )
  }
}


