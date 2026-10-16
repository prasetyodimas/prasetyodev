module.exports = {
  cssPrepocessorConfig: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          silenceDeprecations: [
            "import",
            "if-function",
            "global-builtin",
            "color-functions",
            "legacy-js-api",
          ],
        },
      },
    },
  ],
}
