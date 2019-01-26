import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
import { WidthWrapper, FlexboxOrganism, ContentContainer } from "../00_utilities/Utilities";
import { ButtonCTA } from "../01_atom/ButtonCTA";
import { BackgroundImage } from "../01_atom/BackgroundImage";
import { CardHeader } from "../01_atom/CardHeader";
// Assets
import StudioPic from '../../assets/LandingCards/BuildAStudio.jpg'

/* A Preview of the post Takes in Post data as props and renders a "Post Card" 
Include 
-Featured Image of the Post (If there is none, then it uses a standard image on site)
-The Title of the Post
-Short Description of the post
-Button with link to "Read this Post"
*/

export const PostCardStyled = styled.div`
    /* background-color: white;
    border-radius: 10px; */
    h1{
        margin: 5px;
    }

    h2{
        color: blue;
    }

`

const cardWidth = '300px'

export class PostCard extends React.PureComponent {
    render() {
        const { learnOrBlog, snippet, date, title } = this.props
        return (
            <PostCardStyled>

                <WidthWrapper width={cardWidth} breakPoint={msTheme.breakPoints.large}>

                    <WidthWrapper width={cardWidth} breakPoint={msTheme.breakPoints.large}>
                        <a>
                            <BackgroundImage height="250px" heightSmall="100px" heightSmall="250px" breakPoint={msTheme.breakPoints.large} color1="rgb(255,255,255,0)" color2="rgb(100,100,100,0)" >
                                <h1>{learnOrBlog}</h1>
                            </BackgroundImage>
                        </a>
                    </WidthWrapper>


                    <CardHeader width="300px" text={title} />

                    <small>{date}</small>

                    <p>{snippet}</p>



                    <WidthWrapper width="300px" widthSmall="300px" breakPoint={msTheme.breakPoints.large} margin="0px">
                        <ButtonCTA to='/about' text="Read more" bgColor={msTheme.colors.yellow}></ButtonCTA>
                    </WidthWrapper>


                </WidthWrapper>


            </PostCardStyled>


        )
    }
}
