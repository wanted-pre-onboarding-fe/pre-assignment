import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';
import Comment from './Comment';

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
          comment: newComment,
          userId: 'test_user',
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
            {commentList.map((v, i) => (
              <Comment key={i} commentInfo={v} />
            ))}
            <StyledAddComment>
              <StyledInput>
                <i className="fa-regular fa-face-smile"></i>
                <StyledCommentInput
                  value={newComment}
                  placeholder="댓글 달기..."
                  onChange={handleNewComment}
                  onKeyUp={handleEnter}
                />
              </StyledInput>
              <StyledButton onClick={addComment}>게시</StyledButton>
            </StyledAddComment>
          </StyledArticle>
        </StyledFeeds>
      )}
    </>
  );
};

const StyledFeeds = styled.section`
  width: 100vw;
  padding: 20px;
  background-color: #fafafa;
`;

const StyledArticle = styled.div`
  max-width: 472px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  margin: 0 auto;
  background-color: #ffffff;
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
  margin: 0 3px;
  :hover {
    cursor: pointer;
  }
`;

const StyledIcon = styled.i`
  font-size: 20px;
  margin: 7px;
`;

const StyledBookmark = styled.div`
  :hover {
    cursor: pointer;
  }
`;

const StyledLikeArticle = styled.div`
  display: flex;
  margin: 10px 0 10px 10px;
`;

const StyledLike = styled.div`
  font-weight: bold;
`;

const StyledLikeCount = styled.div`
  margin-left: 5px;
  font-weight: bold;
`;

const StyledAddComment = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin-top: 20px;
  border-top: 1px solid #dbdbdb;
  align-items: center;
`;

const StyledInput = styled.div`
  display: flex;
  margin-left: 10px;
  font-size: 20px;
  align-items: center;
`;

const StyledCommentInput = styled.input`
  margin-left: 7px;
`;

const StyledButton = styled.button`
  margin-right: 7px;
  color: #2d90d1;
  font-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  :hover {
    cursor: pointer;
  }
`;

export default Feed;
