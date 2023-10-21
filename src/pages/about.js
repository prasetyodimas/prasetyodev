import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const About = ({ location }) => {
  return (
    <Layout location={location} title={'About'}>
      <Seo title="About"/>
      <div className="d-flex section-about-me row">
        <div className="col-sm-12 col-md-8 col-lg-10">
          <p>
            Great to see you here! I am Dimas Prasetyo, a Diploma Degree graduate from Technology of Yogyakarta University. I am a <b>Frontend Developer Specialist</b>
            I have participated in several open source project and built several projects, <b>demonstrating my ability to write concise and clean code</b>,
            Passionate about <b>web development Specialist</b>, creating about mobile first friendly <b>Progressive web application</b>, understanding good in <b>seacrh enginee optimation</b> pratice,
            specialist user interface design <b>(UI)</b> and <b>(UX)</b> solutions, make the application run smoothly in other device <b>(Mobile, Tablet/Phablet, Destkop)</b>.
            And also have some experience about <b>leadership include role of team leadership</b>.
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
            className="img-fluid rounded mx-auto"
          />
        </div>
      </div>
    </Layout>
  )
}

export default About
