import React, { Fragment } from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Navbar from "./navbar"
import Typewriter from "typewriter-effect"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <p className="main-heading">
        <Link to="/" className="link-nounderline typewriter">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
              .typeString(`{${title}}`)
              .pauseFor(2000)
              .deleteAll()
              .typeString("Welcome to my portfolio site and blog :)")
              .pauseFor(5000)
              .deleteAll()
              .typeString(`{${title}}`)
              .start();
            }}
          />
        </Link>
      </p>
    )
  } else {
    header = (
      <p>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
            .typeString(`${title}`)
            .pauseFor(2000)
            .start();
          }}
        />
      </p>
    )
  }

  return (
    <Fragment>
      <Navbar title={header}/>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main className="container">{children}</main>
        <Footer/>
      </div>
    </Fragment>
  )
}

export default Layout
