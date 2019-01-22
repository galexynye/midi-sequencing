import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
import { HomeLinkIcon } from '../01_atom/HomeLinkIcon'
import { NavMain } from '../03_organism/NavMain'
// Include the 

const MobileNavContainer = styled.div`
    top: 0;
    display: ${props => props.mobileMenuOpen ? 'block' : 'none'};
    position: relative;
    width: ${msTheme.widths.sidebarMobileMenu};        
    ${msTheme.mediaquery().mediumMin}{
        display: none;
    }
`

const MobileNavStyle = styled.nav`
    /* display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center; */
    
    text-align: center;
    margin: 20px auto;
    /* padding: 20px;  */
`

export const SidebarMobileNav = (props) => {
    return (
        <MobileNavContainer mobileMenuOpen={props.mobileMenuOpen}>
            <MobileNavStyle>
                <HomeLinkIcon height="40px"
                    toggleMobileMenu={props.toggleMobileMenu} //TODO: Doesn't Work need to go programmatically with link
                />
                <NavMain
                    toggleMobileMenu={props.toggleMobileMenu}
                    showSmall={true} flow="column"
                    marginSmall="10px auto"
                />
            </MobileNavStyle>
        </MobileNavContainer>
    )
}

// export default MobileNav