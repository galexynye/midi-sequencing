import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Bio from '../components/Bio'
import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import HomeWrapper from '../styled/HomeWrapper'
import HomeCardsWrapper from '../styled/HomeCardsWrapper'
// import ImgBuildStudio from '../assets/LandingCards/BuildAStudio.jpg'
// import ImgEQ from '../assets/LandingCards/Bunch-Of-EQs-picture-1.png'
// import ImgReverb from '../assets/LandingCards/Reverb-Diagram-1.png'
// import ImgRouting from '../assets/LandingCards/Routing-Audio-1-1024x626.png'
import LandingCard from '../components/LandingCards/LandingCard'

class BlogIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postsShown: 5, // The Initial posts to be shown
    }
    this.showMorePosts = this.showMorePosts.bind(this)
  }
  showMorePosts() {
    this.setState({
      postsShown: this.state.postsShown + 5, // Additional posts to be shown
    })
  }
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const showPosts = posts.slice(0, this.state.postsShown) // Essentially we are faking the lazy loading of posts / pagination
    const showPostsButton = (
      <button onClick={this.showMorePosts}>Show More</button>
    )
    return (
      <HomeWrapper>
        <Layout location={this.props.location}>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[{ name: 'description', content: siteDescription }]}
            title={siteTitle}
            link={[
              {
                rel: 'shortcut icon',
                type: 'image/png',
                href: '../assets/midi-sequencing-icon.png',
              },
            ]}
          />

          <Bio />
          {/* <HomeCardsWrapper> */}
          <HomeCardsWrapper>
            <LandingCard
              image={require('../assets/LandingCards/BuildAStudio.jpg')}
              title="How To Build A Studio from Nothing to Everything"
              link="/article/how-to-build-a-studio"
              caption="This article goes from downloading your first DAW all the way to 
            the top gear used by the worlds best pros."
            />
            <LandingCard
              image={require('../assets/LandingCards/Bunch-Of-EQs-picture-1.png')}
              title="EQ Essentials"
              link="/article/eq-essential-techniques"
              caption="In this guide you will learn the different types of EQs, why they are important, and how to use them."
            />
            <LandingCard
              image={require('../assets/LandingCards/Reverb-Diagram-1.png')}
              title="Reverb: The Definitive Guide"
              link="/article/reverb-essentials"
              caption={`Called, "The Best Reverb tutorial on the internet" this comprehensive guide details the different types of reverbs, how to set them up in a mix, and some history behind reverb.`}
            />
            <LandingCard
              image={require('../assets/LandingCards/Routing-Audio-1-1024x626.png')}
              title="Mix Routing Guide"
              link="/article/how-to-set-up-a-mix"
              caption="Sessions can get out of hand if you don't have a plan in place. This Mix Routing Guide will keep you organized even if you have thousands of tracks."
            />
            <LandingCard
              image={require('../assets/LandingCards/Routing-Audio-1-1024x626.png')}
              title="Mix Routing Guide"
              link="/article/how-to-set-up-a-mix"
              caption="Sessions can get out of hand if you don't have a plan in place. This Mix Routing Guide will keep you organized even if you have thousands of tracks."
            />
            <LandingCard
              image={require('../assets/LandingCards/Routing-Audio-1-1024x626.png')}
              title="Mix Routing Guide"
              link="/article/how-to-set-up-a-mix"
              caption="Sessions can get out of hand if you don't have a plan in place. This Mix Routing Guide will keep you organized even if you have thousands of tracks."
            />
          </HomeCardsWrapper>
          {/* </HomeCardsWrapper> */}
          {/* Below is the Posts list Render */}
          {/* */}
          {showPosts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            // Retrieves and creats tag info for each Post
            let tags
            if (node.frontmatter.tags) {
              tags = node.frontmatter.tags.map(tag => (
                <li key={tag}>
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
              ))
            }

            return (
              <div key={node.fields.slug}>
                <h3>
                  <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                {/* <small>{node.frontmatter.date}</small> */}
                <ul
                  style={
                    {
                      listStyle: 'none',
                      display: 'flex',
                      flexFlow: 'wrap',
                      marginTop: '-10px',
                      marginLeft: '0px',
                    } // marginTop: rhythm(-0.5),
                  }
                >
                  {tags}
                </ul>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}
          {/* Conitional rendering of show more button */}
          {this.state.postsShown < posts.length ? (
            <div>
              {showPostsButton} <br />
              <p style={{ marginTop: '10px' }}>
                {this.state.postsShown} of {posts.length} posts
              </p>
            </div>
          ) : (
            <div>
              That's all my posts :)
              <br />
              {/* <p>Please consider signing up for my mailing list below. </p> */}
            </div>
          )}
        </Layout>
      </HomeWrapper>
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
