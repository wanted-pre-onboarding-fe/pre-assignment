import React from 'react';
import Navigation from './components/Navigation';
import Main from './routes/main/Main';
import Message from './routes/main/Message';
import Explore from './routes/main/Explore';
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
        <Route path="/Message" element={<Message />}></Route>
        <Route path="/Explore" element={<Explore />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
