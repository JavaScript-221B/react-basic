import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";
import { IPost } from "../../types";

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

type PostListProps = {
  posts: IPost[];
  onClickItem: (post: IPost) => void;
};

function PostList({ posts, onClickItem }: PostListProps) {
  return (
    <Wrapper>
      {posts.map((post) => (
        <PostListItem
          key={post.id}
          post={post}
          onClick={() => onClickItem(post)}
        />
      ))}
    </Wrapper>
  );
}

export default PostList;
