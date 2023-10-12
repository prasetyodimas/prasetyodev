import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import BlockElement from "./blockElement"

const UnderConstruction = () => {
  return(
    <BlockElement
      className="underconstruct-content d-flex justify-content-center"
      component="div"
    >
      <StaticImage
        layout="fixed"
        src="../images/underconstruct/maintenances.jpg"
        width={650}
        height={550}
        quality={95}
        alt="Profile picture"
        loading="lazy"
        className="img-fluid "
      />
    </BlockElement>
  )
}

export default UnderConstruction
