import React from 'react';
import styled from 'styled-components';
import GNB from '../../components/common/GNB';
import { BsThreeDots } from 'react-icons/bs';

const Feeds = () => {
  return (
    <>
      <GNB />
      <StyledFeeds>
        <StyledArticle>
          <StyldeBtween>
            <StyledUserId>
              <StyledUserImg alt="img" src="logo192.png" />
              <StyledArticleId>ID</StyledArticleId>
            </StyledUserId>
            <BsThreeDots />
          </StyldeBtween>
          <StyledFeedImg
            alt="feed"
            src="https://source.unsplash.com/random/600x500"
          />
          <StyledIconArticle>
            <StyledIcons>
              <StyledIcon className="fa-regular fa-heart"></StyledIcon>
              <StyledIcon className="fa-regular fa-comment-dots"></StyledIcon>
              <StyledIcon className="fa-regular fa-paper-plane"></StyledIcon>
            </StyledIcons>
            <StyledBookmark>
              <StyledIcon className="fa-regular fa-bookmark"></StyledIcon>
            </StyledBookmark>
          </StyledIconArticle>
          <StyledLikeArticle>
            <StyledLike>좋아요</StyledLike>
            <StyledLikeCount>0개</StyledLikeCount>
          </StyledLikeArticle>
          <StyledCommentSection>
            <StyledCommentId>id</StyledCommentId>
            <StyledComment>안녕하세요</StyledComment>
          </StyledCommentSection>
        </StyledArticle>
      </StyledFeeds>
    </>
  );
};

const StyledFeeds = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
`;

const StyledArticle = styled.div`
  max-width: 472px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  margin: 0 auto;
`;

const StyldeBtween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
`;

const StyledUserId = styled.div`
  display: flex;
  align-items: center;
`;

const StyledUserImg = styled.img`
  width: 30px;
  border: 1px solid #dbdbdb;
  border-radius: 50px;
  margin: 10px;
`;

const StyledArticleId = styled.div`
  display: flex;
`;

const StyledFeedImg = styled.img`
  width: 100%;
`;

const StyledIconArticle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledIcons = styled.div`
  display: flex;
`;

const StyledIcon = styled.i`
  font-size: 20px;
  margin: 7px;
`;

const StyledBookmark = styled.div``;

const StyledLikeArticle = styled.div`
  display: flex;
  margin: 10px 0 10px 7px;
`;

const StyledLike = styled.div`
  font-weight: bold;
`;

const StyledLikeCount = styled.div`
  margin-left: 5px;
  font-weight: bold;
`;

const StyledCommentSection = styled.div`
  display: flex;
  margin: 30px 0 0 7px;
`;

const StyledCommentId = styled.div`
  font-weight: bold;
`;

const StyledComment = styled.div`
  margin-left: 5px;
`;

export default Feeds;
