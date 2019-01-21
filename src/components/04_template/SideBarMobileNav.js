import React from 'react'
import styled from 'styled-components'
import msTheme from '../../styles/Theme'
// Include the 

const MobileNavStyle = styled.div`
    background-color: blue;
    width: 150px;
    height: 100vh;
    display: none;
    ${msTheme.mediaquery().medium}{
        position: fixed;
        top: 0;
        display: block;
    }
`


const MobileNav = (props) => {
    if (props.mobileMenuOpen) {
        return (
            <MobileNavStyle>
                <p>hello</p>
            </MobileNavStyle>
        )
    } else
        return (
            <div className="hide">
                <p>hello</p>
            </div>
        )
}

export default MobileNav