import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
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

const BGColor = msTheme.colors.primary

export const PostCardStyled = styled.div`
    /* background-color: white;
    border-radius: 10px; */
    padding-bottom: 20px;
    h1{
        margin: 5px;
    }
    p{
        margin-top: 10px;
    }
`

export const PictureLabelStyle = styled.div`
    /* top: 0px; */
    bottom: 0px;
    left: 0px;
    position: absolute;
    /* color: ${msTheme.colors.text}; */
    color: white;
	font-family: ${msTheme.font.headerFont};
    font-size: 25px;
	font-weight: 300;
	padding: 5px;
	text-transform: uppercase;
    /* background-color: ${props => props.labelBgColor ? props.labelBgColor : props.learn ? props.learn : props.blog ? props.blog : msTheme.colors.yellow}; */
    background-color: ${BGColor};    
    
`

export const CategoryStyled = styled.div`
    margin-top: 15px;
`


const cardWidth = '300px'

export class PostCard extends React.PureComponent {
    render() {
        const { learnOrBlog, snippet, date, title, src, category, slug } = this.props
        return (
            <PostCardStyled>

                <WidthWrapper width={cardWidth} breakPoint={msTheme.breakPoints.large}>

                    <WidthWrapper width={cardWidth} breakPoint={msTheme.breakPoints.large}>
                        <a>
                            <BackgroundImage src={src} height="200px" heightSmall="250px" breakPoint={msTheme.breakPoints.large} color1="rgb(255,255,255,0)" color2="rgb(100,100,100,0)" >
                                <PictureLabelStyle>{learnOrBlog}</PictureLabelStyle>
                            </BackgroundImage>
                        </a>
                    </WidthWrapper>


                    <CardHeader width="300px" text={title} slug={slug} />

                    <small class="headerFont">{date}</small>

                    {category && <CategoryStyled>
                        <Link to={slug}>{category}</Link>
                    </CategoryStyled>}

                    {!category && <CategoryStyled>Not-categorized</CategoryStyled>}

                    <p>{snippet}</p>

                    <WidthWrapper width="250px" margin="0px">
                        <ButtonCTA to={slug} text="Read more" color="white" bgColor={BGColor}></ButtonCTA>
                    </WidthWrapper>




                </WidthWrapper>


            </PostCardStyled>


        )
    }
}
