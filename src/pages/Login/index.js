import React, { useState, useEffect, uesRef } from 'react';

import styled from 'styled-components';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import { useAuthState } from '../../context/AuthContext';

const EMAIL = 'email';
const PASSWORD = 'password';

const Login = () => {
  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswardState] = useState('');
  const { login, logout, userLog } = useAuthState();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  // e(email, passward), ref(emailRef,passwordRef)
  const handleInput = (e, ref) => {
    ref.current.value = e.target.value;
    const { id, value } = ref.current;
    // console.log(id, value);
    id === 'email' ? setEmailState(value) : setPasswardState(value);

    // 정규성 검사
  };
  const handledeletClick = () => {
    logout();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputTarget = e.target;
    userLog.setItem(EMAIL, emailState);
    userLog.setItem(PASSWORD, passwordState);
    login();
  };

  useEffect(() => {}, []);

  return (
    <Wrapper>
      <Logo />
      <form onSubmit={handleSubmit}>
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
      </form>
      <p>또는</p>
      <p>페이스북으로 로그인</p>
      <p>비밀번호를 잊으셨나요?</p>

      <p>계정이 없으신가요? 가입하기</p>

      <p>앱을 다운로드 하세요.</p>
      <div style={{ margin: '0 auto' }}>
        <BtnImg src="" alt="" />
        <BtnImg src="" alt="" />
      </div>
      <Button type="submit" onClick={handledeletClick}>
        로그아웃
      </Button>
    </Wrapper>
  );
};

export default Login;

const BtnImg = styled.img`
  height: 40px;
  flex-grow: 0;
`;

const Wrapper = styled.div`
  margin: auto 0;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dbdbdb;
  max-width: 350px;
  width: 100%;
  padding: 20px 30px;
  gap: 20px;
  & > p {
    color: #3a3a3a;
    font-size: 12px;
    text-align: center;
  }
  & > form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }
`;
