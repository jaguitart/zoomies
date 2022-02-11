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
      <div className='posts-banner'>
        <img id='posts-banner' src='https://i.imgur.com/MDRTdYk.png' alt='a' />
        <div>
          <div></div>
          <div>Find a dog</div>
          <div>Find a cat</div>
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