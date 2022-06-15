import React from 'react';
import styled from 'styled-components';

import { Outlet } from 'react-router';

export default function Navigation() {
  return (
    <>
      <Contianer></Contianer>
      <Outlet />
    </>
  );
}

const Contianer = styled.div`
  width: 100vw;
  height: 30vh;
  background-color: lightgray;
`;
