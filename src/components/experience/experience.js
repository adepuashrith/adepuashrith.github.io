import * as React from "react"
import "./experience.scss"


const experienceData = [
  {
    "company": "University at Buffalo",
    "url": "https://engineering.buffalo.edu/mechanical-aerospace.html",
    "time": "August 2022 - Present",
    "position": "Research Assistant"
  },
  {
    "company": "Decibel Labs",
    "url": "https://lms.decibelslab.com/pages/ev-lab-setup-by-decibels-lab",
    "time": "June 2020 - July 2021",
    "position": "Process Modelling Engineer"
  },
]

const Experience = () => (
  <section className="section experience">
    <div className="section__title">Experience</div>
    <div className="section__content">
      <div className="jobs">
        {
          experienceData.map((data) => (
            <div className="job">
              <div className="time-place">
                <div className="job__company">
                  <a href={data.url} target="_blank" rel="noreferrer">{data.company}</a>
                </div>
                <div className="job__time">{data.time}</div>
              </div>
              <div className="job__position">{data.position}</div>
            </div>
          ))
        }
      </div>

      <a href="./AshrithAdepu_Resume.pdf" target="_blank" rel="noreferrer" className="arrow-link">View My Resume</a>
    </div>
  </section>
)

export default Experience
