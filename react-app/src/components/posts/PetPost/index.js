import React from "react";
import { useDispatch } from 'react-redux';
import {  useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { deleteOnePost } from "../../../store/pet_post";


const PetPost = ({ posts }) => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const post = posts.find(post => +post.id === +id)
  const handleDelete = id => dispatch(deleteOnePost(id))

  return (
    <div>
      <div>
        <img src={post?.pic_url1} width="350px" max-height="350px" alt={post.name} />
        <img src={post?.pic_url2} width="350px" max-height="350px" alt={post.name} />
        <img src={post?.pic_url3} width="350px" max-height="350px" alt={post.name} />
      </div>
      <div>
        <div>Type:{post?.type}</div>
        <div>Sex:{post?.sex}</div>
        <div>Color:{post?.color}</div>
        <div>Age:{post?.age.age}</div>
        <div>Name:{post?.name}</div>
        <div>Description:{post?.bio}</div>
        <div>Characteristics:{post?.characteristics}</div>
        <div>Vaccination Status:{post?.vaccination_status.vaccination_status}</div>
        <div>Organization:{post?.username}</div>
        <div>Q1:{post?.question1}</div>
        <div>Q2:{post?.question2}</div>
        <div>Q3:{post?.question3}</div>
      </div>
      <NavLink to={`/pet-post/${post.id}/edit`}>
        <button>Edit</button>
      </NavLink>
      <button onClick={() => handleDelete(post.id)}>Delete</button>
    </div>
  )
}

export default PetPost