import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Feed from '../../components/Feed';

import { getData } from '../../utils/api';

export default function Main() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const json = await getData('/feeds/data.json');
      setIsLoading(false);
      if (json !== null) {
        setData(json);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <Wrapper>
          {data.map((d) => {
            return (
              <Feed
                key={d.name}
                name={d.name}
                profileURL={d.profileURL}
                postURL={d.postURL}
                like={d.like}
                comments={d.comments}
              />
            );
          })}
        </Wrapper>
      )}
    </>
  );
}

const Loader = styled.div`
  width: 100%;
  height: 70vh;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  font-weight: 800;
`;

const Wrapper = styled.main`
  width: 100%;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    :last-child {
      margin-bottom: 20px;
    }
  }
`;
