import React from 'react';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  const {
    location: { pathname },
  } = window;

  const Component =
    {
      '/': Login,
      '/main': Main,
    }[pathname] || Login;

  return <Component />;
}

export default App;
