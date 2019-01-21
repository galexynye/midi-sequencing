import React from 'react'
import { Link } from 'gatsby'
import MusicSequencing from '../../assets/Logos/MusicSeq-Logo_200px.png'
import styled from 'styled-components'

// Refactor Home Links to One Component, use props to set the break points and
// the images

//Shows link only on mobile
const HomeLinkLogoStyle = styled.div`
  img {
   height: 33px;
  }
`

const HomeLink = props => {
  return (
    <HomeLinkLogoStyle>
      <Link to="/">
        <img
          src={MusicSequencing}
          alt="Home Link"
        />
      </Link>
    </HomeLinkLogoStyle>
  )
}

export default HomeLink
