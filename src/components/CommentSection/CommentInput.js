// You do not need to do anything in this file
import React from "react";

const CommentInput = props => {
  const customAddComment = {
    color: "black",
    fontSize: "2rem"
  };

  const customNotAddComment = {
    color: "grey"
  };

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
        style={
          props.newComment.text
            ? { color: "black", fontSize: "1rem" }
            : { color: "grey" }
        }
      />
    </form>
  );
};

export default CommentInput;
//style={{ color: props.newComment.text ? "black" : "grey" }}

// style={
//   props.newComment.text !== ""
//     ? { customAddComment }
//     : { customNotAddComment }
// }
