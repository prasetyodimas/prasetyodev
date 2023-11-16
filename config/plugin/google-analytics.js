module.exports = {
  trackingGaConfig: [
    {
      resolve: `gatsby-plugin-google-analytics-gdpr`,
      options: {
        trackingId: "G-YT5JG5R9LM",
        head: true,
        enableDevelopment: true,
        anonymizeIP: true,
        autoStartWithCookiesEnabled: false,
        reactGaOptions: {
          debug: true,
          gaOptions: {
            sampleRate: 10
          }
        }
      }
    }
  ]
}
