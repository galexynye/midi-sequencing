import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { GridContainer, GridItem } from "../00_utilities/Utilities";
import { SimpleCard } from '../02_molecule/SimpleCard'
import BgImage from '../../assets/Backgrounds/blackAndWhiteFaders.jpg'
import AltBG from '../../assets/Backgrounds/dylan-mcleod-faders-black.jpg'
import ForAllIknow from '../../assets/ServicesPortfolio/ForAllIknowOriginalMusic.png'

const servicesCardData = [
    {
        title: "Producing",
        img: BgImage,
        text: "Want to make a recording? We'll go from your vision, concept or song to a completed master recording."
    },
    {
        title: "Mixing & Mastering",
        img: AltBG,
        text: "Send me audio files, I'll send you back a professional mix or master."
    },
    {
        title: "Original Music",
        img: ForAllIknow,
        text: "Need film or video game music? A song or lyrics? Let me know how you want to collaborate."
    }
]

export class ServicesCards extends PureComponent {
    render() {
        // Creates the Array of Service Cards, renders the 3rd one as bigger at the Large breakpoint
        const servicesCards = servicesCardData.map((service, i) => {
            let serviceCard =
                <SimpleCard
                    key={service.title}
                    img={service.img}
                    margin="0px"
                    justifyContent="flex-start"
                >
                    <h3 className="altHeader">{service.title}</h3>
                    <p>{service.text}</p>
                </SimpleCard>

            if (i == 2) {
                return (
                    <GridItem gCSL="1" gCEL="3" key={service.title + 'gi'}>
                        {serviceCard}
                    </GridItem>

                )
            }
            return serviceCard
        })

        return (
            <div className="mT20 mB40">
                <GridContainer gridGap="0px">
                    <h2 className="mB40 colorPrimary">What I do</h2>
                </GridContainer>
                <GridContainer gTCM="1fr" margin="0px auto" >
                    {servicesCards}
                </GridContainer>
            </div>
        )
    }
}
