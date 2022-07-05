import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const ROUTE_PATH_LOGIN = '/';
const ROUTE_PATH_FEEDS = '/feeds';

export default function Router() {
  const isAuth = false;
  return (
    <Routes>
      <Route path={ROUTE_PATH_LOGIN} element={<AuthLogin isAuth={isAuth} />} />
      <Route path={ROUTE_PATH_FEEDS} element={<AuthFeeds isAuth={isAuth} />} />
    </Routes>
  );
}

function AuthPage({ defaultElement, needNavigate, navigateURL }) {
  if (needNavigate) return <Navigate to={navigateURL} replace />;
  else return defaultElement;
}

function AuthLogin({ isAuth }) {
  return (
    <AuthPage
      defaultElement={<Login />}
      needNavigate={isAuth}
      navigateURL={ROUTE_PATH_FEEDS}
    />
  );
}
function AuthFeeds({ isAuth }) {
  return (
    <AuthPage
      defaultElement={<Feeds />}
      needNavigate={!isAuth}
      navigateURL={ROUTE_PATH_LOGIN}
    />
  );
}

function Login() {
  return <p>로그인 화면</p>;
}
function Feeds() {
  return <p>피드 화면</p>;
}
