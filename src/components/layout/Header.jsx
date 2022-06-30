import React from 'react';
import styled from 'styled-components';
import {
  faCirclePlus,
  faCompass,
  faHeart,
  faHouse,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { getUserData, removeUserData } from '../../utils/userData';
import Input from '../shared/Input';

function Header() {
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    removeUserData();
    const user = getUserData();
    if (!user) {
      navigate('/');
    }
  };

  return (
    <HeaderWrapper>
      <div>
        <Logo />
        <SearchBar placeholder="검색" />
        <Menu>
          <FontAwesomeIcon icon={faHouse} size={'xl'} />
          <FontAwesomeIcon icon={faCirclePlus} size={'xl'} />
          <FontAwesomeIcon icon={faPaperPlane} size={'xl'} />
          <FontAwesomeIcon icon={faCompass} size={'xl'} />
          <FontAwesomeIcon icon={faHeart} size={'xl'} />
          <a href="#" onClick={logout}>
            로그아웃
          </a>
        </Menu>
      </div>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  width: 100vw;
  height: 45px;
  background-color: white;
  position: sticky;
  top: 0;
  left: 0;
  border-bottom: 1px solid #dbdbdb;
  & * {
    margin: auto;
  }
  & > div {
    line-height: 45px;
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: 320px) and (max-width: 768px) {
    & > div > input {
      display: none;
    }
  }
`;

const Logo = () => (
  <img src="/images/insta_logo.png" alt="logo" height="30px" />
);

const SearchBar = ({ placeholder }) => (
  <Input borderRadius="5px" width="40%" placeholder={placeholder} />
);

const SMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > * {
    margin: 0 5px;
  }
`;
const Menu = ({ children }) => {
  return <SMenu>{children}</SMenu>;
};
