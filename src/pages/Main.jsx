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
  /* 
  * 미디어쿼리는 별도 지시 사항이 없어서 브레이크포인트만 잡아둠
  */
  @media (max-width: 320px) {
  }
  @media (max-width: 375px) {
  }
  @media (max-width: 425px;) {
  }
  @media (max-width: 768px;) {
  }
  @media (max-width: 1024px;) {
  }
  @media (max-width: 1440px;) {
  }
  @media (max-width: 2560px;) {
  }
`;
