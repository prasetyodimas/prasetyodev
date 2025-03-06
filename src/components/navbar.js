import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Navbar = props => {
  const [navbarState, setNavbarState] = useState("d-none")
  const [isActive, setIsActive] = useState(false)

  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "resume" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  const handleToggle = () => {
    setIsActive(!isActive)
    const menuClassActive = !isActive ? "d-block" : "d-none"
    setNavbarState(menuClassActive)
  }

  const handleDownload = async (file) => {
    try {
      const response = await fetch(file.node.publicURL);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Dimas Prasetyo - Resume.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg" aria-label="Navbar site">
      <div className="container">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => handleToggle()}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`navbar-collapse justify-content-md-end ${navbarState}`}
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClassName="active"
                to="/portofolio"
              >
                Portofolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/blog">
                Blog
              </Link>
            </li>
            {data.allFile.edges.map((file, index) => {
              return (
                <li className="nav-item" key={`pdf-${index}`}>
                  <a className="nav-link nav-resume cursor-pointer"
                    href="#"
                    onClick={() => handleDownload(file)}
                  >
                    Resume
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
