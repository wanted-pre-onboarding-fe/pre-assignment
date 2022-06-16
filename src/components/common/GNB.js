import React from 'react';
import styled from 'styled-components';

const GNB = () => {
  return (
    <StyledGNB>
      <StyledNav>
        <StyledInstaLogo alt="logo" src="instagram_logo.png" />
        <StyledSearch type="text" placeholder="🔍 &nbsp; 검색" />
        <StyledNavIcon>
          <StyledIcon className="fa-solid fa-house"></StyledIcon>
          <StyledIcon className="fa-regular fa-paper-plane"></StyledIcon>
          <StyledIcon className="fa-regular fa-square-plus"></StyledIcon>
          <StyledIcon className="fa-regular fa-compass"></StyledIcon>
          <StyledIcon className="fa-regular fa-heart"></StyledIcon>
          <StyledIcon className="fa-solid fa-circle-user"></StyledIcon>
        </StyledNavIcon>
      </StyledNav>
    </StyledGNB>
  );
};

const StyledGNB = styled.header`
  position: sticky;
  height: 40px;
  border: 1px solid #eaeaea;
  align-items: center;
`;

const StyledNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 1800px;
  padding: 5px;
`;

const StyledInstaLogo = styled.img`
  width: 100px;
`;

const StyledSearch = styled.input`
  width: 200px;
  border-radius: 5px;
  background-color: #efefef;
`;

const StyledNavIcon = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled.i`
  margin: 0 10px;
  font-size: 20px;
`;

export default GNB;
