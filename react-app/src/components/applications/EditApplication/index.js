import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { updateOneApplication } from '../../../store/application'
import FormInput from "../../FormsComponents/FormInput";


const EditApplicationForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);

  //DATA DEBE COINCIDIR CON LA APLICACION, LA FORMA DE BUSCARLO PUEDE VENIR DEL SELECTOR
  //U OTRA FORMA PERO REVISAR!!!
  const userId = useSelector(state => state.session.user ? state.session.user.id : undefined)
  const oldData = useSelector(state => state?.applications[id])
  const oldA1 = oldData.answer1 ? oldData.answer1 : ''
  const oldA2 = oldData.answer2 ? oldData.answer2 : ''
  const oldA3 = oldData.answer3 ? oldData.answer3 : ''


  const [answer1, setAnswer1] = useState(oldA1);
  const [answer2, setAnswer2] = useState(oldA2);
  const [answer3, setAnswer3] = useState(oldA3);

  const validate = () => {
    // const errors = [];
  }

  //USEEFFECT NECESARIO PARA ACTUALIZAR EN EL MISMO MODAL. SI REDIRECCIONO NO ES NECESARIO SOLO NECESITO USEHISTORY

  const onEdit = async e => {
    e.preventDefault()
    const errors = validate();

    if (errors) return setErrors(errors);
    const editApplication = {
      user_id: userId,
      post_id: postId,
      answer1,
      answer2,
      answer3
    }

    let submited = await dispatch(updateOneApplication(editApplication))
    if (submited) {
      //CERRAR MODAL Y ENVIAR INFO A DB
    }
  }

  const updateAnswer1 = e => setAnswer1(e.target.value)
  const updateAnswer2 = e => setAnswer2(e.target.value)
  const updateAnswer3 = e => setAnswer3(e.target.value)

  return (
    <>
      {editPopUp && (
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
      )}
    </>
  )
}

export default EditApplicationForm
