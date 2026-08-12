import React from "react"
import BlockElement from "../components/blockElement"

const journeys = [
  {
    year: "2018",
    milestone: "Frontend Development",
  },
  {
    year: "2020",
    milestone: "Frontend Architecture",
  },
  {
    year: "2021",
    milestone: "Sungnikah — Product + Full-stack",
  },
  {
    year: "2023",
    milestone: "Startup / SaaS",
  },
  {
    year: "2024",
    milestone: "Banking / Enterprise",
  },
  {
    year: "2025",
    milestone: "System Architecture",
  },
  {
    year: "2026",
    milestone: "Software Engineer — Frontend → Backend → Infrastructure",
  },
]

const EngineeringJourney = () => {
  return (
    <BlockElement
      className="engineering-journey px-4 py-5"
      component="div"
    >
      <h4 className="text-center mb-4">Engineering Journey</h4>
      <p className="lead text-center text-body-secondary mb-5">
        From frontend specialist to software engineer who understands systems
        end-to-end.
      </p>
      <ol className="engineering-journey-list">
        {journeys.map((journey, index) => (
          <li
            className="engineering-journey-item"
            key={`journey-${journey.year}-${index}`}
          >
            <span className="engineering-journey-year">{journey.year}</span>
            <span className="engineering-journey-milestone">
              {journey.milestone}
            </span>
          </li>
        ))}
      </ol>
    </BlockElement>
  )
}

export default EngineeringJourney
