import React from 'react'
import styled from 'styled-components'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { msTheme } from '../styles/Theme'


// Components with Content
import { HeroHome } from "../components/04_template/HeroHome";
import { FreeForums } from "../components/04_template/Home/FreeForums";
import { HomeAbout } from '../components/04_template/Home/HomeAbout';
import { RecentPosts } from '../components/03_organism/RecentPosts';


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
    return (
      <SiteContainer headerPosition="absolute">
        {/* <Helmet 
          htmlAttributes={{ lang: 'en' }}
          meta={[
            { name: 'description', content: siteDescription },
            {
              name: 'google-site-verification',
              content: 'ApEgiydr2XV738hMqiDL6JyWjg0Cq5ybbWmQrnDHq9c',
            },
          ]}
          title={siteTitle}
          link={[
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href: `${favicon}`,
            },
          ]}
        /> */}

        <HeroHome />

        <FreeForums maxWidth={containerSize} color={msTheme.colors.primary} />

        <RecentPosts></RecentPosts>

        <HomeAbout maxWidth={containerSize} color={msTheme.colors.secondary} />

      </SiteContainer >
    )
  }
}
