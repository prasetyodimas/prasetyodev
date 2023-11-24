import React, { Fragment } from "react"

const cards = ({ title, descriptions, tags }) => {
  return (
    <Fragment>
      <div className="card shadow-lg">
        <div className="card-body">
          <h2>{title}</h2>
          <p className="card-text">{descriptions}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Preview
              </button>
            </div>
            <small className="text-body-secondary">{tags}</small>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default cards
