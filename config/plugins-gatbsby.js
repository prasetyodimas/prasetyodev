const { trackingGA } = require('./plugin/google-analytics');
const { notionConfig } = require('./plugin/notion');
const { sourceSystemConfig } = require('./plugin/source-system');
const { sharpConfig } = require('./plugin/sharp');
const { transformerSharpConfig } = require('./plugin/transformer-sharp');
const { imageConfig } = require('./plugin/image');
const { feedConfig } = require('./plugin/feed');
const { transformerRemarkConfig } = require('./plugin/transformer-remark');
const { configCssPrepocessor } = require('./plugin/css-prepocessor');
const { sitemapConfig } = require('./plugin/sitemap');
const { manifestConfig } = require('./plugin/manifest');
const { pwaConfig } = require('./plugin/pwa-offilne');

module.exports = {
  trackingGA: trackingGA,
  notionConfig: notionConfig,
  sharpConfig: sharpConfig,
  imageConfig: imageConfig,
  feedConfig: feedConfig,
  sourceSystemConfig: sourceSystemConfig,
  transformerSharpConfig: transformerSharpConfig,
  transformerRemarkConfig: transformerRemarkConfig,
  configCssPrepocessor: configCssPrepocessor,
  sitemapConfig: sitemapConfig,
  pwaConfig: pwaConfig,
  manifestConfig: manifestConfig
}
