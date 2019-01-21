import React from 'react'
import styled from 'styled-components'
import NavLinks from '../02_molecule/NavLinks'
import { MainNavLinksData } from '../../sitedata/navdata'
import msTheme from '../../styles/Theme'

// Passes down Main Nav Data 
// Style for grouping the main nav links
const NavStyle = styled.nav`
    ul {
        display:flex;
        margin: 0px;
        padding: 0px;
        list-style-type: none;
        li {
            margin: 0px 45px 0px 0px;
            a{
                font-family: ${msTheme.font.headerFont};     
                &:hover{
                    text-decoration: none;
                    color: ${msTheme.colors.purpledark};
                }   
            }
        ${msTheme.mediaquery().large}{
                margin: 0px 30px 0px 0px;
            }
        }
    }
    ${msTheme.utilities().hideMedium}
    
`


const MainNavLinks = (props) => {
    return (
        <NavStyle>
            <NavLinks links={MainNavLinksData} />
        </NavStyle>
    )
}

export default MainNavLinks