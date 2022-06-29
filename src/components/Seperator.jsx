import React from 'react';
import styled from 'styled-components';

const SSeparator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 100%;
    height: 1px;
    background-color: #dbdbdb;
  }
  p {
    width: 5rem;
    text-align: center;
    margin: 0 10px;
    font-weight: 600;
    font-size: 12px;
    color: #8e8e8e;
  }
`;

function Separator() {
  return (
    <SSeparator>
      <div />
      <p>또는</p>
      <div />
    </SSeparator>
  );
}
export default Separator;
