import React, { useRef, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import throttle from '../utils/throttle';
import useLogin from '../hooks/useLogin';
import { authorize } from '../utils/authorize';
import { LoginButton } from '../components/shared/Button';
import { ValidationInput } from '../components/shared/Input';
import Separator from '../components/Seperator';
import { setUserData } from '../utils/userData';

function Login() {
  const [isValidEmail, isValidPwd, checkEmail, checkPwd] = useLogin();
  const emailRef = useRef(null);
  const pwdRef = useRef(null);
  const navigate = useNavigate();

  const getUserEmail = useCallback(() => emailRef.current?.value, []);
  const getUserPwd = useCallback(() => pwdRef.current?.value, []);

  const handleIdInput = useCallback(
    throttle(() => checkEmail(getUserEmail()), 400),
    []
  );
  const handlePwdInput = useCallback(
    throttle(() => checkPwd(getUserPwd()), 400),
    []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = getUserEmail();
    const userPwd = getUserPwd();
    if (authorize(userEmail, userPwd)) {
      setUserData(userEmail, userPwd);
      navigate('/main');
    }
  };

  return (
    <Wrapper>
      <img src="/images/insta_logo.png" alt="logo" width={'150px'}></img>
      <form onSubmit={handleSubmit}>
        <ValidationInput
          id="email"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onInput={handleIdInput}
          warning={isValidEmail === 'UNVALID'}
          ref={emailRef}
        />
        <ValidationInput
          id="password"
          type="password"
          placeholder="비밀번호"
          onInput={handlePwdInput}
          warning={isValidPwd === 'UNVALID'}
          ref={pwdRef}
        />
        <LoginButton
          type="submit"
          disabled={!(isValidEmail === 'VALID' && isValidPwd === 'VALID')}
        >
          로그인
        </LoginButton>
      </form>
      <Separator>또는</Separator>
      <p>페이스북으로 로그인</p>
      <p>비밀번호를 잊으셨나요?</p>

      <p>계정이 없으신가요? 가입하기</p>

      <p>앱을 다운로드 하세요.</p>
      <div style={{ margin: '0 auto' }}>
        <BtnImg src="/images/playstore_btn.png" alt="none" />
        <BtnImg src="/images/appstore_btn.png" alt="appstore" />
      </div>
    </Wrapper>
  );
}

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

export default Login;
