import React from 'react'
import { HeroContainer } from '../../01_atom/HeroContainer'
import { HeroCenteredElement } from '../../01_atom/HeroCenteredElement'
import { WidthWrapper } from '../../00_utilities/Utilities'
import { ButtonCTA } from '../../01_atom/ButtonCTA'
import { PageTitle } from '../../01_atom/PageTitle'
import { msTheme } from '../../../styles/Theme'

const HeroMakeBetterMusic = () => {
    return (
        <HeroContainer>
            <HeroCenteredElement top="30%">
                <PageTitle title="Make Better Music" margin="0px"></PageTitle>
                <p className="headerFont quote center">“We cannot teach people anything; we can only help them discover it within themselves.”</p>
                <p className="headerFont quote center" style={{ margin: "-30px 0px 40px 0px" }}> - Galileo Galilei</p>
                <WidthWrapper width="300px">
                    <ButtonCTA text="The 10 Project Challenge" to="/projects" bgColor={msTheme.colors.greenlight} border={`1px solid ${msTheme.colors.textlight}`}></ButtonCTA>
                </WidthWrapper>
            </HeroCenteredElement>

        </HeroContainer>
    )
}

export default HeroMakeBetterMusic
