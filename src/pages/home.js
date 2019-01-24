import React from 'react'
import styled from 'styled-components'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { msTheme } from '../styles/Theme'
import { ContentContainer } from "../components/00_utilities/ContentContainer";
import { WidthWrapper } from '../components/00_utilities/WidthWrapper'
import MsForumsPic from '../assets/Temporary/MsForumPicture.png'
import { HeroHome } from "../components/04_template/HeroHome";
import { ResponsivePhoto } from "../components/00_utilities/ResponsivePhoto";
import { FlexboxOrganism } from '../components/00_utilities/FlexboxOrganism'

// TO KEEP THE SPACING EVEN throughout a page, add a const at the page level that is fed into the Content container components or paddingWrapper components left side padding, on the right or middle (if 3), or the even numbers if more then 3
// ie. const gridSpace = "10px" - then there will be even separation of components




export const HomeSection = styled.section`
    h2{
        text-align: center;
        margin-bottom: 50px;
    }
    p{
        font-family: ${msTheme.font.headerFont}
    }
    
    margin-bottom: 90px;
`

// export const FlexboxOrganism = styled.div`
//     display: flex;
//     flex-flow: ${props => props.flexFlow || 'row wrap'};
//     justify-content: ${props => props.justifyContent || 'center'};
//     align-items: ${props => props.alignItems || 'center'};
//     padding: ${props => props.padding || '0px'};
//     margin: ${props => props.margin || '0px'};

// `

export default class Home extends React.Component {
    render() {
        return (
            // <SiteContainer headerPosition="absolute">
            <SiteContainer >
                <HeroHome />
                <ContentContainer width={msTheme.widths.wide}>
                    {/* <HomeSection>
                        <h2>Recent Posts</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ducimus voluptatibus sequi quibusdam saepe perspiciatis vitae dolores sit impedit, totam nihil asperiores unde ut deserunt consequatur facilis quo blanditiis molestias! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, laborum! Est pariatur quod laboriosam autem explicabo fugiat impedit voluptatibus! Repellat rem laboriosam architecto eveniet tenetur? Aliquam, fuga asperiores? Sit, odio.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ducimus voluptatibus sequi quibusdam saepe perspiciatis vitae dolores sit impedit, totam nihil asperiores unde ut deserunt consequatur facilis quo blanditiis molestias! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, laborum! Est pariatur quod laboriosam autem explicabo fugiat impedit voluptatibus! Repellat rem laboriosam architecto eveniet tenetur? Aliquam, fuga asperiores? Sit, odio.</p>
                    </HomeSection> */}
                    <HomeSection>
                        <h2>Free Forums</h2>
                        <FlexboxOrganism>
                            <WidthWrapper width="48%" margin="0px">
                                <ResponsivePhoto img={MsForumsPic} width="500px" />
                            </WidthWrapper>
                            <WidthWrapper width="4%"></WidthWrapper>
                            <WidthWrapper width="48%">
                                <WidthWrapper width="450px" marginSmall="25px 0px 0px 0px" >
                                    <p>Get feedback on your music.</p>
                                    <p>Give feedback to others,
                                    ask questions and comment on articles.</p>
                                    <p>Let's help each other get better.</p>
                                </WidthWrapper>
                            </WidthWrapper>
                        </FlexboxOrganism>
                    </HomeSection>
                    <HomeSection>
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ducimus voluptatibus sequi quibusdam saepe perspiciatis vitae dolores sit impedit, totam nihil asperiores unde ut deserunt consequatur facilis quo blanditiis molestias! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, laborum! Est pariatur quod laboriosam autem explicabo fugiat impedit voluptatibus! Repellat rem laboriosam architecto eveniet tenetur? Aliquam, fuga asperiores? Sit, odio.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ducimus voluptatibus sequi quibusdam saepe perspiciatis vitae dolores sit impedit, totam nihil asperiores unde ut deserunt consequatur facilis quo blanditiis molestias! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, laborum! Est pariatur quod laboriosam autem explicabo fugiat impedit voluptatibus! Repellat rem laboriosam architecto eveniet tenetur? Aliquam, fuga asperiores? Sit, odio.</p>
                    </HomeSection>


                </ContentContainer>

            </SiteContainer >
        )
    }
}
