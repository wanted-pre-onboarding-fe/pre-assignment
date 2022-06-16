import React, { useState } from 'react';
import styled from 'styled-components';

import {
  MdMoreHoriz,
  MdOutlineNearMe,
  MdFavoriteBorder,
  MdChatBubbleOutline,
  MdBookmarkBorder,
  MdOutlineSentimentSatisfied,
} from 'react-icons/md';

import Comment from './Comment';

export default function Feed({ name, profileURL, postURL, like, comments }) {
  const [comment, setComment] = useState('');
  const onCommentChange = (e) => {
    const {
      currentTarget: { value },
    } = e;
    setComment(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!comment) {
      return;
    }
  };

  const [isLoading, setLoading] = useState(true);
  if (isLoading)
    return <ImageLoader src={postURL} onLoad={() => setLoading(false)} />;

  return (
    <Wrapper>
      <UserBox>
        <UserImage src={profileURL} />
        <UserName>{name}</UserName>
        <MdMoreHoriz size="24" />
      </UserBox>
      <PostBox>
        <PostImageBox>
          <PostImage src={postURL} />
        </PostImageBox>
        <PostTextBox>
          <PostIconBox>
            <LeftIconBox>
              <MdFavoriteBorder size="29" />
              <MdChatBubbleOutline size="29" />
              <MdOutlineNearMe size="29" />
            </LeftIconBox>
            <RightIconBox>
              <MdBookmarkBorder size="29" />
            </RightIconBox>
          </PostIconBox>
          <LikeBox>{`좋아요 ${like}개`}</LikeBox>
        </PostTextBox>
      </PostBox>
      <CommentBox>
        <Comment text="안녕?" />
        <Comment text="asdasdasasdasdasasdasdasasdasdasasdasdasasdasdasasdasdasasdasdas" />
        <Comment text="asdasdasasdasdasasdasdasasdasdasasdasdasasdasdasasdasdasasdasdas" />
      </CommentBox>
      <InputBox onSubmit={onSubmit}>
        <MdOutlineSentimentSatisfied size="29" />
        <CommentInput onChange={onCommentChange} placeholder="댓글 달기..." />
        <SubmitButton isReady={comment.length}>게시</SubmitButton>
      </InputBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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

const UserBox = styled.div`
  width: 100%;
  height: 57px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;

const UserImage = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 17px;
`;

const UserName = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  padding: 15px;
  font-size: 14px;
  font-weight: 800;
  margin-top: -5px;
`;

const PostBox = styled.div``;

const PostImageBox = styled.div``;

const ImageLoader = styled.img`
  display: none;
`;

const PostImage = styled.img`
  width: 100%;
`;

const PostTextBox = styled.div``;

const PostIconBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

const LeftIconBox = styled.div`
  width: 110px;
  display: flex;
  justify-content: space-between;
`;

const RightIconBox = styled.div``;

const LikeBox = styled.div`
  padding: 10px;
  font-size: 14px;
  font-weight: 800;
`;

const CommentBox = styled.div`
  padding: 10px;
  margin-bottom: 5px;

  & > div {
    margin-bottom: 10px;
    :last-child {
      margin-bottom: 0px;
    }
  }
`;

const InputBox = styled.form`
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
  color: ${(props) => (props.isReady ? '#0094f6' : '#c5e7fd')};
`;
