import React from 'react';
import styled from 'styled-components';

const Comment = ({ commentInfo }) => {
  return (
    <StyledCommentSection>
      <StyledCommentId>{commentInfo.userId}</StyledCommentId>
      <StyledComment>{commentInfo.comment}</StyledComment>
    </StyledCommentSection>
  );
};

const StyledCommentSection = styled.div`
  display: flex;
  margin: 20px 0 0 10px;
`;

const StyledCommentId = styled.div`
  font-weight: bold;
`;

const StyledComment = styled.div`
  margin-left: 5px;
`;

export default Comment;
