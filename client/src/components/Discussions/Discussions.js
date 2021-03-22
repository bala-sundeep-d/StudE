import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewForum from "./NewForum.js";
import Comments from './Comments.js';
import _ from 'lodash';
import './Discussions.css';

function Discussions() {
  
  const [showNew, showNewPost] = React.useState(false);
  const handleNew = () => showNewPost(!showNew);

  const [posts, addPosts] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const getAllDiscussions = "/discussions?subjectId=11";

    axios.get(getAllDiscussions).then(response => {
        let discussions = response.data;
        const temp = posts.concat(discussions);
        if (!posts || discussions.length !== posts.length) addPosts(_.filter(temp), (item) => item !== null);
        console.log(posts, discussions);
    });

}, [posts]);
  const ShowPosts = () => (
    
      <NewForum />
      
   
    )

    const [showOptions, showPostOptions] = React.useState(false);
    const handleShowOptions = () => showPostOptions(!showOptions);
    const ShowPostOptions = () => (
      <div className="options_content">
              <a href="/">Edit</a>
              <a href="/">Delete</a>
      </div>
    )


  return (
    <div className="discuss_container">
      <h1>Discussion Forums</h1>
      <h3 className="create_newPost"onClick={handleNew}>Create new discussion post</h3>
      { showNew ? <ShowPosts /> : null }
      <div className="posts">
        {
          posts.map((post, index) =>  {
            return (
            <div key={index}>
            <i className="post_userimage"><i className="bi bi-person-circle uicon"/></i>
            <i className="post_username">User <span> at 1:15pm</span></i>
            

            <div className="post_options">
              <i onClick={handleShowOptions} className="bi bi-three-dots-vertical"/>
              { showOptions ? <ShowPostOptions /> : null }          
            </div>
            <br />

            <h3 className="post_title">{post.title}</h3>
            <h5 className="post_body">{post.message}</h5>
            <Comments />
            </div>
          )})
        }
      </div>
    </div>
  );
}

export default Discussions;
