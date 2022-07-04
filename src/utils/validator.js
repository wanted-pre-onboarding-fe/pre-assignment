export const checkUserIdValidation = (value) => {
  if (value === '') {
    return true;
  }
  const regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  return regEmail.test(value);
};

export const checkPWValidation = (value) => {
  if (value === '') {
    return true;
  }
  const regPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regPassword.test(value);
};
