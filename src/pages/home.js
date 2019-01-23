import React from 'react'
import SiteContainer from '../components/05_page/Layout/SiteContainer'

import { HeroHome } from "../components/04_template/HeroHome";

class Home extends React.Component {
    render() {
        return (
            <SiteContainer>
                <HeroHome />

            </SiteContainer>
        )
    }
}

export default Home

