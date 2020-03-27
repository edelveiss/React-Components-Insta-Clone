// You do not need to do anything in this file. Look at the CommentSection file.

import React from "react";
import "./Comment.css";

const Time = props => {
  //console.log("time ", props);
  return (
    <div className="comment-text">
      <span className="time">{props.timestamp}</span>
    </div>
  );
};

export default Time;
