import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
import { NavFooter } from '../03_organism/NavFooter'
import { FlexboxOrganism, WidthWrapper, PaddingWrapper } from '../00_utilities/Utilities'
import { HomeLinkLogo } from "../01_atom/HomeLinkLogo"
import { FormEbook } from '../03_organism/FormEbook'
import { FormHeader } from '../02_molecule/FormHeader'
import { BgImageTextButton } from '../02_molecule/BgImageTextButton'
import { ButtonCTA } from '../01_atom/ButtonCTA';

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

export const Footer = props => {
    return (
        <FooterStyle>
            <WidthWrapper width="750px">
                <FlexboxOrganism height="200px" justifyContent="space-around" padding="30px 0px 0px 0px">

                    <PaddingWrapper padding="0px 15px">
                        <FlexboxOrganism >
                            <WidthWrapper width="300px" >
                                <FormEbook fontSize="20px" fontSizeSmall="20px" headerHeight="100px" lineHeight="25px" marginTitle="0px 0px 15px 0px" />
                            </WidthWrapper>
                        </FlexboxOrganism>
                    </PaddingWrapper>

                    <PaddingWrapper padding="0px 15px">
                        <FlexboxOrganism>
                            <FlexboxOrganism height="191px" flexFlow="column" justifyContent="space-between">
                                <FormHeader title="Need a music mentor?" fontSize="20px" fontSizeSmall="20px" lineHeight="25px" marginTitle="0px 0px 15px 0px" padding="0px" />
                                <WidthWrapper width="300px" widthSmall="300px" margin="0px" marginSmall="0px 0px 15px 0px">
                                    <p className="noMargin">Learning alone is hard. I offer music lessons over the internet.</p>
                                </WidthWrapper>
                                <FlexboxOrganism>
                                    <WidthWrapper width="300px" widthSmall="300px">
                                        <ButtonCTA text="Read About Mentoring" bgColor={msTheme.colors.yellow} />
                                    </WidthWrapper>
                                </FlexboxOrganism>
                            </FlexboxOrganism>
                        </FlexboxOrganism>
                    </PaddingWrapper>

                </FlexboxOrganism>
            </WidthWrapper>

            <NavFooter></NavFooter>


            <WidthWrapper width="600px" widthSmall="200px">
                <HomeLinkLogo padding="10px 10px 6px 10px" bgColor='rgb(255,255,255)' borderRadius="7px"></HomeLinkLogo>
            </WidthWrapper>


            <FlexboxOrganism><p class="mT20">©2019 Alex Nye</p></FlexboxOrganism>

        </FooterStyle >
    )
}

