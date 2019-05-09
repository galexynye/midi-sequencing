import React from 'react'
import SiteContainer from '../../components/05_page/Layout/SiteContainer';
import { ProjectPage } from '../../components/05_page/ProjectPage'


//Note: React helmet is in the ProjectPage component.

export default class GenreSwap extends React.Component {
    render() {
        return (
            <SiteContainer>
                <ProjectPage projectName="Genre Swap" />
            </SiteContainer>
        )
    }
}

