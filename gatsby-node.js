const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
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
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;

        _.each(posts, (post, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;

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
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // if (node.internal.type === `MarkdownRemark`) {
  //   const value = createFilePath({ node, getNode })
  //   createNodeField({
  //     name: `slug`,
  //     node,
  //     value,
  //   });
  //   return
  // }
  if (node.internal.type === `MarkdownRemark` && getNode(node.parent).internal.type === `File`) {
    if (node.frontmatter.slug) {
      createNodeField({
        name: `slug`,
        node,
        value: node.frontmatter.slug,
      });
      return;
    }

    const fileNode = getNode(node.parent);
    if (fileNode.sourceInstanceName === 'pages') {
      let slug;
      if (fileNode.relativeDirectory) {
        // Remove date stamp in front, it's only useful for arranging our files/folders
        const paths = fileNode.relativeDirectory.split('/');
        const directParent = paths.pop();
        const dateString = directParent.substring(0, 10);

        if (isNaN(new Date(dateString).valueOf())) {
          // We'll use the path to the MD file as the slug.
          // eg: http://localhost:8000/blog/my-first-post
          slug = `/${fileNode.relativeDirectory}`;
        } else {
          // Remove the trailing hypen after the dateString
          slug = `/${paths.join('/')}/${directParent.substring(11)}`;
        }
      } else {
        // If the MD file is at src/pages, we'll use the filename instead.
        // eg: http://localhost:8000/about
        slug = `/${fileNode.name}`;
      }

      if (slug) {
        createNodeField({
          name: `slug`,
          node,
          value: slug,
        })
      }
    }
  }
}
