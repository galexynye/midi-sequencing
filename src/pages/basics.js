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
import { PostCardSeries } from '../components/02_molecule/PostCardSeries'



export default class category extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        let posts = data.allMarkdownRemark.edges
        let src

        let PostCardSeriesCollection = posts.map((post, i) => {
            if (post.node.frontmatter.featuredImage) {
                src = post.node.frontmatter.featuredImage
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
                <Helmet
                    meta={[{ name: 'description', content: 'Learn everything you need to get started producing your own music' }]}
                    title={`Basics - Learn All the Basics of Music Production | ${siteTitle}`}
                />
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
        site {
    siteMetadata {
      title    
    }
  }
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
                    featuredImage
                }
            }
        }
    }
  }
`

