import React from "react"
import experience from "../../data/experience"

const PortfolioExperience = () => {
  return (
    <section className="porto-section" id="experience">
      <header className="porto-section-header">
        <span className="section-eyebrow">Track Record</span>
        <h3 className="porto-section-title">Experience</h3>
        <p className="porto-section-desc">
          Roles, teams, and the stack I owned in each of them — newest first.
        </p>
      </header>

      <ol className="exp-list">
        {experience.map((item, index) => (
          <li
            className={`exp-item exp-item--${item.type}`}
            key={`${item.company}-${item.period}-${index}`}
          >
            <div className="exp-marker" aria-hidden="true" />
            <article className="exp-card">
              <span className="exp-period">{item.period}</span>
              <h4 className="exp-role">{item.role}</h4>
              <p className="exp-company">{item.company}</p>
              {item.focus && <p className="exp-focus">{item.focus}</p>}
              {item.stack.length > 0 && (
                <ul className="exp-stack">
                  {item.stack.map(tech => (
                    <li className="exp-stack-item" key={`${index}-${tech}`}>
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default PortfolioExperience
