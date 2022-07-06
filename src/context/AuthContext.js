import React from 'react';
import Storage from '../utils/helpers/stroage';
import { setItem, getItem, removeItem } from '../utils/helpers/stroage';

const defaultContext = {
  isLoggedIn: false,
  authed: false,
  login: () => {},
  logout: () => {},
};

const AuthContext = React.createContext(defaultContext);

const LOG_KEY = 'isLoggedIn';
const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    !!getItem(LOG_KEY) // false
  );

  const login = () => {
    setItem(LOG_KEY, true);
    const token = getItem(LOG_KEY);
    setIsLoggedIn(token);
  };

  const logout = () => {
    removeItem(LOG_KEY);
    setIsLoggedIn(false);
  };

  const value = { isLoggedIn, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthState = () => {
  return React.useContext(AuthContext);
};

export { AuthContextProvider, AuthContext };
