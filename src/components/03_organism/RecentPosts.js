import React, { Component } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Img } from 'gatsby'
import { msTheme } from '../../styles/Theme'
import { PostCardHomeRecent } from '../02_molecule/PostCardHomeRecent'
import { GridContainer, GridItem } from '../00_utilities/Utilities'


// Static Query Component - Queries Recent Posts and Displays them

import DawPic from '../../assets/LandingCards/Daws-20.jpg'
import EQPic from '../../assets/LandingCards/Bunch-Of-EQs-picture-1.jpg'

const RecentPostsStyled = styled.div`
padding: 110px 0px 90px 0px;
border-bottom: 2px solid lightgray;

`

export class RecentPostsView extends Component {
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
        />)
    })


    return (
      <RecentPostsStyled>

        <GridContainer gTCL="repeat(3, 1fr)" gridGap="65px" gridGapL="45px">
          {RecentPostCards}
        </GridContainer>

      </RecentPostsStyled >
    )
  }
}

export const RecentPosts = props => (
  <StaticQuery
    query={graphql`
       query {
        allMarkdownRemark(
            limit: 3
          sort: {
            fields: [frontmatter___date]
            order: DESC
          }
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
    render={data => <RecentPostsView data={data} {...props} />}
  />
)