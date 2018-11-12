import React from 'react'
import Helmet from 'react-helmet'
import Wrapper from '../components/Wrapper'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
// import Helmet from "react-helmet"
import HomeLink from '../components/HomeLinks/HomeLinkLogo'
import Footer from '../components/Footer'
import Menu from '../components/Menu/Menu'
// Utilities
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'

const TagsList = styled.ul`
  list-style-type: '';
  display: 'flex';
  flex-flow: 'wrap';
  margin: '0px 0px 20px 0px';
`

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Wrapper>
    <Helmet
      htmlAttributes={{ lang: 'en' }} // meta={[{ name: 'description', content: siteDescription }]}
      title={`All Tags | Music Sequencing`}
    />
    <Menu sideNav={true} />
    <HomeLink />
    <h1 style={{ marginTop: '10px' }}>All Tags</h1>
    <TagsList>
      {group.map(tag => (
        <li
          key={tag.fieldValue}
          style={{
            paddingRight: '15px',
          }}
        >
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        </li>
      ))}
    </TagsList>
    <Footer />
  </Wrapper>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
