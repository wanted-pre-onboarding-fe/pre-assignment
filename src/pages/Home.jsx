import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Feed from '../components/Feed';
import axios from 'axios';
import { useEffect } from 'react';

const Home = () => {
  const isLogin = window.localStorage.getItem('id');
  if (!isLogin) return <Navigate to="/login" />;

  const [feeds, setFeeds] = useState(null);

  useEffect(() => {
    async function getFeeds() {
      const res = await axios.get('/mockFeeds.json');
      setFeeds(res.data);
    }
    getFeeds();
  }, []);

  return (
    <Container>
      <main>
        {feeds?.map((feed, key) => {
          return <Feed feed={feed} key={key} />;
        })}
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
