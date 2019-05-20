import React, { Component } from 'react'
import Helmet from 'react-helmet'
import SiteContainer from '../components/05_page/Layout/SiteContainer';
import { PageTitle } from '../components/01_atom/PageTitle';
import { InfoGrid } from '../components/03_organism/InfoGrid';
import { GridItem, GridContainer } from '../components/00_utilities/Utilities';
import { ProjectLink } from '../components/03_organism/ProjectLink';
import { the10 } from '../sitedata/projectsdata'


export default class Projects extends Component {
    render() {
        const projectLinks = the10.map((x, i) => <ProjectLink key={x.link} num={i + 1} to={x.link} project={`${x.name} ${x.icon}`} description={x.description}></ProjectLink>)
        return (
            <SiteContainer>
                <Helmet
                    meta={[{ name: 'description', content: '10 Projects that will make you a better music producer. Get and give feedback on your music and grow.' }]}
                    title={`The Projects | Music Sequencing`}
                />
                <PageTitle title="The Projects" description="Do these and you will be a better producer."></PageTitle>
                <h2 className="center mT0 mB60">Getting Started</h2>
                <InfoGrid>
                    <div>
                        <h2>Step 1: Choose a Project 🌳</h2>
                        <p className="headerFont">Look over the projects on this page below. Each one links to a project description page that gives you the objectives and rules for the project. Choose what sounds good to you and get going.</p>
                    </div>

                    <div>
                        <h2>Step 3: Give Feedback 🎧</h2>
                        <p className="headerFont">At the bottom of each project description page is a forum thread containing other producer’s projects. Listen to at least one project from another producer and help them out with some feedback. If their project is great it could inspire you to go back and improve your own before posting.</p>
                    </div>
                    <GridItem gRSS="2">
                        <h2>Step 2: Make the Music 🎹</h2>
                        <p className="headerFont">Create music based on the project description. In the process of making your music feel free to lookup any useful information from the resource library or around the internet that you can apply to your project.</p>
                    </GridItem>
                    <div>
                        <h2>Step 4: Post Your Project 🔈</h2>
                        <p className="headerFont">Keep the thread going. Once you’ve completed your project post a link in the project thread to your own music for some helpful feedback. Carefully consider any feedback you get and use it to improve.</p>
                    </div>
                </InfoGrid>
                <h2 className="center mB60" id="theprojects">The Projects</h2>
                <GridContainer gTC="1fr" gTCL="1fr" gTCM="1fr">
                    {projectLinks}
                </GridContainer>
            </SiteContainer>


        )
    }
}
