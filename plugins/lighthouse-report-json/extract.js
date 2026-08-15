// The standalone Lighthouse HTML report embeds the full result object as
// `window.__LIGHTHOUSE_JSON__ = {...};</script>`. Lighthouse sanitizes the JSON
// so it can never contain a literal `</script>`, which makes that the only safe
// delimiter to split on.
const LHR_PATTERN = /window\.__LIGHTHOUSE_JSON__\s*=\s*([\s\S]*?);<\/script>/

const METRICS = [
  { id: "first-contentful-paint", label: "First Contentful Paint" },
  { id: "largest-contentful-paint", label: "Largest Contentful Paint" },
  { id: "total-blocking-time", label: "Total Blocking Time" },
  { id: "cumulative-layout-shift", label: "Cumulative Layout Shift" },
  { id: "speed-index", label: "Speed Index" },
  { id: "interactive", label: "Time to Interactive" },
]

const parseReportHtml = html => {
  const match = html.match(LHR_PATTERN)
  if (!match) {
    throw new Error("No __LIGHTHOUSE_JSON__ payload found in the report")
  }
  return JSON.parse(match[1])
}

/**
 * Reduce a full Lighthouse result to the handful of fields the site renders,
 * so we ship a few hundred bytes instead of a multi-megabyte report.
 */
const summarize = lhr => ({
  fetchTime: lhr.fetchTime,
  lighthouseVersion: lhr.lighthouseVersion,
  formFactor: lhr.configSettings?.formFactor || null,
  categories: Object.values(lhr.categories || {})
    .filter(category => typeof category.score === "number")
    .map(category => ({
      id: category.id,
      title: category.title,
      score: category.score,
    })),
  metrics: METRICS.filter(
    metric =>
      lhr.audits?.[metric.id]?.score !== null &&
      lhr.audits?.[metric.id] !== undefined
  ).map(metric => ({
    id: metric.id,
    label: metric.label,
    displayValue: lhr.audits[metric.id].displayValue || null,
    score: lhr.audits[metric.id].score,
  })),
})

module.exports = { parseReportHtml, summarize }
