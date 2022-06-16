import React from 'react';
import styled from 'styled-components';

import { Outlet, Link } from 'react-router-dom';

import {
  MdHome,
  MdOutlineNearMe,
  MdOutlineAddBox,
  MdOutlineExplore,
  MdFavoriteBorder,
  MdLogout,
} from 'react-icons/md';

import { removeUserEmail, removeUserPassword } from '../utils/userStorage';

export default function Navigation() {
  const onLogoutClick = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      removeUserEmail();
      removeUserPassword();

      location.reload();
    }
  };

  return (
    <>
      <Wrapper>
        <Nav>
          <Logo src="/images/logo.png" />
          <Search placeholder="검색" />
          <IconsWrapper>
            <RouterLink to="/">
              <MdHome size="29" />
            </RouterLink>
            <RouterLink to="/A">
              <MdOutlineNearMe size="29" />
            </RouterLink>
            <RouterLink to="/B">
              <MdOutlineAddBox size="29" />
            </RouterLink>
            <RouterLink to="/C">
              <MdOutlineExplore size="29" />
            </RouterLink>
            <RouterLink to="/D">
              <MdFavoriteBorder size="29" />
            </RouterLink>
            <Button onClick={onLogoutClick}>
              <MdLogout size="29" />
            </Button>
          </IconsWrapper>
        </Nav>
      </Wrapper>
      <Outlet />
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  top: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid lightgray;
  background-color: white;
`;

const Nav = styled.nav`
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

const IconsWrapper = styled.div`
  width: 254px;
  min-width: 254px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RouterLink = styled(Link)``;

const Button = styled.div`
  cursor: pointer;
`;
