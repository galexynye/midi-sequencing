import React, { Component } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Img } from 'gatsby'
import { msTheme } from '../../styles/Theme'
import { PostCard } from '../02_molecule/PostCard'
import { FlexboxOrganism, WidthWrapper, ContentContainer } from '../00_utilities/Utilities'

// Static Query Component - Queries Recent Posts and Displays them

import DawPic from '../../assets/LandingCards/Daws-20.jpg'
import EQPic from '../../assets/LandingCards/Bunch-Of-EQs-picture-1.jpg'

const RecentPostsStyled = styled.div`
padding: 50px 0px 30px 0px;
border-bottom: 2px solid lightgray;
h2{
    text-align: center;
        margin-bottom: 40px;
        font-size: 25px;
        color : ${msTheme.colors.textlight}      ;
        font-weight: 50;  
}
`

export class RecentPostsView extends Component {
    render() {
        const posts = this.props.data.allMarkdownRemark.edges

        let src // Set the source of the featured image
        const RecentPostCards = posts.map(post => {
            // Checks if no featured image
            if (!post.node.frontmatter.featuredImage) {
                src = DawPic
            } else {
                src = post.node.frontmatter.featuredImage.childImageSharp.fluid.src
            }
            return (
                <PostCard
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
                <ContentContainer>
                    <WidthWrapper width="1100px">
                        {/* <h2 className="center marB40">Latest</h2> */}

                        <FlexboxOrganism justifyContent="space-between" >
                            {RecentPostCards}
                        </FlexboxOrganism>

                    </WidthWrapper>
                </ContentContainer>
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