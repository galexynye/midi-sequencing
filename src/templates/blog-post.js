import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Wrapper from '../styles/oldCrap/Wrapper'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import ArticleContainer from '../components/05_page/Layout/ArticleContainer'
import Menu from '../components/MainNavigation/Menu'
import Footer from '../components/Footer'

// import ScrollToTop from '../components/ScrollToTop'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
    const author = post.frontmatter.author
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
      <SiteContainer>
        <ArticleContainer>
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
                padding: "0px",
                flexFlow: 'wrap',
                marginLeft: '0px',
                marginBottom: '20px',
              } // marginTop: rhythm(-1),
            }
          >
            {tags}
          </ul>
          {/* <p>by {author}</p> */}
          <p>{!post.frontmatter.hideDate && post.frontmatter.date}</p>

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
          <p>written by {author}</p>
          <ul
          // style={{
          //   display: 'flex',
          //   flexWrap: 'wrap',
          //   justifyContent: 'space-between',
          //   listStyle: 'none',
          //   marginTop: '15px',
          //   padding: 0,
          // }}
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
          {/* <ScrollToTop scrollStepInPx="60" delayInMs="20" /> */}
          <Footer />
        </ArticleContainer>
      </SiteContainer>
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
        author
      }
    }
  }
`
