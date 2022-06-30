const emailRegex =
  /^[a-zA-Z0-9]([-_\.]?[\w])*@[\w]([-_\.]?[\w])*\.[a-zA-Z]{2,3}$/;
const pwdRegex = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/; //대문자, 숫자, 특수문자 포함 8자리 이상

export const validateEmail = (email) => {
  if (emailRegex.test(email)) return true;
  return false;
};

export const validatePwd = (password) => {
  if (pwdRegex.test(password)) return true;
  return false;
};
