import React from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
// import { rhythm, scale } from '../utils/typography'
import HomeLink from '../components/HomeLinkLogo'
import Footer from '../components/Footer'
// Utilities
import kebabCase from "lodash/kebabCase"
import Wrapper from "../components/Wrapper"

// Components



const TagsPage = ({
    data: {
        allMarkdownRemark: { group },
        site: {
            siteMetadata: { title },
        },
    },
}) => (
    
            <Wrapper>
                <HomeLink />
                <h1
                style={{ marginTop:'10px'}}
                >
                    Tags
                </h1>
                <ul
                    style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexFlow: 'wrap'
                    }}
                >
                    {group.map(tag => (
                        <li key={tag.fieldValue}
                            style={{
                                paddingRight: '15px'
                            }}
                        >
                            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                                {tag.fieldValue} ({tag.totalCount})
                            </Link>
                        </li>
                    ))}
                </ul>
                <Footer />
            </ Wrapper>

 
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
    allMarkdownRemark(
      limit: 2000
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`