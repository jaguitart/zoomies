import React from "react";
import SinglePost from "../SinglePost";
import './style.css'
import NavBar from "../../NavBar/NavBar";

const Posts = ({ posts }) => {


  return (
    <>
      <NavBar />
      <div id="allposts">
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