import React from 'react';

import styled from 'styled-components';

const CommentsSection = ({ comments }) => {
  return (
    <Container>
      {comments.map((comment) => {
        return (
          <Comment key={comment.id}>
            <CommentNickname>{comment.nickname}</CommentNickname>
            <CommentText>{comment.text}</CommentText>
          </Comment>
        );
      })}
    </Container>
  );
};

export default CommentsSection;

const Container = styled.section`
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const Comment = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;
const CommentNickname = styled.span`
  font-size: medium;
`;
const CommentText = styled.p`
  font-size: medium;
`;
