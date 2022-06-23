import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const FeedHeader = ({ thumbProfile, nickname }) => {
  return (
    <Container>
      <ProfileSection>
        <Thumb url={thumbProfile} />
        <Nickname>{nickname}</Nickname>
      </ProfileSection>
      <FontAwesomeIcon icon={faEllipsisH} />
    </Container>
  );
};

export default FeedHeader;

const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
`;
const ProfileSection = styled.section`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const Thumb = styled.div(
  ({ url }) => `
display: inline-block;
width: 48px;
height: 48px;
border-radius: 50%;
background-repeat: no-repeat;
background-position: center center;
background-size: cover;
background-image: url(${url});
`
);
const Nickname = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
