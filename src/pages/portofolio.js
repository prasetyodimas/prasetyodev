import React from "react"
import PropTypes from "prop-types"
import Seo from "../components/seo"
import Layout from "../components/layout"
import PortfolioIntro from "../components/portfolio/portfolioIntro"
import PortfolioSectionNav from "../components/portfolio/portfolioSectionNav"
import PortfolioProjectGrid, {
  projects,
} from "../components/portfolio/portfolioProjectGrid"
import PortfolioSkills from "../components/portfolio/portfolioSkills"
import PortfolioExperience from "../components/portfolio/portfolioExperience"
import skillGroups from "../data/skillGroups"
import experience from "../data/experience"

const Portofolio = ({ location }) => {
  const sections = [
    { id: "projects", label: "Projects", count: projects.length },
    {
      id: "skills",
      label: "Skills",
      count: skillGroups.reduce(
        (total, group) => total + group.skills.length,
        0
      ),
    },
    {
      id: "experience",
      label: "Experience",
      count: experience.filter(item => item.type === "work").length,
    },
  ]

  return (
    <Layout location={location} title={"Portofolio"}>
      <Seo title="Portofolio" />
      <PortfolioIntro />
      <PortfolioSectionNav sections={sections} />
      <PortfolioProjectGrid />
      <PortfolioSkills />
      <PortfolioExperience />
    </Layout>
  )
}

Portofolio.propTypes = {
  location: PropTypes.object,
}

export default Portofolio
