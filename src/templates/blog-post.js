import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
// import Bio from '../components/Bio'
import Wrapper from '../components/Wrapper'
import Menu from '../components/Menu/Menu'
import Layout from '../components/layout'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

// import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
    let tags
    if (post.frontmatter.tags) {
      tags = post.frontmatter.tags.map(tag => (
        <li key={tag}>
          <Link
            to={`/tags/${tag}`}
            style={{
              textDecoration: 'none',
              boxShadow: 'none',
              marginRight: '10px',
              color: '#2c62a9',
            }}
          >
            {`${tag}`}
          </Link>
        </li>
      ))
    }

    return (
      <Wrapper>
        {/* <Layout location={this.props.location}> */}
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <Menu sideNav={true} />
        <h1>{post.frontmatter.title}</h1>

        <ul
          style={
            {
              listStyle: 'none',
              display: 'flex',
              flexFlow: 'wrap',
              marginLeft: '0px',
              marginBottom: '20px',
            } // marginTop: rhythm(-1),
          }
        >
          {tags}
        </ul>

        {!post.frontmatter.hideDate && (
          <p
            style={
              {
                // ...scale(-1 / 5),
                display: 'block',
              }
              // marginBottom: rhythm(1),
              // marginTop: rhythm(-1),
            }
          >
            {post.frontmatter.date}
          </p>
        )}

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {/* <hr
          style={
            {
              // marginTop: rhythm(1),
              // marginBottom: rhythm(1),
            }
          }
        /> */}
        {/* <Bio /> */}

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            marginTop: '15px',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        {/* </Layout> */}
        <ScrollToTop scrollStepInPx="60" delayInMs="20" />
        <Footer />
      </Wrapper>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hideDate
        tags
      }
    }
  }
`
