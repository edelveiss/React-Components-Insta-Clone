// You do not need to do anything in this file. Look at the CommentSection file.

import React from "react";
import "./Comment.css";

const Time = props => {
  console.log(
    "time ",
    props.timestamp.substring(0, props.timestamp.length - 13)
  );
  return (
    <div className="comment-text">
      <span className="time">
        {props.timestamp.substring(0, props.timestamp.length - 13)}
      </span>
    </div>
  );
};

export default Time;
