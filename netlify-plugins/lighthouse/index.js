const lighthouse = require("lighthouse")
const chromeLambda = require("chrome-aws-lambda")
const fs = require("fs")
const path = require("path")

module.exports = {
  onPostBuild: async ({ inputs, utils }) => {
    const siteUrl = inputs.site_url
    const outputPath = inputs.output_path || "public/lighthouse"

    // Launch Chromium using chrome-aws-lambda
    const chrome = await chromeLambda.puppeteer.launch({
      args: chromeLambda.args,
      defaultViewport: chromeLambda.defaultViewport,
      executablePath: await chromeLambda.executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
    })

    const runnerResult = await lighthouse(siteUrl, {
      port: new URL(chrome.wsEndpoint()).port,
      output: "json",
    })

    // Ensure output directory exists
    fs.mkdirSync(outputPath, { recursive: true })

    // Save report
    const reportPath = path.join(outputPath, "lighthouse-report.json")
    fs.writeFileSync(reportPath, runnerResult.report)

    await chrome.close()

    utils.status.show({
      summary: `Lighthouse report saved to ${reportPath}`,
    })
  },
}
