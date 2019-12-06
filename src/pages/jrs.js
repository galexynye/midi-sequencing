import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import SiteContainer from '../components/05_page/Layout/SiteContainer';
import { PageTitle } from '../components/01_atom/PageTitle'
import { GridContainer, GridItem } from '../components/00_utilities/Utilities';
import { LibraryIndexLinks } from '../components/03_organism/LibraryIndex'
import { library } from '../sitedata/library/librarydata'
import { LibrarySubject } from '../components/04_template/LibrarySubject'
import { ArticleContainer } from '../components/05_page/ArticleContainer';

export default class Library extends Component {
    render() {
        const libraryRender = library.map(x => <LibrarySubject subject={x} />)

        return (
            <SiteContainer>
                <Helmet
                    meta={[{ name: 'description', content: 'A curated collection of some of the best free plugins, samples and music tutorials from around the internet.' }]}
                    title={`Music Resource Library | Music Sequencing`}
                />
                <PageTitle title="Music Production Workshop" description="Resources for the December 7th and 8th Workshop at the Jazz and Rock Schule Freiburg" />
                <ArticleContainer>

                    <GridContainer gTC="1fr" gTCL="1fr" gTCM="1fr">
                        <h2 class="mB20" style={{ marginTop: "20px" }}>Presentation Download as PDF</h2>
                        <p>Download the PDF of the presentation with <a href="https://drive.google.com/file/d/1Zb6Ap_vrBTFBnZNz8THKiZ-50cskcLGx/view?usp=sharing" target="_blank">this link</a>.</p>
                        <h2 class="mB20" style={{ marginTop: "20px" }}>Resource Library</h2>
                        <p>Visit the resource library on this site <Link to="library#free">with this link</Link> to find a list of free DAWs, samples, software synths and other resources.</p>
                        <h2 class="mB20" style={{ marginTop: "20px" }}>Sample Downloads</h2>
                        <p>The download links to the samples we create will be uploaded to this page.</p>



                    </GridContainer>
                </ArticleContainer>
            </SiteContainer>
        )
    }
}
