import React from 'react';
import styled from 'styled-components';

const Comment = () => {
  return (
    <Container>
      <div>nick name</div>
      <div>안녕하세요 nick name 입니다</div>
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  display: flex;
  padding: 5px;
  gap: 20px;
  align-items: center;
  > div:nth-child(1) {
    font-size: 16px;
    font-weight: bold;
  }
  > div:nth-child(2) {
    font-size: 14px;
  }
`;
