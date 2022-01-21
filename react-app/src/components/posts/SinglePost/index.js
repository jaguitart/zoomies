import React from "react";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import { deleteOnePost } from "../../../store/pet_post";


const SinglePost = ({ post }) => {
  const dispatch = useDispatch()

  const handleDelete = id => dispatch(deleteOnePost(id))


  return (
    <div>
      <div>
        <NavLink to={`pet-post/${post.id}`}>
          <img src={post?.pic_url1} width="150px" max-height="150px" alt={post.name} />
        </NavLink>
      </div>
      <div>
        <div>{post?.type}</div>
        <div>{post?.age}</div>
        <div>{post?.name}</div>
      </div>
      <NavLink to={`/pet-post/${post.id}/edit`}>
        <button>Edit</button>
      </NavLink>
      <button onClick={() => handleDelete(post.id)}>Delete</button>
    </div>
  )
}

export default SinglePost
