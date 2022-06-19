import React from 'react';
import styled from 'styled-components';
import { GLOBAL_COLOR, GLOBAL_WIDTH } from '../../styles/constants';

const GNB = () => {
  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    window.location.reload();
  };

  return (
    <StyledGNB>
      <StyledNav>
        <StyledImg>
          <StyledInstaLogo alt="logo" src="images/instagram_logo.png" />
        </StyledImg>
        <StyledSearch type="text" placeholder=" 🔍  검색" />
        <StyledNavIcon>
          <StyledIcon className="fa-solid fa-house"></StyledIcon>
          <StyledIcon className="fa-regular fa-heart"></StyledIcon>
          <StyledIcon
            className="fa-solid fa-arrow-right-from-bracket"
            onClick={handleLogout}
          ></StyledIcon>
        </StyledNavIcon>
      </StyledNav>
    </StyledGNB>
  );
};

const StyledGNB = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 60px;
  border: 1px solid ${GLOBAL_COLOR.BORDER};
  background-color: ${GLOBAL_COLOR.WHITE};
  align-items: center;
`;

const StyledNav = styled.div`
  display: flex;
  max-width: ${GLOBAL_WIDTH.MAX_WIDTH};
  width: 100%;
  padding: 15px;
`;

const StyledImg = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const StyledInstaLogo = styled.img`
  width: 100px;
`;

const StyledSearch = styled.input`
  flex: 1;
  height: 30px;
  border-radius: 5px;
  background-color: #efefef;
  @media screen and (max-width: ${GLOBAL_WIDTH.MOBILE_WIDTH}) {
    display: none;
  } ;
`;

const StyledNavIcon = styled.div`
  display: flex;
  justify-content: end;
  flex: 1;
  align-items: center;
`;

const StyledIcon = styled.i`
  margin-left: 20px;
  font-size: 22px;
  color: #262626;
  cursor: pointer;
`;

export default GNB;
