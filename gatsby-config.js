module.exports = {
  siteMetadata: {
    title: 'Music Sequencing',
    author: 'Alex Nye',
    description: 'Learn Music Production: Free Tutorials and Gear Reviews',
    siteUrl: 'https://www.musicsequencing.com',
  },
  pathPrefix: '/',
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/imgs`,
        name: 'uploads',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'images',
      },
    },
    //Note: I have excluded tag pages in the gatsby sitemap plugin via inside the node modules - see here under options for how / why https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/
    // `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/ms-sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: ["/tags/*"],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`
      }
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 27px; z-index: 1; overflow: visible`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750, // This needs to be the same as the article width in the Theme. See sytles/theme msTheme.widths.articlewidth
              wrapperStyle: `margin-bottom: 27px; z-index: -1;`,
            },
          },

          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',

        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
          },
          {
            family: `Crimson Text`,
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-100042737-1`,
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/midi-sequencing-icon-circle.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    // {
    //   resolve: 'gatsby-plugin-typography',
    //   options: {
    //     pathToConfigModule: 'src/utils/typography',
    //   },
    // },
    // `gatsby-plugin-stripe-checkout`,
    'gatsby-plugin-netlify-cache',
    {
      resolve: `gatsby-plugin-netlify`, // need to stay last in plugin
      options: {
        headers: {
          "/*": [
            "X-Frame-Options: SAMEORIGIN"
          ],
          "/post/*": [
            "X-Frame-Options: SAMEORIGIN"
          ],
          "/article/*": [
            "X-Frame-Options: SAMEORIGIN"
          ]
        }, // option to add more headers. `Link` headers are transformed by the below criteria      
      }, // Needs to stay the last in Array of plugins
    }
  ],
}
