import React, { Fragment } from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import BlockElement from "../components/blockElement"

const Timelines = () => {
  return (
    <Fragment>
      <h4>Experience</h4>
      <BlockElement className="p-5 mb-5 mt-5 experience-content" component="span">
        <blockquote className="m-5 content-blockqote">
          <p className="text-center">
            "<b>Experience is a fundamental aspect of human life </b>that
            involves learning and personal growth through direct interaction
            with the world. It is a subjective and multifaceted phenomenon,
            shaped by individual perspectives, emotions, and the cultural and
            social context in which it occurs. Experience has a significant
            impact on a person's knowledge, skills and understanding of the
            world as a whole."
          </p>
        </blockquote>
      </BlockElement>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#f7f7f7", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #f7f7f7" }}
          date="2022 - present"
          iconStyle={{ background: "rgb(240 240 240)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            PT Sahabat Bisnis Inovasi
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Frontend Lead
          </h4>
          <p>
            Team Leadership · Communication · Problem Solving · Cross-browser
            Compatibility · Analytical Skills · TypeScript · PrimeNG · Vuetify ·
            Nuxt.js · CSS Prepocessor · REST APIs · Microservices · Vue ·
            AngularJS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          contentStyle={{ background: "#f7f7f7", color: "#000" }}
          iconStyle={{ background: "rgb(240 240 240)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            PT Sahabat Bisnis Inovasi
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sr. Frontend Developer
          </h4>
          <p>
            Problem Solving · Cross-browser Compatibility · Analytical Skills ·
            TypeScript · PrimeNG · Vuetify · Nuxt.js · CSS Prepocessor · REST
            APIs · Microservices · Vue · AngularJS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2021"
          contentStyle={{ background: "#f7f7f7", color: "#000" }}
          iconStyle={{ background: "rgb(240 240 240)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            PT Pricebook Digital Indonesia
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Frontend Developer
          </h4>
          <p>
            Redux.js · REST APIs · SCSS · Progressive Web Applications (PWAs) ·
            React.js · CodeIgniter · MySQL · PHP · JavaScript · JSS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2018"
          contentStyle={{ background: "#f7f7f7", color: "#000" }}
          iconStyle={{ background: "rgb(240 240 240)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Amtek Labs ( Software House / IT Consultant )
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Jr. Frontend Developer
          </h4>
          <p>
            Bootstrap · Laravel · Google Material Design · Vue · Laravel ·
            jQuery · PostgreSQL
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2017"
          contentStyle={{ background: "#f7f7f7", color: "#000" }}
          iconStyle={{ background: "rgb(240 240 240)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Information System
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Diploma of Degree
          </h4>
          <p>
            Technology Of Yogyakarta University - D3 System Information /
            Informatic Management - 2.79
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Fragment>
  )
}

export default Timelines
