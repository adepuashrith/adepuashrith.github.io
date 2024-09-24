import * as React from "react"
import "./footer.scss"

const socialData = [
  {
    "title": "email",
    "url": "mailto:adepashrith@gmail.com"
  },
  {
    "title": "github",
    "url": "https://github.com/ashrithadepu27"
  },
  {
    "title": "linkedin",
    "url": "https://www.linkedin.com/in/ashrithadepu/"
  },
]

// Function to get the current year
const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      <div className="top">
        <span>Developed by&nbsp;</span>
      </div>
      <div className="bottom">
        <span>Ashrith Adepu</span>
        <img className="emoji" src="./images/emojis/rockon.png" alt="emoji"/>
          <span>{currentYear}</span>
      </div>
      <div className="bottom credits">
        <small>
          Inspired by
          <a href="https://www.instagram.com/bchiang7/" rel="noreferrer" target="_blank"> Brittany Chiang</a>
        </small>
      </div>
    </div>
    <div className="footer__links">
      {
        socialData.map((social, index) => (
          <a href={social.url} target="_blank" rel="noreferrer" title={social.title} key={index}>
            <span className="text">{social.title}</span>
          </a>
        ))
      }
    </div>
  </footer>
)

export default Footer
