import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { DiscussionEmbed } from "disqus-react"
import { Link } from 'gatsby'
import SiteContainer from '../components/05_page/Layout/SiteContainer';
import { PageTitle } from '../components/01_atom/PageTitle'
import { GridContainer, GridItem } from '../components/00_utilities/Utilities';

import { ArticleContainer } from '../components/05_page/ArticleContainer';

export default class Library extends Component {
    render() {
        const disqusConfig = {
            shortname: process.env.GATSBY_DISQUS_NAME,
            config: { identifier: "musicsequencing.com/projects" },
        }

        return (
            <SiteContainer>
                <Helmet
                    meta={[{ name: 'description', content: 'A curated collection of some of the best free plugins, samples and music tutorials from around the internet.' }]}
                    title={`Forum | Music Sequencing`}
                />
                <PageTitle title="Music Sequencing Forum" description="The future of the forum for Music Sequencing" />
                <ArticleContainer>

                    <GridContainer gTC="1fr" gTCL="1fr" gTCM="1fr">
                        <p>The forum is no longer available. In the future I will probably open a Discord server for chat and in the mean time you can comment on any page or article with Disqus.</p>
                        <p>If you want to reach out with any specific questions, here is the link to the <Link to="contact">contact page</Link>.</p>

                        <DiscussionEmbed {...disqusConfig} />
                    </GridContainer>
                </ArticleContainer>
            </SiteContainer>
        )
    }
}
