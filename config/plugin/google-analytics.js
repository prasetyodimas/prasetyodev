require("dotenv").config({
  path: `.env`,
})

module.exports = {
  trackingGaConfig: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`${process.env.GATSBY_GA_SECRET}`],
        pluginConfig: {
          head: true,
          respectDNT: true,
          delayOnRouteUpdate: 0,
        },
      },
    },
  ],
}
