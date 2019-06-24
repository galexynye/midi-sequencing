import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import SiteContainer from '../components/05_page/Layout/SiteContainer';
import { PageTitle } from '../components/01_atom/PageTitle'
import { GridContainer, GridItem } from '../components/00_utilities/Utilities';
import { LibraryIndexLinks } from '../components/03_organism/LibraryIndex'
import { library } from '../sitedata/library/librarydata'
import { LibrarySubject } from '../components/04_template/LibrarySubject'

export default class Library extends Component {
    render() {
        const libraryRender = library.map(x => <LibrarySubject subject={x} />)

        return (
            <SiteContainer>
                <Helmet
                    meta={[{ name: 'description', content: 'A curated collection of some of the best free plugins, samples and music tutorials from around the internet.' }]}
                    title={`Music Resource Library | Music Sequencing`}
                />
                <PageTitle title="Music Resource Library" description="A growing document of curated music resources from here and around the web" />
                <GridContainer gTC="1fr" gTCL="1fr" gTCM="1fr">
                    <h2>The Index</h2>
                    <GridContainer gridGap="40px 40px" gTC="1fr 1fr 1fr 1fr" gTCL="1fr 1fr 1fr 1fr" gTCM="1fr 1fr" gTCS="1fr 1fr" margin="0px">
                        {LibraryIndexLinks}
                    </GridContainer>

                    <h2>Resource Suggestions</h2>
                    <p className="headerFont">I love hearing about great free resources! If you have a suggestion for the library you can reach out to me on the <Link to="/contact">contact page</Link>. I’ll check it out and if it’s a good fit, I’ll put it in ASAP.</p>

                    {libraryRender}

                </GridContainer>
            </SiteContainer>
        )
    }
}
