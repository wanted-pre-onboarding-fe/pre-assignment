import React from 'react';

import FeatureSection from './FeatureSection';
import TextSection from './TextSection';
import CommentsSection from './CommentsSection';
import ReactionSection from './ReactionSection';

import styled from 'styled-components';

const FeedBody = ({
  id,
  imageUrl,
  likes,
  nickname,
  text,
  comments,
  commentInput,
  onChange,
  onKeyDown,
  onClick,
  onLoad,
}) => {
  return (
    <Container>
      <MainImage src={imageUrl} onLoad={() => onLoad(true)} />
      <FeatureSection />
      <LikeSection>좋아요 {likes}개</LikeSection>
      <TextSection nickname={nickname} text={text} />
      <CommentsSection comments={comments} />
      <ReactionSection
        id={id}
        commentInput={commentInput}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onClick={onClick}
      />
    </Container>
  );
};

export default FeedBody;

const Container = styled.section``;
const MainImage = styled.img`
  width: 100%;
`;
const LikeSection = styled.section`
  padding: 24px 16px;
`;
