import React, { Fragment } from "react"
import { navigate } from "@reach/router"

const cards = ({ title, descriptions, tags, cta = "" }) => {
  const callToActionPreview = (e, urls) => {
    e.preventDefault()
    if (urls.length > 0) {
      window.open(`${urls}`, "_blank");
    }
    return
  }

  return (
    <Fragment>
      <div className="card shadow-lg">
        <div className="card-body">
          <h2>{title}</h2>
          <p className="card-text">{descriptions}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              {cta.length > 0 && (
                <button
                  onClick={e => callToActionPreview(e, cta)}
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Preview
                </button>
              )}
            </div>
            <small className="text-body-secondary">{tags}</small>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default cards
