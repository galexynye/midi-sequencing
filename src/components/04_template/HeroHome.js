import React, { Component } from 'react'
import styled from "styled-components";
import { FormEbook } from "../03_organism/FormEbook";
import { msTheme } from '../../styles/Theme'

const HeroHomeStyle = styled.div`
    z-index: -1;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%; 
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* height: calc(100vh - 60px) ; */
    /* height: 70vh; */
    background-color: lightgray;    
`

const HeroHomeElementCenter = styled.div`
    position: absolute;
    left: 50%;
    top: 30%;
/* -webkit-transform: translateX(-50%); */
    transform: translateX(-50%);
    max-width: 90%;
    /* margin: 0px 15px; */

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
