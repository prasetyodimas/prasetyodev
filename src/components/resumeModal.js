import React, { useEffect, useState, useCallback } from "react"
import { createPortal } from "react-dom"
import PropTypes from "prop-types"

const ResumeModal = ({ fileUrl, fileName, onClose }) => {
  const [status, setStatus] = useState("loading") // loading | ready | error
  const [progress, setProgress] = useState(0)
  const [blobUrl, setBlobUrl] = useState(null)

  const handleKeyDown = useCallback(
    e => {
      if (e.key === "Escape") onClose()
    },
    [onClose]
  )

  useEffect(() => {
    let cancelled = false
    let objectUrl = null

    const loadResume = async () => {
      try {
        const response = await fetch(fileUrl)
        if (!response.ok) throw new Error(`HTTP ${response.status}`)

        const total = Number(response.headers.get("content-length")) || 0
        const reader = response.body.getReader()
        const chunks = []
        let received = 0

        for (;;) {
          const { done, value } = await reader.read()
          if (done) break
          chunks.push(value)
          received += value.length
          if (!cancelled && total > 0) {
            setProgress(Math.round((received / total) * 100))
          }
        }

        const blob = new Blob(chunks, { type: "application/pdf" })
        objectUrl = URL.createObjectURL(blob)

        if (cancelled) {
          URL.revokeObjectURL(objectUrl)
        } else {
          setBlobUrl(objectUrl)
          setProgress(100)
          setStatus("ready")
        }
      } catch (error) {
        if (!cancelled) setStatus("error")
      }
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)
    loadResume()

    return () => {
      cancelled = true
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [fileUrl, handleKeyDown])

  const handleDownload = () => {
    if (!blobUrl) return
    const a = document.createElement("a")
    a.href = blobUrl
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const modal = (
    <div
      className="project-modal-overlay resume-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume preview"
    >
      <div className="resume-modal" onClick={e => e.stopPropagation()}>
        <button
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close"
          type="button"
        >
          &times;
        </button>

        <div className="resume-modal-header">
          <h2 className="resume-modal-title">Resume</h2>
          <span className="resume-modal-filename">{fileName}</span>
        </div>

        <div className="resume-modal-body">
          {status === "loading" && (
            <div className="resume-modal-loading">
              <div className="resume-modal-spinner" aria-hidden="true" />
              <p className="resume-modal-loading-text">
                Loading CV&hellip; {progress > 0 ? `${progress}%` : ""}
              </p>
              <div className="resume-modal-progress">
                <div
                  className="resume-modal-progress-bar"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="resume-modal-loading">
              <p className="resume-modal-loading-text">
                Failed to load the preview.
              </p>
              <a
                className="btn-download-cv"
                href={fileUrl}
                download={fileName}
              >
                Download directly
              </a>
            </div>
          )}

          {status === "ready" && (
            <iframe
              className="resume-modal-frame"
              src={blobUrl}
              title="Resume preview"
            />
          )}
        </div>

        <div className="resume-modal-footer">
          <button
            className="btn-download-cv"
            onClick={handleDownload}
            disabled={status !== "ready"}
            type="button"
          >
            {status === "ready" ? "Download PDF" : "Preparing…"}
          </button>
        </div>
      </div>
    </div>
  )

  if (typeof document === "undefined") return null
  return createPortal(modal, document.body)
}

ResumeModal.propTypes = {
  fileUrl: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ResumeModal
