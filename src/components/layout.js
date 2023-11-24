import React, { Fragment } from "react"
import Footer from "../components/footer"
import Navbar from "./navbar"
import Typewriter from "typewriter-effect"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString(`{${title}}`)
              .pauseFor(1000)
              .deleteAll()
              .typeString(`{ Dimas Prasetyo }`)
              .pauseFor(1000)
              .deleteAll()
              .typeString("Welcome cheers :)")
              .pauseFor(2000)
              .deleteAll()
              .typeString(`{ Dimas Prasetyo }`)
              .start()
          }}
        />
      </h1>
    )
  } else {
    header = (
      <Fragment>
        <Typewriter
          onInit={typewriter => {
            typewriter.typeString(`${title}`).pauseFor(2000).start()
          }}
        />
      </Fragment>
    )
  }

  return (
    <Fragment>
      <Navbar title={header} />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main className="container">{children}</main>
        <Footer />
      </div>
    </Fragment>
  )
}

export default Layout
