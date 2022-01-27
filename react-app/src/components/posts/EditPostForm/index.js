import React, { useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { updateOnePost } from "../../../store/pet_post";
import FormInput from "../../FormsComponents/FormInput";
import NavBar from "../../NavBar/NavBar";
import FormAge from "../../FormsComponents/FormAge";
import FormDoubleButton from "../../FormsComponents/FormDoubleButton";
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
  const [pic_url1, setPic_url1] = useState(oldPic1);
  const [pic_url2, setPic_url2] = useState(oldPic2);
  const [pic_url3, setPic_url3] = useState(oldPic3);
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

  const updatePic_url1 = e => setPic_url1(e.target.value)
  const updatePic_url2 = e => setPic_url2(e.target.value)
  const updatePic_url3 = e => setPic_url3(e.target.value)
  const updateCharacteristics = e => setCharacteristics(e.target.value)
  const updateBio = e => setBio(e.target.value)
  const updateQuestion1 = e => setQuestion1(e.target.value)
  const updateQuestion2 = e => setQuestion2(e.target.value)
  const updateQuestion3 = e => setQuestion3(e.target.value)


  return (
    <>
      <NavBar />
      <div id='allsignup'>
        <div className="mainsignup">
          <NavLink to={`/pet-post/${id}`}>
            <div id="petedit-backdiv">
              <MdOutlineArrowBackIosNew id='editpet-back' /><span id="petedit-backspan">Back</span>
            </div>
          </NavLink>
          <div className="signup" >
            <form onSubmit={onEdit}>
              <div className="errors">
                {errors.map((error, ind) => (
                  <div key={ind}>{error}</div>
                ))}
              </div>

              <div>
                <p id="createanewpettext">Edit {oldData?.name}</p>
                <img className="editform-editingdog" alt='editing dog' src={pic_url1} />
              </div>

              <FormAge field='age' clicked={clickedAge} updateValue={updateAge} preselection={age} />

              <FormDoubleButton clicked={clickedVaccionationStatus} field='vaccination_status' updateValue={updateVaccination_status} preselection={vaccination_status} />

              <FormInput field='pic_url1' updateValue={updatePic_url1} placeholder='Picture' preselection={pic_url1} />

              <FormInput field='pic_url2' updateValue={updatePic_url2} placeholder='Picture' preselection={pic_url2} />

              <FormInput field='pic_url3' updateValue={updatePic_url3} placeholder='Picture' preselection={pic_url3} />

              <FormInput field='characteristics' updateValue={updateCharacteristics} placeholder='Characteristics' preselection={characteristics} />

              <FormInput field='bio' updateValue={updateBio} placeholder='Bio' preselection={bio} />

              <FormInput field='question1' updateValue={updateQuestion1} placeholder='Question' preselection={question1} />

              <FormInput field='question2' updateValue={updateQuestion2} placeholder='Question' preselection={question2} />

              <FormInput field='question3' updateValue={updateQuestion3} placeholder='Question' preselection={question3} />
              <button id='' className="editpet-repostbutton" type='submit'>Re-Post</button>
            </form>
          </div>
          <img id='logozoomiesvertical' alt='splash' src="https://i.imgur.com/qDk29Iy.png" />
        </div>
      </div>
    </>
  )
}

export default EditPostForm
