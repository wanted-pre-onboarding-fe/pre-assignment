import React from 'react';
import styled from 'styled-components';
import GNB from '../../components/GNB';

function Feeds() {
  return (
    <Container>
      <GNB />
    </Container>
  );
}

export default Feeds;

const Container = styled.div`
  height: 200vh;
  background-image: linear-gradient(red, yellow, green);
`;
