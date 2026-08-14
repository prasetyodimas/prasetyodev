import React from "react"
import Typewriter from "typewriter-effect"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Buttons from "../components/buttons"
import Social from "../components/social"
import BadgeYears from "../components/badgeYears"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "resume" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  const resume = data.allFile.edges[0]?.node

  return (
    <section className="hero section-surface px-4 py-5">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-availability">
            <span className="hero-availability-dot" />
            Available for new projects
          </span>

          <h1 className="hero-title">
            <Typewriter
              onInit={typewriter => {
                typewriter
                  .typeString(`Software Engineer`)
                  .pauseFor(1200)
                  .start()
              }}
            />
            <span className="hero-cursor" aria-hidden="true">_</span>
          </h1>

          <p className="hero-tagline">
            Building scalable web products from <span>UI</span> to{" "}
            <span>infrastructure</span>.
          </p>

          <p className="hero-bio">
            Frontend-focused <strong>Software Engineer</strong> with{" "}
            <strong>8+ years</strong> of experience building scalable web
            applications across <strong>fintech, banking, SaaS, and startup</strong>{" "}
            environments.
          </p>

          <div className="hero-actions">
            <Buttons propClass="btn-bloby" propRedirect="/portofolio">
              View My Work
            </Buttons>
            {resume && (
              <a
                className="btn-download-cv"
                href={resume.publicURL}
                download="Dimas Prasetyo - Resume.pdf"
              >
                Download CV
              </a>
            )}
          </div>

          <p className="hero-skills">
            Frontend Architecture · Full-stack Development · API &amp; Backend ·
            System Design · Performance · CI/CD &amp; DevOps · Product
            Engineering
          </p>

          <Social />

          <p className="hero-currently-building">
            Currently building →{" "}
            <a
              href="https://sungnikah.com"
              target="_blank"
              rel="noreferrer"
            >
              Sungnikah
            </a>
          </p>

          <p className="hero-meta">
            Depok City, Jawa Barat, Indonesia · Time Zone: UTC+7 (GMT+7)
          </p>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <StaticImage
              src="../images/profile-pic.png"
              alt="Dimas Prasetyo — Software Engineer"
              loading="eager"
              className="hero-image"
            />
            <BadgeYears />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
