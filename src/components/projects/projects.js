import * as React from "react"
import Parser from 'html-react-parser';
import "./projects.scss"

const ProjectsData = [
  {
    "name": "HVAC Control System Optimization",
    "description": "I engineered adaptive HVAC control algorithms using MATLAB and Simulink, boosting system responsiveness by 25% and efficiency by 12% through employing predictive control strategies. By performing real-time simulations, I optimized system performance under varying load conditions, ensuring stable operations and reducing downtime by 15%. I also introduced dynamic feedback loops using sensors to adjust settings based on occupancy, leading to significant energy savings and consistent climate control.",
    "used": [
      {"thing": "MATLAB"},
      {"thing": "Simulink"},
    ]
  },
  {
    "name": "Defect Reduction and Quality Enhancement",
    "description": "I led a Lean Six Sigma project that successfully reduced production defects by 20% through strategic process enhancements, focusing on waste reduction and process streamlining. I introduced improved quality control standards, boosting product compliance by 20% and improving operational transparency and traceability. My collaboration with cross-functional teams led to a 25% increase in production efficiency by optimizing workflows and stakeholder engagement.",
    "used": [
      {"thing": "Minitab"},
    ]
  },
  {
    "name": "Transformer Design and Manufacturability Optimization",
    "description": "I optimized transformer designs for manufacturability using AutoCAD and SolidWorks, reducing material costs and simplifying assembly processes in collaboration with Buffalo Transformer Co. Detailed simulations and testing using ANSYS ensured compliance with operational, thermal, and electrical safety standards, leading to a 15% improvement in production efficiency. Additionally, I oversaw prototype production, creating manufacturing documentation that significantly improved scalability and product quality.",
    "used": [
      {"thing": "AutoCAD"},
      {"thing": "SolidWorks"},
      {"thing": "ANSYS"},
    ]
  },
  {
    "name": "Autonomous Robotic Navigation in Dynamic Environments",
    "description": "I developed and implemented a robotic system for autonomous navigation using Machine Learning, resulting in a 20% improvement in obstacle avoidance accuracy in dynamic settings. My work integrated LIDAR, cameras, and ultrasonic sensors with advanced sensor fusion algorithms, enhancing environmental detection and response times by 30%. Field testing in various real-world environments enabled me to refine system algorithms, increasing operational efficiency and navigational precision.",
    "used": [
      {"thing": "MATLAB"},
      {"thing": "Simulink"},
      {"thing": "Machine Learning"},
      {"thing": "OpenCV"},
      {"thing": "GMapping"},
    ]
  },
  {
    "name": "Digital Twin Self-Balancing Robot",
    "description": "I developed a two-wheeled self-balancing robot using digital twinning for real-time system monitoring and performance optimization, achieving precise control with IMU sensors and gyroscopes. I implemented an interactive HMI for user control and feedback, allowing dynamic parameter adjustments and enhancing user interaction with real-time data. Additionally, I improved design efficiency and predictive maintenance through environmental simulations, reducing testing and development time by 15%.",
    "used": [
      {"thing": "MATLAB"},
      {"thing": "Simulink"},
      {"thing": "SolidWorks"},
      {"thing": "Python"},
      {"thing": "Siemens NX"},
      {"thing": "Arduino IDE"},
      {"thing": "LabVIEW"},
    ]
  },
  {
    "name": "Computational Fluid Dynamics (CFD) Simulation of Reentry Vehicles",
    "description": "I directed the execution of aerothermal CFD simulations using Siemens STAR-CCM+ and NASA’s FUN3D, enhancing model accuracy by 30%. My work improved thermal protection designs, increasing structural integrity by 10% under extreme thermal conditions. Additionally, I optimized the design to reduce aerodynamic drag by 7%, contributing to key vehicle performance improvements, and implemented advanced meshing and model validation techniques, increasing safety and efficiency.",
    "used": [
      {"thing": "ANSYS"},
      {"thing": "ANSYS Fluent"},
      {"thing": "STAR-CCM+"},
      {"thing": "FUN3D"},      
    ]
  },
  {
    "name": "Thermal Management in Embedded Systems",
    "description": "I engineered thermal management solutions for embedded systems using SolidWorks and ANSYS, enhancing device reliability and performance under thermal stress. I conducted advanced simulations to optimize heat dissipation strategies, significantly reducing operational temperatures and improving component longevity. I developed and tested prototypes in real-world settings, utilizing MATLAB and Python for data analysis, ensuring all components met thermal performance criteria.",
    "used": [
      {"thing": "SolidWorks"},
      {"thing": "ANSYS"},
      {"thing": "Python"},
    ]
  },
  {
    "name": "Development of EV Kit for Auto Rickshaws to Replace Traditional Two-Stroke Engines",
    "description": "I led a team to design an EV conversion kit for auto rickshaws, replacing 200,000 traditional two-stroke engines, promoting environmental sustainability. The project reduced costs by $1,500 per vehicle, offering a more affordable alternative to existing electric auto rickshaws in production. Additionally, I pioneered a swappable lithium-ion battery system, enabling quick battery replacements instead of lengthy recharges, improving operational efficiency.",
    "used": [
      {"thing": "SolidWorks"},
      {"thing": "SolidWorks Electrical 3D"},
      {"thing": "Siemens NX"},
    ]
  },
  {
    "name": "DC Motor-Based Viscometer: Precision Viscosity Measurement Using First Principles of Fluid Dynamics",
    "description": "I collaborated with a team to design and construct a viscometer using a cylindrical rotor setup to measure fluid viscosity based on fluid dynamics principles. Simulink was integrated for real-time data collection, automating the process for accurate and repeatable viscosity measurements across multiple fluids. Our system achieved precise viscosity readings for 15 out of 20 analyzed fluids, providing valuable insights into fluid behavior under various conditions.",
    "used": [
      {"thing": "MATLAB"},
      {"thing": "Simulink"},
    ]
  },
  {
    "name": "Active Aerodynamics System for Formula Student Race Car",
    "description": "I led the design and implementation of an active aerodynamics system for a Formula Student Race Car, improving aerodynamic efficiency by 14%. Advanced 3D modeling and aerodynamic simulations in SolidWorks and ANSYS enhanced vehicle handling and stability by 20%. The team I managed successfully reduced lap times by 5.3 seconds through iterative prototype development and testing.",
    "used": [
      {"thing": "ANSYS"},
      {"thing": "SolidWorks"},
    ]
  }  
]


const FeaturedProjects = () => (
  <section className="section projects">
    <div className="section__title">Projects</div>
    <div className="section__content">
      {
        ProjectsData.map((project) => (
          <div className="project">
            <div className="project__name">
              <a href={project.url} target="_blank" rel="noreferrer" className="arrow-link">{project.name}</a>
            </div>
            <p>{Parser(project.description)}</p>
            <div className="project__used">
              {
                project.used.map((item) => (
                  <span className="project__used__item">{item.thing}</span>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  </section>
)

export default FeaturedProjects
