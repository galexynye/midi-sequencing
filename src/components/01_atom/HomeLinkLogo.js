import React from 'react'
import { Link } from 'gatsby'
import MusicSequencing from '../../assets/MusicSequencingWordsLogo.png'
import styled from 'styled-components'

// const HomeLinkStyle = styled.div`
//   @media (max-width: 900px) {
//     display: ${props => props.displayMobile || 'default'};
//   }
// `

const HomeLinkStyle = styled.div`
  img {max-width: 100%;}
`

export const HomeLinkLogo = props => {
  return (
    // <HomeLinkStyle displayMobile={props.displayMobile}>
    <HomeLinkStyle >
      <Link to="/">
        <img
          src={MusicSequencing}
        // alt="Home Link"
        />
      </Link>
    </HomeLinkStyle>
  )
}


