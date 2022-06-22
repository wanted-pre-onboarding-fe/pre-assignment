import React from 'react';

import Gnb from '../components/Gnb';

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
      <DummyContent />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const DummyContent = styled.div`
  height: 200vh;
  background-color: lightblue;
`;
