import { useState } from 'react';
import { validateEmail, validatePwd } from '../utils/validator';

const VALID = 'VALID';
const UNVALID = 'UNVALID';
const EMPTY = 'EMPTY';

function useLogin() {
  const [isValidEmail, setIsValidEmail] = useState(EMPTY);
  const [isValidPwd, setIsValidPwd] = useState(EMPTY);

  const checkEmail = (email) => {
    console.log('EMAIL', email);
    if (!email) setIsValidEmail(EMPTY);
    else if (validateEmail(email)) setIsValidEmail(VALID);
    else setIsValidEmail(UNVALID);
  };

  const checkPwd = (pwd) => {
    console.log('PWD', pwd);
    if (!pwd) setIsValidPwd(EMPTY);
    else if (validatePwd(pwd)) setIsValidPwd(VALID);
    else setIsValidPwd(UNVALID);
  };

  return [isValidEmail, isValidPwd, checkEmail, checkPwd];
}

export default useLogin;
