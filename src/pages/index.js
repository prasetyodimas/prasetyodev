import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import PropTypes from "prop-types"

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
    <Fragment>
      <Layout location={location} title={siteTitle}>
        <Hero className="container" />
      </Layout>
    </Fragment>
  )
}

IndexSite.propTypes = {
  location: PropTypes.object,
}

export default IndexSite

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ data }) => {
  const authorName = data.site.siteMetadata?.author.name
  return <Seo title={`${authorName} Frontend Developer / Fullstack Developer`} />
}
