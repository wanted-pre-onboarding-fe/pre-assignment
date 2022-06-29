import React, { useEffect } from 'react';
import CommentList from './Comment';
import Header from './Header';
import Img from './Img';
import MenuBar from './MenuBar';
import WriteComment from './WriteComment';
import styled from 'styled-components';
import { grayBorder } from '../../styles/sharedStyles';
import { useState } from 'react';

const Feed = styled.article`
  ${grayBorder}
  width: 100%;
  max-width: 482px;
  & > * {
    margin: 15px auto;
  }
`;

function Feeds({ setLoading }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getComments = async () => {
      const comments = await (await fetch('/data/feed.json')).json();
      if (comments) setComments(comments);
    };
    getComments();
  }, []);

  const onCommentSubmit = (id, newComment) => {
    const newComments = [...comments];
    const { id: userId } = JSON.parse(localStorage.getItem('userData'));
    const commentId = newComments.findIndex((comment) => comment.id === id);
    newComments[commentId].comment.push({
      commentor: userId,
      comment: newComment,
      id: new Date().getTime(),
    });
    setComments(newComments);
  };

  return (
    <>
      {comments.map((comment) => (
        <Feed key={comment.id.toString()}>
          <Header author={comment.author} />
          <Img imgSrc={comment.img} />
          <MenuBar like={comment.like} />
          <CommentList comments={comment.comment} />
          <WriteComment
            onCommentSubmit={(newComment) =>
              onCommentSubmit(comment.id, newComment)
            }
          />
        </Feed>
      ))}
    </>
  );
}

export default Feeds;
