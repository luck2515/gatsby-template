module.exports = {
  siteMetadata: {
    title: `gatsby template`,
    description: `this is gatsby template`,
    author: `@luck2515_`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `types/graphql-types.d.ts`
      }
    }
  ],
}
