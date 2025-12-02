module.exports = {
  robotTxtConfig: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://prasetyodev.netlify.app",
        sitemap: "https://prasetyodev.netlify.app/sitemap/sitemap-0.xml",
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
