import React from "react";

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Your Portfolio Name",
  "url": "https://prasetyodev.netlify.app",
  "description": "A portfolio showcasing projects and skills.",
  "publisher": {
    "@type": "Person",
    "name": "Dimas Prasetyo"
  }
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dimas Prasetyo",
  "url": "https://prasetyodev.netlify.app/",
  "sameAs": [
    "https://github.com/prasetyodimas",
    "https://linkedin.com/in/dimas-prasetyo"
  ],
  "jobTitle": "Web Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "PT Winde Technology Indonesia"
  }
};

const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default JsonLd;
