import React, { PureComponent } from 'react'
import { moviePics } from '../../sitedata/musicData'
import { ResponsivePhoto, GridContainer } from '../00_utilities/Utilities';

export class ServicesMovies extends PureComponent {
    render() {
        const movies = moviePics.map(x => {
            return (
                <ResponsivePhoto key={x.src} src={x.src} ></ResponsivePhoto>
            )
        })
        return (
            <div className="mB40">
                <GridContainer>
                    <h2 className="mB40 colorPrimary">Film / TV </h2>
                </GridContainer>
                <GridContainer gTC="1fr 1fr 1fr 1fr">
                    {movies}
                </GridContainer>
            </div>

        )
    }
}
