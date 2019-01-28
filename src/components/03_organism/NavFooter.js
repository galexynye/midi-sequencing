import React from 'react'
import styled from 'styled-components'
import { MainNavLinksData, FooterNavLinksData } from "../../sitedata/navdata";
import { NavLinks } from "../02_molecule/NavLinks";
import { msTheme } from '../../styles/Theme'

const FooterNavData = MainNavLinksData.concat(FooterNavLinksData)

export const NavFooterStyled = styled.div`
    ul{
        display: flex;
        justify-content: center;
        flex-flow: wrap;
        list-style-type: none;
        padding: 0px;
        margin: 0px;
        li{
            font-size: 15px;
            padding: 20px;
            ${msTheme.mediaquery().medium}{
                padding: 10px;
            }
            a{
                /* color:white; */
                color:lightgray; 
                &:hover{
                    color: white;
                }             
            }
        }
    }
`

export const NavFooter = () => {
    return (
        <NavFooterStyled>
            <NavLinks links={FooterNavData} />
        </NavFooterStyled>
    )
}


