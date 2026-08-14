import * as React from "react"

const Footer = () => {
  return (
    <footer className="footer-area">
      <span>
        Built by Dimas Prasetyo © {new Date().getFullYear()} · Powered by
        {` `}
        <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">
          Gatsby
        </a>
      </span>
    </footer>
  )
}

export default Footer
