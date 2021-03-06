module.exports = {
  siteMetadata: {
    title: `Untrip`,
    description: `Kuala Lumpur Curated`,
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
        icon: `src/images/untrip-brand.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: "s18r43t6",
        dataset: "production",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-132758873-2",
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
