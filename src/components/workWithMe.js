import React from "react"
import BlockElement from "./blockElement"
import freelanceRates from "../data/freelanceRates"

const WorkWithMe = () => {
  return (
    <BlockElement
      className="work-with-me section-surface px-4 py-5"
      component="div"
    >
      <div id="work-with-me" className="work-with-me-anchor" />
      <span className="section-eyebrow">Freelance</span>
      <h4 className="text-center mt-0 mb-3">Work With Me</h4>
      <p className="text-center text-body-secondary mb-5">
        9+ years of frontend experience — available for freelance projects and
        contract work.
      </p>

      <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
        {freelanceRates.map(rate => (
          <div className="col col-lg-5" key={rate.id}>
            <div
              className={`service-card rate-card h-100${
                rate.highlight ? " rate-card--highlight" : ""
              }`}
            >
              <span className="rate-card-badge">{rate.badge}</span>
              <h5>{rate.title}</h5>
              <p className="rate-card-price">
                <span className="rate-card-amount">{rate.price}</span>
                <span className="rate-card-unit">{rate.unit}</span>
              </p>
              <p>{rate.description}</p>
              <ul className="rate-card-features">
                {rate.features.map((feature, i) => (
                  <li key={`${rate.id}-feature-${i}`}>{feature}</li>
                ))}
              </ul>
              <a className="service-card-cta" href={rate.cta.href}>
                {rate.cta.label} →
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-body-secondary small mt-4 mb-0">
        Not sure which fits? Send me your project brief — I&apos;ll recommend
        the option that gives you the best value.
      </p>
    </BlockElement>
  )
}

export default WorkWithMe
