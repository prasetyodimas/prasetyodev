import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Skills from "../components/skils"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const highlights = [
  "Frontend Architecture",
  "Progressive Web Apps",
  "UI & UX Solutions",
  "SEO Practice",
  "Mobile First",
  "Team Leadership",
]

const facts = [
  {
    label: "Experience",
    value: "8+ Years",
    desc: "Building web products across fintech, banking, SaaS, and startups.",
  },
  {
    label: "Focus",
    value: "Frontend Specialist",
    desc: "Concise, clean, and maintainable code from UI to integration.",
  },
  {
    label: "Education",
    value: "Diploma Degree",
    desc: "Information System — Technology of Yogyakarta University.",
  },
  {
    label: "Based in",
    value: "Depok, Indonesia",
    desc: "Jawa Barat · UTC+7 (GMT+7) · open to remote collaboration.",
  },
]

const About = ({ location }) => {
  return (
    <Layout location={location} title={"About"}>
      <Seo title="About" />

      <section className="about-intro section-surface section-surface--hero px-4 py-5">
        <div className="about-intro-grid">
          <div className="about-intro-content">
            <span className="section-eyebrow about-eyebrow">About Me</span>
            <h1 className="about-title">Dimas Prasetyo</h1>
            <p className="about-role">Frontend Developer Specialist</p>

            <p className="about-lead">
              Great to see you here! I am a Diploma Degree graduate from
              Technology of Yogyakarta University who has contributed to several
              open source projects and shipped products end to end,{" "}
              <strong>
                demonstrating my ability to write concise and clean code
              </strong>
              .
            </p>
            <p className="about-lead">
              I am passionate about <strong>web development</strong>, crafting
              mobile-first <strong>Progressive Web Applications</strong>,
              applying solid <strong>search engine optimization</strong>{" "}
              practice, and designing <strong>UI &amp; UX</strong> solutions
              that run smoothly on mobile, tablet, and desktop. I also have
              hands-on experience in <strong>team leadership</strong>.
            </p>

            <ul className="about-highlights">
              {highlights.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="about-actions">
              <Link className="btn-download-cv" to="/personalities">
                See My Personalities
              </Link>
              <Link className="btn-bloby" to="/portofolio">
                View My Work
              </Link>
            </div>
          </div>

          <div className="about-intro-visual">
            <StaticImage
              src="../images/profile-pic.png"
              alt="Dimas Prasetyo — Frontend Developer Specialist"
              loading="lazy"
              className="img-fluid avatar-wobble about-avatar"
            />
          </div>
        </div>
      </section>

      <section className="about-facts section-surface px-4 py-5">
        <span className="section-eyebrow">Quick Facts</span>
        <h2 className="about-section-title">At a Glance</h2>
        <ul className="about-fact-list">
          {facts.map(fact => (
            <li className="about-fact-card" key={fact.label}>
              <span className="about-fact-label">{fact.label}</span>
              <p className="about-fact-value">{fact.value}</p>
              <p className="about-fact-desc">{fact.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <Skills />
    </Layout>
  )
}

About.propTypes = {
  location: PropTypes.object,
}

export const Head = () => <Seo title="About" pathname="/about/" />

export default About
