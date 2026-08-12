import React from "react"
import BlockElement from "../components/blockElement"
import Social from "../components/social"

const GetInTouch = () => {
  return (
    <BlockElement
      className="get-in-touch section-surface section-surface--cta px-4 py-5 text-center"
      component="div"
    >
      <div id="get-in-touch" className="get-in-touch-anchor" />
      <span className="section-eyebrow">Contact</span>
      <h4 className="mt-0 mb-4">Get In Touch</h4>
      <p className="lead text-body-secondary mb-2">
        Got a website or app idea? Let&apos;s work together.
      </p>
      <p className="text-body-secondary mb-4">
        I&apos;m open to freelance projects, contract work, and full-time
        opportunities.
      </p>
      <div className="d-flex justify-content-center mb-4">
        <Social />
      </div>
      <div className="get-in-touch-actions">
        <a
          className="get-in-touch-email"
          href="mailto:dimasprasetyo485@gmail.com"
        >
          dimasprasetyo485@gmail.com
        </a>
        <p className="get-in-touch-meta">
          Yogyakarta, Indonesia · UTC+7 (GMT+7) · Remote / Hybrid
        </p>
      </div>
    </BlockElement>
  )
}

export default GetInTouch
