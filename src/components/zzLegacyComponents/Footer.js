import React from 'react'
import Social from './Social'
import { Link } from 'gatsby'
import HomeLink from './HomeLinks/HomeLinkLogo'
import styled from 'styled-components'
import MailSignUp from '../components/MailSignUp'

const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* flex-flow: wrap; */
  margin-bottom: 30px;
  p {
    padding: 0px 5px;
  }
  @media (max-width: 600px) {
    justify-content: center;
    > * {
      /* width: 100%; */
      margin-top: 10px;
    }
  }
`

class Footer extends React.Component {
  render() {
    return (
      <div
      // style={{
      //   // width: '600px',
      //   // marginTop: '50px',
      //   display: 'flex',
      //   flexFlow: 'column',
      //   alignItems: 'center',
      // }}
      >
        {/* <Info>
          <Social size="1x" />
          <a href="mailto:midisequencingdotcom@gmail.com">Contact</a>
          
        </Info> */}
        {/* <div>
          <MailSignUp />
        </div> */}
        <div
        // style={{ marginTop: '30px', maxWidth: '200px', marginBottom: '0px' }}
        >
          <HomeLink />
        </div>
        <Info>
          <p>©2018</p>
          <p>||</p>
          <p>
            <Link to="/contact">Contact</Link>
          </p>
          <p>||</p>

          <p>
            <Link to="/privacy-policy"> Privacy Policy </Link>
          </p>
        </Info>
      </div>
    )
  }
}

export default Footer
