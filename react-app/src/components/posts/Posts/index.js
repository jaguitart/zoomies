import React from "react";
import SinglePost from "../SinglePost";
import '../Posts/style.css'
import NavBar from "../../NavBar/NavBar";
import { NavLink, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";


const Posts = ({ posts }) => {
  const user = useSelector(state => state.session.user);

  if (!user) {
    return <Redirect to='/login' />;
  }

  let randomPets = [];
  const postsQ = posts.length >= 5 ? 5:posts.length
  while (randomPets.length < postsQ) {
    let r = Math.floor(Math.random() * posts.length) + 1;
    if (randomPets.indexOf(r) === -1) randomPets.push(r);
  }

  const randomBanner = Math.random() < 0.5

  return (
    <>
      <NavBar />
      <div className='posts-bannerdiv'>
        {randomBanner?<img id='posts-bannerimg' src='https://i.imgur.com/MDRTdYk.png' alt='banner' />:<img id='posts-bannerimg' src='https://i.imgur.com/czrlTcY.png' alt='banner' />}       
        <div className="posts-banner-text">
          <div className="posts-text1 arrowRight">Hi {user.username}</div>
          <NavLink to='/dogs' className="posts-text2">
            <div className="posts-text2">
              <img id='posts-pet-dog' src='https://i.imgur.com/3NzqSS5.png' alt='dog' />
              <span>Find a dog</span>
            </div>
          </NavLink>
          <NavLink to='/cats' className="posts-text3">
            <div className="posts-text3">
              <img id='posts-pet-cat' src='https://i.imgur.com/WgJneSn.png' alt='cat' />
              <span>Find a cat</span>
            </div>
          </NavLink>
        </div>
      </div>
      <br/>
      <br/>
      <h1>Picked just for you</h1>
      <div className="allposts">
        {posts
        .filter(post => randomPets.includes(post.id))
        .map(post =>
          <div key={post.id}>
            <SinglePost post={post} />
          </div>
        )}
      </div>
    </>
  )
}


export default Posts