import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Navbar = (props) => {
  console.log(props.location.pathname)
  const data = useStaticQuery(graphql` {
    allFile(filter: { name: { eq: "resume" } }) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }`)

  const isActive = ({ isCurrent }) => {
    return 'active'
  }

  return (
    <nav className="navbar navbar-expand-lg" aria-label="Navbar site">
      <div className="container">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler collapsed" type="button" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse justify-content-md-end">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/portofolio">Portofolio</a></li>
            <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
            {data.allFile.edges.map((file, index) => {
              return (
                <li className="nav-item" key={`pdf-${index}`}>
                  <a className="nav-link nav-resume"
                    href={file.node.publicURL}
                    target="_blank"
                    rel="noreferrer"
                    download
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
