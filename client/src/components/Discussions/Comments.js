import React from 'react';
import './Comments.css';
import NewComment from "./NewComment.js";

function Comments() {
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
  const ShowComments = () => (

    <div className="post_comments_content">
      <i className="bi bi-person-circle" />
      <i className="comment_user_name">User</i>
      <div className="comment_options">
        <i onClick={handleCommentOptions} className="bi bi-three-dots-vertical" />
        {commentOptions ? <ShowCommentOptions /> : null}
      </div>
      <h5 className="comment_text">Currently, Panopto does not support the Mac OS "Big Sur" update, but is anticipated to begin support in Panopto Recorder version 10.0+ which is slated for an early release in Q1 of 2021. My sincerest apologies for that. Updates will be released once they are available.</h5>


      <i className="bi bi-person-circle" />
      <i className="comment_user_name">User</i>
      <h5 className="comment_text">Currently, Panopto does not support the Mac OS "Big Sur" update, but is anticipated to begin support in Panopto Recorder version 10.0+ which is slated for an early release in Q1 of 2021. My sincerest apologies for that. Updates will be released once they are available.</h5>

      <i className="bi bi-person-circle" />
      <i className="comment_user_name">User</i>
      <h5 className="comment_text">Currently, Panopto does not support the Mac OS "Big Sur" update, but is anticipated to begin support in Panopto Recorder version 10.0+ which is slated for an early release in Q1 of 2021. My sincerest apologies for that. Updates will be released once they are available.</h5>

      <i className="bi bi-person-circle" />
      <i className="comment_user_name">User</i>
      <h5 className="comment_text">Currently, Panopto does not support the Mac OS "Big Sur" update, but is anticipated to begin support in Panopto Recorder version 10.0+ which is slated for an early release in Q1 of 2021. My sincerest apologies for that. Updates will be released once they are available.</h5>

      <i className="bi bi-person-circle" />
      <i className="comment_user_name">User</i>
      <h5 className="comment_text">Currently, Panopto does not support the Mac OS "Big Sur" update, but is anticipated to begin support in Panopto Recorder version 10.0+ which is slated for an early release in Q1 of 2021. My sincerest apologies for that. Updates will be released once they are available.</h5>

    </div>
  )



  return (
    <div>
      <div className="post_comments" onClick={handleShowComments}>
        <div className="post_comments_icon"><i className="bi bi-chat-dots"></i></div>
      </div>
      { viewComments ? <ShowComments /> : null}
      <NewComment />
    </div>
  );
}

export default Comments;
