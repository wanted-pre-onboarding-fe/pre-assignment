import React, { useRef, useState, useEffect } from 'react';
import FeedHeader from './FeedHeader';
import FeedBody from './FeedBody';
import styled from 'styled-components';

function Feed({ feed }) {
  const {
    profileImage,
    author,
    postImage,
    like,
    comments: defaultComments,
  } = feed;
  const commentInput = useRef(null);
  const [comments, setComments] = useState(defaultComments);
  const [isImageReady, setIsImageReady] = useState(false);

  useEffect(() => {
    commentInput.current.value = '';
  }, [comments]);

  const handleAddComment = (event) => {
    event.preventDefault();
    if (commentInput.current.value === '') return;
    setComments((prev) => [
      ...prev,
      {
        id: Date.now(),
        author: '스토리지에 저장된 이메일로 교체',
        comment: commentInput.current.value,
      },
    ]);
  };

  return (
    <Container isImageReady={isImageReady}>
      <FeedHeader profileImage={profileImage} author={author} />
      <FeedBody
        postImage={postImage}
        like={like}
        comments={comments}
        refCommentInput={commentInput}
        onSubmit={handleAddComment}
        onLoad={setIsImageReady}
      />
    </Container>
  );
}

export default Feed;

const Container = styled.div`
  display: ${({ isImageReady }) => (isImageReady ? 'block' : 'none')};
  max-width: 550px;
  min-width: 470px;
  width: 40%;
  margin-top: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  @media (max-width: 499px) {
    min-width: 0px;
    width: 95%;
  }
`;
