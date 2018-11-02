module.exports = {
  siteMetadata: {
    title: 'Music Sequencing',
    author: 'Alex Nye',
    description: 'Music production Blog.',
    siteUrl: 'https://midisequencing.com',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              // wrapperStyle: `margin-bottom: 1.0725rem`
              wrapperStyle: `margin-bottom: 1.2rem; z-index: -1`
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.2rem; z-index:-1`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
              fonts: [
                {
                  family: `Roboto`
                },
              ],
            },
          }
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
    `gatsby-plugin-feed`,
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
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
   
    {
    resolve: 'gatsby-plugin-mailchimp',
    options: {
      endpoint: 'https://midisequencing.us15.list-manage.com/subscribe/post?u=959ef0b4d1c6a701f90f85f9e&amp;id=59168d9d12', // see instructions section below
      },
    },
  ],
}
