import React from 'react';
import styled from 'styled-components';
import Feed from './Feed';

function FeedContainer({ feeds, isLoading }) {
  return (
    <Container isLoading={isLoading}>
      {feeds.map((feed) => {
        return <Feed key={feed.id} feed={feed} />;
      })}
    </Container>
  );
}

export default FeedContainer;

const Container = styled.div`
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
