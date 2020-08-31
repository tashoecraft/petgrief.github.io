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



// import React, {useEffect, useState} from "react"
// import firebase from "gatsby-plugin-firebase";
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { useObjectVal } from "react-firebase-hooks/database"
// import { Link } from "gatsby"

// function MemorialPage(){
//   const [pets] = useObjectVal(firebase.database().ref("/"))
//   const storageRef = firebase.storage().ref();
//   const [images, setImages] = useState({})


//   async function fetchData() {
//     const urlObj = {}
//     let temp;
//     await storageRef.child('images/').listAll().then(({items}) => {
//       temp = items.map(async ({name}) => {
//         return await storageRef.child(`images/${name}`).getDownloadURL().then((result) => {
//           urlObj[name] = result
//         })
//       })
//     })
//     await Promise.all(temp);
//     setImages(urlObj);
// }


//   useEffect(() => {
//     fetchData();
//   })

// return (
//   <Layout>
//     <SEO title="Memorial Page" />
// <h1>Memorial</h1>
// {pets && Object.keys(pets).map(pet => {
// return (
//   <div key={pet}>
//     <h2>{pets[pet].petName}</h2>
//     {images[pets[pet].petImageURL] && <img height="250vw" width="400vw" src={images[pets[pet].petImageURL]}/>}
//     <h4>Owner(s): {pets[pet].owner}</h4>
//     <p>{pets[pet].petBio}</p>
//   </div>  )
// })
// }

// <Link to="/addToMemorial/">Add to memorial page ($25)</Link> 
// <Link to="/addPetInfo/">Add Pet Info</Link> 

//   </Layout>
// )
// } 

// export default MemorialPage
