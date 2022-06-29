import React from 'react';
import Header from '../components/layout/Header';
import Feeds from '../components/feed/Feeds';
import { useState } from 'react';

function Main() {
  return (
    <>
      <Header></Header>
      <Feeds />
    </>
  );
}

export default Main;
