import React from 'react'
import styled from 'styled-components'
import { NavMain } from '../03_organism/NavMain'
import { HomeLinkLogo } from '../01_atom/HomeLinkLogo'
import { MobileToggle } from '../01_atom/MobileToggle'
import { msTheme } from '../../styles/Theme'

const HeaderContainer = styled.header`
    /* margin-left: 20px;  */
    position: ${props => props.headerPosition || 'static'};
    /* padding: 0px 15px; */
    background-color: #ffffffce;
    border-bottom: 1px solid ${msTheme.colors.greylight};
    /* border-bottom: 2px solid ${msTheme.colors.text}; */
    width: 100%;
    z-index: 10;
    ${msTheme.mediaquery().medium}{
        margin: 0px;
        /* padding: 0px 15px; */
    }
`

const HeaderStyle = styled.div`
    position: relative;
    display: flex;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    /* max-width: 1200px; */
    margin: 10px auto;
    padding: 0px 10px;
    ${msTheme.mediaquery().medium}{
        margin: 5px auto;
        padding: 0px;
    }

`

const HomeLinkLogoWrapper = styled.div`
   max-width: 250px;
    /* ${msTheme.utilities().hideMedium} */
     ${msTheme.mediaquery().medium}{
        max-width: 250px;        
        position: absolute;
        left: 50%;
        margin-left: -118px;
    }
`


export class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <HeaderContainer headerPosition={this.props.headerPosition}>
                <HeaderStyle>
                    <MobileToggle toggleMobileMenu={this.props.toggleMobileMenu} />
                    <HomeLinkLogoWrapper>
                        <HomeLinkLogo />
                    </HomeLinkLogoWrapper>

                    <NavMain />
                </HeaderStyle>
            </HeaderContainer>
        )
    }
}

export default Header



/*
On Desktop
-Words Logo Homelink
-Nav Organism

On Mobile
-Logo HomoLink
-Hamburger
*/