import React from 'react'
import { Link } from 'gatsby'
import MusicSequencing from '../../assets/MusicSequencingWordsLogo.png'
import styled from 'styled-components'

const HomeLinkStyle = styled.div`
  @media (max-width: 900px) {
    display: ${props => props.displayMobile || 'default'};
  }
`

const HomeLink = props => {
  return (
    <HomeLinkStyle displayMobile={props.displayMobile}>
      <Link to="/">
        <img
          style={{
            maxWidth: props.width ? props.width : '100%',
            margin: props.margin ? props.margin : '0px',
          }}
          src={MusicSequencing}
          alt="Home Link"
        />
      </Link>
    </HomeLinkStyle>
  )
}

export default HomeLink
