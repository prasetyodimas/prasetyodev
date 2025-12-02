import React from "react"

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Your Portfolio Name",
  url: "https://prasetyodev.netlify.app",
  description: "A portfolio showcasing projects and skills.",
  publisher: {
    "@type": "Person",
    name: "Dimas Prasetyo",
  },
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dimas Prasetyo",
  url: "https://prasetyodev.netlify.app/",
  sameAs: [
    "https://github.com/prasetyodimas",
    "https://linkedin.com/in/dimas-prasetyo",
  ],
  jobTitle: "Web Developer",
  worksFor: {
    "@type": "Organization",
    name: "PT Wide Technology Indonesia",
  },
}

/**
 * A React component that renders a JSON-LD script tag with the given data.
 * @param {object} data - The data to be rendered as JSON-LD.
 * @returns {ReactElement} A script tag with the given data rendered as JSON-LD.
 */
const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
)

export default JsonLd
