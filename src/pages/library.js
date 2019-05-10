import React, { Component } from 'react'
import Helmet from 'react-helmet'
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
                <PageTitle title="Music Resource Library" description="A growing document of curated music resources from here and around the web" />
                <GridContainer gTC="1fr" gTCL="1fr" gTCM="1fr">
                    <h2>The Index</h2>
                    <GridContainer gridGap="40px 40px" gTC="1fr 1fr 1fr 1fr" gTCL="1fr 1fr 1fr 1fr" gTCM="1fr 1fr" gTCS="1fr 1fr" margin="0px">
                        {LibraryIndexLinks}
                    </GridContainer>

                    <h2>Suggestions</h2>
                    <p className="headerFont">If you have a suggestion for the library please help us out and write about it in the forums here. Alternatively, you can reach out to me on social media or the contact page. I’ll check it out and if it’s a good fit, I’ll put it in ASAP.</p>

                    {libraryRender}

                </GridContainer>
            </SiteContainer>
        )
    }
}
