import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { deleteOnePost } from "../../../store/posts";

const SinglePost = ({ post }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(state => { if (state.session.user) state.session.user })

  const handleDelete = (id) => dispatch(deleteOnePost(id)); history.push(`/`)


  return (
    <div>
      <div>
        <p>{post?.name}</p>
      </div>
      <br />
      <div>
        <img src={post?.pic_url1} alt="Pet Post Picture" />
      </div>
      <br />
      <div>
        <p>{post?.question1}</p>
      </div>
    </div>
  )
}

export default SinglePost
