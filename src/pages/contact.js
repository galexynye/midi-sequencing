import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import HomeLink from '../components/HomeLinks/HomeLinkLogo'
import Menu from '../components/MainNavigation/Menu'
import Footer from '../components/Footer'
import Wrapper from '../styles/oldCrap/Wrapper'
import ContactForm from '../components/ContactForm'
import { Link } from 'gatsby'
import Blurb from '../styles/oldCrap/Blurb'


const HomeLinkWrapper = styled.div`
  max-width: 500px;
  margin: auto;
`

const Contact = () => {
  return (
    <Wrapper>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title={
          `Contact | Music Sequencing` // meta={[{ name: 'description', content: siteDescription }]}
        }
      />
      <Menu sideNav={true} />
      <HomeLinkWrapper>
        <HomeLink margin="0px 0px 10px 0px" />
      </HomeLinkWrapper>
      <Blurb>
        <h1>Write Us</h1>
        <p>
          If you have any questions or requests we look forward to hearing you!
          Feel free to email us at{' '}
          <a href="mailto:contact@musicsequencing.com">
            contact@musicsequencing.com
          </a>{' '}
          or use the contact form below.
        </p>
        {/* </p>
        <p>
        */}
        <p>
          Interested in booking private lessons? Let me know here or checkout the
          <Link to="/lessons"> lessons page</Link> for more information.
        </p>
      </Blurb>
      <ContactForm subject={true} />
      <Footer />
    </Wrapper>
  )
}

export default Contact
