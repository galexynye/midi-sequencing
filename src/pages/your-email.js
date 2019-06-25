import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
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
                    meta={[{ name: 'description', content: 'How Music Sequencing Keeps Your Email Safe' }]}
                    title={`Your Email | ${siteTitle}`}
                />
                <PageTitle text="Your Email" description="Your email will never be sold and will stay private forever."></PageTitle>
                <ArticleContainer margin="0px auto">
                    <h2>Private Forever</h2>
                    <p>Giving your email to get an ebook is strictly between you and me. When you send your email to me, Alex Nye, through Music Sequencing, it will hang out safely encrypted with all the other emails on the list.</p>
                    <h2>How will you use my email?</h2>
                    <p>As of today, June 24th 2019, I have never sent an email to anyone on the list. It's only used to send a download link for my free eBook, "<Link to="/ultimate-producers-workflow">The Ultimate Producer's Workflow</Link>".
                        I plan on making major improvements to the book and after I write a new edition I will be emailing those who got it to let them know.
                    </p>

                    <h2>Is that all?</h2>
                    <p>For now, yes. I do have some products that will be coming out (a massive logic template)...so I'll probably email about it to let people know, if that bothers you, there will be an unsubscribe button.</p>
                    <h2>Questions / Concerns</h2>
                    <p>If you have any questions or concerns you can email alex@musicsequencing.com, use the <Link to="/contact">contact page</Link>  or reach out on instagram @saywellmusic.</p>
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