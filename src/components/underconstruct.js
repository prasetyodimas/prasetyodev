import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const UnderConstruction = ({children}) => {
  return(
    <div className="underconstruct-content d-flex justify-content-center">
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
    </div>
  )
}

export default UnderConstruction
