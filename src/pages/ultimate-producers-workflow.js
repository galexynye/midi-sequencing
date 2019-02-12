
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { HeroHome } from "../components/04_template/HeroHome";

class Latest extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        return (
            <SiteContainer headerPosition="absolute">
                <Helmet
                    meta={[{ name: 'description', content: `Get a FREE copy of the Ultimate Producer's Workflow eBook while still available` }]}
                    title={`Ultimate Producer's Workflow - eBook | ${siteTitle}`}
                />
                <HeroHome />
            </SiteContainer>
        )
    }
}

export default Latest

export const pageQuery = graphql`
  query {
   site {
    siteMetadata {
      title    
    }
  }
  

}
`