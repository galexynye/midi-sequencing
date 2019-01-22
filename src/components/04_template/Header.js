import React from 'react'
import styled from 'styled-components'
import NavMain from '../03_organism/NavMain'
import HomeLinkLogo from '../01_atom/HomeLinkLogo'
import MobileToggle from '../01_atom/MobileToggle'
import msTheme from '../../styles/Theme'

const HeaderContainer = styled.header`
    margin-left: 20px; 
    ${msTheme.mediaquery().medium}{
        margin: 0px;
    }
`

const HeaderStyle = styled.div`
    position: relative;
    display: flex;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 20px auto;
    ${msTheme.mediaquery().medium}{
        margin: 10px auto;
    }

`

const HomeLinkLogoWrapper = styled.div`
   max-width: 300px;
    /* ${msTheme.utilities().hideMedium} */
     ${msTheme.mediaquery().medium}{
        max-width: 250px;        
        position: absolute;
        left: 50%;
        margin-left: -125px;
    }
`


class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <HeaderContainer>
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