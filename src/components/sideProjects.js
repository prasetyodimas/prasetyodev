import React from "react"
import BlockElement from "./blockElement"
import sideProjects from "../data/sideProjects"

const SideProjects = () => {
  return (
    <BlockElement
      className="porto-section side-projects px-4 py-5"
      component="div"
    >
      <div id="side-projects" className="side-projects-anchor" />
      <header className="porto-section-header">
        <span className="section-eyebrow">Open Source & Side Projects</span>
        <h3 className="porto-section-title">Things I Build in My Spare Time</h3>
        <p className="porto-section-desc">
          A curated list of open-source repositories and side jobs — tools,
          extensions, and experiments I maintain outside of client work.
        </p>
      </header>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 porto-grid">
        {sideProjects.map(project => (
          <div className="col" key={project.slug}>
            <a
              className="porto-card side-project-card h-100 d-block text-decoration-none"
              href={project.cta}
              target="_blank"
              rel="noreferrer"
            >
              <div className="porto-card-body">
                <div className="porto-card-meta">
                  <span className="porto-card-role">{project.type}</span>
                  <span className="porto-card-period">{project.role}</span>
                </div>
                <h3 className="porto-card-title">{project.title}</h3>
                <p className="porto-card-summary">{project.description}</p>
                <div className="porto-card-tags">
                  {project.techStack.map((tech, i) => (
                    <span key={`tech-${i}`} className="porto-card-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="side-project-link">
                  View on GitHub →
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </BlockElement>
  )
}

export default SideProjects
