import React, { useState } from 'react';
import styled from 'styled-components';

const Login = () => {
  const [userId, setId] = useState(localStorage.getItem('user-id'));
  const [userPassword, setPassword] = useState(
    localStorage.getItem('user-password')
  );
  const [emailValidity, setEmailValidity] = useState(true);
  const [passwordValidity, setPasswordValidity] = useState(true);
  const [isActiveButton, setIsActiveButton] = useState(false);

  const validator = {
    email: (email) => {
      const regex = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+/s;
      return regex.test(email);
    },
    password: (password) => {
      const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[`~!@#$%^&*()-_=+]).{8,}$/s;
      return regex.test(password);
    },
  };

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
      const isValid = validator.email(value);
      setEmailValidity(isValid);
      setId(value);
    }

    if (isPasswordField) {
      const isValid = validator.password(value);
      setPasswordValidity(isValid);
      setPassword(value);
    }

    const isValidUserInfo =
      emailValidity && passwordValidity && userId !== '' && userPassword !== '';

    if (isValidUserInfo) {
      setIsActiveButton(true);
      return;
    }

    setIsActiveButton(false);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const isLoginFailed = false;

    if (isLoginFailed) {
      console.error('로그인 실패 😡');
      return;
    }

    storeUserData(userId, userPassword);
    location.assign('/main');
  };

  const isLoggedin =
    localStorage.getItem('user-id') && localStorage.getItem('user-password');

  if (isLoggedin) {
    location.assign('/main');
  }

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
              validity={emailValidity}
            />
          </Label>
          <Label>
            <PasswordField
              type="password"
              id="user-password"
              placeholder={placeholder.password}
              onChange={handleChange}
              value={userPassword}
              validity={passwordValidity}
            />
          </Label>
          <LoginButton
            type="submit"
            onClick={handleLogin}
            validity={isActiveButton}
            disabled={!isActiveButton}
          >
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
const IdField = styled.input(
  ({ validity }) => `
width: 268px;
height: 40px;
border: 1px solid;
border-color: ${validity ? '#000' : 'red'};
border-radius: 4px;
padding: 8px;
`
);
const PasswordField = styled.input(
  ({ validity }) => `
width: 268px;
height: 40px;
border: 1px solid;
border-color: ${validity ? '#000' : 'red'};
border-radius: 4px;
padding: 8px;
`
);
const LoginButton = styled.button(
  ({ validity }) => `
width: 268px;
height: 30px;
border-radius: 4px;
padding: 8px;
font-weight: 700;
background-color: #0095f6;
opacity: ${validity ? '1' : '0.4'};
color: #fff;
`
);
