import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import SiteContainer from '../Layout/SiteContainer'
import { ArticleContainer } from '../ArticleContainer';
import { PageTitle } from '../../01_atom/PageTitle';
import { PostCardSeries } from '../../02_molecule/PostCardSeries';
import { PostCardBlog } from '../../02_molecule/PostCardBlog'
import { msTheme } from '../../../styles/Theme';
import TestImg from '../../../assets/LandingCards/Bunch-Of-EQs-picture-1.jpg'
import { GridContainer, GridItem } from '../../00_utilities/Utilities'

const TagsList = styled.ul`
  list-style-type: none;
  padding: 0px;
`

class Category extends React.Component {
  render() {
    const { pageContext, data } = this.props
    const { category } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const posts = edges;
    const categoryHeader = `${category}`
    let categoryDescription

    for (let i = 0; i < posts.length; i++) {
      if (posts[i].node.frontmatter.categoryDescription) {
        categoryDescription = posts[i].node.frontmatter.categoryDescription
      }
    }
    let src
    const RecentPostCards = posts.map((post, i) => {
      // Checks if no featured image
      if (!post.node.frontmatter.featuredImage) {
        src = TestImg
      } else {
        src = post.node.frontmatter.featuredImage.childImageSharp.fluid.src
        // src = DawPic
      }


      return (
        // <GridItem gCS={i == 0 ? "1" : 'auto'} gCE={i == 0 ? "3" : 'auto'} >
        //  <GridItem gCS="1" gCE="3" >
        <GridItem >
          <PostCardBlog
            key={post.node.fields.slug}
            // learnOrBlog={post.node.frontmatter.category}
            // snippet={i < 2 ? post.node.excerpt : ''}
            snippet={post.node.excerpt}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            // category={post.node.frontmatter.category}
            // subcategory={post.node.frontmatter.subcategory}
            slug={post.node.fields.slug}
            src={src}
            tags={post.node.frontmatter.tags}
            // titleHeight={i > 0 ? "59px" : 'auto'}
            titleHeight="59px"
            // tagsHeight={i > 0 ? "59px" : 'auto'}
            tagsHeight="59px"
          />
        </GridItem>
      )


    })




    return (
      <SiteContainer>
        <PageTitle text={categoryHeader} description={categoryDescription} />
        <GridContainer gTC="repeat(3, 1fr)" gTCL="repeat(2, 1fr)" gTCM="repeat(1, 1fr)" gridGap="20px 20px" className="mT40 mB40">
          {RecentPostCards}
        </GridContainer>
      </SiteContainer>
    )

  }
}



export default Category

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
             title
             tags
             categoryDescription
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



// let src
// let categoryDescription

// for (let i = 0; i < posts.length; i++) {
//   if (posts[i].node.frontmatter.categoryDescription) {
//     categoryDescription = posts[i].node.frontmatter.categoryDescription
//   }
// }

// let PostCardSeriesCollection = posts.map((post, i) => {
//   if (post.node.frontmatter.featuredImage) {
//     src = post.node.frontmatter.featuredImage.childImageSharp.fluid.src;
//   } else {
//     src = TestImg
//   }
//   return (
//     <PostCardSeries
//       // number={i + 1}
//       key={post.node.fields.slug}
//       title={post.node.frontmatter.title}
//       description={post.node.excerpt}
//       to={post.node.fields.slug}
//       img={src}
//     />
//   )
// })

// return (
//   <SiteContainer>
//     <PageTitle text={categoryHeader} description={categoryDescription} />
//     <GridContainer className="mT40 mB40" gridGap="40px" gTC="1fr" gTCL="1fr" gTCM="1fr">
//       {PostCardSeriesCollection}
//     </GridContainer>
//   </SiteContainer>
// )