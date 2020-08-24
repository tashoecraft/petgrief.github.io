import React from "react"
import firebase from "gatsby-plugin-firebase";
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'firebase/database';
import 'firebase/storage';

const database = firebase.database();
const storageService = firebase.storage();
const storageRef = storageService.ref();

function writePetData(email, name, bio, imageUrl) {
  database().ref('/pets' + email + name).set({
    userEmail: email,
    petName: name,
    petBio: bio,
    petImageURL : imageUrl
  });
}

function handleFormSubmit() {
    // const uploadTask = storageRef.child(`images/${selectedFile.name}`).put(selectedFile); //create a child directory called images, and place the file inside this directory
    // uploadTask.on('state_changed', (snapshot) => {
    // // Observe state change events such as progress, pause, and resume
    // }, (error) => {
    //   console.log(error);
    // }, () => {
    //    console.log('success');
    // });
    console.log('success')
  }

const AddPetInfoPage = () => (
  <Layout>
    <SEO title="Add Pet Info Page" />
    <h1>Please fill out the following information.</h1>
    <form action={handleFormSubmit} style={{border: '5px double black'}}>
      <div>
      <br/>
        <label htmlFor="petName">Pet Name:
          <input type="text" className="name" id="name" />
        </label><br/><br/>
        <label htmlFor="owner">Owner:
          <input type="text" className="owner" id="owner" />
        </label><br/><br/>
        <label htmlFor="email">  Email:
          <input type="text" className="email" id="email" />
        </label> <br/><br/>
        <label htmlFor="tribute">  Tribute:
        <textarea className="tribute" rows="4" cols="50" />
        </label> <br/><br/>
      </div>
      <div id="filesubmit">
      <label htmlFor="image">  Image:
        <input type="file" className="file-select" accept="image/*"/>
    </label>
    </div>
      <div>
      <br/>
        <input type="submit" name="submit" value="Submit" />
        <input type="reset" name="reset" value="Clear Form" />
      </div>
    </form>
  </Layout>
)

export default AddPetInfoPage
