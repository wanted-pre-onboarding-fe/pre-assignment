import Inputform from '../../components/login/InputForm';
import LoginButton from '../../components/login/LoginButton';

import { useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import { saveItem } from '../../fixtures/storage';

export default function LoginContainer({ username, password }) {
  const navigate = useNavigate();

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    usernameRef.current.value = username;
    passwordRef.current.value = password;
  }, []);
  
  const handleSubmit = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    saveItem('username', username);
    saveItem('password', password);

    navigate('/');
  };

  return (
    <>
      <Inputform
        info={{
          type: 'username',
          id: 'username',
          name: 'username',
          ref: usernameRef
        }}
        placeholder="전화번호, 사용자 이름 또는 이메일"/>
      <Inputform
        info={{
          type: 'password',
          id: 'password',
          name: 'password',
          ref: passwordRef
        }}
        placeholder="비밀번호"/>
      <LoginButton 
        onSubmit={handleSubmit}/>
    </>
  )
}