import React from 'react';
import Navigation from './components/Navigation';
import Main from './routes/main/Main';
import A from './routes/main/A';
import B from './routes/main/B';
import C from './routes/main/C';
import D from './routes/main/D';
import Login from './routes/Login';

import { Routes, Route } from 'react-router-dom';

import { getUserEmail, getUserPassword } from './utils/userStorage';

function App() {
  const email = getUserEmail();
  const password = getUserPassword();

  const isLogined = email && password;

  return (
    <Routes>
      <Route element={isLogined ? <Navigation /> : <Login />}>
        <Route path="/" element={<Main />}></Route>
        <Route path="/A" element={<A />}></Route>
        <Route path="/B" element={<B />}></Route>
        <Route path="/C" element={<C />}></Route>
        <Route path="/D" element={<D />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
