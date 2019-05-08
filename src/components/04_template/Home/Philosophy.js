import React from 'react'
import { WidthWrapper } from '../../00_utilities/Utilities'
import { ButtonCTA } from '../../01_atom/ButtonCTA'
import { msTheme } from '../../../styles/Theme'
import { HomeSection } from './HomeSection';
import { InfoGrid } from '../../03_organism/InfoGrid';


export const Philosophy = () => {
    return (
        <HomeSection>
            <h2 className="center mB40">The Philosophy Around Here</h2>
            <InfoGrid>
                <div>
                    <h3>Make more music 🎧 </h3>
                    <p>Real growth as music maker, the deep inner growth that sticks, comes from experience.</p>
                    <p>This goal of this site and the companion forums are to encourage you to make more music and grow from feedback on your projects.</p>
                </div>
                <div>
                    <h3>Community of Music People 🌎</h3>
                    <p>Ever hear that you are a combination of the 5 people you spend the most time with? Spend online time with people with similar goals. Encourage each other to keep creating and grow.</p>
                </div>
                <div>
                    <h3>Projects for Growth 🎹</h3>
                    <p>The idea is simple. There are 10 project descriptions to do that will make you a better music maker. Start by doing one and post it on the forum for feedback. Give feedback to someone while your there, get better, repeat.</p>
                </div>
                <div>
                    <h3>Give and Take 🌿</h3>
                    <p>Giving feedback to someone else not only helps them but helps your own critical listening skills; a vital ability for creating music.</p>
                </div>
            </InfoGrid>
            <WidthWrapper width="300px" widthSmall="300px" margin="40px auto 0px auto">
                <ButtonCTA to="/about" text="Read More" bgColor={msTheme.colors.primary} color="white" />
            </WidthWrapper>
        </HomeSection>
    )
}

