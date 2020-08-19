import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LinksPage = () => (
  <Layout>
    <SEO title="Links Page" />
    <h1>Who Are We</h1>
    <p>PAWs Shelter of Central Texas -
      <a href='https://pawsshelter.org/' target="_blank"> https://pawsshelter.org/ </a>
    </p>
    <p>Lizzy’s Animal Hospice -  
      <a href='https://lizzyshospice.com/' target="_blank"> https://lizzyshospice.com/ </a>
    </p>
    <p>Sweetheart Pet Services -  
      <a href='https://www.sweetheartpetservices.com/' target="_blank"> https://www.sweetheartpetservices.com/ </a>
    </p>
    <p>with grateful appreciation for her time and knowledge <br></br> Coleen Ellis and Two Hearts Pet Loss Center - 
    <a href='https://twoheartspetlosscenter.com/' target="_blank"> https://twoheartspetlosscenter.com/ </a>
</p>
  </Layout>
)

export default LinksPage
