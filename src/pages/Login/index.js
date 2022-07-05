import React, { useState, useEffect, uesRef } from 'react';

import styled from 'styled-components';
// import Input from '../../components/Input';
// import Button from '../../components/Button';
// import Logo from '../../components/Logo';
import Separator from '../../components/Spector';
import { useAuthState } from '../../context/AuthContext';
import { setItem, getItem, removeItem } from '../../utils/helpers/stroage';

const EMAIL = 'email';
const PASSWORD = 'password';

const Login = () => {
  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswardState] = useState('');
  const { login } = useAuthState();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const handleInput = (e, ref) => {
    ref.current.value = e.target.value;
    const { id, value } = ref.current;
    id === 'email' ? setEmailState(value) : setPasswardState(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem(EMAIL, emailState);
    setItem(PASSWORD, passwordState);
    login();
  };

  useEffect(() => {}, []);

  return (
    <Container>
      <Box>
        <LogoBox>
          <Logo src={`${process.env.PUBLIC_URL}/images/logo.png`} />
        </LogoBox>
        <Form onSubmit={handleSubmit}>
          <Input
            id="email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            ref={emailRef}
            onChange={(event) => handleInput(event, emailRef)}
          />
          <Input
            id="password"
            type="password"
            placeholder="비밀번호"
            ref={passwordRef}
            onChange={(event) => handleInput(event, passwordRef)}
          />
          <Button id="button" type="submit">
            로그인
          </Button>
        </Form>
        <Separator>또는</Separator>
        <p>페이스북으로 로그인</p>
        <p>비밀번호를 잊으셨나요?</p>

        <p>계정이 없으신가요? 가입하기</p>

        <p>앱을 다운로드 하세요.</p>
        <div style={{ margin: '0 auto' }}>
          <BtnImg src="" alt="" />
          <BtnImg src="" alt="" />
        </div>
      </Box>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  min-height: 100vh;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 350px;
  height: 395px;
  background-color: white;
  border: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  flex-direction: column;
  & > p {
    color: #3a3a3a;
    font-size: 12px;
    text-align: center;
    margin-top: 6px;
  }
`;

const LogoBox = styled.div`
  padding: 30px;
`;

const Logo = styled.img`
  height: 100px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
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
  background-color: #fafafa;
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
const BtnImg = styled.img`
  height: 40px;
  flex-grow: 0;
`;
