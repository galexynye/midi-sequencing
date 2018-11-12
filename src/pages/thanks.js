import React from 'react'
import Helmet from 'react-helmet'
import HomeLink from '../components/HomeLinks/HomeLinkLogo'
import Footer from '../components/Footer'
import Wrapper from '../components/Wrapper'
import Menu from '../components/Menu/Menu'
import Blurb from '../styled/Blurb'

class Thanks extends React.Component {
  render() {
    return (
      <Wrapper>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          // meta={[{ name: 'description', content: siteDescription }]}
          title={`Privacy | Music Sequencing`}
        />
        <Menu sideNav={true} />
        <HomeLink />
        <Blurb PAlign="center">
          <h1 style={{ marginTop: '10px' }}>Thanks for contacting us :)</h1>
          <p>We will be in touch shortly!</p>
        </Blurb>
        <Footer />
      </Wrapper>
    )
  }
}

export default Thanks
