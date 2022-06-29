import React, { useEffect, useRef, useState } from 'react';
import CommentList from './Comment';
import Header from './Header';
import Img from './Img';
import MenuBar from './MenuBar';
import WriteComment from './WriteComment';
import styled from 'styled-components';
import { grayBorder } from '../../styles/sharedStyles';

const Wrapper = styled.div`
  display: ${(props) => (props.hidden ? 'none' : 'block')};
`;

const Feed = styled.article`
  ${grayBorder}
  width: 100%;
  max-width: 482px;
  & > * {
    margin: 15px auto;
  }
`;

function Feeds() {
  const [comments, setComments] = useState([]);
  const [isAllLoaded, setLoaded] = useState(false);
  const loaded = useRef([]);

  useEffect(() => {
    const getComments = async () => {
      const comments = await (await fetch('/data/feed.json')).json();
      if (comments) {
        setComments(comments);
        loaded.current = new Array(comments.length).fill(false);
      }
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

  const handleLoad = (idx) => {
    loaded.current[idx] = true;
    if (loaded.current.every((loaded) => loaded)) {
      setTimeout(() => {
        setLoaded(true);
      }, 1000);
    } //모든 이미지의 로딩이 완료됐다고 판단되면 1초후에 피드들을 렌더링
  };

  return (
    <>
      {!isAllLoaded && <div>Loading...</div>}
      <Wrapper hidden={!isAllLoaded}>
        {comments.map((comment, idx) => (
          <Feed key={comment.id.toString()}>
            <Header author={comment.author} />
            <Img imgSrc={comment.img} onLoad={() => handleLoad(idx)} />
            <MenuBar like={comment.like} />
            <CommentList comments={comment.comment} />
            <WriteComment
              onCommentSubmit={(newComment) =>
                onCommentSubmit(comment.id, newComment)
              }
            />
          </Feed>
        ))}
      </Wrapper>
    </>
  );
}

export default Feeds;
