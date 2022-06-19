import React from 'react';
import styled from 'styled-components';
import { GLOBAL_WIDTH } from '../../styles/constants';

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
  margin: 5px 0;
  align-items: center;
`;

const StyledCommentId = styled.div`
  font-weight: bold;
`;

const StyledComment = styled.div`
  flex: 1;
  margin-left: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre;
  font-size: 14px;
  @media screen and (max-width: ${GLOBAL_WIDTH.MOBILE_WIDTH}) {
    font-size: 12px;
  } ;
`;

export default Comment;
