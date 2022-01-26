import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateOneApplication } from '../../../store/application'

const SingleApplication = ({ application, setShowModal }) => {
  const dispatch = useDispatch()

  const post = Object.values(useSelector(state => state.posts)).find(post => post.id === application.post_id)
  const user = Object.values(useSelector(state => state.users)).find(user => user.id === application.user_id)

  const onStatus = async status => {
    const sendStatus = {
      id: application.id,
      user_id: application.user_id,
      post_id: application.post_id,
      answer1:application.answer1,
      answer2:application.answer2,
      answer3:application.answer3,
      status
    }
    let submited = await dispatch(updateOneApplication(sendStatus))
    if (submited) {
      setShowModal(false)
    }
  }

  return (
    <div>
      <div>
        <img src={post?.logo} width="150px" max-height="150px" alt='logo' />
        <div>{post.username}</div>
        <div>
        <img src={post?.pic_url1} width="350px" max-height="350px" alt={post.name} />
        </div>
        <div>{post.name}</div>
        <div>{user.username}</div>
        <div>{user.bio}</div>
        <div>Q1: {post.question1}</div>
        <div>{application?.answer1}</div>
        <div>Q2: {post.question2}</div>
        <div>{application?.answer1}</div>
        <div>Q3: {post.question3}</div>
        <div>{application?.answer1}</div>
      </div>
      <button onClick={() => onStatus(true)}>APPROVE</button>
      <button onClick={() => onStatus(false)}>REJECT</button>
    </div>
  )
}

export default SingleApplication
