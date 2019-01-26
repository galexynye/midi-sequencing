import React from 'react'
import styled from 'styled-components'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { msTheme } from '../styles/Theme'
import { ResponsivePhoto, FlexboxOrganism, WidthWrapper, ContentContainer } from "../components/00_utilities/Utilities";
import { ButtonCTA } from '../components/01_atom/ButtonCTA';


// Components with Content
import { HeroHome } from "../components/04_template/HeroHome";
import { FreeForums } from "../components/04_template/Home/FreeForums";
import { HomeAbout } from '../components/04_template/Home/HomeAbout';
import { RecentPosts } from '../components/03_organism/RecentPosts';


// Sets A Main Container Size
const containerSize = "1100px"


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
                {/* <SiteContainer > */}

                <HeroHome />

                <FreeForums width={containerSize} color={msTheme.colors.primary} />

                <RecentPosts></RecentPosts>

                <HomeAbout width={containerSize} color={msTheme.colors.secondary} />
            </SiteContainer >
        )
    }
}
