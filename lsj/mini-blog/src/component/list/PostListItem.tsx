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

const TitleText = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
`;

type PostListItemProps = {
  post: { title: string };
  onClick: () => void;
};

function PostListItem({ post, onClick }: PostListItemProps) {
  return (
    <Wrapper onClick={onClick}>
      <TitleText>{post.title}</TitleText>
    </Wrapper>
  );
}

export default PostListItem;
