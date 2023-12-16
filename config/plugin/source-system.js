module.exports = {
  sourceSystemConfig: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `./src/assets`,
      },
    },
  ],
}
