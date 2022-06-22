import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faHome,
  faPaperPlane,
  faPlusSquare,
  faSearch,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const Gnb = () => {
  const handleLogout = () => {
    localStorage.clear();
    location.assign('/');
  };

  return (
    <Container>
      <Inner>
        <Section>
          <Logo>Insta*ram</Logo>
        </Section>
        <SearchSection>
          <Label>
            <FontAwesomeIcon icon={faSearch} />
            <SearchField type="text" placeholder="검색" />
          </Label>
        </SearchSection>
        <MenuSection>
          <FontAwesomeIcon icon={faHome} size="lg" />
          <FontAwesomeIcon icon={faPaperPlane} size="lg" />
          <FontAwesomeIcon icon={faPlusSquare} size="lg" />
          <FontAwesomeIcon icon={faCompass} size="lg" />
          <FontAwesomeIcon icon={faSignOut} size="lg" onClick={handleLogout} />
        </MenuSection>
      </Inner>
    </Container>
  );
};

export default Gnb;

const Container = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #fff;
`;
const Inner = styled.nav`
  max-width: 968px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 0 auto;
  padding: 0 2rem;
`;
const Section = styled.section``;
const Logo = styled.h1`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  line-height: 90px;
`;
const SearchSection = styled.section`
  background-color: lightgray;
  height: 28px;
  padding: 0 4px;
  border-radius: 4px;
  @media (max-width: 575px) {
    display: none;
  }
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const SearchField = styled.input`
  background-color: lightgray;
  width: 200px;
  height: 28px;
`;
const MenuSection = styled.section`
  display: flex;
  gap: 1rem;
`;
