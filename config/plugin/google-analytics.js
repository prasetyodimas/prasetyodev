const config = require('gatsby-plugin-config');

module.exports = {
  trackingGaConfig: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `${config.GA_SECRET}`
        ],
        pluginConfig: {
          head: true,
          respectDNT: true,
          delayOnRouteUpdate: 0,
        },
      }
    }
  ]
}
