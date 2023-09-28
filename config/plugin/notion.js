module.exports = {
    notionConfig: [
        {
            resolve: `gatsby-source-notion-api`,
            options: {
                token: `$INTEGRATION_TOKEN`,
                databaseId: `$DATABASE_ID`,
                propsToFrontmatter: true,
                lowerTitleLevel: true,
            }
        }
    ]
  }

