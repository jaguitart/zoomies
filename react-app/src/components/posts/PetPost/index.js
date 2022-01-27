import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { deleteOnePost } from "../../../store/pet_post";
import { Modal } from "../../../context/Modal";
import NewApplicationForm from "../../applications/NewApplication";
import NavBar from "../../NavBar/NavBar";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import './style.css'

const PetPost = ({ posts }) => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const post = posts.find(post => +post.id === +id)
  const [pictureSelected, setPictureSelected] = useState(post?.pic_url1)
  const [pictureNext, setPictureNext] = useState(post?.pic_url2)
  const [pictureLast, setPictureLast] = useState(post?.pic_url3)
  const dispatch = useDispatch()
  const handleDelete = id => dispatch(deleteOnePost(id))
  const user = useSelector(state => state.session.user);

  const updateImgLeft = () => {
    if (pictureSelected === post?.pic_url1) {
      setPictureSelected(post?.pic_url2)
      setPictureNext(post?.pic_url3)
      setPictureLast(post?.pic_url1)
    } else if (pictureSelected === post?.pic_url2) {
      setPictureSelected(post?.pic_url3)
      setPictureNext(post?.pic_url1)
      setPictureLast(post?.pic_url2)
    } else {
      setPictureSelected(post?.pic_url1)
      setPictureNext(post?.pic_url2)
      setPictureLast(post?.pic_url3)
    }
  }

  const updateImgRight = () => {
    if (pictureSelected === post?.pic_url1) {
      setPictureSelected(post?.pic_url2)
      setPictureNext(post?.pic_url1)
      setPictureLast(post?.pic_url3)
    } else if (pictureSelected === post?.pic_url2) {
      setPictureSelected(post?.pic_url3)
      setPictureNext(post?.pic_url2)
      setPictureLast(post?.pic_url1)
    } else {
      setPictureSelected(post?.pic_url1)
      setPictureNext(post?.pic_url3)
      setPictureLast(post?.pic_url2)
    }
  }


  if (!user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <NavBar />
      <div className="allpetpost">
        <div className="carousel-wrapper">
          {post.pic_url3 && post.pic_url2 && (
            <img className="backimages" onClick={updateImgRight} id="imgleft" src={pictureLast} alt={post.name} />
          )}
          {post.pic_url3 && post.pic_url2 && (
            <MdOutlineArrowBackIosNew onClick={updateImgLeft} id="leftarrow" className="arrow" />
          )}
          <div className="carousel-item">
            <img src={pictureSelected} alt={post.name} />
          </div>
          {post.pic_url3 && post.pic_url2 && (
            <MdOutlineArrowForwardIos onClick={updateImgRight} id="rightarrow" className="arrow" />
          )}
          {post.pic_url3 && post.pic_url2 && (
            <img className="backimages" onClick={updateImgRight} id="imgright" src={pictureNext} alt={post.name} />
          )}
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