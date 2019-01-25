import React from 'react'
import styled from 'styled-components'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { msTheme } from '../styles/Theme'
import { ResponsivePhoto, FlexboxOrganism, WidthWrapper, ContentContainer } from "../components/00_utilities/Utilities";

// Components with Content
import { HeroHome } from "../components/04_template/HeroHome";
import { FreeForums } from "../components/03_organism/Home/FreeForums";

// Asset Imports
import Alex from '../assets/Lessons/DeskPhoto.jpg'


// TO KEEP THE SPACING EVEN throughout a page, add a const at the page level that is fed into the Content container components or paddingWrapper components left side padding, on the right or middle (if 3), or the even numbers if more then 3
// ie. const gridSpace = "10px" - then there will be even separation of components

const containerSize = "1000px"


export const HomeSection = styled.section`
 background-color:  ${props => props.bgColor || 'white'};

    h2{
        text-align: center;
        margin-bottom: 40px;        
        padding-right: 100px;
        color: ${props => props.color || msTheme.colors.text}
    }
   
    h3 {
        font-family: ${msTheme.font.headerFont};
        margin-bottom: 20px;
    }
    p{
        font-family: ${msTheme.font.headerFont};
        margin-bottom: 20px;
        /* text-align: center; */
    }
    
    padding-bottom: 50px;
`




export default class Home extends React.Component {
    render() {
        return (
            // <SiteContainer headerPosition="absolute">

            <SiteContainer >
                {/* <HeroHome /> */}
                {/* <HomeSection>
                        <h2>Recent Posts</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ducimus voluptatibus sequi quibusdam saepe perspiciatis vitae dolores sit impedit, totam nihil asperiores unde ut deserunt consequatur facilis quo blanditiis molestias! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, laborum! Est pariatur quod laboriosam autem explicabo fugiat impedit voluptatibus! Repellat rem laboriosam architecto eveniet tenetur? Aliquam, fuga asperiores? Sit, odio.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ducimus voluptatibus sequi quibusdam saepe perspiciatis vitae dolores sit impedit, totam nihil asperiores unde ut deserunt consequatur facilis quo blanditiis molestias! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, laborum! Est pariatur quod laboriosam autem explicabo fugiat impedit voluptatibus! Repellat rem laboriosam architecto eveniet tenetur? Aliquam, fuga asperiores? Sit, odio.</p>
                    </HomeSection> */}
                {/* <ResponsivePhoto img={Alex} width="200px" widthSmall="100px" marginSmall="0px"></ResponsivePhoto> */}


                <HomeSection color={msTheme.colors.primary}>
                    <FreeForums width={containerSize} />
                </HomeSection>



                <HomeSection>

                    <ContentContainer width={containerSize}>
                        <h2>About </h2>
                        <FlexboxOrganism flexFlow="wrap-reverse">

                            <WidthWrapper width="44%">
                                <WidthWrapper width="450px" marginSmall="25px 0px 0px 0px" >
                                    <p>Hi. My name is Alex. Yeah, that's my dumb face over there; right arm awkwardly placed on the desk.</p>
                                    <p>You might be confused...the site seemed professional. Well buddy, I programmed it myself. Took that picture too.</p>
                                    <p>Half of what is here, like the learn section, is pretty professional because I am a professional. I love making music and hope to pass on some knowledge.
                                     The other half is my blog, where I say whatever the hell I want.</p>
                                    <p>The third half is the forums, where anybody can say whatever the hell they want.</p>
                                    <p>Also there's the Services section, where you can hire me for music stuff.</p>
                                </WidthWrapper>
                            </WidthWrapper>

                            <WidthWrapper width="4%"></WidthWrapper>

                            <WidthWrapper width="52%" margin="0px">
                                <FlexboxOrganism>

                                    <ResponsivePhoto img={Alex} borderRadius="20px" widthSmall="500px" />
                                </FlexboxOrganism>
                            </WidthWrapper>
                        </FlexboxOrganism>
                    </ContentContainer>
                </HomeSection>

            </SiteContainer >
        )
    }
}
