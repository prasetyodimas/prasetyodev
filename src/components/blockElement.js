import React, { Fragment } from "react"

const BlockElement = ({className, children, component}) => {

  let componentType;
  if (component === 'div') {
    componentType = (
      <div className={className}>
        {children}
      </div>
    )
  }

  if (component === 'span') {
    componentType = (
      <span className={className}>
        {children}
      </span>
    )
  }

  return(
    <Fragment>{componentType}</Fragment>
  )
}

export default BlockElement
