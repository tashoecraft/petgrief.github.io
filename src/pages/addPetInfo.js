import React, {useState} from "react"
import firebase from "gatsby-plugin-firebase";
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import 'firebase/database';
import 'firebase/storage';

const AddPetInfoPage = () => {

const database = firebase.database();
const storage = firebase.storage();
    
const [imageAsFile, setImageAsFile] = useState('')
const [isError, setIsError] = useState(false)
const [errorMessage, setErrorMessager] = useState('')
const [email, setEmail] = useState('')
const [name, setName] = useState('')
const [bio, setBio] = useState('')
const [owner, setOwner] = useState('')
const [isAdded, setIsAdded] = useState(false)

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
  e.preventDefault();
    try{
        if(imageAsFile === '') {
            setIsError(true)
            setErrorMessager(`Not an image, the image file is a ${typeof(imageAsFile)}, please upload an image` )
        } else {
        storage.ref(`/images/${name}${owner}${imageAsFile.name}`).put(imageAsFile)
        database.ref('/' + name + owner).set({
            userEmail: email,
            petName: name,
            petBio: bio,
            owner: owner,
            petImageURL : `${name}${owner}${imageAsFile.name}`
          });
    }
    setName('')
    setEmail('')
    setBio('')
    setImageAsFile('')
    setOwner('')
    setIsAdded(true)
    } catch (err){
      console.log(err, 'ERROR')
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
      {isAdded && 
        <div style={{padding: '20px', backgroundColor: 'green', color: 'white', marginBottom: '15px'}}>
          <h3>Added!</h3>
          <p>Your pet memorial has been added. Please head to the <Link to="/memorial/">Pet Memorial</Link> page to view.</p>
        </div> 
      }
    <form name='form' onSubmit={handleFireBaseUpload} style={{border: '5px double black', padding: '10px'}}>
      <div>
      <br/>
        <label htmlFor="petName">Pet Name:
          <div>
            <input type="text" className="name" id="name" value={name} onChange={handleNameChange} required/>
          </div>
        </label>
        <label htmlFor="owner">Owner(s):
          <div>
            <input type="text" className="owner" id="owner" value={owner} onChange={handleOwnerChange} required/>
          </div>
        </label>
        <label htmlFor="email">  Email:
          <div>
            <input type="text" className="email" id="email" value={email} onChange={handleEmailChange} required/>
          </div>
        </label>
        <label htmlFor="tribute">  Tribute:
          <div>
            <textarea maxlength='1330' className="tribute" rows="4" cols="40" value={bio} onChange={handleBioChange} required/>
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
