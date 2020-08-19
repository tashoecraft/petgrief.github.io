const path = require(`path`)


module.exports = {
  siteMetadata: {
    title: `Heart of Texas Pet Loss and Grief Support Group`,
    description: `Group is open to anyone grieving the loss of a beloved pet - whether a recent loss or not.`,
    author: `@melhhersh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#6495ED`,
        theme_color: `#6495ED`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
