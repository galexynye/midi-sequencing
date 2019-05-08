import React from 'react'
import { WidthWrapper } from '../../00_utilities/Utilities'
import { ButtonCTA } from '../../01_atom/ButtonCTA'
import { msTheme } from '../../../styles/Theme'
import { HomeSection } from './HomeSection';
import { InfoGrid } from '../../03_organism/InfoGrid';


export const FreeForums = () => {
    return (
        <HomeSection>
            <h2 className="center mB40">The Forums 🎚</h2>
            <InfoGrid>
                <div>
                    <h3>Interact</h3>
                    <p>-A New Community of Music Makers. A chance to build a place where improvement is encouraged and happens.</p>
                    <p>-Talk music, gear, and production. </p>
                    <p>-Give and get feedback on your projects.</p>
                </div>
                <div>
                    <h3>Integrated with the Site</h3>
                    <p>The forums are where producers can interact with the site and other producers. Talk about the music you like, post your own music for feedback, find out peoples opinions on gear and techniques.</p>
                </div>
            </InfoGrid>
            <WidthWrapper width="300px" widthSmall="300px" margin="40px auto 0px auto">
                <ButtonCTA href="https://forum.musicsequencing.com/" text="Visit the Forums" bgColor={msTheme.colors.primary} color="white" />
            </WidthWrapper>
        </HomeSection>
    )
}

