import React, { Component } from 'react'
import styled from "styled-components";
import { WidthWrapper } from '../00_utilities/Utilities'
import { msTheme } from '../../styles/Theme'
import bgImage2 from '../../assets/Backgrounds/blackAndWhiteFaders.jpg'
import { ButtonCTA } from "../01_atom/ButtonCTA";
import { Title } from '../02_molecule/Title'

const HeroHomeStyle = styled.div`
    margin: ${props => props.margin || "0px"};
    background-position: center;
    height: 100vh;
    background-image:linear-gradient(rgba(100, 100, 100, 0.8), rgba(0, 0, 0, 0.6)), url(${bgImage2});    
    background-size: cover;
    position: relative;
    transition: height 1000000s ease;
`

const HeroHomeElementCenter = styled.div`
    position: absolute;
    left: 50%;
    top: 24%;
    color: white;
    p{
        color: white; 
        font-family: ${msTheme.font.headerFont}
    }
    transform: translateX(-50%);
   
    h1{
        color: white;
        margin-bottom: 20px;
        font-size: 80px;
        line-height: 75px;
        text-transform: none;
    }
    /* margin: 0px 15px; */
    ${msTheme.mediaquery().medium}{
        top: 20%;
        h1{
            font-size: 45px;
            line-height: 45px;
            font-weight: 600;
            
        }
    }
     ${msTheme.mediaquery().smallHeight}{
        top: 13%;
    }
`


export class HeroService extends Component {
    render() {
        return (
            <HeroHomeStyle margin={this.props.margin}>
                <HeroHomeElementCenter>
                    <WidthWrapper width="600px">


                        <h1>Professional Music Services</h1>

                        <p className="hideMedium">Producing | Mixing & Mastering | Original Music</p>
                        <WidthWrapper width="350px" margin="0px">
                            <ButtonCTA text="Request a booking" href="#requestBooking" bgColor={msTheme.colors.greenlight} />
                        </WidthWrapper>
                    </WidthWrapper>
                </HeroHomeElementCenter>
            </HeroHomeStyle>
        )
    }
}
