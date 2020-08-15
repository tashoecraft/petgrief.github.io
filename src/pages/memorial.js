import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MemorialPage = () => (
  <Layout>
    <SEO title="Memorial Page" />
    <h1>Hi from the second page</h1>
    <p> Memorial Page </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MemorialPage
