import React, { useEffect, useRef, useState } from 'react';
import CommentList from './Comment';
import Header from './Header';
import Img from './Img';
import MenuBar from './MenuBar';
import WriteComment from './WriteComment';
import styled from 'styled-components';
import { grayBorder } from '../../styles/sharedStyles';
import { getFeeds } from '../../api/getFeeds';
import Separator from '../Seperator';

function Feeds() {
  const [feeds, setFeeds] = useState([]);
  const [isAllLoaded, setLoaded] = useState(false);
  const loaded = useRef([]);

  useEffect(() => {
    const fetchFeeds = async () => {
      const feeds = await getFeeds();
      if (feeds) {
        setFeeds(feeds);
        loaded.current = new Array(feeds.length).fill(false);
      }
    };
    fetchFeeds();
  }, []);

  const onCommentSubmit = (id, newComment) => {
    const newComments = [...feeds];
    const { id: userId } = JSON.parse(localStorage.getItem('userData'));
    const commentId = newComments.findIndex((comment) => comment.id === id);
    newComments[commentId].comment.push({
      commentor: userId,
      comment: newComment,
      id: new Date().getTime(),
    });
    setFeeds(newComments);
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
        {feeds.map((comment, idx) => {
          const { id, author, img, like, comment: subComments } = comment;
          return (
            <Feed key={id}>
              <Header author={author} />
              <Img imgSrc={img} onLoad={() => handleLoad(idx)} />
              <MenuBar like={like} />
              <CommentList comments={subComments} />
              <Separator></Separator>
              <WriteComment
                onCommentSubmit={(newComment) =>
                  onCommentSubmit(comment.id, newComment)
                }
              />
            </Feed>
          );
        })}
      </Wrapper>
    </>
  );
}

export default Feeds;

const Wrapper = styled.div`
  display: ${(props) => (props.hidden ? 'none' : 'block')};
`;

const Feed = styled.article`
  ${grayBorder}
  width: 100%;
  max-width: 482px;
  margin: 20px 0;
  & > * {
    margin: 15px auto;
  }
`;
