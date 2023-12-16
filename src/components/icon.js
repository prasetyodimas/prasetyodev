import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"

const Icons = ({ path, width, height, quality, alt, classes }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { in: "svg" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  return (
    <Fragment>
      <img src={path} width={width} height={height} alt={alt} />
    </Fragment>
  )
}

export default Icons
