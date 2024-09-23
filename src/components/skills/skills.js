import * as React from "react"
import "./skills.scss"

const skillsData = {
  "languagesTitle": "Languages",
  "languages": ["Python", "MATLAB", "C++", "Java"],
  "certificationsTitle": "Certifications",
  "certifications": ["Certified Lean Six Sigma Green Belt"],
  "cadSoftwaresTitle": "CAD Softwares",
  "cadSoftwares": ["SolidWorks", "CATIA", "Creo", "Siemens NX", "AutoCAD", "Fusion 360"],
  "caeSoftwaresTitle": "CAE Softwares",
  "caeSoftwares": ["Simulink", "ANSYS", "ANSYS Fluent", "Abaqus", "LabVIEW", "Minitab"],
  "domainTitle": "Domain Expertise",
  "domain": ["Control Systems", "HVAC", "Design for Manufacturability", "Mechanical Systems Optimization", "Data Center Infrastructure", "Mechanical System Design", "Preventative Maintenance", "Operational Efficiency", "Root Cause Analysis", "Fluid Mechanics", "Heat Transfer", "Applied Thermodynamics"],
}

const Skills = () => (
  <>
    <section className="section skills">
      <div className="section__title">Skills</div>
      <div className="section__content">
        <div className="skillz" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="skillz__category">
            <div className="skillz__category__label">{skillsData.languagesTitle}</div>
            <ul>
              {skillsData.languages.map((data) => <li className="skillz__category__item" key={data}>{data}</li>)}
            </ul>
          </div>
          <div className="skillz__category">
            <div className="skillz__category__label">{skillsData.cadSoftwaresTitle}</div>
            <ul>
              {skillsData.cadSoftwares.map((data) => <li className="skillz__category__item" key={data}>{data}</li>)}
            </ul>
          </div>
          <div className="skillz__category">
            <div className="skillz__category__label">{skillsData.caeSoftwaresTitle}</div>
            <ul>
              {skillsData.caeSoftwares.map((data) => <li className="skillz__category__item" key={data}>{data}</li>)}
            </ul>
          </div>
          <div className="skillz__category">
            <div className="skillz__category__label">{skillsData.certificationsTitle}</div>
            <ul>
              {skillsData.certifications.map((data) => <li className="skillz__category__item" key={data}>{data}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <section className="section domain">
      <div className="section__title">Domain Expertise</div>
      <div className="section__content">
        <ul>
          {skillsData.domain.map((data) => <li className="skillz__category__item" key={data}>{data}</li>)}
        </ul>
      </div>
    </section>
  </>
)

export default Skills;
