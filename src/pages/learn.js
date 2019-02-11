
import React from 'react'
// import styled from 'styled-components'
import { Link } from 'gatsby'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { PageTitle } from '../components/01_atom/PageTitle';
import { GridContainer } from '../components/00_utilities/Utilities';
import { CategoryCard } from '../components/02_molecule/CategoryCard';
import { learnCategoryCardsData } from '../sitedata/learndata'

class Learn extends React.Component {
    render() {
        const learnCategoryCards = learnCategoryCardsData.map(x => {
            return (
                <CategoryCard
                    title={x.title}
                    description={x.description}
                    to={x.link}
                />
            )
        })
        return (
            <SiteContainer>
                <PageTitle title="Learn" description="Tutorials, Articles, & Mentorship"></PageTitle>
                <GridContainer gTC="repeat(2, 1fr)" className="mB40 mT40">
                    {learnCategoryCards}
                </GridContainer>
                <GridContainer id="mentoring">
                    <h2>Mentorship</h2>

                </GridContainer>
                <GridContainer>
                    <div>
                        <p className="headerFont">Having trouble getting your music to sound as good as your favorite artists?</p>
                        <p className="headerFont"> It’s difficult to know what you are doing right or wrong in isolation. The times I’ve grown the most as producer were under the guidance of more experienced professional who knows the tools of music production and how to use them.</p>
                    </div>
                </GridContainer>
            </SiteContainer>
        )
    }
}

export default Learn
