import React from 'react';
import styled from 'styled-components';
import { LOGO_URL } from '../utils/constants';
import {
  MdHome,
  MdOutlineNearMe,
  MdOutlineAddBox,
  MdOutlineExplore,
  MdFavoriteBorder,
  MdLogout,
} from 'react-icons/md';

function GNB() {
  const mockLogout = () => {
    alert('mock logout');
  };

  return (
    <Container>
      <Navigation>
        <Logo src={LOGO_URL} width="103px" height="39px" />
        <Search placeholder="검색" />
        <IconSection>
          <Icon>
            <MdHome size="32" />
          </Icon>
          <Icon>
            <MdOutlineNearMe size="28" />
          </Icon>
          <Icon>
            <MdOutlineAddBox size="28" />
          </Icon>
          <Icon>
            <MdOutlineExplore size="28" />
          </Icon>
          <Icon>
            <MdFavoriteBorder size="28" />
          </Icon>
          <Icon onClick={mockLogout}>
            <MdLogout size="28" />
          </Icon>
        </IconSection>
      </Navigation>
    </Container>
  );
}

export default GNB;

const Container = styled.div`
  width: 100%;
  height: 60px;
  top: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid lightgray;
  background-color: white;
`;

const Navigation = styled.nav`
  width: 975px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 400px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const Logo = styled.img`
  height: 50px;
  position: relative;
  top: 3px;
`;

const Search = styled.input`
  width: 265px;
  height: 35px;
  background-color: #efefef;
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
  @media (max-width: 720px) {
    max-width: 265px;
    width: 50%;
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (max-width: 620px) {
    display: none;
  }
`;

const IconSection = styled.section`
  width: 254px;
  min-width: 254px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
