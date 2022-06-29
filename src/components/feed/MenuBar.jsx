import React from 'react';
import styled from 'styled-components';
import { horizontalAlign } from '../../styles/sharedStyles';

const Wrapper = styled.div`
  & > * {
    padding: 10px 5px;
  }
`;

const Menu = styled.div`
  ${horizontalAlign}
  & > div {
    ${horizontalAlign}
    & > * {
      margin-right: 5px;
    }
  }
`;

function MenuBar({ like = 7 }) {
  return (
    <Wrapper>
      <Menu>
        <div>
          <p>하트</p>
          <p>코멘트</p>
          <p>공유</p>
        </div>
        <p>책갈피</p>
      </Menu>
      <div>좋아요 {like}개</div>
    </Wrapper>
  );
}

export default MenuBar;
