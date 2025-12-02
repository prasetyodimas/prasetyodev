/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import imageOpenG from "../images/logo/dp.png"

const Seo = ({ description, title, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            keywords
            description
            social {
              facebook
              linkedin
            }
            siteUrl
            seo {
              canonical
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaKeywords = description || site.siteMetadata.keywords
  const metaUrl = description || site.siteMetadata.siteUrl
  const canonicalUrl = description || site.siteMetadata.seo.canonical

  return (
    <>
      <title>{title}</title>
      <meta name="keyword" content={metaKeywords} />
      <meta name="description" content={metaDescription} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={imageOpenG} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:keyword" content={metaKeywords} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={site.siteMetadata?.social?.twitter || ``}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageOpenG} />
      <meta name="google-site-verification" content="4uCaQFkmAEvTMR4MEHL11M3m1Jw76nx3ci6SdbbYmj8" />

      <link rel="canonical" href={canonicalUrl} />

      {children}
    </>
  )
}

export default Seo
