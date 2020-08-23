import React from "react"
import firebase from "gatsby-plugin-firebase";
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'firebase/database';
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

const AddPetInfoPage = () => (
  <Layout>
    <SEO title="Add Pet Info Page" />
    <h1>Please fill out the following information.</h1>
    <form action="mailto:jyl@pawsshelter.org" method="post" enctype="text/plain" style={{border: '5px double black'}}>
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

export default AddPetInfoPage
