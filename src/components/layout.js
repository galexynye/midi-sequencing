import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import '../scss/App.scss'
import Footer from './Footer'
import MidiSequencingWords from '../assets/WordsLogoTransparent.png'
import Wrapper from './Wrapper'
import styled from 'styled-components'

const SmallHeading = styled.h3`
            font-family: 'Montserrat', 'sans-serif';
            margin-top: 0px;
            margin-bottom: ${rhythm(-1)};
`

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        // <h1
        //   style={{
        //     ...scale(1.5),
        //     marginBottom: rhythm(1.5),
        //     marginTop: 0,
        //   }}
        // >
        
          <Link
            // style={{
            //   boxShadow: 'none',
            //   textDecoration: 'none',
            //   color: 'inherit',
            // }}
            to={'/'}
          >
            {/* Midi Sequencing */}
            <img 
              style={{
                marginBottom:'0px'
              }}
              src={MidiSequencingWords} alt=""/>
          </Link>
        // </h1>
      )
    } else {
      header = (
        <SmallHeading>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Midi Sequencing 
          </Link>
        </SmallHeading>
      )
    }
    return (
      <Wrapper>
        {header}
        {children}
        <Footer />
      </Wrapper>
    )
  }
}

export default Template
