import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faCommentDots,
  faHeart,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';

import styled from 'styled-components';

const FeatureSection = () => {
  return (
    <Container>
      <LeftSection>
        <FontAwesomeIcon icon={faHeart} size="xl" />
        <FontAwesomeIcon icon={faCommentDots} size="xl" />
        <FontAwesomeIcon icon={faPaperPlane} size="xl" />
      </LeftSection>
      <FontAwesomeIcon icon={faBookmark} size="xl" />
    </Container>
  );
};

export default FeatureSection;

const Container = styled.section`
  padding: 4px 16px;
  display: flex;
  justify-content: space-between;
`;
const LeftSection = styled.section`
  display: flex;
  gap: 12px;
`;
