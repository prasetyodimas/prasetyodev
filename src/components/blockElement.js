import React, { Fragment } from "react"

const BlockElement = ({className, children, component, type = ""}) => {

  let componentType;
  if (component === 'div') {
    componentType = (
      <div className={className}
        style={{
          ...type ? {
            minHeight: '500px',
          } : {},
          ...type === 'auto' ? {
            height: 'auto',
          } : {}
        }}
        id="whoops-error"
      >
        {children}
      </div>
    )
  }

  if (component === 'span') {
    componentType = (
      <span className={className}
        style={{
          ...type ? {
            minHeight: '500px',
          } : {},
          ...type === 'auto' ? {
            height: 'auto',
          } : {}
        }}
        id="whoops-error"
      >
        {children}
      </span>
    )
  }

  return(
    <Fragment>{componentType}</Fragment>
  )
}

export default BlockElement
