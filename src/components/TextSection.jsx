import React from 'react';

import styled from 'styled-components';

const TextSection = ({ nickname, text }) => {
  return (
    <Container>
      <Nickname>{nickname}</Nickname>
      <Text>{text}</Text>
    </Container>
  );
};

export default TextSection;

const Container = styled.section`
  padding: 0 16px;
`;
const Nickname = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
const Text = styled.p`
  padding: 12px 0;
`;
