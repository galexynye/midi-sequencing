import React, { PureComponent } from 'react'
import styled from 'styled-components'

// NOTE: To use a Background Image it needs to be an interpolated string
//EXAMPLE:  <HeroContainer bgImage={`url(${bgImage2})`}></HeroContainer>
// OR: <HeroContainer bgImage={`linear-gradient(rgba(100, 100, 100, 0.8), rgba(0, 0, 0, 0.6)), url(${bgImage2})`}></HeroContainer>
// TODO: Bug: The transition on mobile will stay stuck when going from sideways to straight. Need a event listener


const HeroContainerStyle = styled.div`
    margin: ${props => props.margin || "0px"};
    background-position: center;
    height: 100vh;
    /* background-image:linear-gradient(rgba(100, 100, 100, 0.8), rgba(0, 0, 0, 0.6)), url(${bgImage2});     */
    background-image:${props => props.bgImage || 'none'};    
    background-size: cover;
    position: relative;
    transition: height 1000000s ease;
`

export const HeroContainer = ({ children, bgImage }) => {
    return (
        <HeroContainerStyle bgImage={bgImage}>
            {children}
        </HeroContainerStyle>
    )
}


