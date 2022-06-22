import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 2rem);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: white;
  :hover {
    background-color: lightgray;
  }
`;

const ContentText = styled.p`
  font-size: 0.85rem;
`;

type CommentListItemProps = {
  comment: { content: string };
};

function CommentListItem({ comment }: CommentListItemProps) {
  return (
    <Wrapper>
      <ContentText>{comment.content}</ContentText>
    </Wrapper>
  );
}

export default CommentListItem;
