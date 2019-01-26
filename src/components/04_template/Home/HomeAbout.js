import React, { Component, PureComponent } from 'react'
import { Link } from 'gatsby'
import { msTheme } from '../../../styles/Theme'
import { ButtonCTA } from "../../01_atom/ButtonCTA"
import { FlexboxOrganism, WidthWrapper, ResponsivePhoto, ContentContainer } from "../../00_utilities/Utilities"
import { HomeSection } from '../HomeSection'
import Alex from '../../../assets/Lessons/DeskPhoto.jpg'

export const HomeAbout = (props) => {
    return (

        <HomeSection color={props.color}>
            <ContentContainer width={props.width}>
                {/* Top Half */}
                <h2>About</h2>


                {/* Bottom Half */}
                <FlexboxOrganism flexFlow="wrap-reverse">

                    {/* Bottom Half Left */}
                    <WidthWrapper width="44%">
                        <WidthWrapper width="450px" margin="0px" marginSmall="25px 0px 0px 0px" >
                            <h3>Welcome</h3>
                            <p>Hi. My name is Alex. That's me; right arm awkwardly placed on the desk; hand looking like it's holding an invisible dildo.</p>
                            {/* <p>You might be confused...the site seemed professional. Well buddy, I programmed it myself. Took that picture too.</p> */}
                            <p>Half this site is free articles/videos teaching music production. I try to keep that half as factual and professional as possible.
                                     The other half is a blog where I say what I want.</p>
                            <p>The third half is the forums, where anybody can say whatever they want.</p>
                            <p>Also there's the <Link to="/services">Services</Link> section, where you can hire me for music stuff.</p>
                        </WidthWrapper>


                        {/* <FlexboxOrganism> */}
                        <WidthWrapper width="250px" widthSmall="300px" margin="40px 0px 0px 0px" >
                            <ButtonCTA color="white" bgColor={msTheme.colors.secondary} text="Tell me more..." to="/about"></ButtonCTA>
                        </WidthWrapper>
                        {/* </FlexboxOrganism> */}

                        <FlexboxOrganism />
                    </WidthWrapper>


                    {/* Separater */}
                    <WidthWrapper width="4%"></WidthWrapper>

                    {/* Bottom Half Right */}
                    <WidthWrapper width="52%" margin="0px">
                        <ResponsivePhoto src={Alex} borderRadius="0px" />
                    </WidthWrapper>
                </FlexboxOrganism>
            </ContentContainer>
        </HomeSection>
    )
}