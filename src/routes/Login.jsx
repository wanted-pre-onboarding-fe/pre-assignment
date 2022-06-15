import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { validateEmail, validatePassword } from '../utils/validation';

import { setUserEmail, setUserPassword } from '../utils/userStorage';

export default function Login() {
  const inputEmail = useRef();
  const inputPassword = useRef();

  const [emailState, setEmailState] = useState(null); // null, false, true
  const [passwordState, setPasswordState] = useState(null); // null, false, true

  const onEmailChange = (e) => {
    const {
      currentTarget: { value },
    } = e;
    validate(value, validateEmail, setEmailState);
  };
  const onPasswordChange = (e) => {
    const {
      currentTarget: { value },
    } = e;
    validate(value, validatePassword, setPasswordState);
  };
  const validate = (value, validator, setter) => {
    const state = validator(value);
    setter(state);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const isValidate = emailState && passwordState;
    if (!isValidate) return;

    const email = getInputValue(inputEmail);
    const password = getInputValue(inputPassword);

    if (email === 'msw@inu.ac.kr') {
      if (password === 'A123456&') {
        setUserEmail(email);
        setUserPassword(password);

        location.reload();
      } else {
        alert('비밀번호가 일치하지 않습니다.');
      }
    } else {
      alert('존재하지 않는 이메일입니다.');
    }
  };

  const getInputValue = (input) => {
    const {
      current: { value },
    } = input;
    return value;
  };

  return (
    <Container>
      <Box onSubmit={onSubmit}>
        <Input
          ref={inputEmail}
          onChange={onEmailChange}
          placeholder="전화번호, 사용자 이름 또는 이메일"
          isValidated={emailState === null || emailState}
        />
        <Input
          ref={inputPassword}
          onChange={onPasswordChange}
          placeholder="비밀번호"
          type="password"
          isValidated={passwordState === null || passwordState}
        />
        <Button isValidated={emailState && passwordState} type="submit">
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
