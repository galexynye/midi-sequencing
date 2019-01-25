import React, { Component } from 'react'
import { msTheme } from '../../../styles/Theme'
import { ButtonCTA } from "../../01_atom/ButtonCTA"
import { FlexboxOrganism } from "../../00_utilities/FlexboxOrganism"
import { WidthWrapper } from "../../00_utilities/WidthWrapper"
import { ResponsivePhoto } from "../../00_utilities/ResponsivePhoto"

import MsForumsPic from '../../../assets/Temporary/MsForumWhite.png'

export class FreeForums extends Component {
    render() {
        return (
            <FlexboxOrganism>

                <WidthWrapper width="47%" margin="0px">
                    <h2>Free Forums</h2>
                    <ResponsivePhoto img={MsForumsPic} />
                </WidthWrapper>

                <WidthWrapper width="13%"></WidthWrapper>

                <WidthWrapper width="40%" marginSmall="20px 0px">
                    <WidthWrapper>
                        <FlexboxOrganism height="400px" margin="0px 0px 0px 0px" flexFlow="column" alignItems="flex-start" justifyContent="flex-end">
                            {/* <FlexboxOrganism> */}
                            {/* <WidthWrapper width="450px" margin="0px" marginSmall="25px 0px 0px 0px" > */}
                            <h3>Wanna talk?</h3>
                            <WidthWrapper width="300px" widthSmall="600px" margin="0px" marginSmall="0px">
                                <p>Get feedback on your music.</p>
                                <p>Give feedback to others,
                                    ask questions and comment on articles.</p>
                                <p>Let's help each other get better.</p>
                            </WidthWrapper>
                            {/* </WidthWrapper> */}
                            <WidthWrapper width="250px" widthSmall="250px" margin="0px" marginSmall="0px" >
                                <ButtonCTA text="Check Out the Forums" bgColor={msTheme.colors.greendark} color="white"></ButtonCTA>
                            </WidthWrapper>
                        </FlexboxOrganism>
                    </WidthWrapper>
                </WidthWrapper>

            </FlexboxOrganism>
        )
    }
}
