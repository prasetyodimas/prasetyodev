import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Icon } from "@react-pdf-viewer/core";
import PropTypes from "prop-types"

const Icons = ({ path, width, height, quality, alt, classes }) => {
  useStaticQuery(graphql`
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
  `);

  return (
    <img src={path} width={width} height={height} alt={alt} />
  )
}

Icon.proptype = {
  path: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  quality: PropTypes.number,
  alt: PropTypes.string,
  classes: PropTypes.string  
}

export default Icons
