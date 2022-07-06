import React from 'react';
import Comments from './Comments';
import styled from 'styled-components';
import {
  MdOutlineNearMe,
  MdFavoriteBorder,
  MdChatBubbleOutline,
  MdBookmarkBorder,
} from 'react-icons/md';

function FeedBody({
  postImage,
  like,
  comments,
  refCommentInput,
  onSubmit,
  onLoad,
}) {
  return (
    <>
      <PostSection>
        <PostImage src={postImage} alt="post" onLoad={() => onLoad(true)} />
      </PostSection>
      <IconsAndLike>
        <Icons>
          <LeftSide>
            <MdFavoriteBorder size="29" />
            <MdChatBubbleOutline size="29" />
            <MdOutlineNearMe size="29" />
          </LeftSide>
          <RightSide>
            <MdBookmarkBorder size="29" />
          </RightSide>
        </Icons>
        <Like>좋아요 {like}개</Like>
      </IconsAndLike>
      <Comments
        comments={comments}
        refCommentInput={refCommentInput}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default FeedBody;

const PostSection = styled.section``;

const PostImage = styled.img`
  width: 100%;
`;

const IconsAndLike = styled.div``;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  width: 110px;
  display: flex;
  justify-content: space-between;
`;

const RightSide = styled.div``;

const Like = styled.div`
  padding: 10px;
  font-size: 14px;
  font-weight: 800;
`;
