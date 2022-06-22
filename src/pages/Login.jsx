import React, { useState } from 'react';
import styled from 'styled-components';

const Login = () => {
  const [userId, setId] = useState(localStorage.getItem('user-id'));
  const [userPassword, setPassword] = useState(
    localStorage.getItem('user-password')
  );

  const placeholder = {
    id: '전화번호, 사용자 이름 또는 이메일',
    password: '비밀번호',
  };

  const storeUserData = (id, password) => {
    localStorage.setItem('user-id', id);
    localStorage.setItem('user-password', password);
  };

  const handleChange = (event) => {
    const { id, value } = event.target;

    const isIdField = id === 'user-id';
    const isPasswordField = id === 'user-password';

    if (isIdField) {
      setId(value);
      return;
    }

    if (isPasswordField) {
      setPassword(value);
      return;
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const isLoginFailed = false;

    if (isLoginFailed) {
      console.error('로그인 실패 😡');
      return;
    }

    storeUserData(userId, userPassword);
    location.assign('/');
  };

  return (
    <Container>
      <Section>
        <Title>Insta*ram</Title>
      </Section>
      <Section>
        <Form method="post">
          <Label>
            <IdField
              type="text"
              id="user-id"
              placeholder={placeholder.id}
              onChange={handleChange}
              value={userId}
            />
          </Label>
          <Label>
            <PasswordField
              type="password"
              id="user-password"
              placeholder={placeholder.password}
              onChange={handleChange}
              value={userPassword}
            />
          </Label>
          <LoginButton type="submit" onClick={handleLogin}>
            로그인
          </LoginButton>
        </Form>
      </Section>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  min-height: 100vh;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;
const Section = styled.section``;
const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  line-height: 90px;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;
const Label = styled.label``;
const IdField = styled.input`
  width: 268px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 8px;
`;
const PasswordField = styled.input`
  width: 268px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 8px;
`;
const LoginButton = styled.button`
  width: 268px;
  height: 30px;
  border-radius: 4px;
  padding: 8px;
  font-weight: 700;
  background-color: #0095f6;
  color: #fff;
`;
