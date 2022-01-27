import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { deleteOnePost } from "../../../store/pet_post";
import { Modal } from "../../../context/Modal";
import NewApplicationForm from "../../applications/NewApplication";
import NavBar from "../../NavBar/NavBar";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import './style.css'

const PetPost = ({ posts }) => {
  const { id } = useParams();
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const post = posts.find(post => +post.id === +id)
  const [pictureSelected, setPictureSelected] = useState(post?.pic_url1)
  const [pictureNext, setPictureNext] = useState(post?.pic_url2)
  const [pictureLast, setPictureLast] = useState(post?.pic_url3)
  const dispatch = useDispatch()
  const handleDelete = id => {
    dispatch(deleteOnePost(id))
    history.push(`/pet-post`)

  }
  const user = useSelector(state => state.session.user);


  const isMyPost = (post?.user_id === user?.id)


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

  const updateShowModal = () => setShowModal(true)


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

        <div className="pet-card">
          <div id="pet-demoinfo">
            {post.logo && (
              <img className="org-logo" alt='sideimg1' src={post?.logo} />
            )}
            <div id="pet-demoname">{post?.username}</div>
          </div>
          {+user.account_type.id === 1 && (
            <div id="pet-applybutton">
              <button id="applynowbutton" onClick={updateShowModal}>Apply Now</button>
              {showModal && (
                <Modal onClose={() => setShowModal(!showModal)}>
                  <NewApplicationForm id='applicationForm' post={post} />
                </Modal>
              )}
            </div>
          )}
          <div className="pet-info">

            <div className="pet-name">
              {post?.type === 'Dog' ?
                <img className="dog-cat-img" alt='dog' src='https://i.imgur.com/ZvCSDV3.png' /> :
                <img className="dog-cat-img" alt='cat' src='https://i.imgur.com/95f5WkK.png' />}
              <span id='namedot'>•</span>
              {post?.name}
            </div>
            <div className="pet-basicinfo">
              <div> ━━━ {post?.age.age} <span id="pet-dot">•</span> {post?.sex} <span id="pet-dot">•</span> {post?.color}  ━━━</div>
              <div> size <span id="pet-dot">•</span> {post?.breed} </div>
              <div id="pet-vacstatus"><b>Vaccination Status</b>
                <span id='space'>__</span>
                {post?.vaccination_status.vaccination_status === 'Up to date' ?
                  <AiFillCheckCircle className="petvacicon" id="check" /> : <AiFillCloseCircle className="petvacicon" id="cross" />}
              </div>
              <div>━━━ {post?.characteristics} ━━━</div>
              <br />
              <b>Description:</b>
              <div className="pet-description">{post?.bio}</div>
            </div>
          </div>
        </div>
        {isMyPost && (
          <div>
            <NavLink to={`/pet-post/${post.id}/edit`}>
              <button>Edit</button>
            </NavLink>

            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </div>
        )}
      </div>
    </>
  )
}

export default PetPost