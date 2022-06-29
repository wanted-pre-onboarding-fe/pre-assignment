import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';
import Separator from '../components/Seperator';
import getLoginData from '../utils/getLoginData';

const BtnImg = styled.img`
  height: 40px;
  flex-grow: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dbdbdb;
  max-width: 350px;
  width: 100%;
  padding: 20px 30px;

  & > * {
    width: 100%;
    margin: 10px 0;
  }
  & > p {
    color: #3a3a3a;
    font-size: 12px;
    text-align: center;
  }
  & > form {
    display: flex;
    flex-direction: column;
    width: '100%';
  }
`;

const emailReg =
  /^[a-zA-Z0-9]([-_\.]?[\w])*@[\w]([-_\.]?[\w])*\.[a-zA-Z]{2,3}$/;
const pwdReg = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/; //대문자, 숫자, 특수문자 포함 8자리 이상

function Login() {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [isValidId, setValidId] = useState(true);
  const [isValidPwd, setValidPwd] = useState(true);

  const validateId = () => {
    const [id, _] = getLoginData(inputRef);
    if (emailReg.test(id)) setValidId(true);
    else setValidId(false);
  };

  const validatePwd = () => {
    const [_, password] = getLoginData(inputRef);
    if (pwdReg.test(password)) setValidPwd(true);
    else setValidPwd(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const [id, password] = getLoginData(inputRef);

    const getData = async () => {
      const db = await (await fetch('/data/user.json')).json();
      return db;
    };

    const authorization = async () => {
      const db = await getData();
      const user = db.members?.find((user) => user.email === id);
      if (user && user.password === password) {
        return true;
      }
      return false;
    };

    if (authorization()) {
      localStorage.setItem('userData', JSON.stringify({ id, password }));
      navigate('/main');
    }
  };

  const btnDisabled = (() => {
    const [id, password] = getLoginData(inputRef);
    if (id && password && isValidId && isValidPwd) return false;
    return true;
  })();

  return (
    <Wrapper>
      <img src="/images/insta_logo.png" alt="logo" width={'60%'}></img>
      <form ref={inputRef} onSubmit={handleSubmit}>
        <Input
          id="id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onBlur={validateId}
          valid={isValidId}
        />
        <Input
          id="password"
          type="password"
          placeholder="비밀번호"
          onBlur={validatePwd}
          valid={isValidPwd}
        ></Input>
        <Button type="submit" disabled={btnDisabled}>
          로그인
        </Button>
      </form>
      <Separator />
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

export default Login;
