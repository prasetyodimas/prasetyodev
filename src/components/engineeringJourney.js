import React from "react"
import BlockElement from "../components/blockElement"

const journeys = [
  {
    year: "2018",
    title: "Frontend Development",
    description:
      "Started as a frontend developer building responsive web interfaces with Bootstrap, jQuery, and vanilla JavaScript.",
    highlights: [
      "First production web apps",
      "HTML/CSS/JS fundamentals",
      "Responsive design with Bootstrap",
    ],
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
  },
  {
    year: "2020",
    title: "Frontend Architecture",
    description:
      "Focused on scalable frontend architecture, modular styling with SCSS, and Progressive Web Apps (PWA) for e-commerce platforms.",
    highlights: [
      "PWA implementation",
      "Modular SCSS architecture",
      "Webpack & build optimization",
    ],
    skills: ["PWA", "SCSS", "Webpack", "JavaScript", "Service Worker"],
  },
  {
    year: "2021",
    title: "Sungnikah — Product + Full-stack",
    description:
      "Co-founded a digital wedding invitation SaaS and built it end-to-end — from product strategy to frontend, backend, and infrastructure.",
    highlights: [
      "SaaS product ownership",
      "Full-stack development",
      "Infrastructure & deployment",
    ],
    skills: ["React", "Node.js", "Next.js", "SaaS", "Cloud"],
  },
  {
    year: "2023",
    title: "Startup / SaaS Fintech",
    description:
      "Joined Sabi as Senior Frontend Developer then Frontend Lead, building lending-as-a-service (LaaS) and e-invoicing products for MSMEs.",
    highlights: [
      "Led frontend engineering team",
      "CI/CD automation",
      "User engagement +45%",
    ],
    skills: ["React", "TypeScript", "CI/CD", "Fintech", "Leadership"],
  },
  {
    year: "2024",
    title: "Banking / Enterprise",
    description:
      "Worked on enterprise and banking-grade applications, strengthening understanding of security, compliance, and large-scale system design.",
    highlights: [
      "Enterprise architecture",
      "Banking compliance awareness",
      "Large-scale system design",
    ],
    skills: ["React", "TypeScript", "System Design", "Security", "Enterprise"],
  },
  {
    year: "2025",
    title: "System Architecture",
    description:
      "Deepened system architecture skills — designing data flows, service boundaries, and infrastructure for robust product delivery.",
    highlights: [
      "Data flow & API design",
      "Scalable service boundaries",
      "DevOps & infra automation",
    ],
    skills: ["Architecture", "API Design", "DevOps", "Node.js", "Cloud"],
  },
  {
    year: "2026",
    title: "Software Engineer — Frontend → Backend → Infrastructure",
    description:
      "Today I operate across the full stack: frontend experience, backend services, and infrastructure — shipping reliable systems end-to-end.",
    highlights: [
      "End-to-end system ownership",
      "Frontend-to-infrastructure mindset",
      "Reliable product delivery",
    ],
    skills: ["Full-stack", "React", "Node.js", "AWS", "System Architecture"],
  },
]

const EngineeringJourney = () => {
  return (
    <BlockElement
      className="engineering-journey section-surface px-4 py-5"
      component="div"
    >
      <span className="section-eyebrow">Career</span>
      <h4 className="text-center mt-0 mb-3">Engineering Journey</h4>
      <p className="lead text-center text-body-secondary mb-5">
        A clear path from writing my first UI to owning products across the
        stack.
      </p>

      <ol className="engineering-journey-list">
        {journeys.map((journey, index) => (
          <li
            className={`engineering-journey-item ${
              index % 2 === 0 ? "is-left" : "is-right"
            }`}
            key={`journey-${journey.year}-${index}`}
          >
            <div className="engineering-journey-track" aria-hidden="true">
              <span className="engineering-journey-dot" />
            </div>

            <div className="engineering-journey-card">
              <span className="engineering-journey-year">{journey.year}</span>
              <h3 className="engineering-journey-title">{journey.title}</h3>
              <p className="engineering-journey-desc">{journey.description}</p>

              <div className="engineering-journey-highlights">
                {journey.highlights.map((item, i) => (
                  <span
                    className="engineering-journey-highlight"
                    key={`highlight-${index}-${i}`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="engineering-journey-skills">
                {journey.skills.map((skill, i) => (
                  <span
                    className="engineering-journey-skill"
                    key={`skill-${index}-${i}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </BlockElement>
  )
}

export default EngineeringJourney
