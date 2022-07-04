import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getUserData } from '../../api/api';
import { GLOBAL_COLOR } from '../../styles/constants';
import {
  checkPWValidation,
  checkUserIdValidation,
} from '../../utils/validator';

const Login = () => {
  const [userList, setUserList] = useState([]);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isValidUserId, setIsValidUserId] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const userIdRef = useRef(null);
  const passwordRef = useRef(null);

  const handleUserId = (value) => {
    setUserId(value);
    setIsValidUserId(checkUserIdValidation(value));
  };

  const handlePassword = (value) => {
    setPassword(value);
    setIsValidPassword(checkPWValidation(value));
  };

  const handleLogin = () => {
    const user = userList.find(
      (user) => user.email === userId && user.password === password
    );
    if (user === undefined) {
      return alert('등록된 회원이 아닙니다!');
    }
    localStorage.setItem('userInfo', true);
    window.location.reload();
  };

  useEffect(() => {
    getUserData().then((res) => setUserList(res));
  }, []);

  return (
    <StyledLogin>
      <StyledLoginBox>
        <StyledInput>
          <StyledInstaImg alt="logo" src="images/instagram_logo.png" />
          <StyledID
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            isValid={isValidUserId}
            ref={userIdRef}
            onKeyUp={() => {
              handleUserId(userIdRef.current.value);
            }}
          />
          <StyledPW
            type="password"
            placeholder="비밀번호"
            isValid={isValidPassword}
            ref={passwordRef}
            onKeyUp={() => {
              handlePassword(passwordRef.current.value);
            }}
          />
          <StyledButton
            disabled={
              !isValidUserId ||
              !isValidPassword ||
              userId === '' ||
              password === ''
            }
            onClick={handleLogin}
          >
            로그인
          </StyledButton>
          <StyledLineBox>
            <StyledLine></StyledLine>
            <StyledOrText>또는</StyledOrText>
            <StyledLine></StyledLine>
          </StyledLineBox>
          <StyledFacebook>
            <StyledFacebookLogo alt="logo" src="images/facebook_logo.png" />
            Facebook으로 로그인
          </StyledFacebook>
          <StyledPWText>비밀번호를 잊으셨나요?</StyledPWText>
        </StyledInput>
      </StyledLoginBox>
      <StyledSignUp>
        계정이 없으신가요?&nbsp;
        <StyledAlink href="https://www.instagram.com/accounts/emailsignup/">
          가입하기
        </StyledAlink>
      </StyledSignUp>
      <StyledApp>
        <StyledDownText>앱을 다운로드하세요.</StyledDownText>
        <StyledAppLogo>
          <StyledDownImg alt="logo" src="images/appstore_logo.png" />
          <StyledDownImg alt="logo" src="images/android_logo.png" />
        </StyledAppLogo>
      </StyledApp>
    </StyledLogin>
  );
};

const StyledLogin = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${GLOBAL_COLOR.BACKGROUND};
  align-items: center;
`;

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 35px;
`;

const StyledLoginBox = styled.div`
  width: 350px;
  background-color: ${GLOBAL_COLOR.WHITE};
  border: 1px solid ${GLOBAL_COLOR.GRAY_2};
`;

const StyledInstaImg = styled.img`
  width: 175px;
  margin: 40px auto;
`;

const StyledID = styled.input`
  width: 100%;
  height: 36px;
  border: 1px solid
    ${(props) =>
      props.isValid ? `${GLOBAL_COLOR.GRAY_2}` : `${GLOBAL_COLOR.RED_1}`};
  border-radius: 2px;
  padding: 0 5px;
  background-color: ${GLOBAL_COLOR.BACKGROUND};
  color: ${GLOBAL_COLOR.GRAY_1};
  margin-bottom: 8px;
`;

const StyledPW = styled.input`
  width: 100%;
  height: 36px;
  border: 1px solid
    ${(props) =>
      props.isValid ? `${GLOBAL_COLOR.GRAY_2}` : `${GLOBAL_COLOR.RED_1}`};
  border-radius: 2px;
  padding: 0 5px;
  background-color: ${GLOBAL_COLOR.BACKGROUND};
  color: ${GLOBAL_COLOR.GRAY_1};
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 36px;
  margin: 15px 0;
  background-color: ${(props) =>
    props.disabled ? `${GLOBAL_COLOR.BLUE_1}` : `${GLOBAL_COLOR.BLUE_2}`};
  color: ${GLOBAL_COLOR.BACKGROUND};
  border-radius: 3px;
  font-size: 16px;
  align-items: center;
  ${(props) => !props.disabled && 'cursor: pointer;'}
`;

const StyledLineBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLine = styled.span`
  width: 105px;
  height: 1px;
  background-color: ${GLOBAL_COLOR.GRAY_2};
`;

const StyledOrText = styled.span`
  margin: 0 20px;
  color: ${GLOBAL_COLOR.GRAY_1};
`;

const StyledFacebook = styled.div`
  display: flex;
  margin: 20px auto;
  color: ${GLOBAL_COLOR.NAVY_2};
  align-items: center;
`;

const StyledFacebookLogo = styled.img`
  width: 30px;
  margin-bottom: 4px;
`;

const StyledPWText = styled.div`
  margin: 0 auto;
  margin-bottom: 15px;
  color: ${GLOBAL_COLOR.NAVY_1};
  font-size: 14px;
`;

const StyledSignUp = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;
  background-color: ${GLOBAL_COLOR.WHITE};
  margin-top: 10px;
  border: 1px solid ${GLOBAL_COLOR.GRAY_2};
  padding: 20px 0;
`;

const StyledAlink = styled.a`
  color: ${GLOBAL_COLOR.BLUE_3};
  text-decoration: none;
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

const StyledDownText = styled.div`
  margin: 20px auto;
`;

const StyledAppLogo = styled.div`
  display: flex;
  margin: 0 auto;
`;

const StyledDownImg = styled.img`
  width: 136px;
  margin: 0 5px;
`;
export default Login;
