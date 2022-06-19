import React, { useEffect, useState } from 'react';
import { getFeedsData } from '../../api/api';
import GNB from '../../components/common/GNB';
import Feed from '../../components/main/Feed';

const Main = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    getFeedsData().then((res) => setFeedList(res));
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

export default Main;
