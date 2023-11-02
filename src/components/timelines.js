import React, { Fragment } from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Icon from '../components/icon';

const Timelines = () => {
  return (
    <Fragment>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#f7f7f7', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #f7f7f7' }}
          date="2022 - present"
          iconStyle={{ background: 'rgb(240 240 240)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Frontend Lead</h3>
          <h4 className="vertical-timeline-element-subtitle">PT Sahabat Bisnis Inovasi</h4>
          <p>
            Team Leadership · Communication · Problem Solving · Cross-browser Compatibility · Analytical Skills · TypeScript · PrimeNG · Vuetify · Nuxt.js · CSS Prepocessor · REST APIs · Microservices · Vue · AngularJS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          contentStyle={{ background: '#f7f7f7', color: '#000' }}
          iconStyle={{ background: 'rgb(240 240 240)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Sr. Frontend Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">PT Sahabat Bisnis Inovasi</h4>
          <p>
            Problem Solving · Cross-browser Compatibility · Analytical Skills · TypeScript · PrimeNG · Vuetify · Nuxt.js · CSS Prepocessor · REST APIs · Microservices · Vue · AngularJS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2021"
          contentStyle={{ background: '#f7f7f7', color: '#000' }}
          iconStyle={{ background: 'rgb(240 240 240)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">PT Pricebook Digital Indonesia</h4>
          <p>
            Redux.js · REST APIs · SCSS · Progressive Web Applications (PWAs) · React.js · CodeIgniter · MySQL · PHP · JavaScript · JSS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2018"
          contentStyle={{ background: '#f7f7f7', color: '#000' }}
          iconStyle={{ background: 'rgb(240 240 240)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Jr. Frontend Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Amtek Labs ( Software House / IT Consultant )</h4>
          <p>
            Bootstrap · Laravel · Google Material Design · Vue · Laravel · jQuery · PostgreSQL
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2017"
          contentStyle={{ background: '#f7f7f7', color: '#000' }}
          iconStyle={{ background: 'rgb(240 240 240)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Information System</h3>
          <h4 className="vertical-timeline-element-subtitle">Diploma of Degree</h4>
          <p>
            Technology Of Yogyakarta University - D3 System Information / Informatic Management - 2.79
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Fragment>
  )
}

export default Timelines
