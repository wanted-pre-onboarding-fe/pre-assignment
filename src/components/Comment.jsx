import React from 'react';
import styled from 'styled-components';

export default function Comment({ text }) {
  const name = 'msw';
  return (
    <Wrapper>
      <NameBox>{name}</NameBox>
      <TextBox>{text}</TextBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  word-break: break-all;
  display: flex;
`;

const NameBox = styled.span`
  font-weight: 600;
  margin-right: 10px;
`;

const TextBox = styled.span`
  display: flex;
  flex: 1;
`;
