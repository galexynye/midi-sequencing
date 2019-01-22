import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../../styles/Theme'
import Overlay from '../../01_atom/Overlay'
//Moves the entire site around for drop downs, sidebars ect
// This will need to have state as well to move shit around depending on state given 
// to it by the SiteContainer

const MainContainerStyle = styled.div` 
    ${msTheme.mediaquery().medium}{ 
        bottom: 0;
        top: 0;
        left: ${msTheme.widths.sidebarMobileMenu};
        transition: transform 0.2s ease-in-out;
        transform: ${props => props.mobileMenuOpen ? 'translateX(0)' : `translateX(calc(-1 * ${msTheme.widths.sidebarMobileMenu}))`};
    }
    padding: 0px 15px;
    position: ${props => props.mobileMenuOpen ? 'fixed' : 'relative'};
    overflow: ${props => props.mobileMenuOpen ? 'hidden' : 'hidden'};
    box-shadow: ${props => props.mobileMenuOpen ? `5px 10px 6px 5px #700bea` : 'none'};   
    width: ${props => props.mobileMenuOpen ? '100%' : ''};
    ${msTheme.mediaquery().mediumMin}{
        box-shadow: none;
    }
`

export class MainContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { children } = this.props
        return (
            <MainContainerStyle mobileMenuOpen={this.props.mobileMenuOpen}>
                {this.props.mobileMenuOpen && <Overlay minOnly={true} onClick={this.props.toggleMobileMenu} />}
                {children}
            </MainContainerStyle>
        )
    }
}

export default MainContainer