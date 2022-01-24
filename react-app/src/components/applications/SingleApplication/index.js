import React, { useState } from "react";
import { useDispatch } from 'react-redux';
// import { NavLink } from "react-router-dom";
import { deleteOneApplication } from "../../../store/application";
import { Modal } from "../../../context/Modal"
import EditApplicationForm from "../EditApplication/index"

const SingleApplication = ({ application }) => {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);
  const handleDelete = id => dispatch(deleteOneApplication(id))


  return (
    <div>
      <div>
        <p>USER ID: {application.user_id}</p>
        <p>POST ID: {application.post_id}</p>
        <p>A1: {application.answer1}</p>
        <p>A2: {application.answer2}</p>
        <p>A3: {application.answer3}</p>
        <p>STATUS{application.status}</p>
      </div>

      <button onClick={() => setShowModal(!showModal)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(!showModal)}>
          <EditApplicationForm application={application} setShowModal={setShowModal} />
        </Modal>
      )}
      <button onClick={() => handleDelete(application.id)}>Delete</button>
    </div>
  )
}

export default SingleApplication
