const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/components/05_page/Blueprints/blog-post.js')
    const tagTemplate = path.resolve('./src/components/05_page/Blueprints/tag-page.js')
    const categoryTemplate = path.resolve('./src/components/05_page/Blueprints/category-page.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    category
                    tags
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges

        // Creates bottom blinks 
        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next =
            index === 0 ? null : posts[index - 1].node

          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })


        let tags = []  // Tag pages creation

        _.each(posts, edge => { // Iterate through each post, putting all found tags into `tags`
          if (_.get(edge, 'node.frontmatter.tags')) {
            tags = tags.concat(edge.node.frontmatter.tags)
          }
        })

        tags = _.uniq(tags) // Eliminate duplicate tags


        tags.forEach(tag => { // Make tag pages
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag,
            },
          })
        }) // End of tag page creation 


        let categories = []  // Tag pages creation

        _.each(posts, edge => { // Iterate through each post, putting all found category into `category`
          if (_.get(edge, 'node.frontmatter.category')) {
            categories = categories.concat(edge.node.frontmatter.category)
          }
        })

        categories = _.uniq(categories) // Eliminate duplicate tags


        categories.forEach(category => { // Make category pages
          createPage({
            path: `/learn/${_.kebabCase(category)}/`,
            component: categoryTemplate,
            context: {
              category,
            },
          })
        }) // End of tag page creation 



      }) // End of Then Function 

    ) // End Resolve Function 

  }) // End Of Promise

} // End Create Pages



exports.onCreateNode = ({ node, actions, getNode }) => {  //What happens to every programmatically created page
  const { createNodeField } = actions

  if (
    node.internal.type === `MarkdownRemark` &&
    getNode(node.parent).internal.type === `File`
  ) {
    if (node.frontmatter.slug) {
      createNodeField({
        name: `slug`,
        node,
        value: node.frontmatter.slug,
      })
      return
    }

    const fileNode = getNode(node.parent)
    if (fileNode.sourceInstanceName === 'pages') {
      let slug
      if (fileNode.relativeDirectory) {
        // Removes date stamp in front, it's only useful for arranging our files/folders
        const paths = fileNode.relativeDirectory.split('/')
        const directParent = paths.pop()
        const dateString = directParent.substring(0, 10)

        if (isNaN(new Date(dateString).valueOf())) {
          // We'll use the path to the MD file as the slug.
          // eg: http://localhost:8000/blog/my-first-post
          slug = `/${fileNode.relativeDirectory}`
        } else {
          // Remove the trailing hypen after the dateString
          slug = `/${paths.join('/')}/${directParent.substring(11)}`
        }
      } else {
        // If the MD file is at src/pages, we'll use the filename instead.
        // eg: http://localhost:8000/about
        slug = `/${fileNode.name}`
      }

      if (slug) {
        createNodeField({
          name: `slug`,
          node,
          value: slug,
        })
      }
      if (node.frontmatter.tags) { // if there are tags in the frontmatter, create links to their tag page
        const tagSlugs = node.frontmatter.tags.map(
          tag => `/tags/${_.kebabCase(tag)}/`
        )
        createNodeField({ node, name: `tagSlugs`, value: tagSlugs })
      }
    }
  }
}
