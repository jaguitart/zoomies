import React from "react";
import SinglePost from "../SinglePost";


const Posts = ({ posts }) => {
  

  return (
    <div>
      {posts.map(post =>
          <div key={post.id}>
            <SinglePost post={post}/>
          </div>
      )}
    </div>
  )
}


export default Posts