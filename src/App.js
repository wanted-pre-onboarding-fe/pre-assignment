import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Main from './pages/main/Main';

const App = () => {
  const isAuthorized = localStorage.getItem('userInfo');

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuthorized ? (
              <Navigate replace to="/main" />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={isAuthorized ? <Navigate replace to="/main" /> : <Login />}
        ></Route>
        <Route
          path="/main"
          element={isAuthorized ? <Main /> : <Navigate replace to="/login" />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
