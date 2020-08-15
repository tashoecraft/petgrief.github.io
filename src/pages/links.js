import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LinksPage = () => (
  <Layout>
    <SEO title="Links Page" />
    <h1>Hi from the second page</h1>
    <p>PAWs Shelter of Central Texas - https://pawsshelter.org/

Lizzy’s Animal Hospice - https://lizzyshospice.com/

Sweetheart Pet Services - https://www.sweetheartpetservices.com/



with grateful appreciation for her time and knowledge - Coleen Ellis and Two Hearts Pet Loss Center - https://twoheartspetlosscenter.com/</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default LinksPage
