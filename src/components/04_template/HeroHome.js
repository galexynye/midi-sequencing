import React, { Component } from 'react'
import styled from "styled-components";
import { FormEbook } from "../03_organism/FormEbook";
import { msTheme } from '../../styles/Theme'
import bgImage from '../../assets/Backgrounds/hannah-troupe-faders.jpg'
import bgImage2 from '../../assets/Backgrounds/dylan-mcleod-faders-black.jpg'

const HeroHomeStyle = styled.div`
    background-position: center;
    min-height: 100vh;
    background-image:linear-gradient(rgba(100, 100, 100, 0.8), rgba(0, 0, 0, 0.6)), url(${bgImage2});
    background-size: cover;
    position: relative;
    
`

const HeroHomeElementCenter = styled.div`
    position: absolute;
    left: 50%;
    top: 27%;
    color: white;
/* -webkit-transform: translateX(-50%); */
    transform: translateX(-50%);
    max-width: 90%;
    /* margin: 0px 15px; */
    ${msTheme.mediaquery().medium}{
        top: 20%;
    }
     ${msTheme.mediaquery().smallHeight}{
        top: 13%;
    }
`

const HeroImg = styled.div`
    position: absolute;
    min-height: 100vh;
    top: 0px;
    left: 0px;
    img: {
       display: none;
    }
    /* background-image: url(${bgImage});
    background-size: cover; */

`

export class HeroHome extends Component {
    render() {
        return (
            <HeroHomeStyle>
                <HeroHomeElementCenter>
                    <FormEbook />
                </HeroHomeElementCenter>

            </HeroHomeStyle>
        )
    }
}
