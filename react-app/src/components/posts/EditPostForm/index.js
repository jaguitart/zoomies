import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { updateOnePost } from "../../../store/pet_post";
import FormSelect from "../FormSelect";


const EditPostForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);

  const oldData = useSelector(state => state?.posts[id])
  const oldAge = oldData.age?oldData.age:''
  const oldPic1 = oldData.pic_url1?oldData.pic_url1:''
  const oldPic2 = oldData.pic_url2?oldData.pic_url2:''
  const oldPic3 = oldData.pic_url3?oldData.pic_url3:''
  const oldCharacteristics = oldData.characteristics?oldData.characteristics:''
  const oldVaccination_status = oldData.vaccination_status?oldData.vaccination_status:''
  const oldBio = oldData.bio?oldData.bio:''
  const oldQ1 = oldData.question1?oldData.question1:''
  const oldQ2 = oldData.question2?oldData.question2:''
  const oldQ3 = oldData.question3?oldData.question3:''

  const [age, setAge] = useState(oldAge);
  const [pic_url1, setPic_url1] = useState(oldPic1);
  const [pic_url2, setPic_url2] = useState(oldPic2);
  const [pic_url3, setPic_url3] = useState(oldPic3);
  const [characteristics, setCharacteristics] = useState(oldCharacteristics);
  const [vaccination_status, setVaccination_status] = useState(oldVaccination_status);
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
      history.push(`/pet-post`)
    }
  }


  const updateAge = e => setAge(e.target.value)
  const updatePic_url1 = e => setPic_url1(e.target.value)
  const updatePic_url2 = e => setPic_url2(e.target.value)
  const updatePic_url3 = e => setPic_url3(e.target.value)
  const updateCharacteristics = e => setCharacteristics(e.target.value)
  const updateVaccination_status = e => setVaccination_status(e.target.value)
  const updateBio = e => setBio(e.target.value)
  const updateQuestion1 = e => setQuestion1(e.target.value)
  const updateQuestion2 = e => setQuestion2(e.target.value)
  const updateQuestion3 = e => setQuestion3(e.target.value)


  return (
    <form onSubmit={onEdit}>

      <div className="errors">
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>

      <div>
        <p>Edit</p>
      </div>

      <FormSelect field='age' updateValue={updateAge} preselection={oldAge}/>
      <FormSelect field='vaccination_status' updateValue={updateVaccination_status} preselection={oldVaccination_status} />
      <div>
        <label htmlFor='pic_url1' />
        <input name='pic_url1' type='text' placeholder="Picture" value={pic_url1}
          onChange={updatePic_url1} />
      </div>

      <div>
        <label htmlFor='pic_url2' />
        <input name='pic_url2' type='text' placeholder="Picture" value={pic_url2}
          onChange={updatePic_url2} />
      </div>

      <div>
        <label htmlFor='pic_url3' />
        <input name='pic_url3' type='text' placeholder="Picture" value={pic_url3}
          onChange={updatePic_url3} />
      </div>

      <div>
        <label htmlFor='characteristics' />
        <input name='characteristics' type='text' placeholder="Characteristics" value={characteristics}
          onChange={updateCharacteristics} />
      </div>

      <div>
        <label htmlFor='bio' />
        <input name='bio' type='text' placeholder="Bio" value={bio}
          onChange={updateBio} />
      </div>

      <div>
        <label htmlFor='question1' />
        <input name='question1' type='text' placeholder="Question" value={question1}
          onChange={updateQuestion1} />
      </div>

      <div>
        <label htmlFor='question2' />
        <input name='question2' type='text' placeholder="Question" value={question2}
          onChange={updateQuestion2} />
      </div>

      <div>
        <label htmlFor='question3' />
        <input name='question3' type='text' placeholder="Question" value={question3}
          onChange={updateQuestion3} />
      </div>

      <button type='submit'>Re-Post</button>
    </form>
  )
}

export default EditPostForm
