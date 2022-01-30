import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { addOneApplication } from "../../../store/application";
import FormInput from "../../FormsComponents/FormInput";
import './style.css'

const NewApplicationForm = ({ post }) => {
  const [errors, setErrors] = useState([]);
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const updateAnswer1 = e => setAnswer1(e.target.value)
  const updateAnswer2 = e => setAnswer2(e.target.value)
  const updateAnswer3 = e => setAnswer3(e.target.value)

  const validate = () => {
    // const errors = [];
  }

  const submit = async e => {
    e.preventDefault()
    const errors = validate();

    if (errors) return setErrors(errors);
    const newApplication = {
      user_id: user.id,
      post_id: post.id,
      answer1,
      answer2,
      answer3
    }

    let submited = await dispatch(addOneApplication(newApplication))
    if (submited) {
      //REVISAR A DONDE REDIRECCIONAR
      history.push(`/users/${user.id}`)
    }
  }

  return (
    <div id="newapplication-alldiv">
      <img id='newapplication-logozoomiesvertical' className="newapplication-verticallogo" alt='splash' src="https://i.imgur.com/qDk29Iy.png" />
      <form onSubmit={submit} >
        <div>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className="newapplication-textdiv">
            <h2 id="newapplication-tittle"> Hi {user.username}, please fill this applications for {post.name}</h2>
            <br />
            <p id="newapplication-question">{post?.question1}</p>
            <FormInput extraclass='newapplication-input' field='answer1' updateValue={updateAnswer1} placeholder='Answer' />
            <p id="newapplication-question">{post?.question2}</p>
            <FormInput extraclass='newapplication-input' field='answer2' updateValue={updateAnswer2} placeholder='Answer' />
            <p id="newapplication-question">{post?.question3}</p>
            <FormInput extraclass='newapplication-input' field='answer3' updateValue={updateAnswer3} placeholder='Answer' />
            <button className="newapplication-button" type='submit'>Send Application</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default NewApplicationForm
