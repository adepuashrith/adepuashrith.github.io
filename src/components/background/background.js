import * as React from "react"

const backgroundData = {
  title: "Background",
  part1: "I earned my Master’s in Mechanical Engineering from the University at Buffalo, where I focused on control systems and simulations. ",
  line2: "During my time as a Research Assistant, I improved wind turbine performance, increasing power output by 10% and cutting operational costs by 12%. My work also involved developing high-fidelity models and implementing adaptive control strategies.",
  line3: "Previously, at Decibels Labs, I modeled EV powertrain components, refining battery management systems and simulating real-world performance for vehicles like the Tesla Model 3. My expertise spans Python, MATLAB, and various CAD/CAE tools, with a Lean Six Sigma certification that highlights my commitment to improving efficiency in mechanical systems.",
};

const Background = () => (
  <section className="section background">
    <div className="section__title">{backgroundData.title}</div>
    <div className="section__content">
      <p>
        {backgroundData.part1}
      </p>
      <p>
        {backgroundData.line2}
      </p>
      <p>
        {backgroundData.line3}
      </p>
    </div>
  </section>
)

export default Background;

