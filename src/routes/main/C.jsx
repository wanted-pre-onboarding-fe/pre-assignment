import React from 'react';
import styled from 'styled-components';

export default function C() {
  return <Wrapper>C</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;
