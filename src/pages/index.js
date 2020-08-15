import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Monthly Meeting - 

Second Sunday of the month at PAWs Shelter of Central Texas - DRIPPING SPRINGS CAMPUS:

2965 FM 165, Dripping Springs, Texas 78620


6:00 pm
Group meets for approximately 1.5 hours



Due to COVID-19 There will be both an In-Person option and a ZOOM Meeting option.

All interested persons should register to confirm - (you put in some way of registering - via email?)

In-Person space is limited - 

In Person Meeting applies social distancing measures, sanitation, masks are required, temperature will be taken upon arrival.



Zoom participants will be sent link

All participants are requested to arrive on time.



Group is open to anyone grieving the loss of a beloved pet - whether a recent loss or not.

All are welcome to join, and while the group is free, we gratefully accept donations to PAWS Shelter of Central Texas (link to donation page - https://pawsshelter.org/donate/)



Group will be hosted by one or more of the following Facilitators:

Jyl Hershman-Ross - Companion Animal TTouch Practitioner L2; Trainer and Behavior Consultant CPDT-KA

Becky Davis - (i need to get her title and how she wants to be represented - Therapist?, CA TTouch Practitioner L1)

Karen Cole - Founder of Lizzy’s Animal Hospice



In Person attendees will receive Agendas and a Grief Loss Journal to keep.

Zoom attendees will receive the agenda by email.  Journals are only available on site at this time.



</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/links/">Go to links</Link> <br />
    <Link to="/memorial/">Go to memorial</Link> <br />
  </Layout>
)

export default IndexPage
