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
                <FlexboxOrganism><p >©2021 Alex Nye</p></FlexboxOrganism>
            </PaddingWrapper>

        </FooterStyle >
    )
}

