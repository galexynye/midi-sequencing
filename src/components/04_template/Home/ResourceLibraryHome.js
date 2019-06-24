import React from 'react'
import { Link } from 'gatsby'
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
                    <p>The <Link to="/library">resource library</Link> is a living and growing collection of links to great free plugins, useful tutorials, and other musical information from around the internet.</p>
                    <p>It’s curated to help you find accurate information and new tools when you need them. For example, consider watching a tutorial on mastering right before you master a project rather than at random. Information + Experience = Growth.</p>
                </div>
                <div>
                    <h3>Help it Grow</h3>
                    <p>The internet is filled with amazing free resources waiting to be discovered. If you know of something that people can benefit from, <Link to="/contact">please tell me about it</Link></p>
                    <p>By making the resource library a community effort we can create a central hub of the best free resources for learning music.</p>
                </div>
            </InfoGrid>
            <WidthWrapper width="300px" widthSmall="300px" margin="40px auto 0px auto">
                <ButtonCTA to="/library" text="Visit the Library" bgColor={msTheme.colors.primary} color="white" />
            </WidthWrapper>
        </HomeSection>
    )
}

