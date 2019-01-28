import React, { Component, PureComponent } from 'react'
import { msTheme } from '../../../styles/Theme'
import { ButtonCTA } from "../../01_atom/ButtonCTA"
import { FlexboxOrganism, WidthWrapper, ResponsivePhoto, ContentContainer } from "../../00_utilities/Utilities"
import { HomeSection } from '../HomeSection'
// import { WidthWrapper } from "../../00_utilities/WidthWrapper"
// import { ResponsivePhoto } from "../../00_utilities/ResponsivePhoto"

import MsForumsPic from '../../../assets/Temporary/MsForumWhite.png'

export class FreeForums extends PureComponent {
    render() {
        return (
            <HomeSection color={this.props.color}>
                <ContentContainer width={this.props.width}>
                    {/* Title Area */}
                    {/* <FlexboxOrganism>
                        <WidthWrapper width="50%" margin="0px"> */}
                    <h2>Free Forums</h2>
                    {/* </WidthWrapper> */}
                    {/* <WidthWrapper width="50%"></WidthWrapper>
                    </FlexboxOrganism> */}

                    {/* Bottom Area */}
                    <FlexboxOrganism>

                        {/* Bottm Left */}
                        <WidthWrapper width="47%" margin="0px">
                            <ResponsivePhoto src={MsForumsPic} />
                        </WidthWrapper>

                        {/* Spacer */}
                        <WidthWrapper width="6%"></WidthWrapper>

                        {/* Bottom Right */}
                        <WidthWrapper width="47%" marginSmall="20px 0px">

                            <FlexboxOrganism height="280px" margin="0px 0px 0px 0px" flexFlow="column" alignItems="flex-start" justifyContent="flex-end">

                                <h3>Say hi</h3>

                                <WidthWrapper widthSmall="600px" margin="0px" marginSmall="0px">
                                    <p>Get feedback on your music.</p>
                                    <p>Give feedback to others,
                                    ask questions and comment on articles.</p>
                                    <p>Let's help each other get better.</p>
                                </WidthWrapper>

                                <WidthWrapper width="250px" margin="20px 0px 0px 0px">
                                    <ButtonCTA text="Check Out the Forums" buttonType="a" href="https://forum.musicsequencing.com/" bgColor={msTheme.colors.primary} color="white" ></ButtonCTA>
                                </WidthWrapper>

                            </FlexboxOrganism>
                        </WidthWrapper>

                    </FlexboxOrganism>
                    {/* End Bottom Area */}

                </ContentContainer>
            </HomeSection>
        )
    }
}
