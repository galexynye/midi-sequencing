import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { msTheme } from '../../styles/Theme'
import { PostCardHomeRecent } from '../02_molecule/PostCardHomeRecent'
import { GridContainer, GridItem } from '../00_utilities/Utilities'


// Static Query Component - Queries Recent Posts and Displays them

import DawPic from '../../assets/LandingCards/Daws-20.jpg'

const PopularPostsStyled = styled.div`



`

export class PopularPostsView extends Component {
    render() {
        const posts = this.props.data.allMarkdownRemark.edges

        let src // Set the source of the featured image
        const RecentPostCards = posts.map((post, i) => {
            // Checks if no featured image
            if (!post.node.frontmatter.featuredImage) {
                src = DawPic
            } else {
                src = post.node.frontmatter.featuredImage.childImageSharp.fluid.src
            }

            if (i == 0) {
                return (
                    <GridItem gCSM="1" gCEM="3">
                        <PostCardHomeRecent
                            key={post.node.fields.slug}
                            learnOrBlog={post.node.frontmatter.category}
                            snippet={post.node.excerpt}
                            date={post.node.frontmatter.date}
                            title={post.node.frontmatter.title}
                            category={post.node.frontmatter.subcategory}
                            slug={post.node.fields.slug}
                            src={src}
                            minHeight="60px"
                        />
                    </GridItem>
                )
            }



            return (
                <PostCardHomeRecent
                    key={post.node.fields.slug}
                    learnOrBlog={post.node.frontmatter.category}
                    snippet={post.node.excerpt}
                    date={post.node.frontmatter.date}
                    title={post.node.frontmatter.title}
                    category={post.node.frontmatter.subcategory}
                    slug={post.node.fields.slug}
                    src={src}
                    minHeight="60px"
                />)
        })


        return (
            <PopularPostsStyled>
                <GridContainer gTCL="repeat(3, 1fr)" gridGap="40px 65px" gridGapL="45px">
                    {RecentPostCards}
                </GridContainer>
            </PopularPostsStyled >
        )
    }
}

export const PopularPosts = props => (
    <StaticQuery
        query={graphql`
    query {
        allMarkdownRemark(
          limit: 3
          sort: {
            fields: [frontmatter___date]
            order: DESC
          }
          filter:{frontmatter: {popular: {eq:true}}}
        ) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
                category
                subcategory 
                popular
                date(formatString: "MMMM DD, YYYY")
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
    `}
        render={data => <PopularPostsView data={data} {...props} />}
    />
)