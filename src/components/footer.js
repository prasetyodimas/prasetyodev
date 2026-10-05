import * as React from "react"
import JamstackLogo from "../assets/icons/skils/jamstack.svg"
import NetlifyLogo from "../assets/icons/skils/netlify.svg"

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-credit">
        <span>
          Built by Dimas Prasetyo © {new Date().getFullYear()} · Powered by
          {` `}
          <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">
            Gatsby
          </a>
        </span>
      </div>
      <div className="footer-badges">
        <a
          className="footer-badge"
          href="https://jamstack.org/"
          target="_blank"
          rel="noreferrer"
          aria-label="Jamstack"
        >
          <img
            className="footer-badge-logo"
            src={JamstackLogo}
            alt="Jamstack"
            width="88"
            height="24"
          />
        </a>
        <a
          className="footer-badge"
          href="https://www.netlify.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Netlify"
        >
          <img
            className="footer-badge-logo footer-badge-logo--netlify"
            src={NetlifyLogo}
            alt="Netlify"
            width="24"
            height="24"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
