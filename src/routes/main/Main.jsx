import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Feed from '../../components/Feed';

import { getData } from '../../utils/api';

export default function Main() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const json = await getData(`${process.env.PUBLIC_URL}/feeds/data.json`);
      setIsLoading(false);
      if (json !== null) {
        setData(json);
      }
    }
    fetchData();
  }, []);

  const addComment = (index, name, comment) => {
    setData((prev) => {
      const copy = [...prev];
      for (const item of copy) {
        if (item.index === index) {
          item.comments.push({ name, comment });
        }
      }
      return copy;
    });
  };

  return (
    <>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <Wrapper>
          {data.map((item) => {
            return (
              <Feed
                key={item.index}
                index={item.index}
                name={item.name}
                profileURL={item.profileURL}
                postURL={item.postURL}
                like={item.like}
                comments={item.comments}
                addComment={addComment}
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
