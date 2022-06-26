import React from "react";
import Comment from "./Comment";

export interface ICommentProps {
  name: string;
  comment: string;
}

const comments: ICommentProps[] = [
  {
    name: "이성재",
    comment: "안녕하세요!",
  },
  {
    name: "이정재",
    comment: "안녕히 계세요!",
  },
  {
    name: "???",
    comment: "???",
  },
];

const CommentList = (props: any) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <Comment key={index} name={comment.name} comment={comment.comment} />
      ))}
    </div>
  );
};

export default CommentList;
