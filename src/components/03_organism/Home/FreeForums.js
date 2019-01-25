import React, { Component, PureComponent } from 'react'
import { msTheme } from '../../../styles/Theme'
import { ButtonCTA } from "../../01_atom/ButtonCTA"
import { FlexboxOrganism, WidthWrapper, ResponsivePhoto, ContentContainer } from "../../00_utilities/Utilities"
// import { WidthWrapper } from "../../00_utilities/WidthWrapper"
// import { ResponsivePhoto } from "../../00_utilities/ResponsivePhoto"

import MsForumsPic from '../../../assets/Temporary/MsForumWhite.png'

export class FreeForums extends PureComponent {
    render() {
        return (
            <ContentContainer width={this.props.width}>
                <h2>Free Forums</h2>
                <FlexboxOrganism>

                    <WidthWrapper width="47%" margin="0px">
                        <ResponsivePhoto img={MsForumsPic} />
                    </WidthWrapper>

                    <WidthWrapper width="13%"></WidthWrapper>

                    <WidthWrapper width="40%" marginSmall="20px 0px">
                        <WidthWrapper>
                            <FlexboxOrganism height="280px" margin="0px 0px 0px 0px" flexFlow="column" alignItems="flex-start" justifyContent="flex-end">
                                <h3>Wanna talk?</h3>
                                <WidthWrapper widthSmall="600px" margin="0px" marginSmall="0px">
                                    <p>Get feedback on your music.</p>
                                    <p>Give feedback to others,
                                    ask questions and comment on articles.</p>
                                    <p>Let's help each other get better.</p>
                                </WidthWrapper>
                                <WidthWrapper width="250px" widthSmall="250px" margin="0px" marginSmall="0px" >
                                    <ButtonCTA text="Check Out the Forums" bgColor={msTheme.colors.primary} color="white" margin="19px 0px 0px 0px"></ButtonCTA>
                                </WidthWrapper>
                            </FlexboxOrganism>
                        </WidthWrapper>
                    </WidthWrapper>

                </FlexboxOrganism>
            </ContentContainer>
        )
    }
}
