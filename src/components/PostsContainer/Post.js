// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import Time from "../CommentSection/Time";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const [likes, setLikes] = useState(props.post.likes);
  const [time, setTime] = useState(props.post.timestamp);
  const [commentToggle, setCommentToggle] = useState(false);

  const incrementLikes = () => {
    setLikes(likes + 1);
  };
  const commToggle = () => {
    setCommentToggle(!commentToggle);
  };

  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection
        incrementLikes={incrementLikes}
        likes={likes}
        commToggle={commToggle}
      />

      {commentToggle ? (
        <CommentSection
          postId={props.post.imageUrl}
          comments={props.post.comments}
        />
      ) : null}
      <Time timestamp={time} />
    </div>
  );
};

export default Post;
