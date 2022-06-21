import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaPlusSquare } from 'react-icons/fa';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname === '/login') return null;

  return (
    <Container>
      <main>
        <div className="nav_logo">Wanted Instagram</div>
        <input placeholder="검색"></input>
        <div className="wiget_wrapper">
          <div>
            <FaHome size={30} />
          </div>
          <div>
            <FaPlusSquare size={30} />
          </div>
          <button
            type="button"
            onClick={() => {
              window.localStorage.clear();
              navigate('/login');
            }}
          >
            로그아웃
          </button>
        </div>
      </main>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  height: 70px;
  border: 0.1px solid grey;
  main {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    @media (max-width: 767px) {
      justify-content: space-between;
    }
    .nav_logo {
      padding-left: 10px;
      font-weight: bold;
      font-size: 30px;
      cursor: pointer;
    }
    input {
      width: 280px;
      height: 50%;
      background-color: lightgrey;
      padding: 5px;
      border-radius: 5px;
      font-weight: bold;
      color: grey;
      @media (max-width: 767px) {
        display: none;
      }
    }
    .wiget_wrapper {
      display: flex;
      padding: 5px;
      justify-content: space-between;
      align-items: center;
      > div {
        margin-right: 20px;
        cursor: pointer;
      }
      button {
        margin: 0 10px;
        border-radius: 5px;
        height: 26.25px;
        font-weight: bold;
        color: grey;
        background-color: lightgrey;
        border: 0.1px solid white;
        cursor: pointer;
        :active {
          color: lightgrey;
          background: white;
        }
      }
    }
  }
`;
