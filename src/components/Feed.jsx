import React from 'react';
import styled from 'styled-components';
import {
  FaCircle,
  FaRegHeart,
  FaRegComment,
  FaRegPaperPlane,
  FaRegSmile,
  FaRegBookmark,
} from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import Comment from './Comment';

const Feeds = ({ img }) => {
  return (
    <Container>
      <div className="feeds_header">
        <div className="profile">
          <FaCircle size={35} />
          <div>nick name</div>
        </div>
        <BsThreeDots size={15} />
      </div>

      <div className="feeds_picture">
        <img src={img} />
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

      <Comment />
      <Comment />

      <div className="feeds_post-comment">
        <FaRegSmile size={20} className="feeds_post-comment_icon" />
        <input />
        <button>게시</button>
      </div>
    </Container>
  );
};

export default Feeds;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.1px solid lightgrey;
  border-radius: 5px;
  margin-bottom: 50px;
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
