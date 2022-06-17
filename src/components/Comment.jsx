import React from 'react';
import styled from 'styled-components';

export default function Comment({ name, comment }) {
  return (
    <Wrapper>
      <NameBox>{name}</NameBox>
      <CommentBox>{comment}</CommentBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  word-break: break-all;
  display: flex;
`;

const NameBox = styled.span`
  font-weight: 600;
  margin-right: 10px;
`;

const CommentBox = styled.span`
  display: flex;
  flex: 1;
`;
