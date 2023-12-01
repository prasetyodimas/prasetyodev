const { notionConfig } = require("./plugin/notion")
const { sourceSystemConfig } = require("./plugin/source-system")
const { sharpConfig } = require("./plugin/sharp")
const { transformerSharpConfig } = require("./plugin/transformer-sharp")
const { imageConfig } = require("./plugin/image")
const { feedConfig } = require("./plugin/feed")
const { transformerRemarkConfig } = require("./plugin/transformer-remark")
const { cssPrepocessorConfig } = require("./plugin/css-prepocessor")
const { sitemapConfig } = require("./plugin/sitemap")
const { manifestConfig } = require("./plugin/manifest")
const { pwaConfig } = require("./plugin/pwa-offilne")
const { trackingGaConfig } = require("./plugin/google-analytics")
const { robotTxtConfig } = require("./plugin/robot-txt")

module.exports = {
  trackingGaConfig: trackingGaConfig,
  notionConfig: notionConfig,
  sharpConfig: sharpConfig,
  imageConfig: imageConfig,
  feedConfig: feedConfig,
  sourceSystemConfig: sourceSystemConfig,
  transformerSharpConfig: transformerSharpConfig,
  transformerRemarkConfig: transformerRemarkConfig,
  cssPrepocessorConfig: cssPrepocessorConfig,
  sitemapConfig: sitemapConfig,
  pwaConfig: pwaConfig,
  manifestConfig: manifestConfig,
  robotTxtConfig: robotTxtConfig,
}
