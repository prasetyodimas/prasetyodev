const { trackingGA } = require('./plugin/google-analytics');
const { notionConfig } = require('./plugin/notion');
const { sourceSystemConfig } = require('./plugin/source-system');

module.exports = {
  trackingGA: trackingGA,
  notionConfig: notionConfig,
  sourceSystemConfig: sourceSystemConfig,
}
