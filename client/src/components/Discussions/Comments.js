import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Comments.css';
import _ from 'lodash';
import NewComment from "./NewComment.js";

function Comments(props) {
  const [commentOptions, showCommentOptions] = React.useState(false);
  const handleCommentOptions = () => showCommentOptions(!commentOptions);
  const ShowCommentOptions = () => (
    <div className="options_comment_content">
      <a href="/">Edit</a>
      <a href="/">Delete</a>
    </div>
  )

  const [viewComments, showComments] = React.useState(false);
  const handleShowComments = () => showComments(!viewComments);
  const [comments, addComments] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const getAllComments = "/comments?discussionId="+props.discussionId;

    axios.get(getAllComments).then(response => {
        let comment = response.data;
        const temp = comments.concat(comment);
        if (!comments || comment.length !== comments.length) addComments(_.filter(temp), (item) => item !== null);    });

}, [comments]);

  const ShowComments = () => (
comments.map((comment, index) =>  {
  return(
    <div className="post_comments_content">
      <i className="bi bi-person-circle" />
      <i className="comment_user_name">User</i>
      <div className="comment_options">
        <i onClick={handleCommentOptions} className="bi bi-threee-dots-vertical" />
        {commentOptions ? <ShowCommentOptions /> : null}
      </div>
     <h5 className="comment_text">
       {comment.message}
             </h5>


     
    </div>)})
  )



  return (
    <div>
      <div className="post_comments" onClick={handleShowComments}>
        <div className="post_comments_icon"><i className="bi bi-chat-dots"></i></div>
      </div>
      { viewComments ? <ShowComments /> : null}
      <NewComment discussionId={props.discussionId}/>
    </div>
  );
}

export default Comments;
