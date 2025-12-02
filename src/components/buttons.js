import React from "react"
import { navigate } from "gatsby"
import PropTypes from "prop-types"

const Buttons = ({ children, propClass, propRedirect }) => {
  const onRedirection = () => {
    navigate(`${propRedirect}`)
  }

  return (
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

Buttons.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  propClass: PropTypes.string,
  propRedirect: PropTypes.string,
}

export default Buttons
