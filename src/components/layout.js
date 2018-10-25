import React from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../scss/App.scss'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import styled from 'styled-components'
import Wrapper from './Wrapper'
import Footer from './Footer'
import MidiSequencingWords from '../assets/WordsLogoTransparent.png'
import ScrollToTop from '../components/ScrollToTop'
import Menu from './Menu/Menu'

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
          <Link
            to={'/'}
            id="top"
          >
            <img 
              style={{
                marginBottom:'0px'
              }}
              src={MidiSequencingWords} alt="Midi Sequencing Home link"/>
          </Link>
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
            id="top"
          >
            Midi Sequencing 
          </Link>
        </SmallHeading>
      )
    }
    return (
      <Wrapper>
        <Menu />
        {header}
        {children}
        <Footer />
        <ScrollToTop scrollStepInPx="60" delayInMs="20"/>
      </Wrapper>
    )
  }
}

export default Template
