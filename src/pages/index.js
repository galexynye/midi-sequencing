import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { msTheme } from '../styles/Theme'


// Components with Content
import { HeroEBookUPWF } from "../components/04_template/HeroEbookUPWF";
import { FreeForums } from "../components/04_template/Home/FreeForums";
import { HomeAbout } from '../components/04_template/Home/HomeAbout';
import { RecentPosts } from '../components/03_organism/RecentPosts';

import { HomeSection } from '../components/04_template/Home/HomeSection';
import { GridContainer, WidthWrapper } from '../components/00_utilities/Utilities';
import { HeroContainer } from '../components/01_atom/HeroContainer'

// Sets A Main Container Size
const containerSize = msTheme.widths.wide
import bgImage2 from '../assets/Backgrounds/dylan-mcleod-faders-black.jpg'
import { HeroCenteredElement } from '../components/01_atom/HeroCenteredElement';
import { PageTitle } from '../components/01_atom/PageTitle';
import { ButtonCTA } from '../components/01_atom/ButtonCTA';
import { HeroMakeBetterMusic } from '../components/04_template/Home/HeroMakeBetterMusic';
import { Philosophy } from '../components/04_template/Home/Philosophy';
import { ResourceLibraryHome } from '../components/04_template/Home/ResourceLibraryHome';
import { NewsLetter } from '../components/04_template/Home/NewsLetter';
import { PopularPosts } from '../components/03_organism/PopularPosts';

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

        <HeroMakeBetterMusic />
        <Philosophy />
        <ResourceLibraryHome />
        <FreeForums />
        <NewsLetter />
        <HomeSection>
          <h2 className="center mB40">Popular Posts 🔥</h2>
          <PopularPosts></PopularPosts>
          <h2 className="center mB40">Latest from Music Sequencing 📰</h2>
          <RecentPosts></RecentPosts>
        </HomeSection>
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