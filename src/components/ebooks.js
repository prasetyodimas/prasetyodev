import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"

const Ebook = () => {
  const data = useStaticQuery(graphql` {
    allFile(filter: { extension: { in: "pdf" } }) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }`)

  return (
    <Fragment>
      <h4>All PDF Downloads</h4>
      <ul>
        {data.allFile.edges.map((file, index) => {
          return (
            <li key={`pdf-${index}`}>
              <a href={file.node.publicURL}
                target="_blank"
                rel="noreferrer"
                download
              >
                {file.node.name}
              </a>
            </li>
          )
        })}
      </ul>
    </Fragment>
  );

}

export default Ebook
