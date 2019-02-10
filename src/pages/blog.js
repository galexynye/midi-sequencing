
import React from 'react'
import { Link, graphql, Img } from 'gatsby'
import styled from 'styled-components'
import { msTheme } from '../styles/Theme'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { ArticleContainer } from '../components/05_page/ArticleContainer';
import { PageTitle } from '../components/01_atom/PageTitle'
import { GridContainer, GridItem } from '../components/00_utilities/Utilities';
import { PostCardBlog } from '../components/02_molecule/PostCardBlog';
import DawPic from '../assets/LandingCards/Daws-20.jpg'

class Latest extends React.Component {

    render() {
        const {
            data: { allMarkdownRemark }
        } = this.props
        let posts = allMarkdownRemark.edges
        let src
        const RecentPostCards = posts.map((post, i) => {
            // Checks if no featured image
            if (!post.node.frontmatter.featuredImage) {
                src = DawPic
            } else {
                src = post.node.frontmatter.featuredImage.childImageSharp.fluid.src
                // src = DawPic
            }


            return (
                <GridItem gCS={i == 0 ? "1" : 'auto'} gCE={i == 0 ? "3" : 'auto'} >
                    {/* // <GridItem gCS="1" gCE="3" > */}
                    {/* <GridItem > */}
                    <PostCardBlog
                        key={post.node.fields.slug}
                        learnOrBlog={post.node.frontmatter.category}
                        // snippet={i < 2 ? post.node.excerpt : ''}
                        snippet={post.node.excerpt}
                        date={post.node.frontmatter.date}
                        title={post.node.frontmatter.title}
                        category={post.node.frontmatter.category}
                        subcategory={post.node.frontmatter.subcategory}
                        slug={post.node.fields.slug}
                        src={src}
                        tags={post.node.frontmatter.tags}
                        titleHeight={i > 0 ? "59px" : 'auto'}
                        tagsHeight={i > 0 ? "59px" : 'auto'}
                    />
                </GridItem>
            )


        })




        return (
            <SiteContainer>
                <PageTitle text="Blog" description="Gear Reviews and Other Thoughts"></PageTitle>
                <GridContainer maxWidth={msTheme.widths.article} gTC="repeat(2, 1fr)" gTCL="repeat(2, 1fr)" gTCM="repeat(1, 1fr)" gridGap="20px 40px" className="mT40 mB40">
                    {RecentPostCards}
                </GridContainer>
            </SiteContainer>
        )
    }
}

export default Latest

export const pageQuery = graphql`
    query {
                        allMarkdownRemark(
                            limit: 2000
            filter: {frontmatter: {blog: {eq : true}}}
            sort:{fields: frontmatter___date, order: DESC }
        ) {
                        edges {
                    node {
                        excerpt
                    fields{
                        slug
                    }
                    frontmatter{
                        date(formatString: "MMMM DD, YYYY")
                    title
                    category
                    subcategory
                    blog
                    tags
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
