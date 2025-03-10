import React from "react"
import { useForm, ValidationError } from '@formspree/react'

/**
 * A form to contact me.
 *
 * This component will display a form for sending message to me. The form will
 * be handled by Formspree, so you don't need to worry about the backend.
 *
 * @return {ReactElement} A React element containing the form.
 */
const ContactMe = () => {

    const [state, handleSubmit] = useForm("mldjerqa");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Get in Touch</h2>

      <div className="contact__container bd-grid">
        <div className="contact__data">
          <span className="contact__subtitle">Summon or call to me a message</span>
          <p className="contact__description">
            I'm open to new opportunities, whether it's a freelance project or a
            full-time position. Let's get in touch!
          </p>
        </div>

        <div className="contact__information">
          <div className="contact__information-group">
            <div className="contact__information-item">
              <span className="contact__information-icon">
                <i className="bx bx-phone" />
              </span>
              <span className="contact__information-data">
                +62 85-803-256-647
              </span>
            </div>

            <div className="contact__information-item">
              <span className="contact__information-icon">
                <i className="bx bx-envelope" />
              </span>
              <span className="contact__information-data">
                dimasprasetyo485@gmail.com
              </span>
            </div>

            <div className="contact__information-item">
              <span className="contact__information-icon">
                <i className="bx bx-map" />
              </span>
              <span className="contact__information-data">
                Yogyakarta, Indonesia
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <div className="contact__form-div">
                <input
                    type="text"
                    className="contact__form-input"
                    placeholder="Name"
                    name="name"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Email"
                name="_replyto"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <textarea
              name="message"
              className="contact__form-input contact__form-textarea"
              placeholder="Write your message"
            />
          </div>

          <button type="submit" className="button">
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactMe

