module.exports = {
  manifestConfig: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tech Portofolio and Blog`,
        short_name: `prasetyodev`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    }
  ]
}

