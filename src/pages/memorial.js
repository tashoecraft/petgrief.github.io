// import React from "react"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const MemorialPage = () => (
//   <Layout>
//     <SEO title="Memorial Page" />
//     <h1>Pet Memorial</h1>
//     <p> This page will be devoted to your pets.  Check back soon for more details.</p>
//   </Layout>
// )

// export default MemorialPage


import React, {useEffect, useState} from "react"
import firebase from "gatsby-plugin-firebase";
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useObjectVal } from "react-firebase-hooks/database"
import { Link } from "gatsby"

function MemorialPage(){
  const [pets] = useObjectVal(firebase.database().ref("/"))
  const storageRef = firebase.storage().ref();
  const [images, setImages] = useState({})


  async function fetchData() {
    const urlObj = {}
    let temp;
    await storageRef.child('images/').listAll().then(({items}) => {
      temp = items.map(async ({name}) => {
        return await storageRef.child(`images/${name}`).getDownloadURL().then((result) => {
          urlObj[name] = result
        })
      })
    })
    await Promise.all(temp);
    setImages(urlObj);
}

  useEffect(() => {
    fetchData();
  })
 
return (
  <Layout>
    <SEO title="Memorial Page" />
      <h1>Memorial</h1>
      <h4> 
        <Link to="/addToMemorial/">Click here to add to memorial page</Link> 
      </h4>
<div className="columns is-multiline">

  {pets && Object.keys(pets).map(pet => {
    return (
      <div className="column is-half" key={pet}>
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3" style={{marginBottom: 0}}>
              <img src={images[pets[pet].petImageURL]} alt={pets[pet].petName} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-6">{pets[pet].petName}</p>
                <p className="subtitle is-6"  style={{marginBottom: 0, fontSize: '.75rem'}}>Owner(s): {pets[pet].owner}</p>
              </div>
            </div>

            <div className="content">
              <p style={{fontSize: '.75rem'}}>{pets[pet].petBio}</p>
            </div>
          </div>
        </div>
      </div>
      )
  })}
  </div>
</Layout>
)} 

export default MemorialPage
