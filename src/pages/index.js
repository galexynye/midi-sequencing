import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { msTheme } from '../styles/Theme'


// Components with Content
import { HeroHome } from "../components/04_template/HeroHome";
import { FreeForums } from "../components/04_template/Home/FreeForums";
import { HomeAbout } from '../components/04_template/Home/HomeAbout';
import { RecentPosts } from '../components/03_organism/RecentPosts';
import { LearnCards } from '../components/03_organism/LearnCards';
import { HomeSection } from '../components/04_template/HomeSection';
import { GridContainer } from '../components/00_utilities/Utilities';


// Sets A Main Container Size
const containerSize = msTheme.widths.wide


const Blackback = styled.div`
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`


export default class Home extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <SiteContainer headerPosition="absolute">
        <Helmet
          meta={[{ name: 'description', content: 'Articles, Tutorials, Professional Music Services and a Blog on Music Production' }]}
          title={`${siteTitle}`}
        />

        <HeroHome />



        <RecentPosts></RecentPosts>

        <HomeSection>
          {/* <GridContainer >
            <h3>Learn</h3>
          </GridContainer> */}
          <LearnCards />
        </HomeSection>
        <FreeForums maxWidth={containerSize} color={msTheme.colors.primary} />
        <HomeAbout maxWidth={containerSize} color={msTheme.colors.secondary} />

      </SiteContainer >
    )
  }
}


export const pageQuery = graphql`
  query {
   site {
    siteMetadata {
      title    
    }
  }
  

}
`