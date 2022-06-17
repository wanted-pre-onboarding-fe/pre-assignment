import React, { useEffect, useState } from 'react';
import GNB from '../../components/common/GNB';
import Feed from '../../components/feed/Feed';

const Feeds = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setFeedList(res);
      });
  }, []);

  return (
    <>
      <GNB />
      {feedList.map((v, i) => (
        <Feed key={i} value={v} />
      ))}
    </>
  );
};

export default Feeds;
