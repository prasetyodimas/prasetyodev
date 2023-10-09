import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"

const Portofolio = ({ location }) => {
  return (
    <Layout location={location} title={'Portofolio page'}>
      <Seo title="Portofolio"/>
      This is Portofolio page
    </Layout>
  )
}

export default Portofolio
