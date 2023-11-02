import React, { Fragment } from "react"
import { StaticImage } from "gatsby-plugin-image"

const Icons = ({ path, width, height, quality, alt, classes }) => {
  console.log(path)
  console.log(width)
  console.log(height)
  return (
    <Fragment>
      <img
        src={path}
        width={width}
        height={height}
        alt={alt}
      />
    </Fragment>
  )
}

export default Icons
