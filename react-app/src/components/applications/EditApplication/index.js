import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { updateOneApplication } from '../../../store/application'
import FormInput from "../../FormsComponents/FormInput";


const EditApplicationForm = ({ application, setShowModal }) => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);

  const oldA1 = application.answer1 ? application.answer1 : ''
  const oldA2 = application.answer2 ? application.answer2 : ''
  const oldA3 = application.answer3 ? application.answer3 : ''


  const [answer1, setAnswer1] = useState(oldA1);
  const [answer2, setAnswer2] = useState(oldA2);
  const [answer3, setAnswer3] = useState(oldA3);

  const validate = () => {
    // const errors = [];
  }

  const onEdit = async e => {
    e.preventDefault()
    const errors = validate();

    if (errors) return setErrors(errors);
    const editApplication = {
      id: application.id,
      user_id: application.user_id,
      post_id: application.post_id,
      answer1,
      answer2,
      answer3
    }
    let submited = await dispatch(updateOneApplication(editApplication))
    if (submited) {
      setShowModal(false)
    }
  }

  const updateAnswer1 = e => setAnswer1(e.target.value)
  const updateAnswer2 = e => setAnswer2(e.target.value)
  const updateAnswer3 = e => setAnswer3(e.target.value)

  return (
    <>
      <form onSubmit={onEdit}>
        <div>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <FormInput field='answer1' updateValue={updateAnswer1} placeholder='Answer' preselection={answer1} />

            <FormInput field='answer2' updateValue={updateAnswer2} placeholder='Answer' preselection={answer2} />

            <FormInput field='answer3' updateValue={updateAnswer3} placeholder='Answer' preselection={answer3} />
          </div>
          <button type='submit'>Update Application</button>
        </div>
      </form>
    </>
  )
}

export default EditApplicationForm
