import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import SiteContainer from '../components/05_page/Layout/SiteContainer';
import { GridContainer, ResponsivePhoto, FlexboxOrganism } from '../components/00_utilities/Utilities';
import TestImg from '../assets/LandingCards/Bunch-Of-EQs-picture-1.jpg'
// import TestImg from '../assets/ServicesPortfolio/CinematicSpyGraphics.jpg'
import { PageTitle } from '../components/01_atom/PageTitle';
import { msTheme } from '../styles/Theme';


const PostCardSeriesStyled = styled.div`
    a {        
            text-decoration: none;        
    }
    h2{
        margin-top: 0px;
    }
    &:hover{                
        h2 {            
            
            color: ${msTheme.colors.primary};
            
        }
    }
`

const PostCardSeries = ({ title, description, img, to, number }) => {
    return (

        <PostCardSeriesStyled>
            <Link to={to}>
                <GridContainer maxWidth="1000px" gTC="1fr 2fr" gTCL="1fr 1fr" gTCM="1fr" gridGap="20px 40px" gridGapL="20px 20px">
                    <ResponsivePhoto src={img ? img : TestImg} />
                    <FlexboxOrganism flexFlow="column" alignItems="flex-start" >
                        <h2>{number ? `${number}. ` : ''}{title}</h2>
                        <p>{description}</p>
                    </FlexboxOrganism>
                </GridContainer>
            </Link>
        </PostCardSeriesStyled>

    )
}


export default class category extends React.Component {
    render() {
        const { data: { allMarkdownRemark } } = this.props
        let posts = allMarkdownRemark.edges
        let src
        let PostCardSeriesCollection = posts.map((post, i) => {
            if (post.node.frontmatter.featuredImage) {
                src = post.node.frontmatter.featuredImage.childImageSharp.fluid.src;
            } else {
                src = TestImg
            }
            return (
                <PostCardSeries
                    number={i + 1}
                    title={post.node.frontmatter.title}
                    description={post.node.excerpt}
                    to={post.node.fields.slug}
                    img={src}
                />
            )
        })
        return (
            <SiteContainer>
                <PageTitle text="Basics" description="Essential Knowledge for Learning Music Production" />
                <GridContainer className="mT40 mB40" gridGap="40px" gTC="1fr" gTCL="1fr" gTCM="1fr">
                    {PostCardSeriesCollection}
                </GridContainer>
            </SiteContainer>
        )
    }
}



export const pageQuery = graphql`
  query {
    allMarkdownRemark(
        limit:2000
        # filter: {frontmatter:{category: {eq :"Mixing"}  }}
        filter: {
        frontmatter:{
            learn: {eq :true} 
            # tags: {in: "basics"}
            series: {eq:"basics"}
        }
        }
        sort:{ fields:frontmatter___seriesNumber___basics, order: ASC }
        # sort:{ fields:frontmatter___date, order: ASC }
    ) {
        edges {
            node {
                excerpt
                fields{
                    slug
                }
                frontmatter{
                    # date
                    title
                    seriesNumber {
                        basics
                    }
                    # category
                    # subcategory
                    # blog
                    # tags
                    featuredImage {
                            childImageSharp {
                                fluid {
                                    src
                                }
                            }
                    }
                }
            }
        }
    }
  }
`

