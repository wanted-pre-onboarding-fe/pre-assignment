import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { horizontalAlign } from '../../styles/sharedStyles';
import { MinimalButton } from '../shared/Button';
import Input from '../shared/Input';

function WriteComment({ onCommentSubmit }) {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    onCommentSubmit(comment);
    setComment('');
  };

  const handleKeyPress = (e) => {
    console.log(e);
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
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
        width="80%"
        borderRadius="5px"
      />
      <MinimalButton type="submit" onClick={handleCommentSubmit}>
        게시
      </MinimalButton>
    </WriteBox>
  );
}

export default WriteComment;

const WriteBox = styled.div`
  width: 100%;
  margin: auto 0;
  padding: 1rem 1rem;
  padding-top: 0;
  ${horizontalAlign}
  align-items: center;
`;
