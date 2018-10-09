import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import '../scss/App.scss'
import Footer from './Footer'
import MidiSequencingWords from '../assets/WordsLogoTransparent.png'


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
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
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
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(27),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
        <Footer />
      </div>
    )
  }
}

export default Template
