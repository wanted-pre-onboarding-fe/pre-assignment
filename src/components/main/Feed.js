import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';
import Comment from './Comment';
import { GLOBAL_COLOR, GLOBAL_WIDTH } from '../../styles/constants';

const Feed = ({ value }) => {
  const { img, userId, comments } = value;
  const [isLoading, setIsLoading] = useState(true);
  const [newComment, setNewComment] = useState('');
  const [commentList, setCommentList] = useState(comments);

  useEffect(() => {
    const imageObject = new Image();
    imageObject.src = img;
    imageObject.onload = () => {
      setIsLoading(false);
    };
  }, [img]);

  const handleNewComment = (e) => {
    setNewComment(e.target.value);
  };

  const addComment = () => {
    if (newComment !== '') {
      setCommentList([
        ...commentList,
        {
          id: Math.random() * 100,
          userId: 'test_user',
          comment: newComment,
        },
      ]);
      setNewComment('');
    }
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      addComment();
    }
  };

  return (
    <>
      {!isLoading && (
        <StyledFeeds>
          <StyledArticle>
            <StyldeBtween>
              <StyledUserId>
                <StyledUserImg alt="img" src="logo192.png" />
                <StyledArticleId>{userId}</StyledArticleId>
              </StyledUserId>
              <BsThreeDots />
            </StyldeBtween>
            <StyledFeedImg alt="feed" src={img} />
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
            <StyledCommentWrapper>
              {commentList.map((v, i) => (
                <Comment key={i} commentInfo={v} />
              ))}
            </StyledCommentWrapper>
            <StyledAddCommentWrapper>
              <StyledAddComment>
                <i className="fa-regular fa-face-smile"></i>
                <StyledCommentInput
                  value={newComment}
                  placeholder="댓글 달기..."
                  onChange={handleNewComment}
                  onKeyUp={handleEnter}
                />
                <StyledButton onClick={addComment}>게시</StyledButton>
              </StyledAddComment>
            </StyledAddCommentWrapper>
          </StyledArticle>
        </StyledFeeds>
      )}
    </>
  );
};

const StyledFeeds = styled.section`
  width: 100vw;
  padding: 10px 0;
  background-color: ${GLOBAL_COLOR.BACKGROUND};
  @media screen and (max-width: ${GLOBAL_WIDTH.MOBILE_WIDTH}) {
    font-size: 12px;
  } ;
`;

const StyledArticle = styled.div`
  max-width: 472px;
  border: 1px solid ${GLOBAL_COLOR.GRAY_2};
  border-radius: 5px;
  margin: 0 auto;
  background-color: ${GLOBAL_COLOR.WHITE};
`;

const StyldeBtween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

const StyledUserId = styled.div`
  display: flex;
  align-items: center;
`;

const StyledUserImg = styled.img`
  width: 30px;
  border: 1px solid ${GLOBAL_COLOR.GRAY_2};
  border-radius: 50px;
  margin-right: 10px;
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
  margin: 10px;
`;

const StyledIcons = styled.div`
  display: flex;
  cursor: pointer;
`;

const StyledIcon = styled.i`
  margin-right: 7px;
  font-size: 20px;
`;

const StyledBookmark = styled.div`
  cursor: pointer;
`;

const StyledLikeArticle = styled.div`
  display: flex;
  margin: 10px;
`;

const StyledLike = styled.div`
  font-weight: bold;
`;

const StyledLikeCount = styled.div`
  margin-left: 5px;
  font-weight: bold;
`;

const StyledCommentWrapper = styled.div`
  margin: 5px 10px 0 10px;
`;

const StyledAddCommentWrapper = styled.div`
  margin-top: 20px;
  border-top: 1px solid ${GLOBAL_COLOR.GRAY_2};
`;

const StyledAddComment = styled.div`
  display: flex;
  margin: 10px 10px;
  align-items: center;
  i {
    font-size: 20px;
  }
`;

const StyledCommentInput = styled.input`
  flex: 1;
  margin-left: 5px;
`;

const StyledButton = styled.button`
  color: #2d90d1;
  font-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  cursor: pointer;
  @media screen and (max-width: ${GLOBAL_WIDTH.MOBILE_WIDTH}) {
    flex: 0.2;
  } ;
`;

export default Feed;
