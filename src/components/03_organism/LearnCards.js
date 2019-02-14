import React, { PureComponent } from 'react'
import { LearnCard } from '../02_molecule/LearnCard';
import { learnCardsData } from '../../sitedata/learndata'
import { GridContainer } from '../00_utilities/Utilities';

export class LearnCards extends PureComponent {

    render() {
        const { hideDescription, gTC } = this.props
        const learnCards = learnCardsData.map(x => {
            return (
                <LearnCard
                    title={x.title}
                    description={x.description}
                    to={x.link}
                    hideButton={x.hideButton}
                    color={x.color}
                    hideDescription={hideDescription}
                />
            )
        })
        return (
            <GridContainer gTC={gTC ? gTC : "repeat(3, 1fr)"} className="mB60 mT40">
                {learnCards}
            </GridContainer>
        )
    }
}
