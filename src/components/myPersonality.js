import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import BlockElement from "../components/blockElement"

const MyPersonality = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const data = useStaticQuery(graphql` {
    allFile(filter: { name: { eq: "personality" } }) {
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
      <BlockElement
        className="row mb-5 mt-5"
        component="div"
      >
        <div className="col-sm-12 col-md-6 col-lg-6">
          <p className="mt-5">
            <b>DIMAS PRASETYO</b>, you are a person who has a lot of ideas, both those that have never existed before and from his lateral mind, apart from having an analytical nature,
            you also have a lot of ideas, are analytical, thorough & like to gather information, like to motivate in various ways, some through his cheerful nature, some through his empathetic nature.
            there are also those who always want to advance other people, are hardworking, organized and impatient to act.
          </p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            {data.allFile.edges.map((file, index) => {
              return (
                <Viewer
                  key={index}
                  fileUrl={file.node.publicURL}
                  plugins={
                    [defaultLayoutPluginInstance]
                  }
                />
              )
            })}
          </Worker>
        </div>
      </BlockElement>
    </Fragment>
  );
}

export default MyPersonality
