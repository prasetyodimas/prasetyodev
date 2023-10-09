import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"

const About = ({ location }) => {
  return (
    <Layout location={location} title={'About page'}>
      <Seo title="About"/>
      This is About page
    </Layout>
  )
}

export default About
