// You do not need to do anything in this file
import React from "react";

const CommentInput = props => {
  return (
    <form
      id="create-comment-form"
      className="comment-form"
      onSubmit={props.submitComment}
    >
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
        style={{ color: props.newComment.text ? "black" : "grey" }}
      />
    </form>
  );
};

export default CommentInput;
