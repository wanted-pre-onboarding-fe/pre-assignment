import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Header from './components/layout/Header';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path="main" element={<Main />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
