import React from 'react'
import styled from 'styled-components'
import { NavLinks } from '../02_molecule/NavLinks'
import { MainNavLinksData } from '../../sitedata/navdata'
import { msTheme } from '../../styles/Theme'

// Passes down Main Nav Data 
// Style for grouping the main nav links
const NavStyle = styled.nav`
    ul {
        display:flex;
        flex-flow: ${props => props.flow ? props.flow : 'row'};
        justify-content: flex-end;
        margin: ${props => props.margin || '0px'};
        padding: 0px;
        list-style-type: none;
        li {
            margin: ${props => props.margin ? props.margin : '0px 0px 0px 45px'};        
            ${msTheme.mediaquery().large}{
                    margin: ${props => props.marginSmall ? props.marginSmall : '0px 0px 0px 35px'};
                }
        }
  
    }
    ${msTheme.mediaquery().medium}{
        display: ${props => props.showSmall ? 'block' : 'none'};
    }
    
`


export const NavMain = (props) => {
    return (
        <NavStyle flow={props.flow} margin={props.linksMargin} marginSmall={props.marginSmall} showSmall={props.showSmall}>
            <NavLinks altStyleAllowed={true} links={MainNavLinksData} toggleMobileMenu={props.toggleMobileMenu} />
        </NavStyle>
    )
}

// export default MainNavLinks