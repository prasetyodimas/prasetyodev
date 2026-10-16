module.exports = {
  robotTxtConfig: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://prasetyodimas.my.id",
        sitemap: "https://prasetyodimas.my.id/sitemap.xml",
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
            userAgent: "*",
            disallow: ["/404", "/404.html"],
          },
        ],
      },
    },
  ],
}
