const RegExEmail =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
const RegExPassword =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-])[A-Za-z\d#?!@$%^&*-]{8,}$/;

export function validateEmail(email) {
  if (!email) return null;
  return RegExEmail.test(email);
}
export function validatePassword(password) {
  if (!password) return null;
  return RegExPassword.test(password);
}
