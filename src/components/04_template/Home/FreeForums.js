import React, { Component, PureComponent } from 'react'
import { msTheme } from '../../../styles/Theme'
import { ButtonCTA } from "../../01_atom/ButtonCTA"
import { FlexboxOrganism, WidthWrapper, ResponsivePhoto, GridContainer } from "../../00_utilities/Utilities"
import { HomeSection } from '../HomeSection'
// import { WidthWrapper } from "../../00_utilities/WidthWrapper"
// import { ResponsivePhoto } from "../../00_utilities/ResponsivePhoto"

import MsForumsPic from '../../../assets/Backgrounds/ForumPic.jpg'

export class FreeForums extends PureComponent {
    render() {
        return (
            <HomeSection color={this.props.color}>

                <GridContainer gTC="1fr 1fr" gridGap="20px 70px" maxWidth={this.props.maxWidth}>


                    <ResponsivePhoto src={MsForumsPic} />

                    <FlexboxOrganism margin="0px 0px 0px 0px" flexFlow="column" alignItems="flex-start">

                        <h3>New Forums!</h3>


                        <p>Get feedback on your music.</p>
                        <p>Ask questions and comment on articles.</p>
                        <p>Talk about music. All for free :)</p>


                        <WidthWrapper width="250px" margin="20px 0px 0px 0px">
                            <ButtonCTA text="Check Out the Forums" buttonType="a" href="https://forum.musicsequencing.com/" bgColor={msTheme.colors.primary} color="white" ></ButtonCTA>
                        </WidthWrapper>
                    </FlexboxOrganism>

                </GridContainer>
            </HomeSection>
        )
    }
}
