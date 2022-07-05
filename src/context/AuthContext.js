import React from 'react';
import Storage from '../utils/helpers/stroage';

const defaultContext = {
  isLoggedIn: false,
  authed: false,
  login: () => {},
  logout: () => {},
};

const AuthContext = React.createContext(defaultContext);

const AuthContextProvider = ({ children }) => {
  let userLog = new Storage('user');

  const [isLoggedIn, setIsLoggedIn] = React.useState(
    !!userLog.getItem('isLoggedIn') // false
  );

  const login = () => {
    userLog.setItem('isLoggedIn', true);
    userLog.save();
    const token = userLog.getItem('isLoggedIn');
    setIsLoggedIn(token);
  };

  const logout = () => {
    userLog.clear();
    setIsLoggedIn(false);
  };

  const value = { isLoggedIn, login, logout, userLog };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthState = () => {
  return React.useContext(AuthContext);
};

export { AuthContextProvider, AuthContext };
