import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const MobileToggleButton = styled.button`
  margin-left: 10px;
  width: 50px;
  border: none;
  padding: 5px 10px;
  background: none;
  color: #757575;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 900px) {
    display: none;
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
