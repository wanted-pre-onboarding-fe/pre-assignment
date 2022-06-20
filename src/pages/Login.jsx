import React, { useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

const Login = () => {
  const navigate = useNavigate();

  const idInputRef = useRef('');
  const passwordInputRef = useRef('');

  return (
    <Container>
      <div className="header_section">Wanted Instagram</div>
      <main>
        <input
          placeholder="사용자 이름, 또는 이메일"
          name="id"
          ref={idInputRef}
          onChange={(e) => (idInputRef.current = e.target.value)}
        />
        <input
          placeholder="비밀번호"
          name="password"
          onChange={(e) => (passwordInputRef.current = e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            //TODO: validation 추가
            // window.localStorage.setItem('id', idInputRef.current);

            navigate('/');
          }}
        >
          로그인
        </button>
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
      border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
      margin-bottom: 10px;
      font-weight: bold;
      font-size: 16px;
    }

    input:focus {
      border: 1px solid black;
    }
    input::placeholder {
      color: rgba(var(--ca6, 219, 219, 219), 1);
    }

    button {
      background-color: rgba(var(--d69, 0, 149, 246), 0.3);
      color: white;
      border: 0;
      cursor: pointer;
      :active {
        border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
        background: white;
        color: rgba(var(--ca6, 219, 219, 219), 1);
      }
    }
  }
`;
