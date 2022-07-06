import React, { useState, useEffect } from 'react';
import GNB from '../../components/GNB';
import FeedContainer from './FeedContainer';

function Feeds() {
  const [feeds, setFeeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      fetch('/data/feeds.json')
        .then((res) => res.json())
        .then((data) => {
          setFeeds(data);
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <GNB />
      <FeedContainer feeds={feeds} isLoading={isLoading} />
    </>
  );
}

export default Feeds;
