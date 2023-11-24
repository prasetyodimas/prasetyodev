import * as React from "react"

const Footer = () => {
  return (
    <footer className="footer-area">
      Develop by Dimas Prasetyo © {new Date().getFullYear()}, Built with
      {` `}
      <a className="d-block m-3" href="https://www.gatsbyjs.com">
        Gatsby
      </a>
    </footer>
  )
}

export default Footer
