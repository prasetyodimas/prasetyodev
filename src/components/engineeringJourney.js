import React, { useEffect, useRef, useState } from "react"
import HTMLFlipBook from "react-pageflip"
import { StaticImage } from "gatsby-plugin-image"
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
    title: "Software Engineer — Full Spectrum",
    description:
      "Today I operate across the full stack: frontend experience, backend services, and infrastructure — shipping reliable systems end-to-end.",
    highlights: [
      "End-to-end system ownership",
      "Frontend-to-infrastructure mindset",
      "Reliable product delivery",
    ],
    skills: [
      "Full-stack",
      "React",
      "Node.js",
      "Express",
      "Vultr",
      "System Architecture",
    ],
  },
]

const sortedJourneys = [...journeys].sort(
  (a, b) => Number(a.year) - Number(b.year)
)

const totalPages = sortedJourneys.length + 2

const EngineeringJourney = () => {
  const bookRef = useRef(null)
  const [mounted, setMounted] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const flipPrev = () => bookRef.current?.pageFlip()?.flipPrev()
  const flipNext = () => bookRef.current?.pageFlip()?.flipNext()

  return (
    <BlockElement
      className="engineering-journey section-surface px-4 py-5"
      component="div"
    >
      <span className="section-eyebrow">Career</span>
      <h4 className="text-center mt-0 mb-3">Engineering Journey</h4>
      <p className="lead text-center text-body-secondary mb-4">
        My career as a storybook — flip the pages to travel through the years.
      </p>

      <div className="storybook-wrap">
        {mounted ? (
          <>
            <button
              type="button"
              className="storybook-nav storybook-nav-prev"
              onClick={flipPrev}
              disabled={currentPage === 0}
              aria-label="Previous page"
            >
              ‹
            </button>
            <HTMLFlipBook
              ref={bookRef}
              width={380}
              height={520}
              size="stretch"
              minWidth={300}
              maxWidth={480}
              minHeight={420}
              maxHeight={620}
              showCover
              mobileScrollSupport={false}
              className="storybook"
              onFlip={e => setCurrentPage(e.data)}
            >
              <div className="storybook-page storybook-cover">
                <div className="storybook-cover-inner">
                  <StaticImage
                    src="../assets/icons/brands/brand.png"
                    alt="Prasetyo Dimas"
                    className="storybook-brand"
                    width={96}
                    placeholder="none"
                    objectFit="contain"
                  />
                  <span className="storybook-cover-eyebrow">
                    A Career Storybook
                  </span>
                  <h3 className="storybook-cover-title">
                    Engineering
                    <br />
                    Journey
                  </h3>
                  <p className="storybook-cover-sub">
                    2018 — present
                  </p>
                  <span className="storybook-cover-hint">
                    Flip the corner to begin →
                  </span>
                </div>
              </div>

              {sortedJourneys.map((journey, index) => (
                <div className="storybook-page" key={`page-${journey.year}`}>
                  <div className="storybook-page-inner">
                    <span className="storybook-page-chapter">
                      Chapter {index + 1}
                    </span>
                    <span className="storybook-page-year">{journey.year}</span>
                    <h4 className="storybook-page-title">{journey.title}</h4>
                    <p className="storybook-page-desc">
                      {journey.description}
                    </p>
                    <ul className="storybook-page-highlights">
                      {journey.highlights.map((item, i) => (
                        <li key={`hl-${index}-${i}`}>{item}</li>
                      ))}
                    </ul>
                    <div className="storybook-page-skills">
                      {journey.skills.map((skill, i) => (
                        <span
                          className="storybook-page-skill"
                          key={`sk-${index}-${i}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <span className="storybook-page-num">
                      {index + 2} / {totalPages}
                    </span>
                  </div>
                </div>
              ))}

              <div className="storybook-page storybook-backcover">
                <div className="storybook-cover-inner">
                  <h3 className="storybook-cover-title">The Next Chapter</h3>
                  <p className="storybook-cover-sub">
                    Could be written with your team.
                  </p>
                  <a
                    className="storybook-cover-cta"
                    href="#get-in-touch"
                  >
                    Get in touch →
                  </a>
                </div>
              </div>
            </HTMLFlipBook>
            <button
              type="button"
              className="storybook-nav storybook-nav-next"
              onClick={flipNext}
              disabled={currentPage >= totalPages - 1}
              aria-label="Next page"
            >
              ›
            </button>
          </>
        ) : (
          <div className="storybook-loading">Opening the book…</div>
        )}
      </div>
    </BlockElement>
  )
}

export default EngineeringJourney
