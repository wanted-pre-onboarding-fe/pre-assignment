import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
