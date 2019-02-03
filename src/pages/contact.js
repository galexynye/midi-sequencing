import React, { PureComponent } from 'react'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { msTheme } from '../styles/Theme'
import { ArticleContainer } from "../components/05_page/ArticleContainer";
import { GridContainer, WidthWrapper } from "../components/00_utilities/Utilities";
import { PageTitle } from "../components/01_atom/PageTitle";
import { InputString } from "../components/01_atom/InputString";
import { InputSubmit } from '../components/01_atom/InputSubmit'

export default class contact extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            name: '',
            purpose: '',
            message: ''
        }
    }
    render() {
        return (
            <SiteContainer>
                <PageTitle text="Contact" bgColor={msTheme.colors.yellowlight} />

                {/* <GridContainer gTC="1fr"> */}
                <ArticleContainer>
                    <WidthWrapper width="400px" margin="0px" breakPoint={msTheme.breakPoints.small}>
                        <form>
                            <InputString type="email" label="email" labelText="Email*" required={true}></InputString>

                            <InputString type="text" label="name" labelText="Name*" required={true}></InputString>
                            <label for="message">Message</label>
                            <textarea id="message"  ></textarea>
                            <select>
                                <option value="bob">Bob</option>
                                <option value="bob1">Bob1</option>
                                <option value="bob2">Bob2</option>
                                <option value="bob3">Bob3</option>
                            </select>
                            <InputSubmit value="Contact Me" bgColor={msTheme.colors.primary} color="white" />
                        </form>
                    </WidthWrapper>
                </ArticleContainer>
                {/* </GridContainer> */}
            </SiteContainer>
        )
    }
}














































// import React from 'react'
// import Helmet from 'react-helmet'
// import styled from 'styled-components'
// import HomeLink from '../components/HomeLinks/HomeLinkLogo'
// import Menu from '../components/MainNavigation/Menu'
// import Footer from '../components/Footer'
// import Wrapper from '../styles/oldCrap/Wrapper'
// import ContactForm from '../components/ContactForm'
// import { Link } from 'gatsby'
// import Blurb from '../styles/oldCrap/Blurb'


// const HomeLinkWrapper = styled.div`
//   max-width: 500px;
//   margin: auto;
// `

// const Contact = () => {
//   return (
//     <Wrapper>
//       <Helmet
//         htmlAttributes={{ lang: 'en' }}
//         title={
//           `Contact | Music Sequencing` // meta={[{ name: 'description', content: siteDescription }]}
//         }
//       />
//       <Menu sideNav={true} />
//       <HomeLinkWrapper>
//         <HomeLink margin="0px 0px 10px 0px" />
//       </HomeLinkWrapper>
//       <Blurb>
//         <h1>Write Us</h1>
//         <p>
//           If you have any questions or requests we look forward to hearing you!
//           Feel free to email us at{' '}
//           <a href="mailto:contact@musicsequencing.com">
//             contact@musicsequencing.com
//           </a>{' '}
//           or use the contact form below.
//         </p>
//         {/* </p>
//         <p>
//         */}
//         <p>
//           Interested in booking private lessons? Let me know here or checkout the
//           <Link to="/lessons"> lessons page</Link> for more information.
//         </p>
//       </Blurb>
//       <ContactForm subject={true} />
//       <Footer />
//     </Wrapper>
//   )
// }

// export default Contact
