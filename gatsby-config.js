module.exports = {
  siteMetadata: {
    brand: `pr.`,
    title: `Pavan Rao`,
    description: `The personal website of Pavan Rao 
      (built with React and Gatsby.`,
    author: `Pavan Rao (@pavanpej)`,
    siteUrl: `https://pavanpej.github.io/`,
    image: `content/assets/favicon-grey.png`,
    social: {
      twitter: `@pavanpej`,
      linkedin: `https://linkedin.com/in/pavanpej`
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `pavanpej.github.io`,
        short_name: `pavanpej.github.io`,
        start_url: `/`,
        background_color: `#073b3a`,
        theme_color: `#ffe347`,
        display: `minimal-ui`,
        icon: `content/assets/favicon-grey.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
