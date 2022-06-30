import {
  faBookmark,
  faComment,
  faHeart,
  faShare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { horizontalAlign } from '../../styles/sharedStyles';

function MenuBar({ like = 7 }) {
  return (
    <Wrapper>
      <Menu>
        <div>
          <FontAwesomeIcon icon={faHeart} size="lg" />
          <FontAwesomeIcon icon={faComment} size="lg" />
          <FontAwesomeIcon icon={faShare} size="lg" />
        </div>
        <FontAwesomeIcon icon={faBookmark} size="lg" />
      </Menu>
      <div>좋아요 {like}개</div>
    </Wrapper>
  );
}

export default MenuBar;

const Wrapper = styled.div`
  padding: 1rem 1rem;
`;

const Menu = styled.div`
  ${horizontalAlign}
  & > div {
    height: 2rem;
    ${horizontalAlign}
    & > * {
      margin-right: 5px;
    }
  }
`;
