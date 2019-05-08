import React from 'react'
import { GridContainer } from '../00_utilities/Utilities';

export const InfoGrid = ({ children }) => {
    return (
        <GridContainer gTC="1fr 1fr" gridGap="40px 80px" gridGapM="40px" gridGapS="20px">
            {children}
        </GridContainer>
    )
}


