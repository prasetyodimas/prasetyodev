import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import EngineeringJourney from "../components/engineeringJourney"
import SungnikahCaseStudy from "../components/sungnikahCaseStudy"
import ServicesSection from "../components/servicesSection"
import GithubActivity from "../components/githubActivity"
import GetInTouch from "../components/getInTouch"
import PageSpeedInsight from "../components/pageSpeedInsight"
import JamstackArchitecture from "../components/jamstackArchitecture"
import JsonLd, { websiteJsonLd, personJsonLd } from "../components/JsonLd"
// import ContactMe from "../components/contactMe"
// import MyServices from "../components/myServices"

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

const IndexSite = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={personJsonLd} />
      <Hero className="container" />
      <EngineeringJourney />
      <SungnikahCaseStudy />
      <ServicesSection />
      <GithubActivity />
      <JamstackArchitecture />
      <GetInTouch />
      {/* <MyServices /> */}
      {/* <ContactMe /> */}
      <PageSpeedInsight />
    </Layout>
  )
}

IndexSite.propTypes = {
  location: PropTypes.object,
  data: PropTypes.object,
}

export default IndexSite

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
const Header = ({ data }) => {
  const authorName = data.site.siteMetadata?.author.name
  return <Seo title={`${authorName} Software Engineer`} pathname="/" />
}

Header.propTypes = {
  data: PropTypes.object,
}

export const Head = Header
