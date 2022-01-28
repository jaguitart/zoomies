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
      {/* <h1>Find your fur-ever friend</h1> */}
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