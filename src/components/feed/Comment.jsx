import React from 'react';
import { horizontalAlign } from '../../styles/sharedStyles';
import styled from 'styled-components';

function CommentList({ comments }) {
  return (
    <CommentWrapper>
      {comments.map((comment) => (
        <Comment key={comment.id}>
          <p>{comment.commentor}</p>
          <p>{comment.comment}</p>
        </Comment>
      ))}
    </CommentWrapper>
  );
}

export default CommentList;

const CommentWrapper = styled.div`
  padding: 0 1rem;
`;

const Comment = styled.div`
  ${horizontalAlign}
  justify-content: flex-start;
  & > p:nth-child(1) {
    width: 10%;
    margin-right: 10px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & > p:nth-child(2) {
    width: 80%;
    overflow: wrap;
  }
`;
