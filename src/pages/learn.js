
import React from 'react'
// import styled from 'styled-components'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { PageTitle } from '../components/01_atom/PageTitle';
import { GridContainer } from '../components/00_utilities/Utilities';
import { CategoryCard } from '../components/02_molecule/CategoryCard';
import { learnCategoryCardsData } from '../sitedata/learndata'

class Learn extends React.Component {
    render() {
        const learnCategoryCards = learnCategoryCardsData.map(x => {
            return (
                <CategoryCard title={x.title} description={x.description} />
            )
        })
        return (
            <SiteContainer>
                <PageTitle title="Learn" description="Tutorials and Articles "></PageTitle>
                <GridContainer className="mB40">

                    {learnCategoryCards}
                </GridContainer>

            </SiteContainer>
        )
    }
}

export default Learn
