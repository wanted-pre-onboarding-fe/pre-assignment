import React from 'react';
import styled from 'styled-components';

import Feed from '../../components/Feed';

export default function Main() {
  const getImage = (type, user) => {
    return `/feeds/images/${type}/${user}.jpg`;
  };
  return (
    <Wrapper>
      <Feed
        name="daningzzi"
        profileURL={getImage('profile', 'daningzzi')}
        postURL={getImage('post', 'daningzzi')}
        like={439}
      />
      <Feed
        name="ohsevely_28"
        profileURL={getImage('profile', 'ohsevely_28')}
        postURL={getImage('post', 'ohsevely_28')}
        like={325}
      />
      <Feed
        name="iimahni"
        profileURL={getImage('profile', 'iimahni')}
        postURL={getImage('post', 'iimahni')}
        like={235}
      />
    </Wrapper>
  );
}

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
