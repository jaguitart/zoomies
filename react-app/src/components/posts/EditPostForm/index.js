import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { updateOnePost } from "../../../store/pet_post";

const EditPostForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [age, setAge] = useState('');
  const [pic_url1, setPic_url1] = useState('');
  const [pic_url2, setPic_url2] = useState('');
  const [pic_url3, setPic_url3] = useState('');
  const [characteristics, setCharacteristics] = useState('');
  const [vaccination_status, setVaccination_status] = useState('');
  const [bio, setBio] = useState('');
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');

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
    console.log(editPost);
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

      <div>
        <label htmlFor='age' />
        <input name='age' type='text' placeholder="Age" value={age}
          onChange={updateAge} />
      </div>

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
        <label htmlFor='vaccination_status' />
        <input name='vaccination_status' type='text' placeholder="Vaccination Status" value={vaccination_status}
          onChange={updateVaccination_status} />
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
