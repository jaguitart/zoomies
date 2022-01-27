import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
// import { NavLink } from "react-router-dom";
import { deleteOneApplication } from "../../../store/application";
import { Modal } from "../../../context/Modal"
import EditApplicationForm from "../EditApplication/index"
import Application from "../Application/index"


const SingleApplication = ({ application }) => {
  const dispatch = useDispatch()
  const [showEditModal, setShowEditModal] = useState(false);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const handleDelete = id => dispatch(deleteOneApplication(id))
  const sessionUserId = useSelector(state => state.session.user).id

  let status = application.status === null ? 'Pending' : application.status
  let ans1 = application.answer1 !== null ? 'OK' : 'Pending'
  let ans2 = application.answer2 !== null ? 'OK' : 'Pending'
  let ans3 = application.answer3 !== null ? 'OK' : 'Pending'


  return (
    <div>
      <div onClick={() => setShowApplicationModal(!showApplicationModal)}>
        <i>USER ID: {application.user_id}</i>
        <i>POST ID: {application.post_id}</i>
        <i>A1: {ans1}</i>
        <i>A2: {ans2}</i>
        <i>A3: {ans3}</i>
        <i>STATUS: {status}</i>
      </div>
      {
        showApplicationModal && (
          <Modal onClose={() => setShowApplicationModal(!showApplicationModal)}>
            <Application application={application} setShowModal={setShowApplicationModal} />
          </Modal>
        )
      }
      {application.user_id === sessionUserId && (
        <div>
          <button onClick={() => setShowEditModal(!showEditModal)}>Edit</button>
          {
            showEditModal && (
              <Modal onClose={() => setShowEditModal(!showEditModal)}>
                <EditApplicationForm application={application} setShowModal={setShowEditModal} />
              </Modal>
            )
          }
          <button onClick={() => handleDelete(application.id)}>Delete</button>
        </div>
      )}
    </div >
  )
}

export default SingleApplication
