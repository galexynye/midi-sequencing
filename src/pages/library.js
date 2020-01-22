import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { DiscussionEmbed } from "disqus-react"
import { Link } from 'gatsby'
import SiteContainer from '../components/05_page/Layout/SiteContainer';
import { PageTitle } from '../components/01_atom/PageTitle'
import { GridContainer, GridItem } from '../components/00_utilities/Utilities';
import { LibraryIndexLinks } from '../components/03_organism/LibraryIndex'
import { library } from '../sitedata/library/librarydata'
import { LibrarySubject } from '../components/04_template/LibrarySubject'

// TODO: Change the Library into 2 sections (for now). Free Downloads. Free Tutorials and Info

export default class Library extends Component {
    render() {
        const libraryRender = library.map(x => <LibrarySubject subject={x} key={x.subject} />)
        const disqusConfig = {
            shortname: process.env.GATSBY_DISQUS_NAME,
            config: { identifier: "musicsequencing.com/library" },
        }
        return (
            <SiteContainer>
                <Helmet
                    meta={[{ name: 'description', content: 'A curated collection of some of the best free plugins, samples and music tutorials from around the internet.' }]}
                    title={`Music Resource Library | Music Sequencing`}
                />
                <PageTitle title="Music Resource Library" description="A growing document of curated music resources from here and around the web" />

                <GridContainer gTC="1fr" gTCL="1fr" gTCM="1fr" width="93%" maxWidth="800px">
                    <h2 class="pT20 mB0">About This Library</h2>
                    <p class="headerFont">Welcome! Looking for quality free plugins, presets or samples? They're below + tons of other articles, videos and free resources to help you improve at making music. The downloads are resources I've tried and probably use often. The articles, videos and tutorials are quality, NO BS, content that I've checked out (or wrote) and will help you improve.</p>
                    <h2 class="mT0 mB0">The Index</h2>
                    <GridContainer gridGap="20px 20px" gTC="1fr 1fr 1fr 1fr" gTCL="1fr 1fr 1fr 1fr" gTCM="1fr 1fr" gTCS="1fr 1fr" margin="0px 0px 20px 0px">
                        {LibraryIndexLinks}
                    </GridContainer>

                    <h2 class="mT20 mB0">Resource Suggestions</h2>
                    <p className="headerFont">I love hearing about great free resources! If you have a suggestion for the library you can reach out to me on the <Link to="/contact">contact page</Link>. I’ll check it out and if it’s a good fit, I’ll put it in ASAP.</p>

                    {libraryRender}
                    <DiscussionEmbed {...disqusConfig} />
                </GridContainer>
            </SiteContainer>
        )
    }
}
