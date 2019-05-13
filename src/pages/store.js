import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import SiteContainer from '../components/05_page/Layout/SiteContainer'

import { PageTitle } from '../components/01_atom/PageTitle'
import { GridContainer } from '../components/00_utilities/Utilities'
import { StoreItem } from '../components/03_organism/StoreItem'
import { storeData } from '../sitedata/storedata'



export default class store extends Component {
    render() {
        const storeItems = storeData.map(x => <StoreItem item={x} />)
        return (
            <SiteContainer>
                <Helmet
                    meta={[{ name: 'description', content: 'Get the greatest music stuff and support Music Sequencing.' }]}
                    title={`Store | Music Sequencing`}
                />
                <PageTitle title="Support Music Sequencing" description='Everything listed in the “store” are links to gear, services or books that I use and love. Purchasing through a link here may entitle you to a discount.' />
                <GridContainer gTC="1fr 3fr" gTCL="1fr 3fr" gTCM="1fr 2fr" gridGap="40px" margin="40px auto">
                    {storeItems}
                </GridContainer>
            </SiteContainer>
        )
    }
}
