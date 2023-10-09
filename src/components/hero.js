import React, { Fragment } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Typewriter from "typewriter-effect"

const Hero = () => {
  return (
    <Fragment>
      <div className="col-lg-12 col-xxl-12 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <span className="d-flex justify-content-lg-end p-2">
              <StaticImage
                layout="fixed"
                src="../images/profile-pic.png"
                width={500}
                height={500}
                quality={95}
                alt="Profile picture"
                loading="lazy"
                className="img-fluid avatar-wobble"
              />
            </span>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                  .typeString(`Frontend Developer Specialist _`)
                  .pauseFor(1000)
                  .start();
                }}
              />
            </h1>
            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Contact</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Hero
