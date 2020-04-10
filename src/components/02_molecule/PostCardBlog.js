import React from 'react'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import { Link } from 'gatsby'
import { msTheme } from '../../styles/Theme'
import { WidthWrapper, FlexboxOrganism } from "../00_utilities/Utilities";
import { ButtonCTA } from "../01_atom/ButtonCTA";
import { BackgroundImage } from "../01_atom/BackgroundImage";
import { CardHeader } from "../01_atom/CardHeader";
import { SimpleCard } from '../02_molecule/SimpleCard'
// Assets
import StudioPic from '../../assets/LandingCards/BuildAStudio.jpg'

/* A Preview of the post Takes in Post data as props and renders a "Post Card" 
Include 
-Featured Image of the Post (If there is none, then it uses a standard image on site)
-The Title of the Post
-Short Description of the post
-Button with link to "Read this Post"
*/


const TaglistStyle = styled.ul`
    list-style-type: none;
    display: flex;
    flex-flow: wrap;
    padding: 0px;
    margin:0px 0px 5px 0px;
    font-family: ${msTheme.font.headerFont};
    min-height: ${props => props.minHeight || 'auto'};
   
    li{
        font-size: 15px;
        margin: 0px 5px 0px 0px;
    }
    ${msTheme.mediaquery().medium}{
        min-height: auto;
    }
`

export const PostCardStyled = styled.div`
    /* background-color: rgb(249,249,249); */
    /* background-color: blue; */
    /* box-shadow: 0px 0px 2px ${msTheme.colors.primary}; */
    padding: 15px;    
    a{
        &:hover{
            text-decoration: none;
        }
    }
    span{
        font-size: 14px;
    }
        

`

export const DateStyled = styled.p`
    font-size: 15px;
    min-height: ${props => props.minHeight || 'auto'};
    font-family: ${msTheme.font.headerFont};
    margin-bottom:5px;
`

export const CategoryStyled = styled.div`
    margin-bottom: 10px;
`


const cardWidth = '300px'

export class PostCardBlog extends React.PureComponent {
    render() {
        const { learnOrBlog, titleHeight, titleHeightM, tagsHeight, tags, snippet, date, title, src, category, subcategory, slug } = this.props
        let tagLinks
        if (tags) {
            tagLinks = tags.map((tag, i) => {
                return (
                    <li>
                        <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>{tags.length - 1 == i ? '' : ','}
                    </li>
                )
            })
        }

        return (
            <PostCardStyled>
                <SimpleCard
                    img={src}
                    title={title}
                    imgLink={slug}
                    label={subcategory} // learn or blog is actually the category now
                >
                    <CardHeader
                        text={title} slug={slug}
                        minHeight={titleHeight}
                        minHeightM={titleHeightM}
                        linkColor={msTheme.colors.primary}
                    />
                    {/* <DateStyled>{date}</DateStyled> */}
                    {category && <TaglistStyle>
                        <li>Category:</li>
                        <li> <Link className="headerFont" to={slug}>{category}</Link></li>
                    </TaglistStyle>}
                    {/* Bring Back subcategory when there is way more shit */}
                    {/* 
                    
                    {subcategory &&
                        <TaglistStyle>
                            <li>Subcategory:</li>
                            <li><Link className="headerFont" to={slug}>{subcategory}</Link></li>
                        </TaglistStyle>

                    } */}

                    <TaglistStyle minHeight={tagsHeight}>
                        <li>Tags:</li>
                        {tagLinks}
                    </TaglistStyle>
                    <Link to={slug}>
                        <p>{snippet}</p>
                    </Link>


                </SimpleCard>

            </PostCardStyled>


        )
    }
}


// Old POst Card

            // <PostCardStyled>

            //     <WidthWrapper width={cardWidth} breakPoint={msTheme.breakPoints.large}>

            //         <WidthWrapper width={cardWidth} breakPoint={msTheme.breakPoints.large}>
            //             <a>
            //                 <BackgroundImage src={src} height="200px" heightSmall="250px" breakPoint={msTheme.breakPoints.large} color1="rgb(255,255,255,0)" color2="rgb(100,100,100,0)" >
            //                     <PictureLabelStyle>{learnOrBlog}</PictureLabelStyle>
            //                 </BackgroundImage>
            //             </a>
            //         </WidthWrapper>


            //         <CardHeader width="300px" text={title} slug={slug} />

            //         <small class="headerFont">{date}</small>

            //         {category && <CategoryStyled>
            //             <Link to={slug}>{category}</Link>
            //         </CategoryStyled>}

            //         {!category && <CategoryStyled>Not-categorized</CategoryStyled>}

            //         <p>{snippet}</p>

            //         <WidthWrapper width="250px" margin="0px">
            //             <ButtonCTA to={slug} text="Read more" color="white" bgColor={BGColor}></ButtonCTA>
            //         </WidthWrapper>

            //     </WidthWrapper>

            // </PostCardStyled>