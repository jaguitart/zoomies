import React from "react";
import SinglePost from "../SinglePost";
import './style.css'
import NavBar from "../../NavBar/NavBar";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";


const Posts = ({ posts }) => {
  const user = useSelector(state => state.session.user);

  if (!user) {
    return <Redirect to='/login' />;
  }

  return (
    <>
      <NavBar />
      <div className='posts-bannerdiv'>
        <img id='posts-bannerimg' src='https://i.imgur.com/MDRTdYk.png' alt='banner image' />
        <div className="posts-banner-text">
          <div className="posts-text1 arrowRight">Hi {user.username}</div>
          <div className="posts-text2">
            <img id='posts-pet-dog' src='https://i.imgur.com/3NzqSS5.png' alt='dog' />
            <span>Find a dog</span>
          </div>
          <div className="posts-text3">
            <img id='posts-pet-cat' src='https://i.imgur.com/WgJneSn.png' alt='cat' />
            <span>Find a cat</span>
            </div>
        </div>
      </div>
      {/* <img id='posts-logo' src='https://i.imgur.com/FzFFmrv.png' alt='a' /> */}

      <h1>Find your pet-friend</h1>
      <div className="allposts">
        {posts.map(post =>
          <div key={post.id}>
            <SinglePost post={post} />
          </div>
        )}
      </div>
    </>
  )
}


export default Posts