import React from 'react';
import styled from 'styled-components';

export default function Login() {
  return (
    <Body>
      <Instagram>Instagram</Instagram>
      <Input
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        autoFocus
      />
      <Input type="text" placeholder="비밀번호" />
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: gray;
  margin: auto;
  height: 100vh;
  width: 100vw;
`;

const Instagram = styled.div``;

const Input = styled.input`
  margin: 5px 0;
  width: 200px;
  outline: 1px solid black;
`;
