import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import Login from './Login';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const isLogin = window.localStorage.getItem('id');
  if (!isLogin) return <Navigate to="/login" />;

  return <Container>Home</Container>;
};

export default Home;

const Container = styled.div``;
