import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import ProjectModal from "../projectModal"
import projectsData from "../../data/portfolioProjects"

const projectImages = {
  amhes: [
    <StaticImage
      key="amhes-0"
      src="../../images/my-porto/amtek/kiosk-interface.png"
      alt="AMHES Kiosk Interface"
      width={600}
      height={400}
      quality={95}
      className="img-fluid"
    />,
    <StaticImage
      key="amhes-1"
      src="../../images/my-porto/amtek/kiosk-menu.png"
      alt="AMHES Kiosk Menu"
      width={600}
      height={400}
      quality={95}
      className="img-fluid"
    />,
    <StaticImage
      key="amhes-2"
      src="../../images/my-porto/amtek/simrs.png"
      alt="AMHES SIMRS"
      width={600}
      height={400}
      quality={95}
      className="img-fluid"
    />,
  ],
  marzoom: [
    <StaticImage
      key="marzoom-0"
      src="../../images/my-porto/pricebook/marzoom-landing.png"
      alt="Marzoom Landing"
      width={600}
      height={400}
      quality={95}
      className="img-fluid"
    />,
    <StaticImage
      key="marzoom-1"
      src="../../images/my-porto/pricebook/marzoom-handson.png"
      alt="Marzoom Mobile"
      width={600}
      height={400}
      quality={95}
      className="img-fluid"
    />,
    <StaticImage
      key="marzoom-2"
      src="../../images/my-porto/pricebook/marzoom-handson-profile-store.png"
      alt="Marzoom Store Profile"
      width={600}
      height={400}
      quality={95}
      className="img-fluid"
    />,
    <StaticImage
      key="marzoom-3"
      src="../../images/my-porto/pricebook/marzoom-mobile.jpeg"
      alt="Marzoom Mobile App"
      width={600}
      height={400}
      quality={95}
      className="img-fluid"
    />,
  ],
  mitra: [
    <StaticImage
      key="mitra-0"
      src="../../images/my-porto/pricebook/mitra-login-one.png"
      alt="Mitra Login"
      width={600}
      height={400}
      quality={95}
      className="img-fluid"
    />,
    <StaticImage
      key="mitra-1"
      src="../../images/my-porto/pricebook/mitra-login-handson.png"
      alt="Mitra Dashboard"
      width={600}
      height={400}
      quality={95}
      className="img-fluid"
    />,
    <StaticImage
      key="mitra-2"
      src="../../images/my-porto/pricebook/mitra-desktop.png"
      alt="Mitra Desktop"
      width={600}
      height={400}
      quality={95}
      className="img-fluid"
    />,
  ],
  "sabi-e-invoicing": [
    <StaticImage
      key="sabi-inv-0"
      src="../../images/my-porto/sabi/e-invoicing.png"
      alt="Sabi E-Invoicing"
      width={600}
      height={400}
      quality={95}
      className="img-fluid"
    />,
  ],
  sungnikah: [
    <StaticImage
      key="sungnikah-0"
      src="../../images/my-porto/sungnikah/sungnikah.png"
      alt="Sungnikah Platform"
      width={600}
      height={400}
      quality={95}
      className="img-fluid"
    />,
  ],
  "sabi-laas": [
    <StaticImage
      key="sabi-laas-0"
      src="../../images/my-porto/sabi/sabi-landing-1.png"
      alt="Sabi LaaS Landing"
      width={600}
      height={400}
      quality={95}
      className="img-fluid"
    />,
  ],
  "uiii-library": [
    <StaticImage
      key="uiii-0"
      src="../../images/my-porto/uiii/digital-library-uiii.png"
      alt="UIII Digital Library"
      width={600}
      height={400}
      quality={95}
      className="img-fluid"
    />,
  ],
}

export const projects = projectsData.map(project => ({
  ...project,
  images: projectImages[project.slug] || [],
}))

const PortfolioProjectGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className="porto-section" id="projects">
      <header className="porto-section-header">
        <span className="section-eyebrow">Projects</span>
        <h3 className="porto-section-title">Case Studies</h3>
        <p className="porto-section-desc">
          Click any card to explore the challenge, strategy, achievements, and
          tech stack behind each project.
        </p>
      </header>

      <div className="row row-cols-1 row-cols-md-2 row-cols-sm-2 row-cols-lg-3 g-4 porto-grid">
        {projects.map(project => (
          <div className="col" key={project.slug}>
            <div
              className="porto-card"
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === "Enter") setSelectedProject(project)
              }}
            >
              <div className="porto-card-image">
                {project.images[0]}
                <div className="porto-card-overlay">
                  <span className="porto-card-view">View Details →</span>
                </div>
              </div>
              <div className="porto-card-body">
                <div className="porto-card-meta">
                  <span className="porto-card-role">{project.role}</span>
                  <span className="porto-card-period">{project.period}</span>
                </div>
                <h3 className="porto-card-title">{project.title}</h3>
                <p className="porto-card-summary">{project.summary}</p>
                <div className="porto-card-tags">
                  {project.tags.map((tag, i) => (
                    <span key={`tag-${i}`} className="porto-card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default PortfolioProjectGrid
