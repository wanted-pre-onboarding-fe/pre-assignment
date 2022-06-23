import React, { useState, useEffect } from 'react';

import FeedItem from './FeedItem';

import styled from 'styled-components';

const Feeds = () => {
  const [feeds, setFeeds] = useState([]);
  const [imageStates, setImageStates] = useState([]);

  const handleOnLoad = (flag) => {
    setImageStates([...imageStates, flag]);
  };

  const isReady =
    imageStates.filter((element) => element === true).length === feeds.length &&
    imageStates.length !== 0;

  useEffect(() => {
    fetch('./data/feeds.json')
      .then((res) => res.json())
      .then((data) => setFeeds(data));
  }, []);

  return (
    <Container>
      <Inner isReady={isReady}>
        <UnorderedList>
          {feeds.map(
            ({
              id,
              thumbProfile,
              nickname,
              imageUrl,
              likes,
              text,
              comments,
            }) => {
              return (
                <FeedItem
                  key={id}
                  thumbProfile={thumbProfile}
                  nickname={nickname}
                  imageUrl={imageUrl}
                  likes={likes}
                  text={text}
                  comments={comments}
                  onLoad={handleOnLoad}
                />
              );
            }
          )}
        </UnorderedList>
      </Inner>
    </Container>
  );
};

export default Feeds;

const Container = styled.div`
  width: 100%;
  background-color: lightgray;
`;
const Inner = styled.main(
  ({ isReady }) => `
max-width: 575px;
display: flex;
${isReady ? '' : 'visibility: hidden;'}
justify-content: space-between;
align-items: center;
flex-direction: row;
margin: 0 auto;
padding: 0 2rem;
`
);
const UnorderedList = styled.ul`
  width: 100%;
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
