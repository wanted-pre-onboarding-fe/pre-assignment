const regexPattern = {
  email: /^[a-zA-Z0-9]([-_\.]?[\w])*@[\w]([-_\.]?[\w])*\.[a-zA-Z]{2,3}$/,
  password: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
};

export const validation = (type, value) => {
  const regex = regexPattern[type];
  const isValid = regex.test(value);
  return isValid;
};
