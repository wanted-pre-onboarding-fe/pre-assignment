import React from 'react';
import styled from 'styled-components';

function Layout({ children }) {
  return <Content>{children}</Content>;
}

export default Layout;

const Content = styled.main`
  max-width: 1200px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    max-width: 100vw;
    min-height: 100vh;
  }
`;
