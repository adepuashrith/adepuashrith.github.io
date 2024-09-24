import * as React from "react"

const seoData = {
  "title": "Ashrith Adepu",
  "description": "Ashrith Adepu is a Mechanical Engineer with expertise in simulation, control systems, and mechanical design. He has optimized wind turbine performance and modeled EV powertrains, always aiming to push boundaries in efficiency and innovation.",
  "author": "Ashrith Adepu",
  "siteUrl": "",
}

const Seo = () => (
  <>
    <title>{seoData.title}</title>
    <meta name="description" content={seoData.description} />
    <meta property="og:title" content={seoData.title} />
    <meta property="og:description" content={seoData.description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={seoData.author} />
    <meta name="twitter:title" content={seoData.title} />
    <meta name="twitter:description" content={seoData.description} />
  </>
)

export default Seo
