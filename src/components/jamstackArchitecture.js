import React from "react"
import BlockElement from "../components/blockElement"
import GatsbyIcon from "../assets/icons/skils/gatsby.svg"
import NetlifyIcon from "../assets/icons/skils/netlify.svg"
import JamstackIcon from "../assets/icons/skils/jamstack.svg"

const architectureItems = [
  {
    title: "JavaScript",
    description:
      "Dynamic functionality runs entirely in the browser. React and Gatsby power the interactive experience without relying on a traditional server.",
  },
  {
    title: "APIs",
    description:
      "Third-party services and build-time data sources are consumed through APIs. Content is pulled from markdown, file-system assets, and external integrations.",
  },
  {
    title: "Markup",
    description:
      "Pages are pre-rendered into static HTML at build time, resulting in fast initial loads and better SEO without a database-driven backend.",
  },
  {
    title: "CDN",
    description:
      "The generated site is deployed to a global edge network on Netlify, so pages are served from locations close to each visitor.",
  },
]

const JamstackArchitecture = () => {
  return (
    <BlockElement
      className="jamstack-architecture section-surface px-4 py-5"
      component="div"
    >
      <span className="section-eyebrow">Architecture</span>
      <h4 className="text-center mt-0 mb-3">Built with Jamstack</h4>
      <p className="lead text-center text-body-secondary mb-4">
        This site follows the Jamstack architectural approach: decoupling the
        web experience layer from data and business logic to improve
        flexibility, scalability, performance, and maintainability.
      </p>

      <div className="jamstack-architecture-stack">
        <div className="jamstack-architecture-logos">
          <img
            className="jamstack-architecture-logo jamstack-architecture-logo--gatsby"
            src={GatsbyIcon}
            alt="Gatsby"
            width="48"
            height="48"
          />
          <span className="jamstack-architecture-separator" aria-hidden="true">
            +
          </span>
          <img
            className="jamstack-architecture-logo jamstack-architecture-logo--jamstack"
            src={JamstackIcon}
            alt="Jamstack"
            width="88"
            height="28"
          />
          <span className="jamstack-architecture-separator" aria-hidden="true">
            +
          </span>
          <img
            className="jamstack-architecture-logo jamstack-architecture-logo--netlify"
            src={NetlifyIcon}
            alt="Netlify"
            width="48"
            height="48"
          />
        </div>

        <ul className="jamstack-architecture-list">
          {architectureItems.map((item, index) => (
            <li className="jamstack-architecture-item" key={`arch-${index}`}>
              <h5 className="jamstack-architecture-title">{item.title}</h5>
              <p className="jamstack-architecture-desc">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </BlockElement>
  )
}

export default JamstackArchitecture
