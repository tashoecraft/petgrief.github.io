import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 >Monthly Meeting</h1>
    <h3>Second Sunday of the month at 6:00 pm <br /> PAWs Shelter of Central Texas  <br /> DRIPPING SPRINGS CAMPUS:</h3>

    <h5>2965 FM 165 <br /> Dripping Springs, Texas 78620</h5>

    <h5>Group meets for approximately 1.5 hours</h5>
    <p>
Due to COVID-19 There will be both an In-Person option and a ZOOM Meeting option.

All interested persons must register to confirm - 
<Link to="/guidelines/">Please register here</Link> 
</p><p>

<b>In-Person space is limited. </b>

In Person Meeting applies social distancing measures, sanitation, masks are required, temperature will be taken upon arrival.



Zoom participants will be sent link. All participants are requested to arrive on time.


</p><p>
Group is open to anyone grieving the loss of a beloved pet - whether a recent loss or not.

All are welcome to join, and while the group is free, we gratefully accept donations 
to PAWS Shelter of Central Texas 
<a href='https://pawsshelter.org/donate/' target="_blank"> here</a>.


</p><p>
Group will be hosted by one or more of the following Facilitators:
<ul>
  <li>Jyl Hershman-Ross - Companion Animal TTouch Practitioner L2; Trainer and Behavior Consultant CPDT-KA
</li>
  <li>Becky Davis - Licensed Professional Counselor in private practice, as well as a TTouch CA-L1 practitioner. 
</li>
  <li>Karen Cole - Founder of Lizzy’s Animal Hospice
</li>
</ul>
</p><p>
In Person attendees will receive Agendas and a Grief Loss Journal to keep.

Zoom attendees will receive the agenda by email.  Journals are only available on site at this time.

</p>
  </Layout>
)

export default IndexPage
