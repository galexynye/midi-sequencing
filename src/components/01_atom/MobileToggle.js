import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import msTheme from '../../styles/Theme'

const MobileToggleButton = styled.button`
  border: none;  
  margin: -8px 0px 0px 5px;
  background: none;
  color: #757575;
  &:hover {
    cursor: pointer;
  }
  display: none;
  ${msTheme.mediaquery().medium}{
    display: block;
  }
`

const MobileToggle = props => {
  return (
    <MobileToggleButton onClick={props.toggleMobile}>
      {props.displayMobile && <FontAwesomeIcon icon={faTimes} size="2x" />}
      {!props.displayMobile && <FontAwesomeIcon icon={faBars} size="2x" />}
    </MobileToggleButton>
  )
}

export default MobileToggle
