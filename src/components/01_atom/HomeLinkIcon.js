import React from 'react'
import { Link, navigate } from 'gatsby'
import MusicSequencing from '../../assets/Logos/MusicSeq-Logo_200px.png'
import styled from 'styled-components'

const HomeLinkLogoStyle = styled.div`
  img {
   height: ${props => props.height ? props.height : '33px'};
   &:hover{
     cursor: pointer;
   }
  }
`

const HomeLink = props => {

  return (
    <HomeLinkLogoStyle height={props.height}>
      <Link to="/" >
        <img
          src={MusicSequencing}
          alt="Home Link"
        />
      </Link>
    </HomeLinkLogoStyle>
  )
}


export default HomeLink

