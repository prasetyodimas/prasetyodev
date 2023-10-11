import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import UnderConstruction from "../components/underconstruct"

const Portofolio = ({ location }) => {
  return (
    <Layout location={location} title={'Portofolio'}>
      <Seo title="Portofolio"/>
      <UnderConstruction>
        <p className="d-flex justify-content-center">Underconstruction</p>
      </UnderConstruction>
    </Layout>
  )
}

export default Portofolio
