/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({
  title,
  description,
  image,
  pathname,
  type = "website",
  children,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            defaultTitle
            description
            keywords
            siteUrl
            image
            author {
              name
            }
            social {
              twitter
              facebook
              linkedin
            }
          }
        }
      }
    `
  )

  const siteMetadata = site.siteMetadata

  const fullTitle = title
    ? `${title} | ${siteMetadata.title}`
    : siteMetadata.defaultTitle || siteMetadata.title

  const metaDescription = description || siteMetadata.description
  const metaKeywords = siteMetadata.keywords
  const canonicalUrl = `${siteMetadata.siteUrl}${pathname || "/"}`

  const resolveImageUrl = imageSrc => {
    if (!imageSrc) {
      imageSrc = siteMetadata.image
    }
    if (/^https?:\/\//.test(imageSrc)) {
      return imageSrc
    }
    const normalized = imageSrc.startsWith("/") ? imageSrc : `/${imageSrc}`
    return `${siteMetadata.siteUrl}${normalized}`
  }

  const imageUrl = resolveImageUrl(image)
  const imageAlt = title
    ? `${title} – ${siteMetadata.title}`
    : siteMetadata.title

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={siteMetadata.author.name} />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:url" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:type" content="image/png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.social.twitter || ``} />
      <meta
        name="twitter:creator"
        content={siteMetadata.social.twitter || ``}
      />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />

      <link rel="canonical" href={canonicalUrl} />

      <meta
        name="google-site-verification"
        content="4uCaQFkmAEvTMR4MEHL11M3m1Jw76nx3ci6SdbbYmj8"
      />

      {children}
    </>
  )
}

export default Seo
