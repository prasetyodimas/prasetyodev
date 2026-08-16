import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BlockElement from "../components/blockElement"

const MyPersonality = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "personality" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  return (
    <BlockElement className="row mb-5 mt-5" component="div">
      <div className="col-sm-12 col-md-6 col-lg-6">
        <p className="mt-5">
          <b>DIMAS PRASETYO</b>, you are a person who has a lot of ideas, both
          those that have never existed before and from his lateral mind, apart
          from having an analytical nature, you also have a lot of ideas, are
          analytical, thorough & like to gather information, like to motivate in
          various ways, some through his cheerful nature, some through his
          empathetic nature. there are also those who always want to advance
          other people, are hardworking, organized and impatient to act.
        </p>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6">
        {data.allFile.edges.map((file, index) => (
          <embed
            key={index}
            src={file.node.publicURL}
            type="application/pdf"
            width="100%"
            height="600px"
            style={{ border: "none" }}
          />
        ))}
      </div>
    </BlockElement>
  )
}

export default MyPersonality
