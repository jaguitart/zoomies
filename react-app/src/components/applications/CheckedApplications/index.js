import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteOneApplication } from "../../../store/application";
import { Modal } from "../../../context/Modal"
import Application from "../Application/index"

const CheckedApplications = ({ application }) => {
  const dispatch = useDispatch()
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const handleDelete = id => dispatch(deleteOneApplication(id))
  const sessionUserId = useSelector(state => state.session.user).id

  const post = Object.values(useSelector(state => state.posts)).find(post => post.id === application.post_id);
  const user = Object.values(useSelector(state => state.users)).find(user => user.id === application.user_id);

  return (
    <div id="allsingleapplicationdiv">
      <div id="textapplicationdiv" onClick={() => setShowApplicationModal(!showApplicationModal)}>
        {post?.type === 'Dog' ?
          <img className="application-dog-cat-img checked-applications-imganddot" alt='dog' src={application.status?'https://i.imgur.com/pr7MDh7.png':'https://i.imgur.com/gZ9FEPM.png'} /> :
          <img className="application-dog-cat-img checked-applications-imganddot" alt='cat' src={application.status?'https://i.imgur.com/oZ4uFPg.png':'https://i.imgur.com/idjuygC.png'} />}
        <span id='checkedapplications-namedot'>•</span>
        <div className="application-infodiv">
          <div>
            <span id="application-petname"><b>Pet Name:</b> {post.name}</span>
          </div>
          <div>
            <span id="application-username"><b>Applicant Name:</b> {user.username}</span>
          </div>
        </div>
      </div>

      {showApplicationModal && (
        <Modal onClose={() => setShowApplicationModal(!showApplicationModal)}>
          <Application application={application} setShowModal={setShowApplicationModal} />
        </Modal>
      )
      }
    </div >
  )
}

export default CheckedApplications
