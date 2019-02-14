import React, { Component, PureComponent } from 'react'
import { Link } from 'gatsby'
import { msTheme } from '../../../styles/Theme'
import { ButtonCTA } from "../../01_atom/ButtonCTA"
import { FlexboxOrganism, WidthWrapper, ResponsivePhoto, GridContainer, GridItem } from "../../00_utilities/Utilities"
import { HomeSection } from '../HomeSection'
import Alex from '../../../assets/Lessons/DeskPhoto.jpg'

export const HomeAbout = (props) => {
    return (

        <HomeSection color={props.color}>

            {/* Top Half */}
            {/* <h2>About</h2> */}


            {/* Bottom Half */}

            {/* Bottom Half Left */}
            <GridContainer gTC="1fr 1fr" gridGap="20px 70px" maxWidth={props.maxWidth} >
                <FlexboxOrganism flexFlow="column" alignItems="flex-start">

                    <h3>Welcome</h3>
                    {/* <p>Hi. My name is Alex. That's me there; right arm on the desk; hand looking like it's holding an invisible dildo.</p> */}
                    <p>Hi. My name is Alex. I make music and I made this website.</p>
                    {/* <p>You might be confused...the site seemed professional. Well buddy, I programmed it myself. Took that picture too.</p> */}
                    <p>Half this site is free articles/videos teaching music production.
                                     The other half is a blog; I review music gear and write opinions about other music things.</p>
                    <p>The third half is the <a href="https://forum.musicsequencing.com">forums</a>. Discussions happen there.</p>
                    <p>Also there's the <Link to="/services">Services</Link> page, where you can hire me for music stuff.</p>



                    {/* <FlexboxOrganism> */}
                    <WidthWrapper width="250px" margin="20px 0px 0px 0px" >
                        <ButtonCTA color="white" bgColor={msTheme.colors.primary} text="Tell me more..." to="/about"></ButtonCTA>
                    </WidthWrapper>
                    {/* </FlexboxOrganism> */}

                </FlexboxOrganism>

                <GridItem gRSS="1">
                    <FlexboxOrganism>
                        <ResponsivePhoto src={Alex} borderRadius="0px" />
                    </FlexboxOrganism>
                </GridItem>
            </GridContainer>

        </HomeSection>
    )
}