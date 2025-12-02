import React, { useState } from "react"

/**
 * A form to contact me.
 *
 * This component will display a form for sending message to me. The form will
 * be handled by Formspree, so you don't need to worry about the backend.
 *
 * @return {ReactElement} A React element containing the form.
 */

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("")

  const validate = () => {
    let newErrors = {}
    if (!formData.name) newErrors.name = "Name is required."
    if (!formData.email) {
      newErrors.email = "Email is required."
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email))
        newErrors.email = "Invalid email format."
    }
    if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters."
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!validate()) return

    const response = await fetch("https://formspree.io/f/mldjerqa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      setStatus("Success! Your message has been sent.")
      setFormData({ name: "", email: "", message: "" })
    } else {
      setStatus("Oops! Something went wrong.")
    }
  }

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Get in Touch</h2>

      {/* New Design Showcase Section */}
      <section className="design-showcase section" id="design-showcase">
        <h2 className="section-title">Design Showcase</h2>
        <p className="section-description">
          I believe in creating designs that are not only visually appealing but
          also user-friendly and functional. Below are some of my recent design
          projects:
        </p>
        <div className="design-gallery">
          <div className="design-item">
            <img
              src="/path/to/design1.jpg"
              alt="Design 1"
              className="design-image"
            />
            <p className="design-caption">Project 1: Modern Web App UI</p>
          </div>
          <div className="design-item">
            <img
              src="/path/to/design2.jpg"
              alt="Design 2"
              className="design-image"
            />
            <p className="design-caption">Project 2: E-commerce Dashboard</p>
          </div>
          <div className="design-item">
            <img
              src="/path/to/design3.jpg"
              alt="Design 3"
              className="design-image"
            />
            <p className="design-caption">Project 3: Mobile App Prototype</p>
          </div>
        </div>
      </section>

      <div className="contact__container bd-grid">
        <div className="contact__data">
          <span className="contact__subtitle">
            Summon or call to me a message
          </span>
          <p className="contact__description">
            I'm open to new opportunities, whether it's a freelance project or a
            full-time position. <br /> Let's get in touch!
          </p>
        </div>

        <div className="contact__information">
          <div className="contact__information-group">
            <div className="contact__information-item">
              <span className="contact__information-icon">
                <i className="bx bx-phone" />
              </span>
              {/* <span className="contact__information-data">
                +62 85-803-256-647
              </span> */}
            </div>

            <div className="contact__information-item">
              <span className="contact__information-icon">
                <i className="bx bx-envelope" />
              </span>
              {/* <span className="contact__information-data">
                dimasprasetyo485@gmail.com
              </span> */}
            </div>

            <div className="contact__information-item">
              <span className="contact__information-icon">
                <i className="bx bx-map" />
              </span>
              {/* <span className="contact__information-data">
                Yogyakarta, Indonesia
              </span> */}
            </div>

            <div className="contact__information-item">
              <span className="contact__information-icon">
                <i className="bx bxl-linkedin" />
              </span>
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__information-data"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{ display: "block", margin: "0 auto", maxWidth: "50%" }}
        >
          <div className="contact__form-group mb-3">
            <div className="contact__form-div mb-3">
              <input
                type="text"
                className={`form-control contact__form-input ${
                  errors.name && errors.name.length > 0 ? "is-invalid" : ""
                }`}
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && errors.name.length > 0 && (
                <span
                  className="d-block text-start mt-1 text-sm-start"
                  style={{ color: "red" }}
                >
                  {errors.name}
                </span>
              )}
            </div>

            <div className="contact__form-div mb-3">
              <input
                type="email"
                className={`form-control contact__form-input ${
                  errors.email && errors.email.length > 0 ? "is-invalid" : ""
                }`}
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span
                  className="d-block text-start mt-1 text-sm-start"
                  style={{ color: "red" }}
                >
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          <div className="contact__form-div">
            <textarea
              name="message"
              className={`form-control contact__form-input contact__form-textarea ${
                errors.message && errors.message.length > 0 ? "is-invalid" : ""
              }`}
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
              height="30px"
            />
            {errors.message && (
              <p
                className="d-block text-start mt-1 text-sm-start"
                style={{ color: "red" }}
              >
                {errors.message}
              </p>
            )}
          </div>
          {status && (
            <p className="text-center mt-1 shake" style={{ color: "red" }}>
              {status}
            </p>
          )}
          <button
            style={{ position: "relative", left: 0, marginTop: "20px" }}
            type="submit"
            className="btn btn-md btn-bloby"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactMe
