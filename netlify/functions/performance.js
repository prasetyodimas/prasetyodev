const fs = require("fs")
const path = require("path")

exports.handler = async () => {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "lighthouse-report.json"
    )

    if (!fs.existsSync(filePath)) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Report not found yet." }),
      }
    }

    const json = JSON.parse(fs.readFileSync(filePath, "utf8"))

    return {
      statusCode: 200,
      body: JSON.stringify({
        performance: json.categories.performance.score * 100,
        seo: json.categories.seo.score * 100,
        pwa: json.categories.pwa ? json.categories.pwa.score * 100 : null,
        accessibility: json.categories.accessibility.score * 100,
      }),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    }
  }
}
