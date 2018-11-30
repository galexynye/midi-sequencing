import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import HomeLink from '../components/HomeLinks/HomeLinkLogo'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer'
import Wrapper from '../components/Wrapper'
import ContactForm from '../components/ContactForm'
import { Link } from 'gatsby'
import Blurb from '../styled/Blurb'

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

      {/* <HomeLink margin="0px 0px 10px 0px" /> */}
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
          Those interested in booking private lessons please indicate the
          time(s) and date(s) you would prefer. See the{' '}
          <Link to="/lessons">lessons page</Link> for more information.
        </p>
      </Blurb>
      <ContactForm subject={true} />
      <Footer />
    </Wrapper>
  )
}

export default Contact
