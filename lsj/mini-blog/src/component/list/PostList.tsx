import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

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

type Post = {
  title: string;
  id: number;
};

type PostListProps = {
  posts: Post[];
  onClickItem: (post: Post) => void;
};

function PostList({ posts, onClickItem }: PostListProps) {
  return (
    <Wrapper>
      {posts.map((post, index) => (
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
