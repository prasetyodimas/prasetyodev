import React from "react"
const year = new Date().getFullYear() - 2017
const BadgeYears = () => (
  <div className="badge-years">
    <p className="badge-years-number">{year}</p>
    <p className="badge-years-label">Year Experience</p>
  </div>
)

export default BadgeYears
