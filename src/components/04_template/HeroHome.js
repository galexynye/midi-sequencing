import React, { Component } from 'react'
import styled from "styled-components";
import { FormEbook } from "../03_organism/FormEbook";


const HeroHomeStyle = styled.div``


export class HeroHome extends Component {
    render() {
        return (
            <HeroHomeStyle>
                <FormEbook />
            </HeroHomeStyle>
        )
    }
}
