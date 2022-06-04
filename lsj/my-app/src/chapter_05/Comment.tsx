import React from "react";
import "./Comment.css";
import { ICommentProps } from "./CommentList";

const Comment = (props: ICommentProps) => {
  return (
    <div className="wrapper">
      <div className="imageContainer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          alt="portrait"
          className="image"
        />
      </div>

      <div className="contentContainer">
        <span className="nameText">{props.name}</span>
        <span className="commentText">{props.comment}</span>
      </div>
    </div>
  );
};

export default Comment;
