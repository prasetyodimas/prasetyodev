module.exports = {
  robotTxtConfig: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://prasetyodev.gatsbyjs.io",
        sitemap: "https://prasetyodev.gatsbyjs.io/sitemap.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/",
          },
          {
            userAgent: "Mediapartners-Google",
            allow: "/",
          },
          {
            userAgent: "Googlebot",
            disallow: "/*.js$",
          },
          {
            userAgent: "*",
            disallow: "/*.json$",
          },
        ],
      },
    },
  ],
}
