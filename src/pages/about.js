import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const About = ({ location }) => {
  return (
    <Layout location={location} title={'About'}>
      <Seo title="About"/>
      <div className="section-about-me row">
        <div className="col-sm-12 col-md-8 col-lg-10">
          <p>
            Great to see you here! I am Sneha Farkya, a BCA graduate from Medi-Caps University, Indore. I am a Frontend Developer and Technical Writer.
            In my role as a Front-end developer, I combine technical expertise with creativity. My passion for designing and developing user-friendly web applications has lead me to sharpen my skills in HTML, CSS, and JavaScript to provide dynamic, responsive user interfaces.
            I have participated in several hackathons and built several projects, demonstrating my ability to write concise and clean code, and document the project Recently, I participated in the SheBuilds hackathon and got a special mention by organizers.
          </p>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-2">
          <StaticImage
            layout="fixed"
            src="../images/profile-pic.png"
            width={200}
            height={200}
            quality={95}
            alt="Profile picture"
            loading="lazy"
            className="img-fluid img-rounded"
          />
        </div>
      </div>
    </Layout>
  )
}

export default About
