import * as React from "react"

const Navbar = (props) => {
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
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
