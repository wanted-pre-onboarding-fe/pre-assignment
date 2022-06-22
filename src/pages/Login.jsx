import React, { useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { EmailValidation, PasswordValidation } from '../utils/validation';
import { useState } from 'react';
import { useEffect } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const idInputRef = useRef('');
  const passwordInputRef = useRef('');
  const [isValid, setIsValid] = useState({
    id: undefined, //처음부터 빨간 border를 보여주지 않기위해서 초기값 true
    password: undefined, //처음부터 빨간 border를 보여주지 않기위해서 초기값 true
    isVerfied: undefined,
  });
  const testId = { id: 'wanted@gmail.com', password: 'Wanted123!' }; //일치 여부 확인용 등록아이디

  function CheckValidation(e, result) {
    // 유효성검사 - 아이디, 패스워드
    if (result) {
      const check = { ...isValid, [e.target.name]: result };
      setIsValid(check);
    } else {
      setIsValid({ ...isValid, [e.target.name]: false });
    }
  }

  useEffect(() => {
    if (isValid.id && isValid.password) {
      setIsValid({ ...isValid, isVerfied: true });
    }
  }, [isValid.id, isValid.password]);

  return (
    <Container>
      <div className="header_section">Wanted Instagram</div>
      <main>
        <Input
          placeholder="사용자 이름, 또는 이메일"
          name="id"
          ref={idInputRef}
          validation={isValid.id}
          onChange={(e) => {
            idInputRef.current = e.target.value;
            CheckValidation(e, EmailValidation(e.target.value));
          }}
        />
        <Input
          placeholder="비밀번호"
          name="password"
          validation={isValid.password}
          onChange={(e) => {
            passwordInputRef.current = e.target.value;
            CheckValidation(e, PasswordValidation(e.target.value));
          }}
        />
        <Button
          type="button"
          validation={isValid.isVerfied}
          onClick={() => {
            //TODO: validation 추가
            if (
              isValid.id &&
              isValid.password &&
              idInputRef.current === testId.id &&
              passwordInputRef.current === testId.password
            ) {
              window.localStorage.setItem('id', idInputRef.current);
              navigate('/');
            }
          }}
        >
          로그인
        </Button>
      </main>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  .header_section {
    padding: 100px;
    text-align: center;
    font-weight: bold;
    font-size: 56px;
  }
  main {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 300px;
    padding-top: 80px;
    > input,
    button {
      padding: 15px 10px 15px 10px;
      border-radius: 5px;
      margin-bottom: 10px;
      font-weight: bold;
      font-size: 16px;
    }
  }
`;

const Button = styled.button`
  background-color: ${(props) => (props.validation ? '#1964f9' : '#9ed8ff')};
  color: white;
  border: 0;
  cursor: pointer;
  :active {
    border: 1px solid #cccccc;
    background: white;
    color: rgba(var(--ca6, 219, 219, 219), 1);
  }
`;

const Input = styled.input`
  border: ${(props) => (props.validation === false ? '1px' : '1.5px')} solid
    ${(props) => (props.validation === false ? 'red' : '#cccccc')};
  :focus {
    border: ${(props) => (props.validation === false ? '1px' : '1.5px')} solid
      ${(props) => (props.validation === false ? 'red' : '#cccccc')};
  }
  ::placeholder {
    color: rgba(var(--ca6, 219, 219, 219), 1);
  }
`;
