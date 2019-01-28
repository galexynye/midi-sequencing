import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
import { NavFooter } from '../03_organism/NavFooter'
import { FlexboxOrganism, WidthWrapper } from '../00_utilities/Utilities'
import { HomeLinkLogo } from "../01_atom/HomeLinkLogo";

export const FooterStyle = styled.footer`
    background-color: ${msTheme.colors.text};
    p{        
        margin-top: 20px;
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
            <WidthWrapper width="300px" widthSmall="200px">
                <HomeLinkLogo padding="10px 10px 6px 10px" bgColor='rgb(255,255,255,.6)' borderRadius="7px"></HomeLinkLogo>
            </WidthWrapper>
            <FlexboxOrganism><p>©2019 Alex Nye</p></FlexboxOrganism>
        </FooterStyle>
    )
}

