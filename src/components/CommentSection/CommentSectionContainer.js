// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";

import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  console.log(props.comments);
  const [data, setData] = useState(props.comments);
  const [newComment, setNewComment] = useState({
    username: "Your Comment",
    text: ""
  });

  const submitComment = event => {
    event.preventDefault();
    console.log(newComment);
    // setData(newComment);
    setData(
      // ...data,
      // newComment
      data.push({
        username: newComment.username,
        text: newComment.text
      })
    );
    console.log("submit data", data);
  };
  const changeComment = event => {
    //setNewComment(event.target.value);
    setNewComment({
      ...newComment,
      username: "YourComment",
      text: event.target.value
    });
    // setNewComment({username: "Your Comment",
    // text: event.target.value});
  };

  return (
    <div style={{ display: props.commentToggle ? "block" : "none" }}>
      {/* map through the comments data and return the Comment component 
        <div style={{ display: props.commentToggle ? "block" : "none" }}>
        
      */}
      {console.log("data map ", data)}

      {data.map((element, index) => (
        <Comment key={index} comment={element} />
      ))}
      <CommentInput
        changeComment={changeComment}
        submitComment={submitComment}
      />
    </div>
  );
};

export default CommentSection;
// changeComment={changeComment}
// submitComment={submitComment}
