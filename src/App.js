import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="*" element={<div>not found</div>}/>
    </Routes>
  )
}

export default App;
