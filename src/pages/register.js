import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const RegisterPage = () => (
  <Layout>
    <SEO title="Registration Page" />
    <h1>Please fill out the following</h1>
    
<form action="mailto:info@sweetheartpetservices.com?subject = Monthly Meeting Interest" method="post" enctype="text/plain" style={{border: '5px double black'}}>
      <div>
      <br/>
        <label for="name">Name:
          <input type="text" name="name" id="name" />
        </label><br/><br/>
        <label for="email">  Email:
          <input type="text" name="email" id="email" />
        </label> <br/><br/>
        <label for="meeting">Meeting: <br/>
          <input type="checkbox" name="InPerson" id="InPerson" />
          <label for="InPerson"> In Person</label><br/>
          <input type="checkbox" name="Zoom" id="Zoom" />
          <label for="Zoom"> Zoom</label><br/>
          <input type="checkbox" name="MoreInformation" id="MoreInformation" />
          <label for="MoreInformation"> I'd like more information</label><br/>
        </label>
      </div>
      <div>
      <br/>
        <input type="submit" name="submit" value="Send" />
        <input type="reset" name="reset" value="Clear Form" />
      </div>
    </form>
  </Layout>
)

export default RegisterPage
