import React from 'react'
import { Link } from 'gatsby'
import MusicSequencing from '../../assets/Logos/MusicSeq-Logo_200px.png'
import styled from 'styled-components'

// Refactor Home Links to One Component, use props to set the break points and
// the images

//Shows link only on mobile
const HomeLinkLogoStyle = styled.div`
  position: absolute;
  left: 50%;
  @media (min-width: 900px) {
    display: ${props => props.displayBreak || 'default'};
  }
`

const HomeLink = props => {
  return (
    <HomeLinkLogoStyle displayBreak={props.displayBreak}>
      <Link to="/">
        <img
          // style={{
          //   maxWidth: props.width ? props.width : '100%',
          //   margin: props.margin ? props.margin : '0px',
          // }}
          src={MusicSequencing}
          alt="Home Link"
        />
      </Link>
    </HomeLinkLogoStyle>
  )
}

export default HomeLink
