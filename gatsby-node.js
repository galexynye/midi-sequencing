const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')




exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogPost = path.resolve('./src/components/05_page/Blueprints/blog-post.js')
  const tagTemplate = path.resolve('./src/components/05_page/Blueprints/tag-page.js')
  const categoryTemplate = path.resolve('./src/components/05_page/Blueprints/category-page.js')
  const result = await graphql(
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
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  // Creates bottom links 
  _.each(posts, (post, index) => {
    const previous =
      index === posts.length - 1 ? null : posts[index + 1].node
    const next =
      index === 0 ? null : posts[index - 1].node

    // creates Actual Blog Post Page
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


  let categories = []  // Category pages creation

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

} // End Create Pages



exports.onCreateNode = ({ node, actions, getNode }) => {  //What happens to every programmatically created page
  const { createNodeField } = actions // extracts createNodeField from actions and names the variable createNodeField






  // Formating pages created from Markdown
  if (node.internal.type === `MarkdownRemark` && getNode(node.parent).internal.type === `File`) {
    if (node.frontmatter.slug) { // Changes the Slug Name if the slug is in the front matter (not used by me)
      createNodeField({
        name: `slug`,
        node,
        value: node.frontmatter.slug,
      })
      return
    }

    const fileNode = getNode(node.parent) // getNode Gets single node by given ID. 

    if (fileNode.sourceInstanceName === 'pages') {
      let slug
      // Naming the slug from the file names
      if (fileNode.relativeDirectory) {
        const relDir = fileNode.relativeDirectory
        let fileNameDateRemoved = fileNode.name.substring(11)
        const dateString = fileNode.name.substring(0, 10) // Removes the dateString         

        if (isNaN(new Date(dateString).valueOf())) { // any markdown files without a date, do not need the date removed
          if (relDir === 'pages') {
            slug = `/${fileNode.name}`
          } else {
            slug = `/${relDir}/${fileNode.name}`
          }

        } else
          if (relDir.split("/")[0] === 'article') { // this is to account for the old system where the slug came from the relative folder name
            slug = `/article/${fileNameDateRemoved}`
          } else if (relDir.split('/')[0] === 'post') { // this is to account for the old system where the slug came from the relative folder name
            slug = `/post/${fileNameDateRemoved}`
          } else {
            slug = `/${relDir}/${fileNameDateRemoved}`
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



}
