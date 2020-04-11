
import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { PageTitle } from '../components/01_atom/PageTitle'
import { GridContainer, GridItem } from '../components/00_utilities/Utilities';
import { PostCardBlog } from '../components/02_molecule/PostCardBlog';
import DawPic from '../assets/LandingCards/Daws-20.jpg'

class Latest extends React.Component {

    render() {
        const { data } = this.props
        let posts = data.allMarkdownRemark.edges
        let src
        const RecentPostCards = posts.map((post, i) => {
            // Checks if no featured image
            if (!post.node.frontmatter.featuredImage) {
                src = DawPic
            } else {
                src = post.node.frontmatter.featuredImage
                // src = DawPic
            }


            return (
                <GridItem >
                    <PostCardBlog
                        key={post.node.fields.slug}
                        learnOrBlog={post.node.frontmatter.category}
                        // snippet={i < 2 ? post.node.excerpt : ''}
                        // snippet={post.node.excerpt}
                        date={post.node.frontmatter.updated ? post.node.frontmatter.updated : post.node.frontmatter.date}
                        title={post.node.frontmatter.title}
                        // category={post.node.frontmatter.category}
                        subcategory={post.node.frontmatter.subcategory}
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
                <Helmet
                    meta={[{ name: 'description', content: 'Opinions on music gear and other thoughts in the world of music production' }]}
                    title={`Music Production Blog | Posts and Opinions about Producing`}
                />
                <PageTitle text="Articles" description="Tutorials, Gear Reviews and Other Thoughts"></PageTitle>
                <GridContainer gTC="repeat(3, 1fr)" gTCL="repeat(2, 1fr)" gTCM="repeat(1, 1fr)" gridGap="20px 20px" className="mT40 mB40">
                    {RecentPostCards}
                </GridContainer>
            </SiteContainer>
        )
    }
}

export default Latest



export const articleListQuery = graphql`
 query articleListQuery($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: {fields: frontmatter___date, order: DESC}  
    limit: $limit 
    skip:$skip
    ) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          updated(formatString: "MMMM DD, YYYY")
          category
          subcategory
          blog
          tags
          featuredImage
        }
      }
    }
  }
}
`
