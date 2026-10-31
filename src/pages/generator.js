import React, { useState } from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import BlockElement from "../components/blockElement"
import PropTypes from "prop-types"
import { extractJobInfo, buildCoverLetter } from "../utils/jobParser"

const renderWordingTemplates = () => {
  return (
    <>
      <p>How to get started: 😄</p>
      <ul>
        <li style={{ padding: 0, margin: 5 }}>
          1. Paste a job posting (lowongan kerja) or company overview into the
          "Job Posting" box on the right.
        </li>
        <li style={{ padding: 0, margin: 5 }}>
          2. Click "Generate Cover Letter" — the company name, role, location,
          and matching skills will be detected automatically.
        </li>
        <li style={{ padding: 0, margin: 5 }}>
          3. Review and tweak every field in the editor (anything in {"{curly}"}{" "}
          braces is a placeholder to fill in).
        </li>
        <li style={{ padding: 0, margin: 5 }}>
          4. Copy the final letter from this preview.
        </li>
      </ul>
    </>
  )
}

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

const Generator = ({ location }) => {
  const [fields, setFields] = useState(initialFields)
  const [detected, setDetected] = useState(null)
  const [hasGenerated, setHasGenerated] = useState(false)

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
    setHasGenerated(true)
    window.scrollTo(0, 0)
  }

  return (
    <Layout location={location} title={`Generator Cover Letter`}>
      <BlockElement className="row mt-5 mb-5" component="div">
        <div className="col col-md-8 col-lg-8">
          <div className="card p-5">
            {!hasGenerated && <>{renderWordingTemplates()}</>}
            {detected && (
              <div className="alert alert-info" role="alert">
                <b>Detected from job posting:</b>{" "}
                {[
                  detected.role &&
                    !detected.role.startsWith("{") &&
                    `Role: ${detected.role}`,
                  detected.location && `Location: ${detected.location}`,
                  detected.skills.length > 0 &&
                    `Skills: ${detected.skills.join(", ")}`,
                ]
                  .filter(Boolean)
                  .join(" · ") || "No details detected — fill fields manually."}
              </div>
            )}
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
        <div className="col col-md-4 col-lg-4">
          <div className="card p-4">
            <div className="form-group mb-3">
              <label htmlFor="job_posting" className="fw-bold">
                Job Posting / Company Overview
              </label>
              <textarea
                id="job_posting"
                className="form-control"
                rows="8"
                style={{ width: "100%" }}
                placeholder="Paste lowongan kerja or company overview here..."
                onChange={handleChange("jobPosting")}
                value={fields.jobPosting}
              ></textarea>
            </div>
            <button
              onClick={generateFromJobPosting}
              className="btn btn-md btn-block btn-primary mb-4"
              disabled={!fields.jobPosting.trim()}
            >
              Generate Cover Letter
            </button>
            <hr />
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
                Dear
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
            <div className="form-group mb-3">
              <label htmlFor="1st-intro-yourself" className="fw-bold">
                1st Paragraph: Briefly Introduce Yourself
              </label>
              <textarea
                id="1st-intro-yourself"
                className="form-control"
                rows="10"
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
                rows="12"
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
                rows="15"
                style={{ width: "100%" }}
                onChange={handleChange("callToAction")}
                value={fields.callToAction}
              ></textarea>
            </div>
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
            <div className="form-group mb-3">
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
