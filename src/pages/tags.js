import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { ArticleContainer } from '../components/05_page/ArticleContainer';



const TagsList = styled.ul`
   list-style-type: none;

  padding: 0px;
`

const TagsPage = ({
    data: {
        allMarkdownRemark: { group },
        site: {
            siteMetadata: { title },
        },
    },
}) => (
        <SiteContainer>
            <Helmet
                htmlAttributes={{ lang: 'en' }}
                meta={[{ name: 'description', content: 'All the tags on Music Sequencing' }]}
                title={`All Tags | ${title}`}
            />
            <ArticleContainer>
                <h1>All Tags</h1>
                <TagsList>
                    {group.map(tag => (
                        <li
                            key={tag.fieldValue}
                        >
                            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                                {tag.fieldValue} ({tag.totalCount})
          </Link>
                        </li>
                    ))}
                </TagsList>
            </ArticleContainer>
        </SiteContainer>
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
