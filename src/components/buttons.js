import React from "react"
import { navigate } from "gatsby"

const Buttons = ({children, propClass, propRedirect}) => {

  const onRedirection = () => {
    navigate(`${propRedirect}`);
  }

  return(
    <button className={`${propClass}`} onClick={onRedirection}>
      {children}
      <span className="btn-bloby__inner">
        <span className="btn-bloby__blobs">
          <span className="btn-bloby__boba"></span>
          <span className="btn-bloby__boba"></span>
          <span className="btn-bloby__boba"></span>
          <span className="btn-bloby__boba"></span>
        </span>
      </span>
    </button>
  )
}

export default Buttons
