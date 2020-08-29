import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const RegisterPage = () => (
  <Layout>
    <SEO title="Registration Page" />
    <h1>Please fill out the following</h1>
    
<form action="mailto:jyl@pawsshelter.org" method="post" enctype="text/plain" style={{border: '5px double black', padding: '10px'}}>
      <div>
      <br/>
        <label htmlFor="firstName">First Name:
          <div>
            <input type="text" className="firstName" id="firstName" />
          </div>
        </label>
        <label htmlFor="lastName">Last Name:
          <div>
            <input type="text" className="lastName" id="lastName" />
          </div>
        </label>
        <label htmlFor="email">Email:
          <div>
            <input type="text" className="email" id="email" />
          </div>
        </label>
        <label htmlFor="meeting">Meeting: <br/>
          <input type="checkbox" className="InPerson" id="InPerson" />
          <label htmlFor="InPerson"> In Person</label><br/>
          <input type="checkbox" className="Zoom" id="Zoom" />
          <label htmlFor="Zoom"> Zoom</label><br/>
          <input type="checkbox" className="MoreInformation" id="MoreInformation" />
          <label htmlFor="MoreInformation"> I'd like more information</label><br/>
        </label>
      </div>
      <div>
      <br/>
        <input type="submit" name="submit" value="Send" style={{marginRight: '10px'}}/>
        <input type="reset" name="reset" value="Clear Form" />
      </div>
    </form>
  </Layout>
)

export default RegisterPage
