const lighthouse = require("lighthouse")
const chromeLambda = require("chrome-aws-lambda")
const puppeteer = require("puppeteer-core")
const fs = require("fs")
const path = require("path")

module.exports = {
  onPostBuild: async ({ inputs, utils }) => {
    const siteUrl = inputs.site_url
    const outputPath = inputs.output_path || "public/lighthouse"

    // Launch Chromium using chrome-aws-lambda and puppeteer-core
    const browser = await puppeteer.launch({
      args: chromeLambda.args,
      defaultViewport: chromeLambda.defaultViewport,
      executablePath: await chromeLambda.executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
    })

    const page = await browser.newPage()
    await page.goto(siteUrl)

    const runnerResult = await lighthouse(siteUrl, {
      port: new URL(browser.wsEndpoint()).port,
      output: "json",
    })

    fs.mkdirSync(outputPath, { recursive: true })
    const reportPath = path.join(outputPath, "lighthouse-report.json")
    fs.writeFileSync(reportPath, runnerResult.report)

    await browser.close()

    utils.status.show({
      summary: `Lighthouse report saved to ${reportPath}`,
    })
  },
}
