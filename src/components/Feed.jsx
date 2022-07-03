import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import { useState, useRef } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import {
  FaCircle,
  FaRegHeart,
  FaRegComment,
  FaRegPaperPlane,
  FaRegSmile,
  FaRegBookmark,
} from 'react-icons/fa';

const Feed = ({ feed }) => {
  const { nickName, image, comments } = feed;
  const [commentList, setCommentList] = useState(comments);
  const inputRef = useRef('');
  const myId = window.localStorage.getItem('id').split('@')[0].toString();
  const [loading, setLoading] = useState(true);

  function PostComment() {
    setCommentList([
      ...commentList,
      { nickName: myId, content: inputRef.currnet },
    ]);
    inputRef.current.value = '';
    inputRef.current.focus();
  }

  return (
    <Container isLoaded={loading}>
      <div className="feeds_header">
        <div className="profile">
          <FaCircle size={35} />
          <div>{nickName}</div>
        </div>
        <BsThreeDots size={15} />
      </div>

      <div className="feeds_picture">
        <img src={image} onLoad={() => setLoading(false)} />
      </div>

      <div className="feeds_widget">
        <div className="icons">
          <FaRegHeart size={20} />
          <FaRegComment size={20} />
          <FaRegPaperPlane size={20} />
        </div>
        <FaRegBookmark size={20} />
      </div>

      <div className="feeds_like">좋아요 0 개 </div>

      {commentList?.map((comment, key) => {
        return <Comment comment={comment} key={key} />;
      })}

      <div className="feeds_post-comment">
        <FaRegSmile size={20} className="feeds_post-comment_icon" />
        <input
          ref={inputRef}
          onChange={(e) => (inputRef.currnet = e.target.value)}
          onKeyPress={(e) => {
            if (e.target === 'Enter') {
              PostComment();
            }
          }}
        />
        <button onClick={PostComment}>게시</button>
      </div>
    </Container>
  );
};

export default Feed;

const Container = styled.div`
  display: ${(props) => (props.isLoaded ? 'none' : 'flex')};
  flex-direction: column;
  border: 0.1px solid lightgrey;
  border-radius: 5px;
  margin-top: 50px;
  > div,
  input {
    width: 100%;
    :not(:nth-child(2)) {
      padding: 5px;
    }
  }

  .feeds_header {
    display: flex;
    padding: 5px;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    .profile {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  .feeds_picture {
    display: flex;
    justify-content: center;
    margin: 5px 0;
    img {
      display: block;
      max-width: 100%;
      height: auto;
      width: auto;
      @media (max-width: 767px) {
        width: 100%;
      }
    }
  }

  .feeds_widget {
    display: flex;
    justify-content: space-between;
    .icons {
      display: flex;
      gap: 10px;
    }
  }

  .feeds_like {
    margin: 10px 0px 20px 0px;
  }

  .feeds_post-comment {
    display: flex;
    align-items: center;
    border-top: 0.1px solid lightgrey;
    input {
      resize: none;
      padding: 5px 0px 5px 20px;
      border: 0;
    }
    button {
      width: 50px;
      background: none;
      font-weight: bold;
      color: skyblue;
      cursor: pointer;
      :active {
        color: grey;
      }
    }
  }
`;
