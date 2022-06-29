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

const SHeader = styled.header`
  width: 100vw;
  height: 60px;
  background-color: white;
  position: sticky;
  top: 0px;

  border-bottom: 1px solid #dbdbdb;
  & > div {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
`;

const Logo = () => <img src="/images/insta_logo.png" alt="logo" />;

const SearchBar = styled.input.attrs({ type: 'text' })`
  background-color: #dbdbdb;
  margin: 5px 0;
  padding: 0 2rem;
  border-radius: 10px;
  @media (max-width: 480px) {
    display: none;
  }
`;

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

function Header() {
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('userData');
    const user = localStorage.getItem('userData');
    if (!user) {
      navigate('/');
    }
  };
  return (
    <SHeader>
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
    </SHeader>
  );
}

export default Header;
