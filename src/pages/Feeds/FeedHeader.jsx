import React from 'react';
import styled from 'styled-components';
import { MdMoreHoriz } from 'react-icons/md';

function FeedHeader({ profileImage, author }) {
  console.log(profileImage, author);
  return (
    <Container>
      <AuthorImage src={profileImage} />
      <Author>{author}</Author>
      <MdMoreHoriz size="24" />
    </Container>
  );
}

export default FeedHeader;

const Container = styled.section`
  width: 100%;
  height: 57px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;

const AuthorImage = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 17px;
`;

const Author = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  padding: 15px;
  font-size: 14px;
  font-weight: 800;
  margin-top: -5px;
`;
