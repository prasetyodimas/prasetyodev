import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import BlockElement from "../components/blockElement"

const problems = [
  "Traditional wedding invitations",
  "Static website",
  "Hard to manage",
  "No scalable content system",
]

const stacks = [
  "Next.js",
  "Dynamic Theme System",
  "REST API",
  "Node.js / Express",
  "Database",
  "Cloud Storage",
  "Production Infrastructure",
]

const challenges = [
  "Dynamic theme architecture",
  "Multi-tenant data",
  "Image/media management",
  "SEO & SSR",
  "API architecture",
  "Authentication",
  "Deployment & backup",
  "Monitoring",
  "Secret management",
  "Performance",
]

const SungnikahCaseStudy = () => {
  return (
    <BlockElement className="case-study section-surface px-4 py-5" component="div">
      <span className="section-eyebrow">Case Study</span>
      <h4 className="text-center mt-0 mb-4">Flagship Project</h4>
      <div className="row align-items-center g-5 mb-5">
        <div className="col-12 col-md-5 col-lg-6">
          <StaticImage
            src="../images/my-porto/sungnikah/sungnikah.png"
            alt="Sungnikah platform"
            loading="lazy"
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-md-7 col-lg-6">
          <h2 className="case-study-title fw-bold">
            Sungnikah — From idea to production SaaS
          </h2>
          <p className="case-study-roles">
            Founder · Product Owner · Full-stack Engineer
          </p>
          <p className="lead text-body-secondary">
            A digital wedding invitation SaaS that I built from scratch,
            evolving from a static website into a dynamic, API-driven platform.
          </p>
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
      <div className="row g-4">
        <div className="col-12 col-md-4">
          <div className="case-study-panel h-100">
            <h5>Problem</h5>
            <ol className="case-study-flow">
              {problems.map((problem, index) => (
                <li key={`problem-${index}`}>{problem}</li>
              ))}
            </ol>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="case-study-panel h-100">
            <h5>What I Built</h5>
            <ol className="case-study-flow">
              {stacks.map((stack, index) => (
                <li key={`stack-${index}`}>{stack}</li>
              ))}
            </ol>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="case-study-panel h-100">
            <h5>Engineering Challenges</h5>
            <ul className="case-study-challenges">
              {challenges.map((challenge, index) => (
                <li key={`challenge-${index}`}>{challenge}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </BlockElement>
  )
}

export default SungnikahCaseStudy
