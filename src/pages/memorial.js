import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MemorialPage = () => (
  <Layout>
    <SEO title="Memorial Page" />
    <h1>Pet Memorial</h1>
    <p> This page will be devoted to your pets.  Check back soon for more details.</p>
  </Layout>
)

export default MemorialPage



// import React from "react"
// import firebase from "gatsby-plugin-firebase";
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { useObjectVal } from "react-firebase-hooks/database"
// import { Link } from "gatsby"

// function MemorialPage(){
//   const [pets] = useObjectVal(firebase.database().ref("/"))
// return (
//   <Layout>
//     <SEO title="Memorial Page" />
// <h1>Memorial</h1>
// {pets && Object.keys(pets).map(pet => {
// return (
//   <div key={pet}>
//     <h2>{pets[pet].petName}</h2>
//     <h4>{pets[pet].owner}</h4>
//     <p>{pets[pet].petBio}</p>
//   </div>  )
// })
// }

// <Link to="/addToMemorial/">Add to memorial page ($25)</Link> 
// <Link to="/addPetInfo/">Add Pet Info</Link> 

//     <p> This page will be devoted to your pets.  Check back soon for more details.</p>
//   </Layout>
// )
// } 

// {/* <img>{pets[pet].petImageURL}</img> */}

// export default MemorialPage
