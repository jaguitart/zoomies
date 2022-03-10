import React, { useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { updateOnePost, getAllPosts } from "../../../store/pet_post";
import FormInput from "../../FormsComponents/FormInput";
import NavBar from "../../NavBar/NavBar";
import FormAge from "../../FormsComponents/FormAge";
import FormDoubleButton from "../../FormsComponents/FormDoubleButton";
import FormImageAWS from "../../FormsComponents/FormImageAWS";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import '../../auth/form.css'


const EditPostForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);

  const oldData = useSelector(state => state?.posts[id])
  const oldAge = oldData.age ? oldData.age : ''
  const oldPic1 = oldData.pic_url1 ? oldData.pic_url1 : ''
  const oldPic2 = oldData.pic_url2 ? oldData.pic_url2 : ''
  const oldPic3 = oldData.pic_url3 ? oldData.pic_url3 : ''
  const oldCharacteristics = oldData.characteristics ? oldData.characteristics : ''
  const oldVaccination_status = oldData.vaccination_status ? oldData.vaccination_status : ''
  const oldBio = oldData.bio ? oldData.bio : ''
  const oldQ1 = oldData.question1 ? oldData.question1 : ''
  const oldQ2 = oldData.question2 ? oldData.question2 : ''
  const oldQ3 = oldData.question3 ? oldData.question3 : ''

  const [age, setAge] = useState(oldAge.id);
  const [clickedAge, setClickedAge] = useState(age);
  const [vaccination_status, setVaccination_status] = useState(oldVaccination_status.id);
  const [clickedVaccionationStatus, setClickedVaccionationStatus] = useState(vaccination_status);
  const [pic_url1, setPic_url1] = useState('');
  const [prev_pic_url1, setPrev_pic_url1] = useState(oldPic1);
  const [file_pic_url1, setFile_pic_url1] = useState('');
  const [pic_url2, setPic_url2] = useState(oldPic2);
  const [file_pic_url2, setFile_pic_url2] = useState('');
  const [pic_url3, setPic_url3] = useState(oldPic3);
  const [file_pic_url3, setFile_pic_url3] = useState('');
  const [characteristics, setCharacteristics] = useState(oldCharacteristics);
  const [bio, setBio] = useState(oldBio);
  const [question1, setQuestion1] = useState(oldQ1);
  const [question2, setQuestion2] = useState(oldQ2);
  const [question3, setQuestion3] = useState(oldQ3);

  const validate = () => {
    // const errors = [];
  }

  const onEdit = async (e) => {
    e.preventDefault();
    const errors = validate();

    if (errors) return setErrors(errors);
    const editPost = {
      id,
      age,
      pic_url1,
      pic_url2,
      pic_url3,
      characteristics,
      vaccination_status,
      bio,
      question1,
      question2,
      question3
    }
    let submited = await dispatch(updateOnePost(editPost))
    await dispatch(getAllPosts())
    if (submited) {
      history.push(`/pet-post/${id}`)
    }
  }


  const updateAge = e => {
    e.preventDefault()
    setAge(e.target.value)
    setClickedAge(e.target.value)
  }

  const updateVaccination_status = e => {
    e.preventDefault()
    setClickedVaccionationStatus(+e.target.value);
    setVaccination_status(e.target.value)
  }

  const updatePic_url1 = e => {
    const file = e.target.files[0];
    if (file) {
      setPic_url1(file);
      const src_pic_url1 = URL.createObjectURL(file)
      setPrev_pic_url1(src_pic_url1)
    }
  }
  const updatePic_url2 = e => {
    const file = e.target.files[0];
    if (file) {
      setPic_url2(file);
    }
  }
  const updatePic_url3 = e => {
    const file = e.target.files[0];
    if (file) {
      setPic_url3(file);
    }
  }
  const updateCharacteristics = e => setCharacteristics(e.target.value)
  const updateBio = e => setBio(e.target.value)
  const updateQuestion1 = e => setQuestion1(e.target.value)
  const updateQuestion2 = e => setQuestion2(e.target.value)
  const updateQuestion3 = e => setQuestion3(e.target.value)

  const [formPage, setFormPage] = useState(1);

  const validate1 = () => {
    let errores = []
    if (!age) errores.push('AGE')
    if (!pic_url1) errores.push('URL1')
    else if (!vaccination_status) errores.push('VACCINATION')
    setErrors(errors)
  }

  const validate2 = () => {
    let errores = []
    if (!characteristics) errores.push('CHARS')
    if (!bio) errores.push('BIO')
    if (!question1) errores.push('Q1')
    if (!question2) errores.push('Q2')
    if (!question3) errores.push('Q3')
    setErrors(errores)
  }

  const nextStep = () => {
    if (formPage === 1) {
      validate1()
      if (errors.length === 0) setFormPage(formPage + 1)
      if (pic_url1) setFile_pic_url1('OKfile');
      if (pic_url2) setFile_pic_url2('OKfile');
      if (pic_url3) setFile_pic_url3('OKfile');
    } else if (formPage === 2) {
      validate2()
      if (errors.length === 0) setFormPage(formPage + 1)
    }
  }
  const backStep = () => {
    setFormPage(formPage - 1)
  }

  const [biosize, setSBioSize] = useState(false);
  const bioSizeChangerTrue = () => setSBioSize(true);
  const bioSizeChangerFalse = () => setSBioSize(false);


  return (
    <>
      <NavBar />
      <div id='allsignup' onClickCapture={bioSizeChangerFalse}>
        <div className="mainsignup">
          {formPage === 1 && (
            <NavLink to={`/pet-post/${id}`}>
              <div id="petedit-backdiv">
                <MdOutlineArrowBackIosNew id='editpet-back' /><span id="petedit-backspan">Back</span>
              </div>
            </NavLink>
          )}
          <div className="signup" >
            <form onSubmit={onEdit}>
              <div className="errors">
                {errors.map((error, ind) => (
                  <div key={ind}>{error}</div>
                ))}
              </div>

              {formPage === 1 && (
                <>
                  <div>
                    <p id="createanewpettext">Edit {oldData?.name}</p>
                    <img className="editform-editingdog" alt='editing dog' src={prev_pic_url1} />
                  </div>
                  <p id='vaccionationstatustext'>Age:</p>
                  <FormAge field='age' clicked={clickedAge} updateValue={updateAge} preselection={age} />

                  <p id='vaccionationstatustext'>Vaccionation Status:</p>
                  <FormDoubleButton clicked={clickedVaccionationStatus} field='vaccination_status' updateValue={updateVaccination_status} preselection={vaccination_status} />

                  <p id='add-images' >Edit pet pictures:</p>
                  <p id='vaccionationstatustext'>Picture 1</p>
                  <FormImageAWS field='pic_url1' updateValue={updatePic_url1} extraclass={file_pic_url1} required={true} placeholder='Picture' />

                  <p id='vaccionationstatustext'>Picture 2</p>
                  <FormImageAWS field='pic_url2' updateValue={updatePic_url2} extraclass={file_pic_url2} placeholder='Picture' />

                  <p id='vaccionationstatustext'>Picture 3</p>
                  <FormImageAWS field='pic_url3' updateValue={updatePic_url3} extraclass={file_pic_url3} placeholder='Picture' />
                  <br />
                  <button id='single-nextback' onClick={nextStep}>Next</button>
                </>
              )}
              {formPage === 2 && (
                <>
                  <p id="createanewpettext">Edit {oldData?.name}</p>
                  <p id='vaccionationstatustext'>Edit characteristics of the pet:</p>
                  <FormInput field='characteristics' updateValue={updateCharacteristics} placeholder='Characteristics' preselection={characteristics} />
                  <p id='vaccionationstatustext'>Pet bio:</p>
                  <div>
                    <textarea required={true} placeholder='Tell us about yourself...' onClick={bioSizeChangerTrue} className={biosize ? 'bigbio' : ''} id='biotextarea' type='text' name='bio' onChange={updateBio} value={bio} />
                  </div>

                  <p id='add-images' >Edit questions:</p>
                  <p id='vaccionationstatustext'>Question 1</p>
                  <FormInput field='question1' updateValue={updateQuestion1} placeholder='Question' preselection={question1} />

                  <p id='vaccionationstatustext'>Question 2</p>
                  <FormInput field='question2' updateValue={updateQuestion2} placeholder='Question' preselection={question2} />

                  <p id='vaccionationstatustext'>Question 3</p>
                  <FormInput field='question3' updateValue={updateQuestion3} placeholder='Question' preselection={question3} />
                  <br />
                  <button id='single-nextback' onClick={backStep}>Back</button>
                  <br />
                  <button id='' className="editpet-repostbutton" type='submit'>Re-Post</button>
                </>
              )}
            </form>
          </div>
          <img id='logozoomiesvertical' alt='splash' src="https://i.imgur.com/qDk29Iy.png" />
        </div>
      </div>
    </>
  )
}

export default EditPostForm
