import React from 'react';
import Routes from './Route.js';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login/index.js';

const App = () => {
  return (
    <>
      <AuthContextProvider>
        {/* <Routes /> */}
        <Login />
      </AuthContextProvider>
    </>
  );
};

export default App;
