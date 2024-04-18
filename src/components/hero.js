import React from "react"
import Typewriter from "typewriter-effect"
import { StaticImage } from "gatsby-plugin-image"
import Buttons from "../components/buttons"
import Social from "../components/social"

const Hero = () => {
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
          </span>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-7 col-lg-6">
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
          <p className="lead text-transform-minus-2">
            A seasoned <b>Frontend Developer Specialist & Fullstack Developer</b> with <b>5++</b>{" "}
            years of experience is a highly skilled professional who
            specializes in creating and maintaining the user interface{" "}
            <b>(UI)</b> and user experience <b>(UX)</b> of web applications.
          </p>
          <Social />
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Buttons propClass="btn-bloby" propRedirect="/about">
              Know more about me
            </Buttons>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
