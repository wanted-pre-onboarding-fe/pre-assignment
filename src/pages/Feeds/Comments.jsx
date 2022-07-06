import React from 'react';
import styled from 'styled-components';
import { MdOutlineSentimentSatisfied } from 'react-icons/md';

function Comments({ comments, refCommentInput, onSubmit }) {
  return (
    <>
      <CommentsContainer>
        {comments.map(({ id, author, comment }) => {
          return (
            <CommentWrapper key={id}>
              <Author>{author}</Author>
              <Comment>{comment}</Comment>
            </CommentWrapper>
          );
        })}
      </CommentsContainer>
      <InputContainer onSubmit={onSubmit}>
        <MdOutlineSentimentSatisfied size="29" />
        <CommentInput
          ref={refCommentInput}
          type="text"
          placeholder="댓글 달기..."
        />
        <SubmitButton onClick={onSubmit}>게시</SubmitButton>
      </InputContainer>
    </>
  );
}

export default Comments;

const CommentsContainer = styled.div`
  padding: 10px;
  margin-bottom: 5px;

  & > div {
    margin-bottom: 10px;
    :last-child {
      margin-bottom: 0px;
    }
  }
`;

const CommentWrapper = styled.div`
  display: flex;
  margin-top: 5px;
`;

const Author = styled.p`
  margin-right: 10px;
  font-weight: 700;
`;

const Comment = styled.p`
  text-overflow: ellipsis;
`;

const InputContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-top: 1px solid #efefef;
`;

const CommentInput = styled.input`
  background-color: transparent;
  color: #262626;
  display: flex;
  flex: 1;
  padding: 12px;
`;

const SubmitButton = styled.button`
  background-color: transparent;
  font-size: 15px;
  font-weight: 800;
  color: deepskyblue;
  cursor: pointer;
`;
