module.exports = {
  siteMetadata: {
    title: `Untrip`,
    description: `Untrip.app, An Insider's Guide to Kuala Lumpur`,
    author: `Tanner Gaucher <tannermichaelgaucher@gmail.com>`,
    social: {
      github: `http://github.com/tannergaucher`,
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `untrip.app`,
        short_name: `Untrip`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#fafafa`,
        display: `fullscreen`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: "s18r43t6",
        dataset: "production",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
