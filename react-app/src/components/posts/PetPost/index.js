import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { deleteOnePost } from "../../../store/pet_post";
import { Modal } from "../../../context/Modal";
import NewApplicationForm from "../../applications/NewApplication";
import NavBar from "../../NavBar/NavBar";


const PetPost = ({ posts }) => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()
  const post = posts.find(post => +post.id === +id)
  const handleDelete = id => dispatch(deleteOnePost(id))

  return (
    <>
      <NavBar />
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
        </div>
        <NavLink to={`/pet-post/${post.id}/edit`}>
          <button>Edit</button>
        </NavLink>

        <button onClick={() => handleDelete(post.id)}>Delete</button>

        <button onClick={() => setShowModal(true)}>Apply</button>
        {showModal && (
          <Modal onClose={() => setShowModal(!showModal)}>
            <NewApplicationForm post={post} />
          </Modal>
        )}
      </div>
    </>
  )
}

export default PetPost