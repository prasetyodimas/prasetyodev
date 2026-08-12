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
    <div className="col-lg-12 col-md-12 col-xxl-12 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5">
        <div className="col-xs-12 col-sm-8 col-md-5 col-lg-6">
          <span className="d-flex justify-content-lg-end p-2">
            <StaticImage
              src="../images/profile-pic.png"
              alt="Profile picture"
              loading="lazy"
              className="img-fluid avatar-wobble heros-content-img"
            />
            <BadgeYears />
          </span>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-7 col-lg-6">
          <p className="hero-availability">
            <span className="hero-availability-dot"></span>
            Available for new projects //
          </p>
          <h2 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            <Typewriter
              onInit={typewriter => {
                typewriter
                  .typeString(`Software Engineer _`)
                  .pauseFor(1000)
                  .start()
              }}
            />
          </h2>
          <h3 className="hero-tagline">
            Building scalable web products from UI to infrastructure.
          </h3>
          <p className="lead text-transform-minus-2">
            Frontend-focused <b>Software Engineer</b> with <b>8+</b> years of
            experience building scalable web applications across{" "}
            <b>fintech, banking, SaaS, and startup environments</b>.
          </p>
          <p className="hero-specialization">
            Frontend Architecture · Full-stack Development · API &amp; Backend ·
            System Design · Performance · CI/CD &amp; DevOps · Product
            Engineering
          </p>
          <Social />
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Buttons propClass="btn-bloby" propRedirect="/portofolio">
              View My Work
            </Buttons>
            {resume && (
              <a
                className="btn-bloby btn-download-cv"
                href={resume.publicURL}
                download="Dimas Prasetyo - Resume.pdf"
              >
                Download CV
                <span className="btn-bloby__inner">
                  <span className="btn-bloby__blobs">
                    <span className="btn-bloby__boba"></span>
                    <span className="btn-bloby__boba"></span>
                    <span className="btn-bloby__boba"></span>
                    <span className="btn-bloby__boba"></span>
                  </span>
                </span>
              </a>
            )}
          </div>
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
            Location: Yogyakarta, Indonesia · Time Zone: UTC+7 (GMT+7)
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
