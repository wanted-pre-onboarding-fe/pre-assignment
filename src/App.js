import React from 'react';
import Navigation from './components/Navigation';
import Main from './routes/main/Main';
import Message from './routes/main/Message';
import Explore from './routes/main/Explore';
import Login from './routes/Login';

import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const isLogined = true;
  return (
    <Routes>
      <Route element={isLogined ? <Navigation /> : <Login />}>
        {/* <Route element={isLogined ? <Navigation /> : <Navigate to="/login" />}> */}
        <Route path="/" element={<Main />}></Route>
        <Route path="/Message" element={<Message />}></Route>
        <Route path="/Explore" element={<Explore />}></Route>
      </Route>
      {/* <Route path="/login" element={<Login />}></Route> */}
    </Routes>
  );
}

export default App;
