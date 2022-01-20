import React from "react";
import {  useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { deleteOnePost } from "../../../store/pet_post";

const SinglePost = ({ post }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(state => state.session.user ? state.session.user : undefined )

  const handleDelete = id => {
    dispatch(deleteOnePost(id))
    // history.push(`/`)
  }


  return (
    <div>
      <div>
        <img src={post?.pic_url1} width="150px" max-height="150px" alt={post.name} />
      </div>
      <div>
        <div>{post?.type}</div>
        <div>{post?.name}</div>
      </div>
      <button onClick={() => handleDelete(post.id)}>Delete</button>
    </div>
  )
}

export default SinglePost
