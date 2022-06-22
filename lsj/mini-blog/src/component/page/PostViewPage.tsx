import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../../data.json";
import Button from "../ui/Button";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";

const Wrapper = styled.div`
  padding: 1rem;
  width: calc(100% - 2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  & > * {
    :not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

const PostContainer = styled.div`
  padding: 0.5rem 1rem;
  border: 1px solid grey;
  border-radius: 0.5rem;
`;

const TitleText = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 1.25rem;
  line-height: 2rem;
  white-space: pre-wrap;
`;

const CommentLabel = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

type PostViewPageProps = {};

function PostViewPage({}: PostViewPageProps) {
  const navigate = useNavigate();
  const { postId } = useParams();

  const post = data.find((item) => `${item.id}` === postId);

  const [comment, setComment] = useState("");

  return (
    <Wrapper>
      <Container>
        <Button title="뒤로 가기" onClick={() => navigate("/")} />

        <PostContainer>
          <TitleText>{post?.title}</TitleText>
          <ContentText>{post?.content}</ContentText>
        </PostContainer>

        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post?.comments || []} />

        <TextInput
          height="40"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <Button
          title="댓글 작성하기"
          onClick={() => {
            navigate("/");
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default PostViewPage;
