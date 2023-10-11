import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import UnderConstruction from "../components/underconstruct"

const About = ({ location }) => {
  return (
    <Layout location={location} title={'About'}>
      <Seo title="About"/>
      <UnderConstruction>
        <p className="d-flex justify-content-center">Underconstruction</p>
      </UnderConstruction>
    </Layout>
  )
}

export default About
