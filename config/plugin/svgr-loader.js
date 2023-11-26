module.exports = {
  svgrConfig: [
    {
      resolve: "gatsby-plugin-svgr-loader",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
}
