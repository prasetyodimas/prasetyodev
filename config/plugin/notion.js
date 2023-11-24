require("dotenv").config()

module.exports = {
  notionConfig: [
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: process.env.INTEGRATION_TOKEN,
        databaseId: process.env.DATABASE_ID,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
  ],
}
