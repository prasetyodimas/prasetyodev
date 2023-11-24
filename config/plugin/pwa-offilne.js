module.exports = {
  pwaConfig: [
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          importWorkboxFrom: `cdn`,
        },
      },
    },
  ],
}
