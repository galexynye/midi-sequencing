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
                {/* <h2>About</h2> */}


                {/* Bottom Half */}
                <FlexboxOrganism flexFlow="wrap-reverse">

                    {/* Bottom Half Left */}
                    <WidthWrapper width="50%">
                        <WidthWrapper width="520px" margin="0px" marginSmall="25px 0px 0px 0px" >
                            <h3>Welcome</h3>
                            <p>Hi. My name is Alex. That's me there; right arm on the desk; hand looking like it's holding an invisible dildo.</p>
                            {/* <p>You might be confused...the site seemed professional. Well buddy, I programmed it myself. Took that picture too.</p> */}
                            <p>Half this site is free articles/videos teaching music production. I try to keep that half factual and professional.
                                     The other half is my blog; more opinions, less teaching.</p>
                            <p>The third half is the <a href="https://forum.musicsequencing.com">forums</a>. Discussions happen there.</p>
                            <p>Also there's the <Link to="/services">Services</Link> page, where you can hire me for music stuff.</p>
                        </WidthWrapper>


                        {/* <FlexboxOrganism> */}
                        <WidthWrapper width="250px" margin="40px 0px 0px 0px" >
                            <ButtonCTA color="white" bgColor={msTheme.colors.primary} text="Tell me more..." to="/about"></ButtonCTA>
                        </WidthWrapper>
                        {/* </FlexboxOrganism> */}

                        <FlexboxOrganism />
                    </WidthWrapper>


                    {/* Separater */}
                    {/* <WidthWrapper width="2%"></WidthWrapper> */}

                    {/* Bottom Half Right */}
                    <WidthWrapper width="50%" margin="0px">
                        <ResponsivePhoto src={Alex} borderRadius="0px" />
                    </WidthWrapper>
                </FlexboxOrganism>
            </ContentContainer>
        </HomeSection>
    )
}