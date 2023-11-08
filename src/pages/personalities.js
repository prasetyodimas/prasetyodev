import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MyPersonality from "../components/myPersonality"

const Personalities = ({ location }) => {
  return (
    <Layout location={location} title={'Personality'}>
      <Seo title="Personalities"/>
      <MyPersonality/>
    </Layout>
  );
}

export default Personalities
