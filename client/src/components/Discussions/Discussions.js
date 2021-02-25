import React from 'react';
import NewForum from "./NewForum.js";
import Comments from './Comments.js';
import './Discussions.css';

function Discussions() {
  
  const [showNew, showNewPost] = React.useState(false);
  const handleNew = () => showNewPost(!showNew);
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
        <i className="post_userimage"><i className="bi bi-person-circle uicon"/></i>
        <i className="post_username">User <span> at 1:15pm</span></i>
        

        <div className="post_options">
          <i onClick={handleShowOptions} className="bi bi-three-dots-vertical"/>
          { showOptions ? <ShowPostOptions /> : null }          
        </div>
        <br />

        <h3 className="post_title">Title</h3>
        <h5 className="post_body">Currently, Panopto does not support the Mac OS "Big Sur" update, but is anticipated to begin support in Panopto Recorder version 10.0+ which is slated for an early release in Q1 of 2021. My sincerest apologies for that. Updates will be released once they are available. In the interim we would suggest not upgrading to "Big Sur" if the Panopto desktop recorder is needed, or use Panopto Capture, our web browser based recording solution.</h5>
        <Comments />
      </div>
    </div>
  );
}

export default Discussions;
