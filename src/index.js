import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/globalStyles';
import Login from './pages/login/Login';
import Feeds from './pages/feeds/Feeds';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/feeds" element={<Feeds />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
