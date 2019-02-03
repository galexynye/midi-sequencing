
import React from 'react'
import styled from 'styled-components'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { msTheme } from '../styles/Theme'
import { HeroService } from '../components/04_template/HeroServices'
import { ServicesCards } from "../components/03_organism/ServicesCards";





const CardTopTitle = styled.h2`
    margin: 10px 0px;
    ${msTheme.mediaquery().medium}{
        display: none;
    }
`

class Services extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {



        return (
            <SiteContainer headerPosition="absolute">
                <HeroService />
                <ServicesCards />
            </SiteContainer>
        )
    }
}

export default Services

