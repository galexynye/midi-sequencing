import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
import { NavFooter } from '../03_organism/NavFooter'
import { FlexboxOrganism, WidthWrapper, GridContainer, GridItem, PaddingWrapper } from '../00_utilities/Utilities'
import { HomeLinkLogo } from "../01_atom/HomeLinkLogo"


// Delete this comment

export const FooterStyle = styled.footer`
    /* background-color: ${msTheme.colors.text}; */
    margin-top: 20px;
    padding: 20px 0px;
    background-color: rgb(30,30,30);
    p{        
        margin:0px 0px 15px 0px;
        color: ${msTheme.colors.textlight};
        font-size: 14px;
        font-family: ${msTheme.font.headerFont}
    }

`

export const Copyright = styled.div``



export const Footer = props => {
    return (
        <FooterStyle>
            <NavFooter></NavFooter>


            <WidthWrapper width="600px" widthSmall="300px">
                <HomeLinkLogo padding="10px 10px 4px 10px" bgColor="gray" borderRadius="0px"></HomeLinkLogo>
            </WidthWrapper>

            <PaddingWrapper padding="30px 0px 0px 0px">
                <FlexboxOrganism><p >©2020 Alex Nye</p></FlexboxOrganism>
            </PaddingWrapper>

        </FooterStyle >
    )
}





// Old Footer Stuff
{/* <PaddingWrapper padding="0px 0px 20px 0px">
                <GridContainer gTCM="1fr" gridGap="10px 60px">
                    <CardTopTitle title="Ultimate Producer's Workflow" fontSize="20px" color="white" lineHeight="25px" breakPoint={msTheme.breakPoints.large} />
                    <CardTopTitle title="Want to try lessons?" fontSize="20px" color="white" lineHeight="25px" breakPoint={msTheme.breakPoints.large} />
                    <CardTopTitle title="Join the Forums" fontSize="20px" color="white" lineHeight="25px" breakPoint={msTheme.breakPoints.large} />

                    <GridItem gCSL="1" gCEL="3" alignSelf="end">
                        <SimpleCard topTitle="Ultimate Producer's Workflow" imgHeight="0px" topTitleColor="white" topTitleBreakPoint={msTheme.breakPoints.large} >
                            <FormEbook />
                        </SimpleCard>
                    </GridItem>

                    <GridItem alignSelf="end">
                        <SimpleCard imgHeight="0px" topTitle="Want to try lessons?" topTitleColor="white" topTitleBreakPoint={msTheme.breakPoints.large}>
                            <p>Learning alone is hard. I offer music lessons over the internet.</p>
                            <ButtonCTA text="Read About Lessons" to="/learn#lessons" bgColor={msTheme.colors.primary} color="white" />
                        </SimpleCard>
                    </GridItem>

                    <GridItem alignSelf="end">
                        <SimpleCard imgHeight="0px" topTitle="Join the Forums" topTitleColor="white" topTitleBreakPoint={msTheme.breakPoints.large}>

                            <p>Jump in, talk about music, make friends, and everyone learns.</p>
                            <ButtonCTA href="https://forum.musicsequencing.com" text="Go to Forums" bgColor={msTheme.colors.primary} color="white" />

                        </SimpleCard>
                    </GridItem>
                </GridContainer>
            </PaddingWrapper> */}