
import React from 'react'
import styled from 'styled-components'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { msTheme } from '../styles/Theme'
import { HeroService } from '../components/04_template/HeroServices'
import { SimpleCard } from '../components/02_molecule/SimpleCard'
import BgImage from '../assets/Backgrounds/blackAndWhiteFaders.jpg'
import AltBG from '../assets/Backgrounds/dylan-mcleod-faders-black.jpg'
import { GridContainer } from '../components/00_utilities/Utilities'

// Need a top title formula for cards (or just don't use top title for more than a row or two)
// It spits out an array of components, that is a combination of cards and card titles. 
// for example, if there break up is "1fr 1fr 1fr 1fr", it will alternate adding 4 titles to the array, then 4 card components
// it's a function that takes in 2 arrays of the same length and alternates building 1 array.

const servicesCardData = [
    {
        title: "Producing",
        img: BgImage,
        text: "Want to make a recording? We'll go from your vision, concept or song to a completed master recording."
    },
    {
        title: "Mixing & Mastering",
        img: AltBG,
        text: "You send me audio files, I send you back a professional mix or master."
    },
    {
        title: "Original Music",
        img: BgImage,
        text: "Need film or video game music? A song or lyrics? Let me know how you want to collaborate."
    }
]


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
        const servicesCards = servicesCardData.map(service =>
            <SimpleCard
                key={service.title}
                title={service.title}
                img={service.img}
                text={service.text}
                margin="0px"
                width="340px"
                height="400px"
            />
        )
        return (
            <SiteContainer headerPosition="absolute">
                <HeroService />



                <GridContainer gTCM="1fr" margin="40px auto">
                    {/* <CardTopTitle>Producing</CardTopTitle>
                    <CardTopTitle>Mixing and Mastering</CardTopTitle>
                    <CardTopTitle>Original Music</CardTopTitle> */}
                    {servicesCards}
                </GridContainer>


            </SiteContainer>
        )
    }
}

export default Services

