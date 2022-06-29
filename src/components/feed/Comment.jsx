import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { horizontalAlign } from '../../styles/sharedStyles';
import styled from 'styled-components';

const CommentBox = styled.div`
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

const Comment = ({ commentor, comment }) => {
  return (
    <CommentBox>
      <p>{commentor}</p>
      <p>{comment}</p>
    </CommentBox>
  );
};

function CommentList({ comments }) {
  return (
    <div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          commentor={comment.commentor}
          comment={comment.comment}
        />
      ))}
    </div>
  );
}

export default CommentList;
