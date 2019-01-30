
import React from 'react'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { HeroHome } from "../components/04_template/HeroHome";

class Latest extends React.Component {
    render() {
        return (
            <SiteContainer headerPosition="absolute">
                <HeroHome />
            </SiteContainer>
        )
    }
}

export default Latest

