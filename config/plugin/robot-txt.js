module.exports = {
  robotTxtConfig: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://prasetyodimas.my.id",
        sitemap: "https://prasetyodimas.my.id/sitemap/sitemap-0.xml",
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
