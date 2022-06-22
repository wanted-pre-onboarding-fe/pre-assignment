import React from 'react';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  const isLoggedIn =
    localStorage.getItem('user-id') && localStorage.getItem('user-password');
  return isLoggedIn ? <Main /> : <Login />;
}

export default App;
