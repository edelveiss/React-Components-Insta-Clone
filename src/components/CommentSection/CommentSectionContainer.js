// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";

import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  console.log(props.comments);
  const [data1, setData1] = useState(props.comments);
  const [newComment, setNewComment] = useState({
    username: "",
    text: ""
  });

  const submitComment = event => {
    event.preventDefault();

    if (newComment.text) {
      setData1(data1.concat(newComment));
      //setData1(...data1,  newComment );

      event.target.reset();
      setNewComment({ username: "", text: "" });
    }
  };
  const changeComment = event => {
    setNewComment({ username: "Guest", text: event.target.value });
  };

  return (
    <div>
      {console.log("data1 map ", data1)}

      {data1.map((element, index) => (
        <Comment key={index} comment={element} />
      ))}
      <CommentInput
        changeComment={changeComment}
        submitComment={submitComment}
        newComment={newComment}
      />
    </div>
  );
};

export default CommentSection;
// changeComment={changeComment}
// submitComment={submitComment}

// style={{
//   display: props.commentToggle ? "block" : "none"
// }}
