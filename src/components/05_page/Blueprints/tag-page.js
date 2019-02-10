import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import SiteContainer from '../Layout/SiteContainer'
import { ArticleContainer } from '../ArticleContainer';
import { PageTitle } from '../../01_atom/PageTitle';

const TagsList = styled.ul`
  list-style-type: none;
  padding: 0px;
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  // const tagHeader = `Post${
  //   totalCount === 1 ? '' : 's'
  //   } tagged with "${tag}"`
  const tagHeader = `Posts with "${tag}"`

  return (
    <SiteContainer>
      <Helmet
        htmlAttributes={{ lang: 'en' }} // meta={[{ name: 'description', content: siteDescription }]}
        title={`${tag} | Music Sequencing`}
      />
      <PageTitle text={tagHeader}></PageTitle>
      <ArticleContainer>
        {/* <h1
        >{tagHeader}
        </h1> */}
        <TagsList>
          {edges.map(({ node }) => {
            const { title } = node.frontmatter
            const { slug } = node.fields
            return (
              <li key={slug} className="headerFont"
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
        <Link className="headerFont" to="/tags"
        // style={{ marginTop: '10px' }}
        >
          All tags
      </Link>

      </ArticleContainer>

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
      sort: { fields: [frontmatter___title], order: ASC }
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
