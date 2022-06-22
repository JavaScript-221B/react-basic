import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";
import { IComment } from "../../types";

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

type CommentListProps = { comments: IComment[] };

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
