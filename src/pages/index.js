import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      postsShown: 5 // The Initial posts to be shown
    }
    this.showMorePosts = this.showMorePosts.bind(this);
  }
  showMorePosts(){
    this.setState({
      postsShown: this.state.postsShown + 5 // Additional posts to be shown
    })
  }
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const showPosts = posts.slice(0, this.state.postsShown);// Essentially we are faking the lazy loading of posts / pagination 
    const showPostsButton = <button onClick={this.showMorePosts}>Show More</button>
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: '../assets/midi-sequencing-icon.png' }
          ]}
        />
        <Bio />

        {/* Below is the Posts list Render */}
        {showPosts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          // Retrieves and creats tag info for each Post
          let tags
          if (node.frontmatter.tags) {
            tags = node.frontmatter.tags.map(tag =>
              <li
                key={tag}
              >
                <Link
                  to={`/tags/${tag}`}
                  className="hoverPointer"
                  style={{
                    display: 'flex',
                    textDecoration: 'none',
                    flexFlow: 'wrap',
                    boxShadow: 'none',
                    marginRight: '10px',
                  }}
                >
                  {`${tag}`}
                </Link>
              </li>
            )
          }

          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
             
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexFlow: 'wrap',
                  marginTop: rhythm(-.5),
                  marginLeft: "0px"
                }}
              >
                {tags}
              </ul> 
            </div>
          )
        })}
        {/* Conitional rendering of show more button */}
        {
          this.state.postsShown < posts.length ? 
          <div>{showPostsButton} <br></br>
              <p style={{
                marginTop:"10px"
              }}>{this.state.postsShown} of {posts.length} posts</p>
          </div>  : 
          <div>
            That's all my posts :)
            <br></br>
              <p>Please consider signing up for my mailing list below. </p>
            </div> 
        }
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
