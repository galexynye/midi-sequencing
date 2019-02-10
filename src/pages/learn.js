
import React from 'react'
// import styled from 'styled-components'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { PageTitle } from '../components/01_atom/PageTitle';


class Learn extends React.Component {
    render() {
        return (
            <SiteContainer>
                <PageTitle title="Learn" description="Tutorials and Articles "></PageTitle>
                <p>Learn</p>

            </SiteContainer>
        )
    }
}

export default Learn
