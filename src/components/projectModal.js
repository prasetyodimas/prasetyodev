import React, { useEffect, useState, useCallback } from "react"
import PropTypes from "prop-types"

const ProjectModal = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0)

  const handleKeyDown = useCallback(
    e => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight" && project.images.length > 1) {
        setCurrentImage(prev => (prev + 1) % project.images.length)
      }
      if (e.key === "ArrowLeft" && project.images.length > 1) {
        setCurrentImage(prev =>
          prev === 0 ? project.images.length - 1 : prev - 1
        )
      }
    },
    [onClose, project]
  )

  useEffect(() => {
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])

  if (!project) return null

  return (
    <div
      className="project-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="project-modal"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close"
          type="button"
        >
          &times;
        </button>

        <div className="project-modal-body">
          <div className="project-modal-gallery">
            <div className="project-modal-image-main">
              {project.images[currentImage]}
            </div>
            {project.images.length > 1 && (
              <div className="project-modal-thumbs">
                {project.images.map((img, i) => (
                  <button
                    key={`thumb-${i}`}
                    className={`project-modal-thumb ${
                      i === currentImage ? "active" : ""
                    }`}
                    onClick={() => setCurrentImage(i)}
                    type="button"
                    aria-label={`View image ${i + 1}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="project-modal-content">
            <div className="project-modal-header">
              <span className="project-modal-role">{project.role}</span>
              <span className="project-modal-period">{project.period}</span>
            </div>
            <h2 className="project-modal-title">{project.title}</h2>
            <p className="project-modal-tagline">{project.tagline}</p>
            <p className="project-modal-summary">{project.summary}</p>

            <div className="project-modal-section">
              <h3 className="project-modal-section-title">Challenge</h3>
              <p className="project-modal-section-text">{project.challenge}</p>
            </div>

            <div className="project-modal-section">
              <h3 className="project-modal-section-title">Strategy</h3>
              <p className="project-modal-section-text">{project.strategy}</p>
            </div>

            <div className="project-modal-section">
              <h3 className="project-modal-section-title">Achievements</h3>
              <ul className="project-modal-list">
                {project.achievements.map((item, i) => (
                  <li key={`ach-${i}`}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-modal-section">
              <h3 className="project-modal-section-title">Tech Stack</h3>
              <div className="project-modal-tags">
                {project.techStack.map((tech, i) => (
                  <span key={`tech-${i}`} className="project-modal-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-modal-section">
              <h3 className="project-modal-section-title">
                Job Responsibility
              </h3>
              <ul className="project-modal-list">
                {project.responsibilities.map((item, i) => (
                  <li key={`resp-${i}`}>{item}</li>
                ))}
              </ul>
            </div>

            {project.cta && (
              <a
                className="project-modal-cta"
                href={project.cta}
                target="_blank"
                rel="noreferrer"
              >
                Visit Project →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

ProjectModal.propTypes = {
  project: PropTypes.object,
  onClose: PropTypes.func.isRequired,
}

export default ProjectModal
