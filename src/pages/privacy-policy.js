import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { ArticleContainer } from "../components/05_page/ArticleContainer";
import { PageTitle } from '../components/01_atom/PageTitle'
import { msTheme } from '../styles/Theme'
// import Helmet from 'react-helmet'
// import HomeLink from '../components/HomeLinks/HomeLinkLogo'
// import Footer from '../components/Footer'
// import Wrapper from '../styles/oldCrap/Wrapper'
// import Menu from '../components/MainNavigation/Menu'


class Privacy extends React.PureComponent {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        return (
            <SiteContainer>
                <Helmet
                    meta={[{ name: 'description', content: 'How Music Sequencing collects and uses data' }]}
                    title={`Privacy Policy | ${siteTitle}`}
                />
                <PageTitle text="Privacy Policy"></PageTitle>
                <ArticleContainer margin="0px auto">

                    <p> This privacy policy governs the manner in which Music Sequencing
                      collects, uses, maintains, and discloses the information we collect from
                    users of our website.</p>

                    <h2>Personal identification information</h2>

                    <p> We may collect personal identification information from you in a number
                      of ways, including, but not limited to, when you place an order,
                      subscribe to our newsletter, or fill out a form on our site. We only
                      collect personal identification information when you voluntarily submit
                      such information to us. You may choose to visit our site anonymously. If
                      you choose to opt in to our mailing list, you will receive emails
                      containing information about our company and its products and services.
                      You are free to unsubscribe at any time by following the instructions
                    provided at the bottom of each email.</p>

                    <h2>Non-personal identification information</h2>
                    <p>We may collect non-personal identification information about your
                    computer whenever you interact with our site. Non-personal
                    identification information may include browser name, type of computer,
                    and other technical information to help us understand your means of
                    connection to our site.</p>

                    <h2>Cookies</h2>
                    <p>Cookies are small files that a site or its service provider may place on
                    your computer, enabling websites to recognize your browser and track
                    certain information for user customization or record-keeping purposes.
                    We use cookies to understand and save your user preferences as well as
                    to compile aggregate data about site traffic and visitor interaction so
                    that we can continue to offer a better experience to users of our site.
                    We may contract with third-party service providers to assist us in
                    better understanding our site visitors. These service providers are not
                    permitted to use the information collected on our behalf except to help
                    us conduct and improve our business. Your browser can be customized to
                    disable cookies.</p>

                    <h2>Do we disclose any information to outside parties?</h2>
                    <p>We do not sell, trade, or otherwise transfer to outside parties your
                    personally identifiable information. This does not include trusted third
                    parties who assist us in operating our website, conducting our business,
                    or otherwise complying with the requests of our clients. We may also
                    release your information when it is necessary to comply with government
                    subpoena, enforce site policies, or protect ours or others’ rights,
                    property, or safety.</p>

                    <h2>Third-party links</h2>
                    <p>At our discretion, we may include or offer third-party products or
                    services on our website. These third-party sites have separate and
                    independent privacy policies. We therefore have no responsibility or
                    liability for the content and activities of these linked sites.</p>

                    <h2>California Online Privacy Protection Act compliance</h2>
                    <p>In compliance with the California Online Privacy Protection Act, we will
                    not distribute your personal information to outside parties without your
                    consent. As part of the California Online Privacy Protection Act, all
                    users of our site may make any changes to their information at any time
                    through our Contact page.</p>

                    <h2>Changes to our privacy policy</h2>
                    <p>By using our site, you consent to our privacy policy. Music Sequencing
                                has the discretion to update this privacy policy at any time. You
                                acknowledge and agree that it is your responsibility to return to this
                                page periodically to become aware of any modifications that may have
                                taken place.</p>
                </ArticleContainer>
            </SiteContainer>
        )
    }
}


export default Privacy

export const pageQuery = graphql`
  query {
   site {
    siteMetadata {
      title    
    }
  }
  

}
`