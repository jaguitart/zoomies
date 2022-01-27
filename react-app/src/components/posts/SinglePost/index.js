import React from "react";
// import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
// import { deleteOnePost } from "../../../store/pet_post";
import './style.css'

const SinglePost = ({ post }) => {
  // const dispatch = useDispatch()

  // const handleDelete = id => dispatch(deleteOnePost(id))


  return (
      <div id="cardcomplete" >
        <div >
          <NavLink to={`pet-post/${post.id}`}>
            <img className="individualImage" src={post?.pic_url1} alt={post.name} />
          </NavLink>
        </div>
        <div className="posttextdiv">
          <div id="animalname">{post?.name}</div>
          <div>{post?.age.age} <span id='animalnamedot'>•</span> {post?.size}</div>
        </div>
        {/* <NavLink to={`/pet-post/${post.id}/edit`}> */}
        {/* <button>Edit</button> */}
        {/* </NavLink> */}
        {/* <button onClick={() => handleDelete(post.id)}>Delete</button> */}
      </div >
  )
}

export default SinglePost
