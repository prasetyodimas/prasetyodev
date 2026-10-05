import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MyPersonality from "../components/myPersonality"
import PropTypes from "prop-types"

const Personalities = ({ location }) => {
  return (
    <Layout location={location} title={"Personality"}>
      <MyPersonality />
    </Layout>
  )
}

Personalities.propTypes = {
  location: PropTypes.object,
}

export const Head = () => (
  <Seo title="Personalities" pathname="/personalities/" />
)

export default Personalities
