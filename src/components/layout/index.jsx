import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Content = styled.main`
  max-width: 1200px;
  width: 100%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Layout({ children }) {
  return <Content>{children}</Content>;
}

export default Layout;
