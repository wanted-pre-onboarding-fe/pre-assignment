import React from 'react';
import styled from 'styled-components';

const GNB = () => {
  return (
    <StyledGNB>
      <StyledNav>
        <StyledImg>
          <StyledInstaLogo alt="logo" src="instagram_logo.png" />
        </StyledImg>
        <StyledSearch type="text" placeholder="&nbsp;🔍 &nbsp; 검색" />
        <StyledNavIcon>
          <StyledIcon className="fa-solid fa-house"></StyledIcon>
          <StyledIcon className="fa-regular fa-paper-plane"></StyledIcon>
          <StyledIcon className="fa-regular fa-square-plus"></StyledIcon>
          <StyledIcon className="fa-regular fa-compass"></StyledIcon>
          <StyledIcon className="fa-regular fa-heart"></StyledIcon>
          <StyledIcon className="fa-solid fa-arrow-right-from-bracket"></StyledIcon>
        </StyledNavIcon>
      </StyledNav>
    </StyledGNB>
  );
};

const StyledGNB = styled.header`
  position: sticky;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 60px;
  border: 1px solid #eaeaea;
  align-items: center;
`;

const StyledNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 1800px;
  padding: 15px;
`;

const StyledImg = styled.div`
  width: 270px;
`;

const StyledInstaLogo = styled.img`
  width: 100px;
`;

const StyledSearch = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 5px;
  background-color: #efefef;
`;

const StyledNavIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;
`;

const StyledIcon = styled.i`
  margin: 0 12px;
  font-size: 22px;
  color: #262626;
`;

export default GNB;
