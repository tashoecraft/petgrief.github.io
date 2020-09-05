import React, {useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

function AddToMemorialPage() {
const [isDisabled, setIsDisabled] = useState(true)

const clickButton = () =>{
    setIsDisabled(false)
}

return (
  <Layout>
    <SEO title="Add To Memorial Page" />
    <h1>Add To Memorial</h1>
    <div>
        <h4>Please make a donation of $25.00 to PAWS Shelter of Central Texas as payment for addition to the memorial.</h4>
        <a className="button is-large is-danger is-light" href='https://pawsshelter.org/donate/' target="_blank" onClick={clickButton}>
            <span>Pay Here</span>
        </a>
    </div>
    <br />
    <div>
        <h4>Once you've made a donation, click the following link to add information to the memorial.</h4>
        <form method="get" action="/addPetInfo/">
        <button className='button is-large is-focused is-success is-light' disabled={isDisabled}>
            <span>Add Pet Info</span>
        </button>
        </form>
    </div>
  </Layout>
    )
}

export default AddToMemorialPage
