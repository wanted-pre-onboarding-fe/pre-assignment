import React from 'react';
import Header from '../components/layout/Header';
import Feeds from '../components/feed/Feeds';
import { useState } from 'react';

function Main() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header></Header>
      {!loading && <Feeds setLoading={setLoading}></Feeds>}
    </>
  );
}

export default Main;
