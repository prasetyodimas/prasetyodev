import React from "react"
import BlockElement from "./blockElement"
import recommendations from "../data/recommendations"

const LINKEDIN_PROFILE = "https://www.linkedin.com/in/dimas-prasetyo"

const Recommendations = () => {
  if (recommendations.length === 0) return null

  return (
    <BlockElement
      className="porto-section recommendations px-4 py-5"
      component="div"
    >
      <div id="recommendations" className="recommendations-anchor" />
      <header className="porto-section-header">
        <span className="section-eyebrow">Testimonials</span>
        <h3 className="porto-section-title">What Colleagues Say About Me</h3>
        <p className="porto-section-desc">
          Recommendations from teammates, leads, and clients — imported from my
          LinkedIn profile.
        </p>
      </header>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 porto-grid">
        {recommendations.map(rec => (
          <div className="col" key={rec.slug}>
            <div className="porto-card recommendation-card h-100">
              <div className="porto-card-body">
                <span className="recommendation-quote-mark" aria-hidden="true">
                  &ldquo;
                </span>
                <p className="porto-card-summary recommendation-text">
                  {rec.text}
                </p>
                <div className="porto-card-meta">
                  <span className="porto-card-role">{rec.name}</span>
                  <span className="porto-card-period">{rec.date}</span>
                </div>
                <h3 className="porto-card-title recommendation-title">
                  {rec.jobTitle}
                  {rec.company ? ` · ${rec.company}` : ""}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <a
          href={`${LINKEDIN_PROFILE}/details/recommendations/`}
          target="_blank"
          rel="noreferrer"
          className="recommendation-link"
        >
          View all recommendations on LinkedIn →
        </a>
      </div>
    </BlockElement>
  )
}

export default Recommendations
