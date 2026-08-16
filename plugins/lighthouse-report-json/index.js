const fs = require("fs")
const path = require("path")

const { parseReportHtml, summarize } = require("./extract")

// Runs after @netlify/plugin-lighthouse (declaration order in netlify.toml
// decides the order of plugins listening to the same event) and turns the HTML
// report it just wrote into a small JSON file the site can fetch at runtime.
module.exports = {
  onPostBuild: ({ constants, inputs }) => {
    const publishDir = constants.PUBLISH_DIR
    const reportPath = path.join(publishDir, inputs.report_path)
    const outputPath = path.join(publishDir, inputs.output_path)

    if (!fs.existsSync(reportPath)) {
      // Missing report means the Lighthouse plugin was skipped or failed. That
      // already surfaces in its own logs, and the site degrades gracefully.
      console.log(`No Lighthouse report at ${reportPath}, skipping.`)
      return
    }

    const summary = summarize(
      parseReportHtml(fs.readFileSync(reportPath, "utf8"))
    )
    fs.writeFileSync(outputPath, JSON.stringify(summary))

    console.log(
      `Wrote ${inputs.output_path}: ${summary.categories
        .map(
          category => `${category.title} ${Math.round(category.score * 100)}`
        )
        .join(", ")}`
    )
  },
}
