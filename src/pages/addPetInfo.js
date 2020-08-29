import React, {useState} from "react"
import firebase from "gatsby-plugin-firebase";
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'firebase/database';
import 'firebase/storage';

const AddPetInfoPage = () => {

const database = firebase.database();
const storage = firebase.storage();
    
const allInputs = {imgUrl: ''}
const [imageAsFile, setImageAsFile] = useState('')
const [imageAsUrl, setImageAsUrl] = useState(allInputs)
const [isError, setIsError] = useState(false)
const [errorMessage, setErrorMessager] = useState('')
const [email, setEmail] = useState('')
const [name, setName] = useState('')
const [bio, setBio] = useState('')
const [owner, setOwner] = useState('')

const handleEmailChange = (e) => {
    setEmail(e.target.value)
}

const handleNameChange = (e) => {
    setName(e.target.value)
}

const handleBioChange = (e) => {
    setBio(e.target.value)
}

const handleOwnerChange = (e) => {
    setOwner(e.target.value)
}

const handleImageAsFile = (e) => {
    const image = e?.target?.files[0]
    setImageAsFile(imageFile => (image))
}
    
const handleFireBaseUpload = e => {
    e.preventDefault()
    try{
        if(imageAsFile === '') {
            setIsError(true)
            setErrorMessager(`Not an image, the image file is a ${typeof(imageAsFile)}, please upload an image` )
        } else {
        const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
        //initiates the firebase side uploading 
        uploadTask.on('state_changed', 
        () => {
        storage.ref('images').child(imageAsFile.name).getDownloadURL()
            .then(fireBaseUrl => {
            setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
            })
        })
        database.ref('/' + name + owner).set({
            userEmail: email,
            petName: name,
            petBio: bio,
            owner: owner,
            petImageURL : imageAsFile.name
          });
    }
    } catch (err){
        setIsError(true)
        setErrorMessager('An unexpected error occurred')
    }  
}    

return (
  <Layout>
    <SEO title="Add Pet Info Page" />
    <h1>Please fill out the following information.</h1>
      {isError && 
        <div style={{padding: '20px', backgroundColor: '#f44336', color: 'white', marginBottom: '15px'}}>
          <h3>Error</h3>
          <p>{errorMessage}</p>
        </div> 
      }
    <form onSubmit={handleFireBaseUpload} style={{border: '5px double black', padding: '10px'}}>
      <div>
      <br/>
        <label htmlFor="petName">Pet Name:
          <div>
            <input type="text" className="name" id="name" onChange={handleNameChange}/>
          </div>
        </label>
        <label htmlFor="owner">Owner(s):
          <div>
            <input type="text" className="owner" id="owner" onChange={handleOwnerChange}/>
          </div>
        </label>
        <label htmlFor="email">  Email:
          <div>
            <input type="text" className="email" id="email" onChange={handleEmailChange}/>
          </div>
        </label>
        <label htmlFor="tribute">  Tribute:
          <div>
            <textarea className="tribute" rows="4" cols="50" onChange={handleBioChange}/>
          </div>
        </label>
      </div>
      <div id="filesubmit">
      <label htmlFor="image">  Image:
        <div>
          <input type="file" onChange={handleImageAsFile} accept="image/*"/>
        </div>
    </label>
    </div>
      <div>
      <br/>
        <input type="submit" name="submit" value="Submit" style={{marginRight: '10px'}}/>
        <input type="reset" name="reset" value="Clear Form" />
      </div>
    </form>
</Layout>
)
}

export default AddPetInfoPage
