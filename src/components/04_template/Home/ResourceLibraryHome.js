import React from 'react'
import { WidthWrapper } from '../../00_utilities/Utilities'
import { ButtonCTA } from '../../01_atom/ButtonCTA'
import { msTheme } from '../../../styles/Theme'
import { HomeSection } from './HomeSection';
import { InfoGrid } from '../../03_organism/InfoGrid';


export const ResourceLibraryHome = () => {
    return (
        <HomeSection>
            <h2 className="center mB40">The Resource Library 📚</h2>
            <InfoGrid>
                <div>
                    <h3>Information is Power </h3>
                    <p>The resource library is a living and growing collection of links to great free plugins, useful tutorials, and other musical information from around the internet.</p>
                    <p>It’s curated to help you find accurate information and new tools when you need them. For example, consider watching a tutorial on mastering right before you master a project, rather than to kill time. Information + Experience = Growth.</p>
                </div>
            </InfoGrid>
            <WidthWrapper width="300px" widthSmall="300px" margin="40px auto 0px auto">
                <ButtonCTA to="/library" text="Visit the Library" bgColor={msTheme.colors.primary} color="white" />
            </WidthWrapper>
        </HomeSection>
    )
}

