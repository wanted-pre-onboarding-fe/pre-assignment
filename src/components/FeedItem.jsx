import React, { useState } from 'react';

import FeedHeader from './FeedHeader';
import FeedBody from './FeedBody';

import styled from 'styled-components';

const FeedItem = ({
  id,
  thumbProfile,
  nickname,
  imageUrl,
  likes,
  text,
  comments,
  onLoad,
}) => {
  const [commentInput, setCommentInput] = useState('');
  const [commentList, setCommentList] = useState(comments);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setCommentInput(value);
  };

  const handleKeyDownSubmit = (event) => {
    const { type, key, target } = event;

    const isEnterDown = type === 'keydown' && key === 'Enter';

    if (isEnterDown) {
      setCommentList([
        ...commentList,
        {
          id: new Date().getTime(),
          nickname: localStorage.getItem('user-id'),
          text: target.value,
        },
      ]);

      setCommentInput('');
    }
  };

  const handleClickSubmit = () => {
    setCommentList([
      ...commentList,
      {
        id: new Date().getTime(),
        nickname: localStorage.getItem('user-id'),
        text: commentInput,
      },
    ]);

    setCommentInput('');
  };

  return (
    <Container>
      <FeedHeader thumbProfile={thumbProfile} nickname={nickname} />
      <FeedBody
        id={id}
        imageUrl={imageUrl}
        likes={likes}
        test={text}
        comments={commentList}
        commentInput={commentInput}
        onChange={handleChange}
        onKeyDown={handleKeyDownSubmit}
        onClick={handleClickSubmit}
        onLoad={onLoad}
      />
    </Container>
  );
};

export default FeedItem;

const Container = styled.li`
  width: 100%;
  background-color: #fff;
`;
