import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { deleteOneApplication } from "../../../store/application";
import { Modal } from "../../../context/Modal"
import EditApplicationForm from "../EditApplication/index"
import Application from "../Application/index"
import './style.css'


const SingleApplication = ({ application }) => {
  const dispatch = useDispatch()
  const [showEditModal, setShowEditModal] = useState(false);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const handleDelete = id => dispatch(deleteOneApplication(id))
  const sessionUserId = useSelector(state => state.session.user).id

  const post = Object.values(useSelector(state => state.posts)).find(post => post.id === application.post_id);
  const user = Object.values(useSelector(state => state.users)).find(user => user.id === application.user_id);

  const isStatus = application.status ? 'APROVED' : 'REJECTED'
  let status = application.status === null ? 'Pending' : isStatus
  let ans1 = application.answer1 !== '' ? true : false
  let ans2 = application.answer2 !== '' ? true : false
  let ans3 = application.answer3 !== '' ? true : false


  return (
    <div id="allsingleapplicationdiv">
      <div id="textapplicationdiv" onClick={() => setShowApplicationModal(!showApplicationModal)}>
        {post?.type === 'Dog' ?
          <img className="application-dog-cat-img" alt='dog' src='https://i.imgur.com/ZvCSDV3.png' /> :
          <img className="application-dog-cat-img" alt='cat' src='https://i.imgur.com/95f5WkK.png' />}
        <span id='application-namedot'>•</span>
        <div className="application-infodiv">
          <div>
            <span id="application-petname"><b>Pet Name:</b> {post.name}</span>
          </div>
          <div>
            <span id="application-username"><b>Applicant Name:</b> {user.username}</span>
          </div>
          <div>
            <b>Completed: </b>
            <span>Q1: {ans1?<AiFillCheckCircle className="user-checkcross" id="check" /> : <AiFillCloseCircle className="user-checkcross" id="cross" />}</span>
            <span>Q2: {ans2?<AiFillCheckCircle className="user-checkcross" id="check" /> : <AiFillCloseCircle className="user-checkcross" id="cross" />}</span>
            <span>Q3: {ans3?<AiFillCheckCircle className="user-checkcross" id="check" /> : <AiFillCloseCircle className="user-checkcross" id="cross" />}</span>
            <span id="user-created_at">{application.created_at.slice(0,17)}</span>
          </div>
        </div>
      </div>
      {showApplicationModal && (
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
