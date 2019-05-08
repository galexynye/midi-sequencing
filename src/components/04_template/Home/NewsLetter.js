import React from 'react'
import { WidthWrapper } from '../../00_utilities/Utilities'
import { ButtonCTA } from '../../01_atom/ButtonCTA'
import { msTheme } from '../../../styles/Theme'
import { HomeSection } from './HomeSection';
import { InfoGrid } from '../../03_organism/InfoGrid';
import { FormEbook } from '../../03_organism/FormEbook';


export const NewsLetter = () => {
    return (
        <HomeSection>
            <h2 className="center">News Letter + Ebook 📒</h2>
            <p className="center headerFont mB40">(or Just Get the Ebook)</p>
            <InfoGrid>
                <div>
                    <h3>Just Updates, No Spam</h3>
                    <p>Get notified with any major site changes or great news from Music Sequencing. Your email will stay private forever.</p>
                    <p>I’ll send you a copy of “The Ultimate Producer’s Workflow” when you sign up. A quick worthwhile read.</p>
                    <p>If you want the ebook but not the newsletter, go here.</p>
                </div>
                <div>
                    <h3>Get Updates</h3>
                    <FormEbook />
                </div>
            </InfoGrid>
        </HomeSection>
    )
}

