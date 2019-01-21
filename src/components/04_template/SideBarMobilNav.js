import React from 'react'
import styled from 'styled-components'
import msTheme from '../../styles/Theme'
// Include the 

const MobileNavStyle = styled.div`
    background-color: blue;
    width: 20px;
    height: 20px;
    display: none;
    ${msTheme.mediaquery().medium}{
        /* display: block; */
    }
`


const MobileNav = (props) => {
    return (
        <MobileNavStyle>
        </MobileNavStyle>
    )
}

export default MobileNav