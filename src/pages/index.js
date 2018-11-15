import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Bio from '../components/Bio'
import Layout from '../components/layout'
import HomeLink from '../components/HomeLinks/HomeLinkLogo'
import HomeWrapper from '../styled/HomeWrapper'
import HomeCardsWrapper from '../styled/HomeCardsWrapper'
import LandingCard from '../components/LandingCards/LandingCard'
import favicon from '../assets/midi-sequencing-icon-circle.png'

const HomeLinkWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`

class BlogIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postsShown: 5, // The Initial latest posts to be shown
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
            meta={[
              { name: 'description', content: siteDescription },
              {
                name: 'google-site-verification',
                content: 'ApEgiydr2XV738hMqiDL6JyWjg0Cq5ybbWmQrnDHq9c',
              },
            ]}
            title={siteTitle}
            link={[
              {
                rel: 'shortcut icon',
                type: 'image/png',
                href: `${favicon}`,
              },
            ]}
          />
          <HomeLinkWrapper>
            <HomeLink />
          </HomeLinkWrapper>
          <Bio />

          {/* <h1>Featured Content</h1> */}
          {/* <HomeCardsWrapper> */}
          {/* <h2 style={{ margin: '50px 0px 20px 0px', fontSize: '40px' }}>
            Welcome to Music Sequencing!
          </h2> */}
          <HomeCardsWrapper>
            <LandingCard
              image={require('../assets/LandingCards/BuildAStudio.jpg')}
              title="How To Build A Studio from Nothing to Everything"
              link="/article/how-to-build-a-studio"
              caption="This article goes from downloading your first DAW all the way to 
            the top gear used by the worlds best pros."
            />
            <LandingCard
              image={require('../assets/LandingCards/Bunch-Of-EQs-picture-1.jpg')}
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
              image={require('../assets/LandingCards/Daws-20.jpg')}
              title="Which DAW should you Use?"
              link="/article/which-daw-should-you-use"
              caption="An electronic producer uses different tools than a producer recording bands. Find out which DAW is best for your needs."
            />
            <LandingCard
              image={require('../assets/LandingCards/Routing-Audio-1-1024x626.png')}
              title="Mix Routing Guide"
              link="/article/how-to-set-up-a-mix"
              caption="Sessions can get out of hand if you don't have a plan in place. This Mix Routing Guide will keep you organized even if you have thousands of tracks."
            />
            <LandingCard
              image={require('../assets/LandingCards/phil-plugins-1.jpg')}
              title="Mixing Drums to Sound like Phil Collins"
              link="/article/mix-drums-like-phil-collins"
              caption="This now classic technique for mixing drums with a gated reverb is still ubiquitous in music today. Here we explore how the original sound came to be and reproduce it."
            />
          </HomeCardsWrapper>
          {/* </HomeCardsWrapper> */}
          {/* Below is the Posts list Render */}
          {/* */}
          <h2 style={{ margin: '50px 0px 20px 0px', fontSize: '40px' }}>
            Latest
          </h2>
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
                      color: '#2c62a4',
                    }}
                  >
                    {`${tag}`}
                  </Link>
                </li>
              ))
            }

            return (
              <div key={node.fields.slug}>
                <h3 style={{ marginBotton: '0px' }}>
                  <Link
                    style={{ boxShadow: 'none', marginBottom: '0px' }}
                    to={node.fields.slug}
                  >
                    {title}
                  </Link>
                </h3>

                <ul
                  style={
                    {
                      listStyle: 'none',
                      display: 'flex',
                      flexFlow: 'wrap',
                      marginTop: '-10px',
                      marginBottom: '5px',
                      marginLeft: '0px',
                    } // marginTop: rhythm(-0.5),
                  }
                >
                  {tags}
                </ul>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{ __html: node.excerpt }}
                  style={{ margin: '5px 0px 40px 0px' }}
                />
              </div>
            )
          })}

          {/* Conitional rendering of show more button */}
          {this.state.postsShown < posts.length ? (
            <div>
              {showPostsButton} <br />
              {/* <p style={{ marginTop: '10px' }}>
                {this.state.postsShown} of {posts.length} posts
              </p> */}
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
