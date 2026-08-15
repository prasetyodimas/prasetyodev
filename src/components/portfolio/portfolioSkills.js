import React from "react"
import skillGroups from "../../data/skillGroups"

const PortfolioSkills = () => {
  return (
    <section className="porto-section" id="skills">
      <header className="porto-section-header">
        <span className="section-eyebrow">Toolkit</span>
        <h3 className="porto-section-title">Skills &amp; Tools</h3>
        <p className="porto-section-desc">
          Grouped by what they actually do — from the styling layer up to the
          infrastructure that ships it.
        </p>
      </header>

      <div className="skill-groups">
        {skillGroups.map(group => (
          <article className="skill-group" key={group.id}>
            <div className="skill-group-head">
              <h4 className="skill-group-title">{group.label}</h4>
              <span className="skill-group-count">
                {group.skills.length} tools
              </span>
            </div>
            <p className="skill-group-desc">{group.description}</p>
            <ul className="skill-group-list">
              {group.skills.map(skill => (
                <li className="skill-chip" key={`${group.id}-${skill.name}`}>
                  <img
                    src={skill.icon}
                    alt=""
                    aria-hidden="true"
                    className="skill-chip-icon"
                    loading="lazy"
                  />
                  <span className="skill-chip-label">{skill.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PortfolioSkills
