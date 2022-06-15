import { getItem, setItem } from './Storage';

const KEY_EMAIL = 'email';
const KEY_PASSWORD = 'password';

export const getUserEmail = () => {
  return getItem(KEY_EMAIL);
};
export const setUserEmail = (email) => {
  setItem(KEY_EMAIL, email);
};

export const getUserPassword = () => {
  return getItem(KEY_PASSWORD);
};
export const setUserPassword = (password) => {
  setItem(KEY_PASSWORD, password);
};
