import React from "react"
import BlockElement from "./blockElement"

const stats = [
  { value: "8+", label: "Years of Experience" },
  { value: "10+", label: "Products Shipped" },
  { value: "5", label: "Industries (Fintech, SaaS, Health, Gov, Edu)" },
  { value: "Lead", label: "Frontend Team Leadership" },
]

const strengths = [
  {
    title: "End-to-End Delivery",
    description:
      "From UI architecture to API integration, CI/CD, and production monitoring — I ship complete products, not just screens.",
  },
  {
    title: "Proven at Scale",
    description:
      "Built and led frontend work for fintech lending platforms, hospital ERPs, SaaS products, and government systems used in production.",
  },
  {
    title: "Business-Minded Engineering",
    description:
      "I optimize for outcomes — faster release cycles, better performance scores, and higher user engagement — not just clean code.",
  },
]

const WhyHireMe = () => {
  return (
    <BlockElement
      className="why-hire-me section-surface px-4 py-5"
      component="div"
    >
      <div id="why-hire-me" className="why-hire-me-anchor" />
      <span className="section-eyebrow">Why Hire Me</span>
      <h4 className="text-center mt-0 mb-4">A Frontend Engineer Who Ships</h4>

      <div className="row row-cols-2 row-cols-lg-4 g-4 mb-5">
        {stats.map((stat, index) => (
          <div className="col" key={`stat-${index}`}>
            <div className="hire-stat h-100 text-center">
              <span className="hire-stat-value">{stat.value}</span>
              <span className="hire-stat-label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {strengths.map((item, index) => (
          <div className="col" key={`strength-${index}`}>
            <div className="service-card h-100">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <a className="service-card-cta" href="#get-in-touch">
                Let's talk →
              </a>
            </div>
          </div>
        ))}
      </div>
    </BlockElement>
  )
}

export default WhyHireMe
