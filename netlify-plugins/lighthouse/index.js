const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const fs = require("fs");
const path = require("path");

module.exports = {
  onPostBuild: async ({ inputs, constants }) => {
    const url = inputs.site_url || constants.SITE_URL;
    console.log("🔍 Running Lighthouse on:", url);

    const chrome = await chromeLauncher.launch({
      chromeFlags: ["--headless", "--no-sandbox"]
    });

    const options = {
      logLevel: "info",
      output: "json",
      port: chrome.port
    };

    const runnerResult = await lighthouse(url, options);

    const output = runnerResult.report;

    const outputPath = path.join(process.cwd(), "public", "lighthouse-report.json");

    fs.writeFileSync(outputPath, output);

    console.log("✅ Lighthouse JSON saved at public/lighthouse-report.json");

    await chrome.kill();
  }
};
