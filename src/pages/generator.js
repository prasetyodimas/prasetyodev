import React, { useState } from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import BlockElement from "../components/blockElement"
import PropTypes from "prop-types"
import { extractJobInfo, buildCoverLetter } from "../utils/jobParser"

const initialFields = {
  jobPosting: "",
  companyName: "",
  companyAddreStreet: "",
  companyAddresCity: "",
  greetings: "",
  oneStIntro: "",
  whyJoinUs: "",
  callToAction: "",
  closing: "",
  yourName: "",
}

const steps = [
  { id: 0, label: "Job Posting", hint: "Paste the lowongan kerja or company overview" },
  { id: 1, label: "Recipient", hint: "Who this letter is addressed to" },
  { id: 2, label: "Letter Body", hint: "The three core paragraphs" },
  { id: 3, label: "Sign-off & Copy", hint: "Closing and your name" },
]

const Generator = ({ location }) => {
  const [fields, setFields] = useState(initialFields)
  const [detected, setDetected] = useState(null)
  const [step, setStep] = useState(0)
  const [copied, setCopied] = useState(false)

  const handleChange = key => e => {
    const { value } = e.target
    setFields(prev => ({ ...prev, [key]: value }))
  }

  const generateFromJobPosting = e => {
    e.preventDefault()
    if (!fields.jobPosting.trim()) return

    const info = extractJobInfo(fields.jobPosting)
    const letter = buildCoverLetter(info)

    setFields(prev => ({
      ...prev,
      companyName: letter.company === "{company_name}" ? "" : letter.company,
      companyAddresCity: info.location || prev.companyAddresCity,
      greetings: prev.greetings || "Dear Recruiters",
      oneStIntro: letter.intro,
      whyJoinUs: letter.whyJoin,
      callToAction: letter.callToAction,
      closing: prev.closing || "Best Regards",
      yourName: prev.yourName || "{your_name}",
    }))
    setDetected(letter.detected)
    setStep(1)
  }

  const composeLetter = () =>
    [
      fields.companyName,
      fields.companyAddreStreet,
      fields.companyAddresCity,
      "",
      fields.greetings,
      "",
      fields.oneStIntro,
      "",
      fields.whyJoinUs,
      "",
      fields.callToAction,
      "",
      fields.closing,
      fields.yourName,
    ]
      .filter(line => line !== undefined)
      .join("\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim()

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(composeLetter())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const canNext = step < steps.length - 1
  const canPrev = step > 0

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <>
            <div className="form-group mb-3">
              <label htmlFor="job_posting" className="fw-bold">
                Job Posting / Company Overview
              </label>
              <textarea
                id="job_posting"
                className="form-control"
                rows="14"
                style={{ width: "100%" }}
                placeholder="Paste lowongan kerja or company overview here..."
                onChange={handleChange("jobPosting")}
                value={fields.jobPosting}
              ></textarea>
            </div>
            <button
              onClick={generateFromJobPosting}
              className="btn btn-md btn-block btn-primary"
              disabled={!fields.jobPosting.trim()}
            >
              Generate Cover Letter
            </button>
            <p className="text-body-secondary mt-3 mb-0" style={{ fontSize: "0.85rem" }}>
              Detection runs locally in your browser — nothing is uploaded.
            </p>
          </>
        )
      case 1:
        return (
          <>
            <div className="form-group mb-3">
              <label htmlFor="company_name" className="fw-bold">
                Company Name
              </label>
              <input
                id="company_name"
                type="text"
                className="form-control"
                style={{ width: "100%" }}
                value={fields.companyName}
                onChange={handleChange("companyName")}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="company_address_street" className="fw-bold">
                Company Address: Street
              </label>
              <textarea
                id="company_address_street"
                className="form-control"
                rows="4"
                style={{ width: "100%" }}
                onChange={handleChange("companyAddreStreet")}
                value={fields.companyAddreStreet}
              ></textarea>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="company_address_city" className="fw-bold">
                Company Address: City
              </label>
              <textarea
                id="company_address_city"
                className="form-control"
                rows="4"
                style={{ width: "100%" }}
                onChange={handleChange("companyAddresCity")}
                value={fields.companyAddresCity}
              ></textarea>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="dear_recepient" className="fw-bold">
                Greeting (Dear ...)
              </label>
              <input
                id="dear_recepient"
                type="text"
                className="form-control"
                style={{ width: "100%" }}
                value={fields.greetings}
                onChange={handleChange("greetings")}
              />
            </div>
          </>
        )
      case 2:
        return (
          <>
            <div className="form-group mb-3">
              <label htmlFor="1st-intro-yourself" className="fw-bold">
                1st Paragraph: Briefly Introduce Yourself
              </label>
              <textarea
                id="1st-intro-yourself"
                className="form-control"
                rows="8"
                style={{ width: "100%" }}
                onChange={handleChange("oneStIntro")}
                value={fields.oneStIntro}
              ></textarea>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="2st-why-join-company" className="fw-bold">
                2nd Paragraph: Why You? Why this Company?
              </label>
              <textarea
                id="2st-why-join-company"
                className="form-control"
                rows="8"
                style={{ width: "100%" }}
                onChange={handleChange("whyJoinUs")}
                value={fields.whyJoinUs}
              ></textarea>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="3rd-call-to-action" className="fw-bold">
                3rd Paragraph: Call to Action
              </label>
              <textarea
                id="3rd-call-to-action"
                className="form-control"
                rows="8"
                style={{ width: "100%" }}
                onChange={handleChange("callToAction")}
                value={fields.callToAction}
              ></textarea>
            </div>
          </>
        )
      case 3:
        return (
          <>
            <div className="form-group mb-3">
              <label htmlFor="closing" className="fw-bold">
                Closing
              </label>
              <input
                id="closing"
                type="text"
                className="form-control"
                style={{ width: "100%" }}
                value={fields.closing}
                onChange={handleChange("closing")}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="your_name" className="fw-bold">
                Your Name
              </label>
              <input
                id="your_name"
                type="text"
                className="form-control"
                style={{ width: "100%" }}
                value={fields.yourName}
                onChange={handleChange("yourName")}
              />
            </div>
            <button
              type="button"
              className="btn btn-md btn-block btn-success"
              onClick={copyToClipboard}
            >
              {copied ? "Copied!" : "Copy Cover Letter"}
            </button>
            <p className="text-body-secondary mt-3 mb-0" style={{ fontSize: "0.85rem" }}>
              Copies the full letter from the preview as plain text.
            </p>
          </>
        )
      default:
        return null
    }
  }

  return (
    <Layout location={location} title={`Generator Cover Letter`}>
      <BlockElement className="row mt-5 mb-5" component="div">
        {detected && (
          <div className="col-12">
            <div className="alert alert-info" role="alert">
              <b>Detected from job posting:</b>{" "}
              {[
                detected.company && `Company: ${detected.company}`,
                detected.role && `Role: ${detected.role}`,
                detected.location && `Location: ${detected.location}`,
                detected.skills.length > 0 &&
                  `Skills: ${detected.skills.join(", ")}`,
              ]
                .filter(Boolean)
                .join(" · ") || "No details detected — fill fields manually."}
            </div>
          </div>
        )}
        <div className="col-12 col-lg-6 order-2 mb-4 mb-lg-0">
          <div className="gen-paper">
            <p
              className="display-6"
              style={{ fontSize: "1rem", margin: 0, padding: 0 }}
            >
              <b>{fields.companyName}</b>
            </p>
            <p
              className="display-6"
              style={{ fontSize: "1rem", margin: 0, padding: 0 }}
            >
              <b>{fields.companyAddreStreet}</b>
            </p>
            <p
              className="display-6"
              style={{ fontSize: "1rem", margin: 0, padding: 0 }}
            >
              <b>{fields.companyAddresCity}</b>
            </p>
            <br />
            <span className="mt-4"></span>
            <p style={{ fontSize: "1rem", margin: 0, padding: 0 }}>
              {fields.greetings}
            </p>
            <span className="mt-4"></span>
            <p style={{ fontSize: "1rem", whiteSpace: "pre-line" }}>
              {fields.oneStIntro}
            </p>
            <span className="mt-4"></span>
            <p style={{ fontSize: "1rem", whiteSpace: "pre-line" }}>
              {fields.whyJoinUs}
            </p>
            <span className="mt-4"></span>
            <p style={{ fontSize: "1rem", whiteSpace: "pre-line" }}>
              {fields.callToAction}
            </p>
            <span className="mt-4"></span>
            <p
              className="display-6"
              style={{ fontSize: "1rem", margin: 0, padding: 0 }}
            >
              {fields.closing}
            </p>
            <p
              className="display-6"
              style={{ fontSize: "1rem", margin: 0, padding: 0 }}
            >
              {fields.yourName}
            </p>
            <br />
          </div>
        </div>
        <div className="col-12 col-lg-6 order-1">
          <div className="card gen-wizard">
            <aside className="gen-rail">
              <ol className="gen-rail-steps">
                {steps.map(s => (
                  <li
                    key={s.id}
                    className={`gen-rail-step ${
                      step === s.id ? "is-active" : ""
                    } ${step > s.id ? "is-done" : ""}`}
                  >
                    <button
                      type="button"
                      className="gen-rail-btn"
                      onClick={() => setStep(s.id)}
                    >
                      <span className="gen-rail-num">
                        {step > s.id ? "✓" : s.id + 1}
                      </span>
                      <span className="gen-rail-text">
                        <span className="gen-rail-label">{s.label}</span>
                        <span className="gen-rail-sub">{s.hint}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ol>
            </aside>
            <div className="gen-content">
              <div className="gen-content-head">
                <span className="gen-header-count">
                  Step {step + 1} of {steps.length}
                </span>
                <h5 className="gen-header-title">{steps[step].label}</h5>
              </div>
              <div className="gen-step-body">{renderStep()}</div>
              <div className="gen-content-foot">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => setStep(step - 1)}
                  disabled={!canPrev}
                >
                  ← Back
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-primary"
                  onClick={() => setStep(step + 1)}
                  disabled={!canNext}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </BlockElement>
    </Layout>
  )
}

Generator.propTypes = {
  location: PropTypes.object,
}

export const Head = () => (
  <Seo title="Generator Cover Letter" pathname="/generator/" />
)

export default Generator
