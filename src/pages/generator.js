import React, { useState } from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import BlockElement from "../components/blockElement"
import PropTypes from "prop-types"
import HtmlToReactParser from "html-to-react"
import {
  seederCompanyName,
  seederCompanyStreetAddress,
  seederCompanyCityAddress,
  seederGreetings,
  seederIntroOneSt,
  seederClosing,
  seederWhyJoinUsCompany,
  seederCallToAction,
  seederYourName,
} from "../utils/seeder"

const renderWordingTemplates = () => {
  return (
    <>
      <p>How to Started follow the instructions: 😄</p>
      <ul>
        <li style={{ padding: 0, margin: 5 }}>
          1. Step 1 find the button how to generate template.
        </li>
        <li style={{ padding: 0, margin: 5 }}>
          2. Step 2 find the button choose template (based your criteria
          templates).
        </li>
        <li style={{ padding: 0, margin: 5 }}>
          3. Step 3 look at the right corner have form editor change (based your
          needs).
        </li>
        <li style={{ padding: 0, margin: 5 }}>
          4. Step 4 look at the content have form curl braces {} change (based
          your needs).
        </li>
      </ul>
    </>
  )
}

const Generator = ({ location }) => {
  const HtmlToParser = HtmlToReactParser.Parser
  const renderHTML = new HtmlToParser()

  const [companyName, setCompanyName] = useState("")
  const [companyAddreStreet, setCompanyAddreStreet] = useState("")
  const [companyAddresCity, setCompanyAddresCity] = useState("")
  const [greetings, setGretings] = useState("")
  const [oneStIntro, setOneStIntro] = useState("")
  const [whyJoinUs, setWhyJoinUs] = useState("")
  const [closing, setClosing] = useState("")
  const [callToAction, setCallToAction] = useState("")
  const [yourName, setYourName] = useState("")
  const [isShowTemplate, showIsTemplate] = useState(false)

  const handleChangeCompany = e => {
    const { value } = e.target
    setCompanyName(value)
  }

  const handleChangeAddress = e => {
    const { value } = e.target
    setCompanyAddreStreet(value)
  }

  const handleGreetings = e => {
    const { value } = e.target
    setGretings(value)
  }

  const handleChange1stIntro = e => {
    const { value } = e.target
    setOneStIntro(value)
  }

  const handleChangeWhyJoinUs = e => {
    const { value } = e.target
    setWhyJoinUs(value)
  }

  const handleChangeClosing = e => {
    const { value } = e.target
    setClosing(value)
  }

  const handleChangeCallToAction = e => {
    const { value } = e.target
    setCallToAction(value)
  }

  const handleChangeDisplayName = e => {
    const { value } = e.target
    setYourName(value)
  }

  const generateTemplate = e => {
    e.preventDefault()
    setCompanyName(seederCompanyName())
    setCompanyAddreStreet(seederCompanyStreetAddress())
    setCompanyAddresCity(seederCompanyCityAddress())
    setGretings(seederGreetings())
    setOneStIntro(renderHTML.parse(seederIntroOneSt()))
    setWhyJoinUs(renderHTML.parse(seederWhyJoinUsCompany()))
    setCallToAction(seederCallToAction())
    setYourName(seederYourName())
    setClosing(seederClosing())
  }

  const replaceSpacerString = value => {
    if (value.includes("{")) {
      console.log(value)
    }
    return value.replace(/(?:\r\n|\r|\n)/g, "<br />")
  }

  const showTemplate = () => {
    showIsTemplate(!isShowTemplate)
  }

  return (
    <Layout location={location} title={`Generator Cover Letter`}>
      <Seo title="Generator Cover Letter" />
      <BlockElement className="row mt-5 mb-5" component="div">
        <div className="col col-md-8 col-lg-8">
          <div className="card p-5">
            {!isShowTemplate && <>{renderWordingTemplates()}</>}
            <p
              className="display-6"
              style={{ fontSize: "1rem", margin: 0, padding: 0 }}
            >
              <b>{companyName}</b>
            </p>
            <p
              className="display-6"
              style={{ fontSize: "1rem", margin: 0, padding: 0 }}
            >
              <b>{companyAddreStreet}</b>
            </p>
            <p
              className="display-6"
              style={{ fontSize: "1rem", margin: 0, padding: 0 }}
            >
              <b>{companyAddresCity}</b>
            </p>
            <br />
            <span className="mt-4"></span>
            <p style={{ fontSize: "1rem", margin: 0, padding: 0 }}>
              {greetings}
            </p>
            <span className="mt-4"></span>
            <p style={{ fontSize: "1rem", whiteSpace: "pre-line" }}>
              {renderHTML.parse(replaceSpacerString(oneStIntro))}
            </p>
            <span className="mt-4"></span>
            <p style={{ fontSize: "1rem", whiteSpace: "pre-line" }}>
              {renderHTML.parse(replaceSpacerString(whyJoinUs))}
            </p>
            <span className="mt-4"></span>
            <p style={{ fontSize: "1rem", whiteSpace: "pre-line" }}>
              {renderHTML.parse(replaceSpacerString(callToAction))}
            </p>
            <span className="mt-4"></span>
            <p
              className="display-6"
              style={{ fontSize: "1rem", margin: 0, padding: 0 }}
            >
              {closing}
            </p>
            <p
              className="display-6"
              style={{ fontSize: "1rem", margin: 0, padding: 0 }}
            >
              {yourName}
            </p>
            <br />
          </div>
        </div>
        <div className="col col-md-4 col-lg-4">
          <div className="card p-4">
            <div class="form-group mb-3">
              <label for="company_name" className="fw-bold">
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                style={{ width: "100%" }}
                value={companyName}
                onChange={handleChangeCompany}
              />
            </div>
            <div class="form-group mb-3">
              <label for="company_address_street" className="fw-bold">
                Company Address: Street
              </label>
              <textarea
                class="form-control"
                rows="4"
                style={{ width: "100%" }}
                onChange={handleChangeAddress}
                value={companyAddreStreet}
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="company_address_city" className="fw-bold">
                Company Address: City
              </label>
              <textarea
                class="form-control"
                rows="4"
                style={{ width: "100%" }}
                onChange={handleChangeAddress}
                value={companyAddreStreet}
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="dear_recepient" className="fw-bold">
                Dear
              </label>
              <input
                type="text"
                className="form-control"
                style={{ width: "100%" }}
                value={greetings}
                onChange={handleGreetings}
              />
            </div>
            <div class="form-group mb-3">
              <label for="1st-intro-yourself" className="fw-bold">
                1st Paragraph: Briefly Introduce Yourself
              </label>
              <textarea
                class="form-control"
                rows="10"
                style={{ width: "100%" }}
                onChange={handleChange1stIntro}
                value={renderHTML.parse(oneStIntro)}
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="1st-intro-yourself" className="fw-bold">
                2nd Paragraph: Why You? Why this Company?
              </label>
              <textarea
                class="form-control"
                rows="12"
                style={{ width: "100%" }}
                onChange={handleChangeWhyJoinUs}
                value={renderHTML.parse(whyJoinUs)}
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="3rd-call-to-action" className="fw-bold">
                3rd Paragraph: Call to Action
              </label>
              <textarea
                class="form-control"
                rows="15"
                style={{ width: "100%" }}
                onChange={handleChangeCallToAction}
                value={renderHTML.parse(callToAction)}
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="closing" className="fw-bold">
                Closing
              </label>
              <input
                type="text"
                className="form-control"
                style={{ width: "100%" }}
                value={closing}
                onChange={handleChangeClosing}
              />
            </div>
            <div class="form-group mb-3">
              <label for="your_name" className="fw-bold">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                style={{ width: "100%" }}
                value={yourName}
                onChange={handleChangeDisplayName}
              />
            </div>
            <button
              onClick={showTemplate}
              className="btn btn-md btn-block btn-primary"
            >
              Click Here to Choose a Template
            </button>
            {isShowTemplate && (
              <ul
                className="dropdown-menu mt-4"
                aria-labelledby="dropdown-generator"
              >
                <li style={{ padding: 0, margin: 5 }}>
                  <button
                    className="btn btn-sm btn-warning"
                    onClick={generateTemplate}
                    href="#"
                  >
                    Frontend Template
                  </button>
                </li>
                <li style={{ padding: 0, margin: 5 }}>
                  <button className="btn btn-sm btn-warning disabled" href="#">
                    Backend Template (Soon)
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </BlockElement>
    </Layout>
  )
}

Generator.propTypes = {
  location: PropTypes.object,
}

export default Generator
