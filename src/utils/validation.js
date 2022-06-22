export const EmailValidation = (email) => {
  const regEmail = /\@.+?\..+?/;
  const result = regEmail.test(email);
  return result;
};

export const PasswordValidation = (password) => {
  const regPassword =
    /[^\s](?=.*[A-Za-z])(?=.*[0-9])(?=.*[$~!@$!%*#^?&_=+]).{8,}/;
  const result = regPassword.test(password);
  return result;
};
