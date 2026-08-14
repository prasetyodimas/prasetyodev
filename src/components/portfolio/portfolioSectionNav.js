import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

const PortfolioSectionNav = ({ sections }) => {
  const [activeId, setActiveId] = useState(sections[0]?.id)

  useEffect(() => {
    const targets = sections
      .map(section => document.getElementById(section.id))
      .filter(Boolean)

    if (!targets.length || typeof IntersectionObserver === "undefined") return

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0]

        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    )

    targets.forEach(target => observer.observe(target))
    return () => observer.disconnect()
  }, [sections])

  const handleClick = (event, id) => {
    const target = document.getElementById(id)
    if (!target) return

    event.preventDefault()
    setActiveId(id)
    target.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <nav className="porto-nav" aria-label="Portfolio sections">
      <ul className="porto-nav-list">
        {sections.map(section => (
          <li className="porto-nav-item" key={section.id}>
            <a
              className={`porto-nav-link ${
                activeId === section.id ? "is-active" : ""
              }`}
              href={`#${section.id}`}
              aria-current={activeId === section.id ? "true" : undefined}
              onClick={event => handleClick(event, section.id)}
            >
              <span className="porto-nav-label">{section.label}</span>
              {typeof section.count === "number" && (
                <span className="porto-nav-count">{section.count}</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

PortfolioSectionNav.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      count: PropTypes.number,
    })
  ).isRequired,
}

export default PortfolioSectionNav
