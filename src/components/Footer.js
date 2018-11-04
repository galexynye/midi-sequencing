import React from 'react'
import Social from './Social'
import { Link } from 'gatsby'
import HomeLink from './HomeLinkLogo'
import styled from 'styled-components'
import MailSignUp from '../components/MailSignUp'

const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  @media (max-width: 600px) {
    justify-content: center;
    > * {
      width: 100%;
      margin-top: 10px;
    }
  }
`

class Footer extends React.Component {
  render() {
    return (
      <div
        style={{
          // width: '600px',
          marginTop: '50px',
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
        }}
      >
        <Info>
          <Social size="1x" />
          <a href="mailto:midisequencingdotcom@gmail.com">Contact</a>
          <Link to="/privacy-policy"> Privacy Policy </Link>
        </Info>
        <div>
          <MailSignUp />
        </div>
        <div
          style={{
            marginTop: '30px',
            maxWidth: '200px',
          }}
        >
          <HomeLink />
        </div>
      </div>
    )
  }
}

export default Footer
