import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MyPersonality from "../components/myPersonality"
import PropTypes from 'prop-types'

const Personalities = ({ location }) => {
  return (
    <Layout location={location} title={'Personality'}>
      <Seo title="Personalities"/>
      <MyPersonality/>
    </Layout>
  );
}

Personalities.propTypes = {
  location: PropTypes.object
};

export default Personalities
