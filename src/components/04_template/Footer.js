import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
import { NavFooter } from '../03_organism/NavFooter'
import { FlexboxOrganism, WidthWrapper, PaddingWrapper } from '../00_utilities/Utilities'
import { HomeLinkLogo } from "../01_atom/HomeLinkLogo"
import { FormEbook } from '../03_organism/FormEbook'
import { Title } from '../02_molecule/Title'
import { BgImageTextButton } from '../02_molecule/BgImageTextButton'
import { BackgroundImage } from "../01_atom/BackgroundImage";
import { ButtonCTA } from '../01_atom/ButtonCTA';

import ForumPic from '../../assets/Temporary/MsForumWhite.png'

export const FooterStyle = styled.footer`
    /* background-color: ${msTheme.colors.text}; */
    background-color: rgb(30,30,30);
    p{        
        color: ${msTheme.colors.textlight};
        font-size: 14px;
        font-family: ${msTheme.font.headerFont}
    }

`

export const Copyright = styled.div``

// The CARDS absolute spaghetti, fucking shit

export const Footer = props => {
    return (
        <FooterStyle>


            <FlexboxOrganism justifyContent="space-around" padding="60px 0px 30px 0px">

                <PaddingWrapper padding="0px 15px">
                    <FlexboxOrganism >
                        <WidthWrapper width="300px" >
                            <FormEbook fontSize="20px" fontSizeSmall="20px" titleHeight="100px" lineHeight="25px" marginTitle="0px 0px 15px 0px" />
                        </WidthWrapper>
                    </FlexboxOrganism>
                </PaddingWrapper>

                <PaddingWrapper padding="0px 15px">
                    <FlexboxOrganism>
                        <FlexboxOrganism height="191px" flexFlow="column" justifyContent="space-between">
                            <Title title="Need a music mentor?" fontSize="20px" fontSizeSmall="20px" lineHeight="25px" marginTitle="0px 0px 15px 0px" padding="0px" />
                            <WidthWrapper width="300px" widthSmall="300px" margin="0px" marginSmall="0px 0px 15px 0px">
                                <p className="noMargin">Learning alone is hard. I offer music lessons over the internet.</p>
                            </WidthWrapper>
                            <FlexboxOrganism>
                                <WidthWrapper width="300px" widthSmall="300px">
                                    <ButtonCTA text="Read About Mentoring" bgColor={msTheme.colors.primary} color="white" />
                                </WidthWrapper>
                            </FlexboxOrganism>
                        </FlexboxOrganism>
                    </FlexboxOrganism>
                </PaddingWrapper>

                <PaddingWrapper padding="0px 15px">
                    <FlexboxOrganism>
                        <FlexboxOrganism height="191px" flexFlow="column" justifyContent="space-between">
                            <Title title="Join the Forums" fontSize="20px" fontSizeSmall="20px" lineHeight="25px" marginTitle="0px 0px 15px 0px" padding="0px" />
                            <a href="https://forum.musicsequencing.com">
                                <BackgroundImage src={ForumPic} width="300px" bgColor="white" widthSmall="300px" height="136px" >
                                </BackgroundImage>
                            </a>
                        </FlexboxOrganism>
                    </FlexboxOrganism>
                </PaddingWrapper>


            </FlexboxOrganism>



            <NavFooter></NavFooter>


            <WidthWrapper width="400px" widthSmall="300px">
                <HomeLinkLogo padding="5px 5px 4px 5px" bgColor='rgb(255,255,255)' borderRadius="0px"></HomeLinkLogo>
            </WidthWrapper>


            <FlexboxOrganism><p class="mT20">©2019 Alex Nye</p></FlexboxOrganism>

        </FooterStyle >
    )
}

