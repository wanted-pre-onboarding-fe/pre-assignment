import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { horizontalAlign } from '../../styles/sharedStyles';
import debounce from '../../utils/debounce';
import { useCallback } from 'react';

const WriteBox = styled.div`
  padding-top: 15px;
  border-top: 1px solid #dbdbdb;
  height: 2rem;
  width: 100%;
  ${horizontalAlign}
  align-items: center;
`;

const Input = styled.input`
  background-color: #ededed;
  width: 80%;
  height: 100%;
  padding: 10px 5px;
  line-height: 2rem;
`;

function WriteComment({ onCommentSubmit }) {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = debounce((e) => {
    e?.preventDefault();
    onCommentSubmit(comment);
    setComment('');
  }, 50);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommentSubmit(e);
    }
  };

  return (
    <WriteBox>
      <FontAwesomeIcon icon={faSmile} size={'xl'} />
      <Input
        type="text"
        value={comment}
        onChange={handleCommentChange}
        onKeyDown={handleKeyPress}
        placeholder="댓글달기..."
      />
      <button type="submit" onClick={handleCommentSubmit}>
        게시
      </button>
    </WriteBox>
  );
}

export default WriteComment;
