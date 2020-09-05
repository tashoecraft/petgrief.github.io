import React, {useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"



function AddToMemorialPage() {
const [isDisabled, setIsDisabled] = useState()
const onClick = () =>{
    // setIsDisabled(false)
}

return (
  <Layout>
    <SEO title="Add To Memorial Page" />
    <h1>Add To Memorial</h1>
    <div>
        <h4>Please make a donation of $25.00 to PAWS Shelter of Central Texas as payment for addition to the memorial.</h4>
        <a class="button is-large" href='https://pawsshelter.org/donate/' target="_blank" onclick={onClick()}>
            <span>Pay Here</span>
        </a>
    </div>
    <br />
    <div>
        <h4>Once you've made a donation, click the following link to add information to the memorial.</h4>
        <a href="/addPetInfo/" class='button is-large is-outlined is-focused' disabled={isDisabled}>
            <span>Add Pet Info</span>
        </a>
    </div>
  </Layout>
    )
}

export default AddToMemorialPage
