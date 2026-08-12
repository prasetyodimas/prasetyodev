import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import BlockElement from "../components/blockElement"

const highlights = [
  {
    label: "Problem",
    items: [
      "Traditional wedding invitations were static and hard to customize",
      "No scalable content system for couples",
      "Managing themes, media, and guests manually was time-consuming",
    ],
  },
  {
    label: "Solution",
    items: [
      "A multi-tenant SaaS with per-couple customization",
      "Dynamic theme system that renders unique wedding pages",
      "SEO-friendly SSR, media upload, and guest management",
    ],
  },
  {
    label: "Engineering Challenges",
    items: [
      "Dynamic theme architecture",
      "Multi-tenant data isolation",
      "Image and media management",
      "SEO & SSR at scale",
      "Deployment, backup, and monitoring",
    ],
  },
]

const techStack = [
  "Next.js",
  "React",
  "Node.js",
  "Express",
  "REST API",
  "Dynamic Theme System",
  "Cloud Storage",
  "Database",
  "Monitoring",
  "CI/CD",
]

const roles = ["Founder", "Product Owner", "Full-stack Engineer"]

const SungnikahCaseStudy = () => {
  return (
    <BlockElement
      className="case-study section-surface px-4 py-5"
      component="div"
    >
      <span className="section-eyebrow">Case Study</span>
      <h4 className="case-study-heading">Flagship Project</h4>

      <div className="case-study-hero">
        <div className="case-study-media">
          <div className="case-study-browser">
            <div className="case-study-browser-bar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <StaticImage
              src="../images/my-porto/sungnikah/sungnikah.png"
              alt="Sungnikah platform"
              loading="lazy"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="case-study-intro">
          <h2 className="case-study-title">
            Sungnikah — From idea to production SaaS
          </h2>
          <div className="case-study-roles">
            {roles.map((role, i) => (
              <span className="case-study-role" key={`role-${i}`}>
                {role}
              </span>
            ))}
          </div>
          <p className="case-study-desc">
            A digital wedding invitation SaaS that I built from scratch,
            evolving from a static website into a dynamic, API-driven platform.
            Couples can create personalized invitations, manage guests, and
            publish shareable pages with unique themes.
          </p>
          <div className="case-study-stack">
            {techStack.map((tech, i) => (
              <span className="case-study-stack-item" key={`tech-${i}`}>
                {tech}
              </span>
            ))}
          </div>
          <a
            className="case-study-cta"
            href="https://sungnikah.com"
            target="_blank"
            rel="noreferrer"
          >
            Visit sungnikah.com →
          </a>
        </div>
      </div>

      <div className="case-study-grid">
        {highlights.map((card, i) => (
          <div className="case-study-card" key={`card-${i}`}>
            <span className="case-study-card-label">{card.label}</span>
            <h5 className="case-study-card-title">{card.label}</h5>
            <ul className="case-study-card-list">
              {card.items.map((item, j) => (
                <li key={`item-${i}-${j}`}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </BlockElement>
  )
}

export default SungnikahCaseStudy
