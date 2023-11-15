/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config()
const {
  sharpConfig,
  sourceSystemConfig,
  transformerSharpConfig,
  imageConfig,
  feedConfig,
  transformerRemarkConfig,
  configCssPrepocessor,
  sitemapConfig,
  manifestConfig,
  pwaConfig
} = require('./config/plugins-gatbsby');
const {
  configSiteMetaData
} = require('./config/metadata-gatsby');

module.exports = {
  ...configSiteMetaData,
  plugins: [
    ...sitemapConfig,
    ...imageConfig,
    ...sharpConfig,
    ...feedConfig,
    ...sourceSystemConfig,
    ...configCssPrepocessor,
    ...transformerRemarkConfig,
    ...transformerSharpConfig,
    ...manifestConfig,
    ...pwaConfig
  ]
}
