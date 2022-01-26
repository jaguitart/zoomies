import React from "react";
import SinglePost from "../SinglePost";
import './style.css'

const Posts = ({ posts }) => {


  return (
    <div id="allposts">
      {posts.map(post =>
        <div key={post.id}>
            <SinglePost post={post} />
        </div>
      )}
    </div>
  )
}


export default Posts