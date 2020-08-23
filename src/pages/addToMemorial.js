import React from "react"
import firebase from "gatsby-plugin-firebase";
import Layout from "../components/layout"
import SEO from "../components/seo"

const database = firebase.database();

function writePetData(email, name, bio, imageUrl) {
  database().ref('/pets' + email + name).set({
    userEmail: email,
    petName: name,
    petBio: bio,
    petImageURL : imageUrl
  });
}

function getPetData(){
  return database().ref('/').once
};

const AddToMemorialPage = () => (
  <Layout>
    <SEO title="Add To Memorial Page" />
    <h1>Pet Memorial</h1>
    <p> This page will be devoted to your pets.  Check back soon for more details.</p>
  </Layout>
)

export default AddToMemorialPage
