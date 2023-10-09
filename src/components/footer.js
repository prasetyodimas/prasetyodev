import * as React from "react"

const Footer = () => {
  return(
    <footer className="footer-main">
      Develop by Dimas Prasetyo © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}

export default Footer
