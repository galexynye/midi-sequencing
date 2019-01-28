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
  background-color: ${props => props.bgColor || 'none'};
  padding: ${props => props.padding || '0px'};
  border-radius: ${props => props.borderRadius || '0px'};
`

export const HomeLinkLogo = ({ padding, bgColor, borderRadius }) => {
  return (
    // <HomeLinkStyle displayMobile={props.displayMobile}>
    <HomeLinkStyle padding={padding} bgColor={bgColor} borderRadius={borderRadius} >
      <Link to="/">
        <img
          src={MusicSequencing}
        // alt="Home Link"
        />
      </Link>
    </HomeLinkStyle>
  )
}


