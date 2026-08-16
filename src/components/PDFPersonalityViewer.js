import React from "react"
import { Viewer, Worker } from "@react-pdf-viewer/core"
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"
import "@react-pdf-viewer/core/lib/styles/index.css"
import "@react-pdf-viewer/default-layout/lib/styles/index.css"

const PDFPersonalityViewer = ({ files }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      {files.map((file, index) => (
        <Viewer
          key={index}
          fileUrl={file.node.publicURL}
          plugins={[defaultLayoutPluginInstance]}
        />
      ))}
    </Worker>
  )
}

export default PDFPersonalityViewer
