import React from 'react';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  const {
    location: { pathname },
  } = window;

  const Route =
    {
      '/': Login,
      '/main': Main,
    }[pathname] || Login;

  return <Route />;
}

export default App;
