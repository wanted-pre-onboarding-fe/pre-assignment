import React from 'react';

import Gnb from '../components/Gnb';
import Feeds from '../components/Feeds';

import styled from 'styled-components';

const Main = () => {
  const isNotLoggedin = !(
    localStorage.getItem('user-id') && localStorage.getItem('user-password')
  );

  if (isNotLoggedin) {
    location.assign('/');
  }

  return (
    <Container>
      <Gnb />
      <Feeds />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
