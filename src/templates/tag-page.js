import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import SiteContainer from '../components/05_page/Layout/SiteContainer'

// Components
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

const TagsList = styled.ul`
  list-style-type: '';
  display: 'flex';
  flex-flow: 'wrap';
  margin: '0px 0px 50px 0px';
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
    } tagged with "${tag}"`

  return (
    <SiteContainer>
      <Helmet
        htmlAttributes={{ lang: 'en' }} // meta={[{ name: 'description', content: siteDescription }]}
        title={`${tag} | Music Sequencing`}
      />
      <h1
      // style={{ marginTop: '10px' }}
      >{tagHeader}
      </h1>
      <TagsList>
        {edges.map(({ node }) => {
          const { title } = node.frontmatter
          const { slug } = node.fields
          return (
            <li key={slug}
            // style={{ marginBottom: '10px' }}
            >
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </TagsList>
      {/*
              This links to a page that does not yet exist.
              We'll come back to it!
            */}
      <Link to="/tags"
      // style={{ marginTop: '10px' }}
      >
        All tags
      </Link>
    </SiteContainer>
  )
}

// Tags.propTypes = {
//   pageContext: PropTypes.shape({
//     tag: PropTypes.string.isRequired,
//   }),
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       totalCount: PropTypes.number.isRequired,
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape({
//             frontmatter: PropTypes.shape({
//               path: PropTypes.string.isRequired,
//               title: PropTypes.string.isRequired,
//             }),
//           }),
//         }).isRequired
//       ),
//     }),
//   }),
// }

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
