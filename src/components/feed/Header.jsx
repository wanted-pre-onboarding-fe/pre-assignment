import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListDots } from '@fortawesome/free-solid-svg-icons';
import { horizontalAlign } from '../../styles/sharedStyles';

function Header({ author = 'author' }) {
  return (
    <SHeader>
      <p>{author}</p>
      <FontAwesomeIcon icon={faListDots}></FontAwesomeIcon>
    </SHeader>
  );
}

export default Header;

const SHeader = styled.div`
  ${horizontalAlign}
  width:100%;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dbdbdb;
`;
