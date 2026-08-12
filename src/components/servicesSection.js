import React from "react"
import BlockElement from "../components/blockElement"

const services = [
  {
    title: "Company Website / Landing Page",
    description:
      "Fast, modern, and mobile-friendly site that makes it easy for visitors to contact or buy from you.",
  },
  {
    title: "Web App (Booking, Order, Dashboard)",
    description:
      "Custom apps built around how you work, like booking systems, internal tools, and ordering platforms.",
  },
  {
    title: "Frontend Upgrade / Redesign",
    description:
      "Modernize an old site with faster loads, a cleaner mobile layout, and a maintainable component architecture.",
  },
  {
    title: "CMS Development",
    description:
      "Content management systems that let your team publish content without writing code.",
  },
  {
    title: "Performance Tuning",
    description:
      "Lighthouse auditing and optimization to make your site fast, SEO-friendly, and ready to scale.",
  },
  {
    title: "Maintenance / Ongoing Support",
    description:
      "Monthly care plans — I keep your site running with updates, monitoring, and backups.",
  },
]

const ServicesSection = () => {
  return (
    <BlockElement
      className="services-section section-surface px-4 py-5"
      component="div"
    >
      <span className="section-eyebrow">Services</span>
      <h4 className="text-center mt-0 mb-4">What I Can Build For You</h4>
      <p className="lead text-center text-body-secondary mb-5">
        Practical web work for small teams &amp; businesses.
      </p>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {services.map((service, index) => (
          <div className="col" key={`service-${index}`}>
            <div className="service-card h-100">
              <h5>{service.title}</h5>
              <p>{service.description}</p>
              <a className="service-card-cta" href="#get-in-touch">
                Hire for this →
              </a>
            </div>
          </div>
        ))}
      </div>
    </BlockElement>
  )
}

export default ServicesSection
