import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import Login from './Login';
import { Navigate } from 'react-router-dom';
import Feed from '../components/Feed';
const Home = () => {
  const isLogin = window.localStorage.getItem('id');
  if (!isLogin) return <Navigate to="/login" />;

  return (
    <Container>
      <main>
        <Feed img={'https://source.unsplash.com/random/600x500'} />
        <Feed img={'https://source.unsplash.com/random/900x500'} />
        <Feed img={'https://source.unsplash.com/random/700x1080'} />
      </main>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  main {
    width: 100%;
    max-width: 767px;
    margin: 0 auto;
  }
`;

// @media (max-width: 767px) {
//   justify-content: space-between;
// }
