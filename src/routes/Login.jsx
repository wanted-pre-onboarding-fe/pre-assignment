import React from 'react';
import styled from 'styled-components';

export default function Login() {
  return (
    <Container>
      <Box>
        <Input
          placeholder="전화번호, 사용자 이름 또는 이메일"
          isValidated={true}
        />
        <Input placeholder="비밀번호" type="password" isValidated={true} />
        <Button isValidated={true} type="submit">
          로그인
        </Button>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.form`
  width: 350px;
  height: 395px;
  background-color: white;
  border: 1px solid #dbdbdb;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Input = styled.input`
  width: 270px;
  height: 38px;
  padding: 10px;
  font-size: 12px;
  border: 1px solid;
  border-color: ${(props) => (props.isValidated ? '#dbdbdb' : 'red')};
  border-radius: 5px;
  margin-bottom: 5px;
`;
const Button = styled.button`
  width: 270px;
  height: 38px;
  padding: 10px;
  font-size: 14px;
  font-weight: 800;
  background-color: ${(props) => (props.isValidated ? '#0094f6' : '#b2defc')};
  border-radius: 5px;
  margin-top: 5px;
  color: white;
  text-align: center;
  cursor: pointer;
`;
