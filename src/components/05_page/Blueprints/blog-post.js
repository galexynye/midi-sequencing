import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import SiteContainer from '../Layout/SiteContainer'
import { ArticleContainer } from '../ArticleContainer'
import { msTheme } from '../../../styles/Theme'
import { LearnCards } from '../../03_organism/LearnCards';
import { GridContainer } from '../../00_utilities/Utilities';
import { ShareButtons } from '../../02_molecule/ShareButtons'


// import ScrollToTop from '../components/ScrollToTop'

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isTop: true
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this._handleScroll);
  }


  componentWillUnmount() {
    window.removeEventListener('scroll', this._handleWindowSizeChange)
  }

  _handleScroll = () => {
    const isTop = window.scrollY < 100;
    if (isTop !== this.state.isTop) {
      this.onScroll(isTop);
    }
    let body = document.body,
      html = document.documentElement;

    let height = Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight);
    if (window.scrollY >= height - 1200) {
      this.setState({ isTop: true })
    }
    console.log(height)
    console.log(window.scrollY)

  }

  onScroll = (isTop) => {
    this.setState({ isTop });
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
    const author = post.frontmatter.author
    const category = post.frontmatter.category
    let tags
    if (post.frontmatter.tags) {
      tags = post.frontmatter.tags.map(tag => (
        <li key={tag}>
          <Link
            className="headerFont"
            to={`/tags/${tag}`}
            style={{
              textDecoration: 'none',
              boxShadow: 'none',
              margin: '0px 5px',
              color: msTheme.colors.primary,
            }}
          >
            {`${tag}`}
          </Link>
        </li>
      ))
    }

    return (
      <div>

        {!this.state.isTop && <ShareButtons url={`https://www.musicsequencing.com${post.fields.slug}`} />}
        <SiteContainer>

          <ArticleContainer>
            {/* <Layout location={this.props.location}> */}
            <Helmet
              htmlAttributes={{ lang: 'en' }}
              meta={[{ name: 'description', content: `${post.frontmatter.metaDescription ? post.frontmatter.metaDescription : post.excerpt}` }]}
              title={`${post.frontmatter.title} - ${post.frontmatter.category}`}
            >
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" />
              {/* Embed for the forum posts */}
              <script type="text/javascript">{`
              DiscourseEmbed = {discourseUrl: 'https://forum.musicsequencing.com/',
                                 discourseEmbedUrl: 'https://www.musicsequencing.com${post.fields.slug}' };
            
              (function() {
                var d = document.createElement('script'); d.type = 'text/javascript'; d.async = true;
                          d.src = DiscourseEmbed.discourseUrl + 'javascripts/embed.js';
                          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);
                        })();`
              }
              </script>

            </Helmet>
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
                }
              }
            >
              <li className="headerFont">Tags: </li>
              {tags}
            </ul>
            {/* <p>by {author}</p> */}
            {post.frontmatter.updated && <p>{`Updated : ${post.frontmatter.updated}`} </p>}
            {(!post.frontmatter.hideDate && !post.frontmatter.updated) && <p>{post.frontmatter.date}</p>}

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
            {/* <p>written by {author}</p> */}


            <ShareButtons
              url={`https://www.musicsequencing.com${post.fields.slug}/`}
              displaySmall="block"
              position="static"
              flexFlow="row"
            />

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


            <GridContainer>
              <h2 className="mB0">Learn More</h2>
            </GridContainer>
            <LearnCards hideDescription={true} gTC="1fr 1fr" />

            <div id='discourse-comments'></div>



          </ArticleContainer>
        </SiteContainer>
      </div>
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
      fields{
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        updated(formatString: "MMMM DD, YYYY")
        hideDate
        tags
        author
        category
        subcategory
        metaDescription
      }
    }
  }
`
