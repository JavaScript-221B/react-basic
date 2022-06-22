import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;
type Comment = {
  comment: string;
  content: string;
  id: number;
};

type CommentListProps = { comments: Comment[] };

function CommentList({ comments }: CommentListProps) {
  return (
    <Wrapper>
      {comments.map((comment) => (
        <CommentListItem key={comment.id} comment={comment} />
      ))}
    </Wrapper>
  );
}

export default CommentList;
