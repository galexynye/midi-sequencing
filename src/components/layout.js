import React from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Footer from './Footer'
import MusicSequencingWords from '../assets/MusicSequencingWordsLogo.png'
import ScrollToTop from '../components/ScrollToTop'
import Menu from './Menu/Menu'
import { injectGlobal } from 'styled-components'

// Global Styling
injectGlobal`
  * {
    font-family: 'Avenir';
    margin: 0px;
    padding: 0px;
  }

  body {
    line-height: 1.6;
  }

  a {
    box-shadow: none;
    color: #700bea;
    text-decoration: none;
  }

  p {
    margin: 15px 0px;
  }

  h1 {
    color: #700bea;
    margin: 15px 0px;
  }

  h2 {
    color: #2c3e50;
    margin: 10px 0px;
  }

  h3 {
    margin: 10px 0px;
    color: #2c3e50;
  }

  .spacedList {
    ul{
      li {
        margin-bottom: 10px;
      }
    }
    ol{
      li{
        margin-bottom: 10px;
      }
    }
  }

  .subList {
    margin: 10px 20px;
    font-size: .85rem;
    a{
      color: #2c62a2;
    }
  }

  .aClearNav{
    padding-top: 60px;
    margin-top: -40px;
  }

  .left {
    text-align: left;
  }

`

const SmallHeading = styled.h3`
            font-family: 'Montserrat', 'sans-serif';
            margin-top: 0px;
            /* margin-bottom: ${rhythm(-1)}; */
            margin-bottom: -40px;
            a {
              color: inherit;
            }
            
`

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <Link to={'/'} id="top">
          <img
            style={{ marginBottom: '0px', display: 'none' }}
            src={MusicSequencingWords}
            alt="Music Sequencing Home link"
          />
        </Link>
      )
    } else {
      header = (
        <SmallHeading>
          {/* <Link to={'/'} id="top">
            Music Sequencing
          </Link> */}
        </SmallHeading>
      )
    }
    return (
      <div>
        <Menu sideNav={true} />
        {header}
        {children}
        <Footer />
        <ScrollToTop scrollStepInPx="60" delayInMs="20" />
      </div>
    )
  }
}

export default Template
