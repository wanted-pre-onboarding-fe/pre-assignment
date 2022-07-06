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
  width: 100%;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    :last-child {
      margin-bottom: 20px;
    }
  }
`;
