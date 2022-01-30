import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateOneApplication } from '../../../store/application'
import './style.css'


const SingleApplication = ({ application, setShowModal }) => {
  const dispatch = useDispatch()

  const sessionUserId = useSelector(state => state.session.user).id
  const post = Object.values(useSelector(state => state.posts)).find(post => post.id === application.post_id)
  const user = Object.values(useSelector(state => state.users)).find(user => user.id === application.user_id)
  const posts = Object.values(useSelector(state => state.posts)).filter(post => post.user_id === sessionUserId)

  const onStatus = status => {
    if (status === null) {
      status = null
    }
    const sendStatus = {
      id: application.id,
      user_id: application.user_id,
      post_id: application.post_id,
      answer1: application.answer1,
      answer2: application.answer2,
      answer3: application.answer3,
      status
    }
    let submited = dispatch(updateOneApplication(sendStatus))
    if (submited) {
      setShowModal(false)
    }
  }

  return (
    <div className="application-allinfodiv">
      <div>
        <div className="application-orginfo">
          {/* <img src={post?.profile_pic} className="application-orglogo" alt='logo' /> */}
        </div>
        <div className="application-applicationinfodiv">
          <div className="application-petinfodiv">
            <img src={post?.pic_url1} className="application-petimg" alt={post.name} />
            <div className="application-organdpetinfo">
            <div><b>{post.name}</b></div>
            <div className="application-orgusername"><span id="application-fromtext">from:</span> {post.username}</div>
            </div>
          </div>
          <div className="application-applicantinfodiv">
            <div className="application-name-username">
              <div>{user.username}</div>
              <span>•</span>
              <div>{user.name}</div>
            </div>
            <div className="application-userbio">{user.bio}</div>
          </div>
        </div>
        <div className="application-questionsanswersdiv">
          <h3 id='aplication-questionstitle'>Applicant answers</h3>
          <b className="application-question" id='aplication-question1'>{post.question1}</b>
          <div className="application-answer" id='aplication-answer1'>{application?.answer1}</div>
          <b className="application-question" id='aplication-question2'>{post.question2}</b>
          <div className="application-answer" id='aplication-answer2'>{application?.answer2}</div>
          <b className="application-question" id='aplication-question3'>{post.question3}</b>
          <div className="application-answer" id='aplication-answer3'>{application?.answer3}</div>
        </div>
      </div>
      {posts.indexOf(post) >= 0 && (
        <div className="application-orgbuttonsdiv">
          {(application.status === false || application.status === null) && (
            <button onClick={() => onStatus(true)}>APPROVE</button>
          )}
          {(application.status === true || application.status === null) && (
            <button onClick={() => onStatus(false)}>REJECT</button>
          )}
          {application.status !== null && (
            <button onClick={() => onStatus(null)}>BACK TO REVIEW</button>
          )}
        </div>
      )}
    </div>
  )
}

export default SingleApplication
